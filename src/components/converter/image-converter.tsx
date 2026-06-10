"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "next/navigation";
import type { AppLocale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import {
  trackToolConvertError,
  trackToolConvertStart,
  trackToolConvertSuccess,
  trackToolDownloadZip,
} from "@/lib/analytics-events";
import { ConverterOptionsPanel } from "@/components/converter/converter-options-panel";
import { ConverterPrivacyBanner } from "@/components/converter/converter-privacy-banner";
import { ConverterStickyDownloadBar } from "@/components/converter/converter-sticky-download-bar";
import { FilePreviewGrid } from "@/components/converter/file-preview-grid";
import { maxWidthForPreset } from "@/components/converter/resize-control";
import {
  ConversionError,
  formatConversionError,
  type ConversionErrorDisplay,
} from "@/lib/convert-errors";
import { convertBatch } from "@/lib/convert/conversion-pool";
import { getConverterSoftWarnings } from "@/lib/converter-warnings";
import {
  fileInputAccept,
  defaultQualityPercent,
  supportsExifToggle,
  type InputFormat,
  type OutputFormat,
} from "@/lib/convert";
import { buildZipBlob, downloadBlob } from "@/lib/download-zip";
import { Link } from "@/i18n/navigation";
import { getLocalizedBlogPost } from "@/lib/blog-l10n";
import { getT } from "@/lib/i18n/translations";
import { Button } from "@/components/ui/button";
import type { ResizePresetId } from "@/lib/constants";
import { Download, FolderOpen, Loader2, Upload, X } from "lucide-react";
import type { ToolAudience } from "@/lib/design-variants";
import { cn } from "@/lib/utils";
import { collectFilesFromDataTransfer } from "@/lib/collect-drop-files";
import { filterFilesForInput } from "@/lib/converter-file-filter";
import { isIos } from "@/lib/platform";

interface ConvertedFile {
  id: string;
  originalName: string;
  outputName: string;
  blob: Blob;
  previewUrl: string;
}

interface FailedFile {
  id: string;
  name: string;
  message: string;
}

interface ImageConverterProps {
  from: InputFormat;
  to: OutputFormat;
  toolSlug: string;
  audience?: ToolAudience;
  /** Blog slug for optional post-convert guide link */
  postConvertGuideSlug?: string;
}

export function ImageConverter({
  from,
  to,
  toolSlug,
  audience = "heic",
  postConvertGuideSlug,
}: ImageConverterProps) {
  const params = useParams();
  const locale = (routing.locales.includes(params.locale as AppLocale)
    ? params.locale
    : routing.defaultLocale) as AppLocale;
  const t = getT(locale);
  const isDev = audience === "developer";
  const showExif = supportsExifToggle(from, to);
  const [files, setFiles] = useState<File[]>([]);
  const [results, setResults] = useState<ConvertedFile[]>([]);
  const [failedFiles, setFailedFiles] = useState<FailedFile[]>([]);
  const [error, setError] = useState<ConversionErrorDisplay | null>(null);
  const [converting, setConverting] = useState(false);
  const [zipping, setZipping] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [progress, setProgress] = useState<{ current: number; total: number } | null>(
    null,
  );
  const [qualityPercent, setQualityPercent] = useState(() =>
    defaultQualityPercent(to),
  );
  const [resizePreset, setResizePreset] = useState<ResizePresetId>("original");
  const [preserveExif, setPreserveExif] = useState(true);
  const [dropBusy, setDropBusy] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const folderInputRef = useRef<HTMLInputElement>(null);
  const [iosDevice, setIosDevice] = useState(false);

  useEffect(() => {
    setIosDevice(isIos());
  }, []);

  const ingestFiles = useCallback(
    (incoming: File[]) => {
      if (!incoming.length) return;
      const matched = filterFilesForInput(incoming, from);
      if (!matched.length) {
        setError({ message: t("converter.filesRejected") });
        return;
      }
      setError(null);
      setFailedFiles([]);
      setFiles((prev) => [...prev, ...matched]);
    },
    [from, t],
  );

  const addFiles = useCallback(
    (incoming: FileList | File[]) => {
      ingestFiles(Array.from(incoming));
    },
    [ingestFiles],
  );

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const onDrop = useCallback(
    async (e: React.DragEvent) => {
      e.preventDefault();
      setDragOver(false);
      if (!e.dataTransfer.files.length && !e.dataTransfer.items.length) return;
      setDropBusy(true);
      try {
        const collected = await collectFilesFromDataTransfer(e.dataTransfer);
        ingestFiles(collected);
      } finally {
        setDropBusy(false);
      }
    },
    [ingestFiles],
  );

  const convertAll = async () => {
    if (!files.length) return;
    trackToolConvertStart({
      tool: toolSlug,
      from,
      to,
      locale,
      fileCount: files.length,
    });
    setConverting(true);
    setError(null);
    setFailedFiles([]);
    setProgress({ current: 0, total: files.length });
    setResults((prev) => {
      prev.forEach((r) => URL.revokeObjectURL(r.previewUrl));
      return [];
    });

    const quality = qualityPercent / 100;
    const maxWidth = maxWidthForPreset(resizePreset);

    try {
      const { successes, failures } = await convertBatch(
        files,
        {
          from,
          to,
          quality,
          maxWidth,
          preserveExif: showExif ? preserveExif : undefined,
        },
        (current, total) => setProgress({ current, total }),
      );

      const converted: ConvertedFile[] = successes.map((item, i) => ({
        id: `${item.file.name}-${item.file.size}-${i}`,
        originalName: item.file.name,
        outputName: item.outputName,
        blob: item.blob,
        previewUrl: URL.createObjectURL(item.blob),
      }));

      const perFileFailures: FailedFile[] = failures.map((item, i) => {
        const display = formatConversionError(item.error, from, locale, item.file.name);
        return {
          id: `fail-${item.file.name}-${i}`,
          name: item.file.name,
          message: display.message,
        };
      });

      setResults(converted);
      setFailedFiles(perFileFailures);

      if (converted.length) {
        trackToolConvertSuccess({
          tool: toolSlug,
          from,
          to,
          locale,
          fileCount: converted.length,
        });
      }

      if (!converted.length && failures.length) {
        trackToolConvertError({
          tool: toolSlug,
          from,
          to,
          locale,
          fileCount: files.length,
        });
        setError(formatConversionError(failures[0].error, from, locale, failures[0].file.name));
      }
    } catch (err) {
      trackToolConvertError({
        tool: toolSlug,
        from,
        to,
        locale,
        fileCount: files.length,
      });
      setError(
        err instanceof ConversionError
          ? err.display
          : formatConversionError(err, from, locale),
      );
    } finally {
      setConverting(false);
      setProgress(null);
    }
  };

  const download = (item: ConvertedFile) => {
    downloadBlob(item.blob, item.outputName);
  };

  const downloadZip = async () => {
    if (!results.length) return;
    trackToolDownloadZip({
      tool: toolSlug,
      from,
      to,
      locale,
      fileCount: results.length,
    });
    setZipping(true);
    setError(null);
    try {
      const zip = await buildZipBlob(
        results.map((r) => ({ name: r.outputName, blob: r.blob })),
      );
      const stamp = new Date().toISOString().slice(0, 10);
      downloadBlob(zip, `heicsave-${to}-${stamp}.zip`);
    } catch {
      setError({ message: t("converter.zipError") });
    } finally {
      setZipping(false);
    }
  };

  const clear = () => {
    setFiles([]);
    setFailedFiles([]);
    setResults((prev) => {
      prev.forEach((r) => URL.revokeObjectURL(r.previewUrl));
      return [];
    });
    setError(null);
    setProgress(null);
  };

  const accept = fileInputAccept(from);

  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) addFiles(e.target.files);
    e.target.value = "";
  };
  const softWarnings = useMemo(
    () => getConverterSoftWarnings(files, locale),
    [files, locale],
  );
  const errorGuide = error?.guideSlug
    ? getLocalizedBlogPost(error.guideSlug, locale)
    : undefined;
  const postConvertGuide = postConvertGuideSlug
    ? getLocalizedBlogPost(postConvertGuideSlug, locale)
    : undefined;

  const progressPercent =
    progress && progress.total > 0
      ? Math.round((progress.current / progress.total) * 100)
      : 0;

  const openFilePicker = () => fileInputRef.current?.click();

  return (
    <div className="space-y-4">
      <ConverterPrivacyBanner compact isDev={isDev} />

      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={onDrop}
        className={cn(
          "relative rounded-vercel-lg border-2 border-dashed px-4 py-8 text-center transition-colors sm:py-10",
          dragOver
            ? isDev
              ? "border-[#5e6ad2] bg-[#f5f5ff]"
              : "border-ink bg-canvas-soft-2"
            : "border-hairline bg-canvas-soft",
        )}
      >
        <Upload
          className={cn("mx-auto text-mute", isDev ? "h-10 w-10" : "h-12 w-12")}
          aria-hidden
        />
        <p className="mt-4 text-base font-medium text-ink sm:text-lg">
          {t("converter.dropTitle")}
        </p>
        <p className="mt-1 text-xs text-body sm:text-sm">{t("converter.dropHint")}</p>
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          multiple
          className="sr-only"
          tabIndex={-1}
          aria-hidden
          disabled={converting || dropBusy}
          onChange={onFileInputChange}
        />
        {!iosDevice ? (
          <input
            ref={folderInputRef}
            type="file"
            accept={accept}
            multiple
            className="sr-only"
            tabIndex={-1}
            aria-hidden
            disabled={converting || dropBusy}
            // @ts-expect-error webkitdirectory is supported in Chromium/Safari desktop
            webkitdirectory=""
            directory=""
            onChange={onFileInputChange}
          />
        ) : null}
        <div className="mx-auto mt-6 flex max-w-md flex-col gap-2">
          <Button
            type="button"
            variant={isDev ? "developer" : "primary"}
            size="lg"
            className="w-full"
            disabled={converting || dropBusy}
            onClick={openFilePicker}
          >
            {t("converter.selectImages")}
          </Button>
          {!iosDevice ? (
            <Button
              type="button"
              variant="secondary"
              className="w-full sm:w-auto sm:self-center"
              disabled={converting || dropBusy}
              onClick={() => folderInputRef.current?.click()}
            >
              <FolderOpen className="mr-1.5 h-4 w-4" aria-hidden />
              {t("converter.browseFolder")}
            </Button>
          ) : null}
        </div>
        {dropBusy ? (
          <p className="mt-3 flex items-center justify-center gap-2 text-xs text-mute">
            <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden />
            {t("converter.readingFolder")}
          </p>
        ) : null}
      </div>

      {files.length > 0 && (
        <FilePreviewGrid
          files={files}
          onRemove={removeFile}
          onAddMore={openFilePicker}
          disabled={converting || dropBusy}
        />
      )}

      {converting && progress ? (
        <div className="space-y-2" role="status" aria-live="polite">
          <div className="flex items-center justify-between text-xs text-body">
            <span>{t("converter.progressLabel")}</span>
            <span className="font-mono text-ink">
              {t("converter.convertingProgress", {
                current: progress.current,
                total: progress.total,
              })}
            </span>
          </div>
          <div
            className="h-2 overflow-hidden rounded-full bg-canvas-soft"
            aria-hidden
          >
            <div
              className={cn(
                "h-full rounded-full transition-all duration-300",
                isDev ? "bg-[#5e6ad2]" : "bg-ink"
              )}
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      ) : null}

      {results.length > 0 ? (
        <ConverterStickyDownloadBar
          resultCount={results.length}
          onDownloadZip={downloadZip}
          onDownloadFirst={() => results[0] && download(results[0])}
          zipping={zipping}
          isDev={isDev}
        />
      ) : null}

      {softWarnings.length > 0 && (
        <div
          className="space-y-2 rounded-vercel border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-950"
          role="status"
        >
          {softWarnings.map((msg) => (
            <p key={msg}>{msg}</p>
          ))}
        </div>
      )}

      {error && (
        <div className="space-y-2 rounded-vercel border border-[var(--error-soft)] bg-[var(--error-soft)] px-3 py-2 text-sm text-[var(--error)]">
          <p>{error.message}</p>
          {errorGuide ? (
            <p>
              {t("converter.errorGuidePrefix")}{" "}
              <Link
                href={`/blog/${errorGuide.slug}`}
                className="font-medium underline"
              >
                {errorGuide.title}
              </Link>
            </p>
          ) : null}
        </div>
      )}

      <div className="flex flex-wrap items-center gap-2">
        <Button
          onClick={convertAll}
          disabled={!files.length || converting}
          variant={isDev ? "developer" : "primary"}
          size="lg"
          className="min-w-[160px] flex-1 sm:flex-none"
        >
          {converting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {progress
                ? t("converter.convertingProgress", {
                    current: progress.current,
                    total: progress.total,
                  })
                : t("converter.converting")}
            </>
          ) : (
            t("converter.convert")
          )}
        </Button>
        {(files.length > 0 || results.length > 0) && (
          <Button variant="secondary" onClick={clear} type="button" disabled={converting}>
            <X className="mr-1 h-4 w-4" />
            {t("converter.clear")}
          </Button>
        )}
      </div>

      {results.length > 0 && (
        <div className="space-y-3">
          {failedFiles.length > 0 ? (
            <p
              className="rounded-vercel border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-950"
              role="status"
            >
              {t("converter.partialSuccess", { failed: failedFiles.length })}
            </p>
          ) : null}
          {postConvertGuide ? (
            <p className="text-sm text-body">
              {t("converter.successGuidePrefix")}{" "}
              <Link
                href={`/blog/${postConvertGuide.slug}`}
                className="font-medium text-link hover:text-link-deep"
              >
                {postConvertGuide.title}
              </Link>
            </p>
          ) : null}
          <p className="text-sm font-medium text-ink">{t("converter.resultsHeading")}</p>
          <ul className="space-y-2">
            {results.map((r) => (
              <li
                key={r.id}
                className="flex items-center gap-3 rounded-vercel border border-hairline bg-canvas-soft px-3 py-2.5"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={r.previewUrl}
                  alt=""
                  className="h-12 w-12 shrink-0 rounded-md border border-hairline object-cover"
                />
                <span className="min-w-0 flex-1 truncate font-mono text-xs text-ink">
                  {r.outputName}
                </span>
                <Button size="sm" variant="ghost" onClick={() => download(r)}>
                  <Download className="mr-1 h-4 w-4" />
                  {t("converter.download")}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {failedFiles.length > 0 ? (
        <div className="space-y-2">
          <p className="text-sm font-medium text-[var(--error)]">
            {t("converter.failedHeading", { count: failedFiles.length })}
          </p>
          <ul className="space-y-1 rounded-vercel border border-[var(--error-soft)] bg-[var(--error-soft)] px-3 py-2">
            {failedFiles.map((f) => (
              <li key={f.id} className="text-sm text-[var(--error)]">
                <span className="font-mono text-xs">{f.name}</span>
                <span className="mt-0.5 block text-xs opacity-90">{f.message}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <ConverterOptionsPanel
        from={from}
        to={to}
        showExif={showExif}
        qualityPercent={qualityPercent}
        onQualityChange={setQualityPercent}
        resizePreset={resizePreset}
        onResizeChange={setResizePreset}
        preserveExif={preserveExif}
        onPreserveExifChange={setPreserveExif}
        disabled={converting}
      />
    </div>
  );
}

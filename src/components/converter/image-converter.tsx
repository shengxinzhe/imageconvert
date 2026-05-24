"use client";

import { useCallback, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import type { AppLocale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import {
  trackToolConvertError,
  trackToolConvertStart,
  trackToolConvertSuccess,
  trackToolDownloadZip,
} from "@/lib/analytics-events";
import { BrowserCompatHint } from "@/components/converter/browser-compat-hint";
import { ExifControl } from "@/components/converter/exif-control";
import {
  maxWidthForPreset,
  ResizeControl,
} from "@/components/converter/resize-control";
import {
  ConversionError,
  formatConversionError,
  type ConversionErrorDisplay,
} from "@/lib/convert-errors";
import { convertBatch } from "@/lib/convert/conversion-pool";
import { getConverterSoftWarnings } from "@/lib/converter-warnings";
import {
  acceptMimeForInput,
  defaultQualityPercent,
  supportsExifToggle,
  type InputFormat,
  type OutputFormat,
} from "@/lib/convert";
import { buildZipBlob, downloadBlob } from "@/lib/download-zip";
import { Link } from "@/i18n/navigation";
import { getLocalizedBlogPost } from "@/lib/blog-l10n";
import { getT } from "@/lib/i18n/translations";
import { QualityControl } from "@/components/converter/quality-control";
import { Button } from "@/components/ui/button";
import type { ResizePresetId } from "@/lib/constants";
import { Archive, Download, Loader2, Upload, X } from "lucide-react";
import type { ToolAudience } from "@/lib/design-variants";
import { cn } from "@/lib/utils";

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

  const addFiles = useCallback((incoming: FileList | File[]) => {
    setError(null);
    setFailedFiles([]);
    setFiles((prev) => [...prev, ...Array.from(incoming)]);
  }, []);

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const onDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragOver(false);
      if (e.dataTransfer.files.length) addFiles(e.dataTransfer.files);
    },
    [addFiles],
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

  const accept = acceptMimeForInput(from);
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

  return (
    <div className="space-y-4">
      <BrowserCompatHint from={from} />
      <QualityControl
        to={to}
        value={qualityPercent}
        onChange={setQualityPercent}
        disabled={converting}
      />
      <ResizeControl
        value={resizePreset}
        onChange={setResizePreset}
        disabled={converting}
      />
      {showExif ? (
        <ExifControl
          checked={preserveExif}
          onChange={setPreserveExif}
          disabled={converting}
        />
      ) : null}

      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={onDrop}
        className={cn(
          "relative rounded-vercel border-2 border-dashed p-10 text-center transition-colors",
          dragOver
            ? isDev
              ? "border-[#5e6ad2] bg-[#f5f5ff]"
              : "border-ink bg-canvas-soft-2"
            : "border-hairline bg-canvas-soft",
        )}
      >
        <Upload className="mx-auto h-8 w-8 text-mute" aria-hidden />
        <p className="mt-4 text-sm font-medium text-ink">{t("converter.dropTitle")}</p>
        <p className="mt-1 font-mono text-xs text-mute">{t("converter.dropHint")}</p>
        <label className="mt-5 inline-flex cursor-pointer items-center justify-center rounded-full border border-hairline bg-canvas px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-canvas-soft-2">
          <span className="sr-only">{t("converter.browseSr")}</span>
          <input
            type="file"
            accept={accept}
            multiple
            className="hidden"
            onChange={(e) => e.target.files && addFiles(e.target.files)}
          />
          {t("converter.browse")}
        </label>
      </div>

      {files.length > 0 && (
        <ul className="space-y-1 rounded-vercel border border-hairline bg-canvas p-3">
          {files.map((f, index) => (
            <li
              key={`${f.name}-${f.size}-${index}`}
              className="flex items-center justify-between gap-2 rounded-md px-2 py-1.5 text-sm text-body"
            >
              <span className="min-w-0 truncate font-mono text-xs">{f.name}</span>
              <span className="shrink-0 font-mono text-xs text-mute">
                {(f.size / 1024 / 1024).toFixed(2)} MB
              </span>
              <button
                type="button"
                onClick={() => removeFile(index)}
                className="shrink-0 rounded p-1 text-mute hover:bg-canvas-soft-2 hover:text-ink"
                aria-label={t("converter.remove", { name: f.name })}
                disabled={converting}
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </li>
          ))}
        </ul>
      )}

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
          className="min-w-[140px]"
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
          <div
            className="rounded-vercel border border-emerald-200 bg-emerald-50 px-3 py-2.5 text-sm text-emerald-950"
            role="status"
          >
            {results.length === 1
              ? t("converter.successOne")
              : t("converter.successMany", { count: results.length })}
            {failedFiles.length > 0
              ? ` ${t("converter.partialSuccess", { failed: failedFiles.length })}`
              : null}
          </div>
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
          {results.length > 1 && (
            <Button
              variant="secondary"
              onClick={downloadZip}
              disabled={zipping || converting}
              className="w-full sm:w-auto"
            >
              {zipping ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {t("converter.buildingZip")}
                </>
              ) : (
                <>
                  <Archive className="mr-2 h-4 w-4" />
                  {t("converter.downloadZip", { count: results.length })}
                </>
              )}
            </Button>
          )}
          <ul className="space-y-2">
            {results.map((r) => (
              <li
                key={r.id}
                className="flex items-center justify-between rounded-vercel border border-hairline bg-canvas-soft px-3 py-2.5"
              >
                <span className="truncate font-mono text-xs text-ink">{r.outputName}</span>
                <Button size="sm" variant="ghost" onClick={() => download(r)}>
                  <Download className="mr-1 h-4 w-4" />
                  {t("converter.download")}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {failedFiles.length > 0 && (
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
      )}
    </div>
  );
}

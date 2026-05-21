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
import { formatConversionError } from "@/lib/convert-errors";
import { getConverterSoftWarnings } from "@/lib/converter-warnings";
import {
  acceptMimeForInput,
  convertImage,
  defaultQualityPercent,
  getOutputFilename,
  type InputFormat,
  type OutputFormat,
} from "@/lib/convert";
import { buildZipBlob, downloadBlob } from "@/lib/download-zip";
import { getT } from "@/lib/i18n/translations";
import { QualityControl } from "@/components/converter/quality-control";
import { Button } from "@/components/ui/button";
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

interface ImageConverterProps {
  from: InputFormat;
  to: OutputFormat;
  toolSlug: string;
  audience?: ToolAudience;
}

export function ImageConverter({
  from,
  to,
  toolSlug,
  audience = "heic",
}: ImageConverterProps) {
  const params = useParams();
  const locale = (routing.locales.includes(params.locale as AppLocale)
    ? params.locale
    : routing.defaultLocale) as AppLocale;
  const t = getT(locale);
  const isDev = audience === "developer";
  const [files, setFiles] = useState<File[]>([]);
  const [results, setResults] = useState<ConvertedFile[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [converting, setConverting] = useState(false);
  const [zipping, setZipping] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [progress, setProgress] = useState<{ current: number; total: number } | null>(
    null,
  );
  const [qualityPercent, setQualityPercent] = useState(() =>
    defaultQualityPercent(to),
  );

  const addFiles = useCallback((incoming: FileList | File[]) => {
    setError(null);
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
    setProgress({ current: 0, total: files.length });
    setResults((prev) => {
      prev.forEach((r) => URL.revokeObjectURL(r.previewUrl));
      return [];
    });

    const quality = qualityPercent / 100;
    const converted: ConvertedFile[] = [];

    try {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        setProgress({ current: i + 1, total: files.length });
        try {
          const blob = await convertImage(file, { from, to, quality });
          const outputName = getOutputFilename(file.name, to);
          converted.push({
            id: `${file.name}-${file.size}-${i}`,
            originalName: file.name,
            outputName,
            blob,
            previewUrl: URL.createObjectURL(blob),
          });
        } catch (err) {
          throw new Error(formatConversionError(err, from, file.name));
        }
      }
      setResults(converted);
      trackToolConvertSuccess({
        tool: toolSlug,
        from,
        to,
        locale,
        fileCount: converted.length,
      });
    } catch (err) {
      trackToolConvertError({
        tool: toolSlug,
        from,
        to,
        locale,
        fileCount: files.length,
      });
      setError(
        err instanceof Error
          ? err.message
          : formatConversionError(err, from),
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
      setError(t("converter.zipError"));
    } finally {
      setZipping(false);
    }
  };

  const clear = () => {
    setFiles([]);
    setResults((prev) => {
      prev.forEach((r) => URL.revokeObjectURL(r.previewUrl));
      return [];
    });
    setError(null);
    setProgress(null);
  };

  const accept = acceptMimeForInput(from);
  const softWarnings = useMemo(() => getConverterSoftWarnings(files), [files]);

  return (
    <div className="space-y-4">
      <QualityControl
        to={to}
        value={qualityPercent}
        onChange={setQualityPercent}
        disabled={converting}
      />

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
        <p className="rounded-vercel border border-[var(--error-soft)] bg-[var(--error-soft)] px-3 py-2 text-sm text-[var(--error)]">
          {error}
        </p>
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
    </div>
  );
}

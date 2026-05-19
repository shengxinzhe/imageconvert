"use client";

import { useCallback, useState } from "react";
import {
  acceptMimeForInput,
  convertImage,
  getOutputFilename,
  type InputFormat,
  type OutputFormat,
} from "@/lib/convert";
import { MAX_BATCH, MAX_FREE_SIZE } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Download, Loader2, Upload, X } from "lucide-react";
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
}

export function ImageConverter({ from, to }: ImageConverterProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [results, setResults] = useState<ConvertedFile[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [converting, setConverting] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  const addFiles = useCallback((incoming: FileList | File[]) => {
    setError(null);
    const list = Array.from(incoming);
    const valid: File[] = [];
    for (const f of list) {
      if (f.size > MAX_FREE_SIZE) {
        setError(`"${f.name}" exceeds 10 MB free limit.`);
        continue;
      }
      valid.push(f);
    }
    setFiles((prev) => {
      const merged = [...prev, ...valid].slice(0, MAX_BATCH);
      if (prev.length + valid.length > MAX_BATCH) {
        setError(`Free batch limit is ${MAX_BATCH} files.`);
      }
      return merged;
    });
  }, []);

  const onDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragOver(false);
      if (e.dataTransfer.files.length) addFiles(e.dataTransfer.files);
    },
    [addFiles]
  );

  const convertAll = async () => {
    if (!files.length) return;
    setConverting(true);
    setError(null);
    setResults((prev) => {
      prev.forEach((r) => URL.revokeObjectURL(r.previewUrl));
      return [];
    });

    const converted: ConvertedFile[] = [];
    try {
      for (const file of files) {
        const blob = await convertImage(file, { from, to });
        const outputName = getOutputFilename(file.name, to);
        converted.push({
          id: `${file.name}-${Date.now()}`,
          originalName: file.name,
          outputName,
          blob,
          previewUrl: URL.createObjectURL(blob),
        });
      }
      setResults(converted);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Conversion failed. Try Chrome for HEIC/AVIF support."
      );
    } finally {
      setConverting(false);
    }
  };

  const download = (item: ConvertedFile) => {
    const a = document.createElement("a");
    a.href = item.previewUrl;
    a.download = item.outputName;
    a.click();
  };

  const clear = () => {
    setFiles([]);
    setResults((prev) => {
      prev.forEach((r) => URL.revokeObjectURL(r.previewUrl));
      return [];
    });
    setError(null);
  };

  const accept = acceptMimeForInput(from);

  return (
    <div className="space-y-4">
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
            ? "border-ink bg-canvas-soft-2"
            : "border-hairline bg-canvas-soft"
        )}
      >
        <Upload className="mx-auto h-8 w-8 text-mute" aria-hidden />
        <p className="mt-4 text-sm font-medium text-ink">Drag & drop images here</p>
        <p className="mt-1 font-mono text-xs text-mute">
          Up to {MAX_BATCH} files · Max 10 MB each
        </p>
        <label className="mt-5 inline-flex cursor-pointer items-center justify-center rounded-full border border-hairline bg-canvas px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-canvas-soft-2">
          <span className="sr-only">Choose files</span>
          <input
            type="file"
            accept={accept}
            multiple
            className="hidden"
            onChange={(e) => e.target.files && addFiles(e.target.files)}
          />
          Browse files
        </label>
      </div>

      {files.length > 0 && (
        <ul className="space-y-1 rounded-vercel border border-hairline bg-canvas p-3">
          {files.map((f) => (
            <li
              key={f.name + f.size}
              className="flex items-center justify-between rounded-md px-2 py-1.5 text-sm text-body"
            >
              <span className="truncate font-mono text-xs">{f.name}</span>
              <span className="shrink-0 font-mono text-xs text-mute">
                {(f.size / 1024 / 1024).toFixed(2)} MB
              </span>
            </li>
          ))}
        </ul>
      )}

      {error && (
        <p className="rounded-vercel border border-[var(--error-soft)] bg-[var(--error-soft)] px-3 py-2 text-sm text-[var(--error)]">
          {error}
        </p>
      )}

      <div className="flex flex-wrap gap-2">
        <Button
          onClick={convertAll}
          disabled={!files.length || converting}
          className="min-w-[140px]"
        >
          {converting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Converting…
            </>
          ) : (
            "Convert"
          )}
        </Button>
        {(files.length > 0 || results.length > 0) && (
          <Button variant="secondary" onClick={clear} type="button">
            <X className="mr-1 h-4 w-4" />
            Clear
          </Button>
        )}
      </div>

      {results.length > 0 && (
        <ul className="space-y-2">
          {results.map((r) => (
            <li
              key={r.id}
              className="flex items-center justify-between rounded-vercel border border-hairline bg-canvas-soft px-3 py-2.5"
            >
              <span className="truncate font-mono text-xs text-ink">{r.outputName}</span>
              <Button size="sm" variant="ghost" onClick={() => download(r)}>
                <Download className="mr-1 h-4 w-4" />
                Download
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

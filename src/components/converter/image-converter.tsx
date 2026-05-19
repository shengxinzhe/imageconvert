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
          : "Conversion failed. Try a different browser (Chrome recommended for HEIC/AVIF)."
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
          "relative rounded-xl border-2 border-dashed p-8 text-center transition-colors",
          dragOver
            ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30"
            : "border-slate-300 bg-slate-50 dark:border-slate-600 dark:bg-slate-900/50"
        )}
      >
        <Upload className="mx-auto h-10 w-10 text-slate-400" aria-hidden />
        <p className="mt-3 text-sm font-medium text-slate-700 dark:text-slate-300">
          Drag & drop images here
        </p>
        <p className="mt-1 text-xs text-slate-500">
          Up to {MAX_BATCH} files · Max 10 MB each
        </p>
        <label className="mt-4 inline-flex cursor-pointer items-center justify-center rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-900 dark:hover:bg-slate-800">
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
        <ul className="space-y-2 rounded-lg border border-slate-200 p-3 dark:border-slate-700">
          {files.map((f) => (
            <li
              key={f.name + f.size}
              className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-400"
            >
              <span className="truncate">{f.name}</span>
              <span className="shrink-0 text-xs">
                {(f.size / 1024 / 1024).toFixed(2)} MB
              </span>
            </li>
          ))}
        </ul>
      )}

      {error && (
        <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700 dark:bg-red-950/50 dark:text-red-300">
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
          <Button variant="outline" onClick={clear} type="button">
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
              className="flex items-center justify-between rounded-lg border border-emerald-200 bg-emerald-50/50 px-3 py-2 dark:border-emerald-900 dark:bg-emerald-950/30"
            >
              <span className="truncate text-sm font-medium">{r.outputName}</span>
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

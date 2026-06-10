"use client";

import { useEffect, useState } from "react";
import { ImageIcon, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import type { AppLocale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { getT } from "@/lib/i18n/translations";

interface FilePreviewGridProps {
  files: File[];
  onRemove: (index: number) => void;
  onAddMore?: () => void;
  disabled?: boolean;
}

type PreviewEntry = {
  key: string;
  url: string | null;
};

async function tryPreviewUrl(file: File): Promise<string | null> {
  try {
    const bitmap = await createImageBitmap(file);
    const canvas = document.createElement("canvas");
    canvas.width = Math.min(bitmap.width, 160);
    canvas.height = Math.min(bitmap.height, 160);
    const scale = Math.min(canvas.width / bitmap.width, canvas.height / bitmap.height);
    canvas.width = Math.max(1, Math.round(bitmap.width * scale));
    canvas.height = Math.max(1, Math.round(bitmap.height * scale));
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      bitmap.close();
      return null;
    }
    ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    bitmap.close();
    return canvas.toDataURL("image/jpeg", 0.85);
  } catch {
    return null;
  }
}

export function FilePreviewGrid({ files, onRemove, onAddMore, disabled }: FilePreviewGridProps) {
  const params = useParams();
  const locale = (routing.locales.includes(params.locale as AppLocale)
    ? params.locale
    : routing.defaultLocale) as AppLocale;
  const t = getT(locale);
  const [previews, setPreviews] = useState<PreviewEntry[]>([]);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const next = await Promise.all(
        files.map(async (file, index) => ({
          key: `${file.name}-${file.size}-${index}`,
          url: await tryPreviewUrl(file),
        })),
      );
      if (!cancelled) setPreviews(next);
    })();

    return () => {
      cancelled = true;
    };
  }, [files]);

  if (!files.length) return null;

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm font-medium text-ink">
          {t("converter.previewHeading", { count: files.length })}
        </p>
        {onAddMore ? (
          <Button
            type="button"
            variant="secondary"
            size="sm"
            disabled={disabled}
            onClick={onAddMore}
          >
            <Plus className="mr-1.5 h-4 w-4" aria-hidden />
            {t("converter.addMore")}
          </Button>
        ) : null}
      </div>
      <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
        {files.map((file, index) => {
          const preview = previews[index];
          return (
            <li
              key={`${file.name}-${file.size}-${index}`}
              className="relative overflow-hidden rounded-vercel border border-hairline bg-canvas-soft"
            >
              <div className="aspect-square flex items-center justify-center bg-canvas">
                {preview?.url ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={preview.url}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <ImageIcon className="h-8 w-8 text-mute" aria-hidden />
                )}
              </div>
              <div className="border-t border-hairline px-2 py-1.5">
                <p className="truncate font-mono text-[10px] text-ink">{file.name}</p>
                <p className="font-mono text-[10px] text-mute">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
              <button
                type="button"
                onClick={() => onRemove(index)}
                className="absolute right-1 top-1 rounded-full bg-canvas/90 p-1 text-mute shadow-sm hover:text-ink"
                aria-label={t("converter.remove", { name: file.name })}
                disabled={disabled}
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

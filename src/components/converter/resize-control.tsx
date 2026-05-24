"use client";

import { useParams } from "next/navigation";
import type { AppLocale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { RESIZE_PRESETS, type ResizePresetId } from "@/lib/constants";
import { getT } from "@/lib/i18n/translations";
import { cn } from "@/lib/utils";

interface ResizeControlProps {
  value: ResizePresetId;
  onChange: (preset: ResizePresetId) => void;
  disabled?: boolean;
}

export function ResizeControl({ value, onChange, disabled }: ResizeControlProps) {
  const params = useParams();
  const locale = (routing.locales.includes(params.locale as AppLocale)
    ? params.locale
    : routing.defaultLocale) as AppLocale;
  const t = getT(locale);

  return (
    <div className="rounded-vercel border border-hairline bg-canvas-soft px-4 py-3">
      <p className="text-sm font-medium text-ink">{t("converter.resizeLabel")}</p>
      <p className="mt-1 text-xs text-mute">{t("converter.resizeHint")}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {RESIZE_PRESETS.map((preset) => (
          <button
            key={preset.id}
            type="button"
            disabled={disabled}
            onClick={() => onChange(preset.id)}
            className={cn(
              "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
              value === preset.id
                ? "border-ink bg-ink text-white"
                : "border-hairline bg-canvas text-body hover:bg-canvas-soft-2",
              disabled && "opacity-50",
            )}
          >
            {t(`converter.resizePreset.${preset.id}`)}
          </button>
        ))}
      </div>
    </div>
  );
}

export function maxWidthForPreset(presetId: ResizePresetId): number | null {
  return RESIZE_PRESETS.find((p) => p.id === presetId)?.maxWidth ?? null;
}

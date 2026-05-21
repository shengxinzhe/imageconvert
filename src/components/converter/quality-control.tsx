"use client";

import { useParams } from "next/navigation";
import type { AppLocale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import type { OutputFormat } from "@/lib/convert";
import { defaultQualityPercent, outputSupportsQuality } from "@/lib/convert";
import { getT } from "@/lib/i18n/translations";

interface QualityControlProps {
  to: OutputFormat;
  value: number;
  onChange: (percent: number) => void;
  disabled?: boolean;
}

export function QualityControl({
  to,
  value,
  onChange,
  disabled,
}: QualityControlProps) {
  const params = useParams();
  const locale = (routing.locales.includes(params.locale as AppLocale)
    ? params.locale
    : routing.defaultLocale) as AppLocale;
  const t = getT(locale);

  if (!outputSupportsQuality(to)) return null;

  const label = to === "webp" ? t("converter.webpQuality") : t("converter.jpegQuality");

  return (
    <div className="rounded-vercel border border-hairline bg-canvas-soft px-4 py-3">
      <div className="flex items-center justify-between gap-3">
        <label htmlFor="quality-slider" className="text-sm font-medium text-ink">
          {label}
        </label>
        <span className="font-mono text-xs text-mute">{value}%</span>
      </div>
      <input
        id="quality-slider"
        type="range"
        min={60}
        max={100}
        step={1}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-hairline accent-ink disabled:opacity-50"
      />
      <p className="mt-2 text-xs text-mute">
        {t("converter.qualityHint", { default: defaultQualityPercent(to) })}
      </p>
    </div>
  );
}

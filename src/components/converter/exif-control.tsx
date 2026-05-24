"use client";

import { useParams } from "next/navigation";
import type { AppLocale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { getT } from "@/lib/i18n/translations";

interface ExifControlProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

export function ExifControl({ checked, onChange, disabled }: ExifControlProps) {
  const params = useParams();
  const locale = (routing.locales.includes(params.locale as AppLocale)
    ? params.locale
    : routing.defaultLocale) as AppLocale;
  const t = getT(locale);

  return (
    <div className="rounded-vercel border border-hairline bg-canvas-soft px-4 py-3">
      <label className="flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange(e.target.checked)}
          className="mt-0.5 h-4 w-4 rounded border-hairline accent-ink"
        />
        <span>
          <span className="text-sm font-medium text-ink">{t("converter.exifLabel")}</span>
          <span className="mt-1 block text-xs text-mute">{t("converter.exifHint")}</span>
        </span>
      </label>
    </div>
  );
}

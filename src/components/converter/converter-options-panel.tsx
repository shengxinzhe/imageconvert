"use client";

import { useParams } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { BrowserCompatHint } from "@/components/converter/browser-compat-hint";
import { ExifControl } from "@/components/converter/exif-control";
import { PrivacyVerifyHint } from "@/components/converter/privacy-verify-hint";
import { QualityControl } from "@/components/converter/quality-control";
import { ResizeControl } from "@/components/converter/resize-control";
import type { AppLocale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import type { InputFormat, OutputFormat } from "@/lib/convert";
import { getT } from "@/lib/i18n/translations";
import type { ResizePresetId } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function ConverterOptionsPanel({
  from,
  to,
  showExif,
  qualityPercent,
  onQualityChange,
  resizePreset,
  onResizeChange,
  preserveExif,
  onPreserveExifChange,
  disabled,
  defaultOpen = false,
}: {
  from: InputFormat;
  to: OutputFormat;
  showExif: boolean;
  qualityPercent: number;
  onQualityChange: (value: number) => void;
  resizePreset: ResizePresetId;
  onResizeChange: (value: ResizePresetId) => void;
  preserveExif: boolean;
  onPreserveExifChange: (value: boolean) => void;
  disabled?: boolean;
  defaultOpen?: boolean;
}) {
  const params = useParams();
  const locale = (routing.locales.includes(params.locale as AppLocale)
    ? params.locale
    : routing.defaultLocale) as AppLocale;
  const t = getT(locale);

  return (
    <details
      className="group rounded-vercel border border-hairline bg-canvas-soft"
      {...(defaultOpen ? { open: true } : {})}
    >
      <summary
        className={cn(
          "flex cursor-pointer list-none items-center justify-between gap-2 px-4 py-3 text-sm font-medium text-ink",
          "[&::-webkit-details-marker]:hidden"
        )}
      >
        {t("converter.optionsTitle")}
        <ChevronDown
          className="h-4 w-4 shrink-0 text-mute transition-transform group-open:rotate-180"
          aria-hidden
        />
      </summary>
      <div className="space-y-4 border-t border-hairline px-4 py-4">
        <QualityControl
          to={to}
          value={qualityPercent}
          onChange={onQualityChange}
          disabled={disabled}
        />
        <ResizeControl value={resizePreset} onChange={onResizeChange} disabled={disabled} />
        {showExif ? (
          <ExifControl
            checked={preserveExif}
            onChange={onPreserveExifChange}
            disabled={disabled}
          />
        ) : null}
        <BrowserCompatHint from={from} />
        <PrivacyVerifyHint />
      </div>
    </details>
  );
}

"use client";

import { useParams } from "next/navigation";
import { Archive, Download, Loader2 } from "lucide-react";
import type { AppLocale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { getT } from "@/lib/i18n/translations";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ConverterStickyDownloadBar({
  resultCount,
  onDownloadZip,
  onDownloadFirst,
  zipping,
  isDev,
}: {
  resultCount: number;
  onDownloadZip: () => void;
  onDownloadFirst: () => void;
  zipping: boolean;
  isDev: boolean;
}) {
  const params = useParams();
  const locale = (routing.locales.includes(params.locale as AppLocale)
    ? params.locale
    : routing.defaultLocale) as AppLocale;
  const t = getT(locale);

  if (resultCount < 1) return null;

  return (
    <div
      className={cn(
        "sticky top-16 z-30 -mx-1 rounded-vercel border border-emerald-200 bg-emerald-50/95 px-4 py-3 shadow-card backdrop-blur-sm",
        "flex flex-col gap-2"
      )}
      role="status"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-medium text-emerald-950">
          {resultCount === 1
            ? t("converter.successOne")
            : t("converter.successMany", { count: resultCount })}
        </p>
        <div className="flex flex-wrap gap-2">
          {resultCount > 1 ? (
            <Button
              type="button"
              variant={isDev ? "developer" : "primary"}
              size="sm"
              onClick={onDownloadZip}
              disabled={zipping}
            >
              {zipping ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {t("converter.buildingZip")}
                </>
              ) : (
                <>
                  <Archive className="mr-2 h-4 w-4" />
                  {t("converter.downloadZip", { count: resultCount })}
                </>
              )}
            </Button>
          ) : (
            <Button
              type="button"
              variant={isDev ? "developer" : "primary"}
              size="sm"
              onClick={onDownloadFirst}
            >
              <Download className="mr-2 h-4 w-4" />
              {t("converter.download")}
            </Button>
          )}
        </div>
      </div>
      <p className="text-xs leading-snug text-emerald-800/90">{t("converter.bookmarkHint")}</p>
    </div>
  );
}

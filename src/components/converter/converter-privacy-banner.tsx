"use client";

import { useParams } from "next/navigation";
import { Lock, ShieldCheck } from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { getT } from "@/lib/i18n/translations";
import { cn } from "@/lib/utils";

export function ConverterPrivacyBanner({
  compact,
  isDev = false,
}: {
  compact?: boolean;
  isDev?: boolean;
}) {
  const params = useParams();
  const locale = (routing.locales.includes(params.locale as AppLocale)
    ? params.locale
    : routing.defaultLocale) as AppLocale;
  const t = getT(locale);

  return (
    <div
      className={cn(
        "flex gap-3 rounded-vercel border border-hairline bg-canvas px-3 py-2.5",
        compact ? "text-xs" : "text-sm"
      )}
      role="note"
    >
      <ShieldCheck className="h-5 w-5 shrink-0 text-ink" aria-hidden />
      <div className="min-w-0 flex-1 text-body">
        <p className="font-medium text-ink">
          {isDev ? t("converter.privacyBannerTitleDev") : t("converter.privacyBannerTitle")}
        </p>
        <p className={cn("mt-0.5", compact && "hidden sm:block")}>
          {isDev ? t("converter.privacyBannerBodyDev") : t("converter.privacyBannerBody")}
        </p>
        <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1">
          <span className="inline-flex items-center gap-1 text-ink">
            <Lock className="h-3.5 w-3.5" aria-hidden />
            {t("converter.privacyBannerProof")}
          </span>
          <Link
            href="/blog/privacy-browser-image-conversion"
            className="font-medium text-[var(--mintlify-green)] hover:underline"
          >
            {t("converter.privacyBannerLink")}
          </Link>
        </p>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { ChevronDown, ShieldCheck } from "lucide-react";
import { useParams } from "next/navigation";
import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { getT } from "@/lib/i18n/translations";
import { cn } from "@/lib/utils";

export function PrivacyVerifyHint() {
  const params = useParams();
  const locale = (routing.locales.includes(params.locale as AppLocale)
    ? params.locale
    : routing.defaultLocale) as AppLocale;
  const t = getT(locale);
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-vercel border border-hairline bg-canvas-soft">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center gap-2 px-3 py-2.5 text-left text-sm font-medium text-ink"
        aria-expanded={open}
      >
        <ShieldCheck className="h-4 w-4 shrink-0 text-ink" aria-hidden />
        <span className="flex-1">{t("converter.privacyVerifyTitle")}</span>
        <ChevronDown
          className={cn("h-4 w-4 shrink-0 text-mute transition-transform", open && "rotate-180")}
          aria-hidden
        />
      </button>
      {open ? (
        <div className="space-y-2 border-t border-hairline px-3 py-2.5 text-sm text-body">
          <ol className="list-decimal space-y-1.5 pl-5 marker:text-mute">
            <li>{t("converter.privacyVerifyStep1")}</li>
            <li>{t("converter.privacyVerifyStep2")}</li>
            <li>{t("converter.privacyVerifyStep3")}</li>
          </ol>
          <p className="text-xs text-mute">{t("converter.privacyVerifyNote")}</p>
          <Link
            href="/blog/privacy-browser-image-conversion"
            className="text-xs font-medium text-link hover:text-link-deep"
          >
            {t("converter.privacyVerifyLink")}
          </Link>
        </div>
      ) : null}
    </div>
  );
}

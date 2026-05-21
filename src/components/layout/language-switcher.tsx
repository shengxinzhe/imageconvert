"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import type { AppLocale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { getT } from "@/lib/i18n/translations";
import { trackLocaleSwitch } from "@/lib/analytics-events";
import { localePath } from "@/lib/locale-path";
import { cn } from "@/lib/utils";

const localeLabels: Record<AppLocale, string> = {
  en: "EN",
  de: "DE",
  fr: "FR",
};

export function LanguageSwitcher() {
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();
  const locale = (routing.locales.includes(params.locale as AppLocale)
    ? params.locale
    : routing.defaultLocale) as AppLocale;
  const t = getT(locale);

  const pathWithoutLocale = (() => {
    if (locale === routing.defaultLocale) return pathname;
    const prefix = `/${locale}`;
    return pathname.startsWith(prefix)
      ? pathname.slice(prefix.length) || "/"
      : pathname;
  })();

  return (
    <div
      className="flex items-center gap-0.5 rounded-md border border-hairline bg-canvas p-0.5"
      role="group"
      aria-label={t("language.label")}
    >
      {routing.locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => {
            if (loc !== locale) trackLocaleSwitch({ from: locale, to: loc });
            router.push(localePath(pathWithoutLocale, loc));
          }}
          className={cn(
            "rounded px-2 py-1 font-mono text-xs transition",
            loc === locale
              ? "bg-ink font-medium text-white"
              : "text-mute hover:bg-canvas-soft hover:text-ink"
          )}
          aria-current={loc === locale ? "true" : undefined}
          title={t(`language.${loc}`)}
        >
          {localeLabels[loc]}
        </button>
      ))}
    </div>
  );
}

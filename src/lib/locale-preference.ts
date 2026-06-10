import type { AppLocale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";

export const LOCALE_COOKIE = "heicsave_locale";
export const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

/** Parse Accept-Language; returns highest-q supported locale or null. */
export function parseAcceptLanguage(header: string | null): AppLocale | null {
  if (!header) return null;

  const prefs = header
    .split(",")
    .map((part, index) => {
      const [lang, qPart] = part.trim().split(";q=");
      const q = qPart ? parseFloat(qPart) : 1 - index * 0.001;
      const base = lang.split("-")[0].toLowerCase();
      return { base, q };
    })
    .sort((a, b) => b.q - a.q);

  for (const { base } of prefs) {
    if (routing.locales.includes(base as AppLocale)) {
      return base as AppLocale;
    }
  }
  return null;
}

/** Cookie wins when set; otherwise Accept-Language; else default (en). */
export function resolvePreferredLocale(
  cookieValue: string | undefined,
  acceptLanguage: string | null,
): AppLocale {
  if (cookieValue && routing.locales.includes(cookieValue as AppLocale)) {
    return cookieValue as AppLocale;
  }
  return parseAcceptLanguage(acceptLanguage) ?? routing.defaultLocale;
}

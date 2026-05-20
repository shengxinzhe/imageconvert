import type { Metadata } from "next";
import { routing, type AppLocale } from "@/i18n/routing";
import { SITE_URL } from "@/lib/constants";

const OG_LOCALE: Record<AppLocale, string> = {
  en: "en_US",
  de: "de_DE",
  fr: "fr_FR",
};

export function getOgLocale(locale: AppLocale): string {
  return OG_LOCALE[locale];
}

/** Path without locale prefix, e.g. `/heic-to-jpg` or `/blog/slug` */
export function localePath(path: string, locale: AppLocale): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (locale === routing.defaultLocale) return normalized;
  return `/${locale}${normalized === "/" ? "" : normalized}`;
}

export function absoluteUrl(path: string, locale: AppLocale): string {
  return `${SITE_URL}${localePath(path, locale)}`;
}

export function hreflangLanguages(
  path: string,
  locales: readonly AppLocale[] = routing.locales
): NonNullable<Metadata["alternates"]>["languages"] {
  const languages: Record<string, string> = {};
  for (const locale of locales) {
    languages[locale] = absoluteUrl(path, locale);
  }
  languages["x-default"] = absoluteUrl(path, routing.defaultLocale);
  return languages;
}

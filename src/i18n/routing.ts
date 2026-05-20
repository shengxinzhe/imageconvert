export const locales = ["en", "de", "fr"] as const;
export type AppLocale = (typeof locales)[number];

export const routing = {
  locales,
  defaultLocale: "en" as const,
  localePrefix: "as-needed" as const,
};

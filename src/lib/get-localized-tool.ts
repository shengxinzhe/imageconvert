import type { AppLocale } from "@/i18n/routing";
import { localePath } from "@/lib/locale-path";
import { toolTranslations } from "@/lib/tools-l10n";
import { tools, type ToolConfig, type ToolSlug } from "@/lib/tools-config";

export function getLocalizedTool(slug: ToolSlug, locale: AppLocale): ToolConfig {
  const base = tools[slug];
  const path = localePath(`/${slug}`, locale);
  if (locale === "en") {
    return { ...base, path };
  }

  const overlay = toolTranslations[locale][slug];
  return {
    ...base,
    ...overlay,
    path,
    keywords: overlay.keywords ?? base.keywords,
    seoSections: overlay.seoSections ?? base.seoSections,
  };
}

export function getLocalizedToolList(locale: AppLocale): ToolConfig[] {
  return (Object.keys(tools) as ToolSlug[]).map((slug) => getLocalizedTool(slug, locale));
}

export function getLocalizedToolBySlug(
  slug: string,
  locale: AppLocale
): ToolConfig | undefined {
  if (!(slug in tools)) return undefined;
  return getLocalizedTool(slug as ToolSlug, locale);
}

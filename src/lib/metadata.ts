import type { Metadata } from "next";
import type { AppLocale } from "@/i18n/routing";
import { SITE_NAME } from "@/lib/constants";
import { absoluteUrl, getOgLocale, hreflangLanguages } from "@/lib/locale-path";
import { OG_IMAGE } from "@/lib/site-metadata";
import type { ToolConfig } from "@/lib/tools-config";

export function toolMetadata(tool: ToolConfig, locale: AppLocale): Metadata {
  const path = `/${tool.slug}`;
  const url = absoluteUrl(path, locale);

  return {
    title: tool.title,
    description: tool.metaDescription,
    keywords: tool.keywords,
    alternates: {
      canonical: url,
      languages: hreflangLanguages(path),
    },
    openGraph: {
      title: tool.title,
      description: tool.metaDescription,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: getOgLocale(locale),
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: tool.title,
      description: tool.metaDescription,
    },
    robots: { index: true, follow: true },
  };
}

import { ToolsIndexLayout } from "@/components/site/tools-index-layout";
import { routing, type AppLocale } from "@/i18n/routing";
import { SITE_NAME } from "@/lib/constants";
import { getOgImage, OG_IMAGE } from "@/lib/site-metadata";
import { absoluteUrl, getOgLocale, hreflangLanguages } from "@/lib/locale-path";
import type { Metadata } from "next";

type PageProps = { params: { locale: string } };

const TOOLS_META: Record<AppLocale, { title: string; description: string }> = {
  en: {
    title: `All Image Converters — ${SITE_NAME}`,
    description:
      "Browse all free HeicSave converters: HEIC to JPG/PNG/WebP, WebP and AVIF tools, and JPG/PNG to WebP — browser-local, no upload.",
  },
  de: {
    title: `Alle Bildkonverter — ${SITE_NAME}`,
    description:
      "Alle kostenlosen HeicSave-Konverter: HEIC in JPG/PNG/WebP, WebP- und AVIF-Tools sowie JPG/PNG in WebP — im Browser, ohne Upload.",
  },
  fr: {
    title: `Tous les convertisseurs — ${SITE_NAME}`,
    description:
      "Parcourez tous les convertisseurs HeicSave gratuits : HEIC en JPG/PNG/WebP, outils WebP et AVIF, JPG/PNG en WebP — dans le navigateur, sans envoi.",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const locale = params.locale as AppLocale;
  const { title, description } = TOOLS_META[locale];
  const url = absoluteUrl("/tools", locale);

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: hreflangLanguages("/tools"),
    },
    openGraph: {
      type: "website",
      locale: getOgLocale(locale),
      url,
      siteName: SITE_NAME,
      title,
      description,
      images: [getOgImage(locale)],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
    robots: { index: true, follow: true },
  };
}

export default function ToolsIndexPage({ params }: PageProps) {
  const locale = params.locale as AppLocale;
  return <ToolsIndexLayout locale={locale} />;
}

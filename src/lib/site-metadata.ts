import type { Metadata } from "next";
import type { AppLocale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { SITE_NAME } from "@/lib/constants";
import { absoluteUrl, getOgLocale, hreflangLanguages } from "@/lib/locale-path";
import {
  hasBlogTranslation,
  hreflangBlogLanguages,
} from "@/lib/blog-l10n";

export const OG_IMAGE = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: `${SITE_NAME} — Free HEIC, WebP & AVIF converters`,
} as const;

const HOME_COPY: Record<
  AppLocale,
  { title: string; description: string }
> = {
  en: {
    title: `${SITE_NAME} — Free HEIC, WebP & AVIF Converters Online`,
    description:
      "Free online image converters for HEIC, WebP, and AVIF. Convert in your browser—private, fast, no upload. Built for iPhone users and developers.",
  },
  de: {
    title: `${SITE_NAME} — HEIC, WebP & AVIF kostenlos online konvertieren`,
    description:
      "Kostenlose Bildkonverter für HEIC, WebP und AVIF im Browser. Privat, schnell, ohne Upload — für iPhone-Nutzer und Entwickler.",
  },
  fr: {
    title: `${SITE_NAME} — Convertisseurs HEIC, WebP et AVIF gratuits en ligne`,
    description:
      "Convertisseurs d'images gratuits pour HEIC, WebP et AVIF dans le navigateur. Privé, rapide, sans envoi — pour iPhone et développeurs.",
  },
};

export function homeMetadata(locale: AppLocale): Metadata {
  const { title, description } = HOME_COPY[locale];
  const url = absoluteUrl("/", locale);

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: url,
      languages: hreflangLanguages("/"),
    },
    openGraph: {
      type: "website",
      locale: getOgLocale(locale),
      url,
      siteName: SITE_NAME,
      title,
      description,
      images: [OG_IMAGE],
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

export function legalPageMetadata(
  path: string,
  meta: { title: string; description: string },
  locale: AppLocale,
): Metadata {
  const url = absoluteUrl(path, locale);

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: url,
      languages: hreflangLanguages(path),
    },
    openGraph: {
      type: "website",
      locale: getOgLocale(locale),
      url,
      siteName: SITE_NAME,
      title: meta.title,
      description: meta.description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [OG_IMAGE.url],
    },
    robots: { index: true, follow: true },
  };
}

export function blogPostMetadata(
  post: {
    slug: string;
    title: string;
    description: string;
    publishedAt: string;
    updatedAt?: string;
  },
  locale: AppLocale
): Metadata {
  const path = `/blog/${post.slug}`;
  const url = absoluteUrl(path, locale);
  const enUrl = absoluteUrl(path, routing.defaultLocale);
  const translated = hasBlogTranslation(post.slug, locale);

  if (locale !== routing.defaultLocale && !translated) {
    return {
      title: post.title,
      description: post.description,
      alternates: { canonical: enUrl },
      robots: { index: false, follow: true },
    };
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: url,
      languages: hreflangBlogLanguages(post.slug, path),
    },
    openGraph: {
      type: "article",
      locale: getOgLocale(locale),
      url,
      siteName: SITE_NAME,
      title: post.title,
      description: post.description,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [OG_IMAGE.url],
    },
    robots: { index: true, follow: true },
  };
}

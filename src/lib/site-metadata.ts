import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const OG_IMAGE = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: `${SITE_NAME} — Free HEIC, WebP & AVIF converters`,
} as const;

const HOME_TITLE = `${SITE_NAME} — Free HEIC, WebP & AVIF Converters Online`;
const HOME_DESCRIPTION =
  "Free online image converters for HEIC, WebP, and AVIF. Convert in your browser—private, fast, no upload. Built for iPhone users and developers.";

export const homeMetadata: Metadata = {
  title: { absolute: HOME_TITLE },
  description: HOME_DESCRIPTION,
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
  robots: { index: true, follow: true },
};

export function blogPostMetadata(post: {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
}): Metadata {
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      locale: "en_US",
      url,
      siteName: SITE_NAME,
      title: post.title,
      description: post.description,
      publishedTime: post.publishedAt,
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

import type { AppLocale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import {
  type BlogPost,
  blogPosts,
  getPostBySlug,
} from "@/lib/blog-posts";
import { deBlogPosts } from "@/lib/blog-l10n/de";
import { frBlogPosts } from "@/lib/blog-l10n/fr";
import { hreflangLanguages } from "@/lib/locale-path";

const overlays: Record<
  Exclude<AppLocale, "en">,
  Partial<
    Record<string, Pick<BlogPost, "title" | "description" | "content" | "updatedAt">>
  >
> = {
  de: deBlogPosts,
  fr: frBlogPosts,
};

export function hasBlogTranslation(slug: string, locale: AppLocale): boolean {
  if (locale === routing.defaultLocale) return true;
  return Boolean(overlays[locale]?.[slug]);
}

export function getLocalizedBlogPost(
  slug: string,
  locale: AppLocale
): BlogPost | undefined {
  const base = getPostBySlug(slug);
  if (!base) return undefined;
  if (locale === routing.defaultLocale) return base;
  const overlay = overlays[locale]?.[slug];
  if (!overlay) return base;
  return { ...base, ...overlay };
}

export function getLocalizedBlogPostsNewestFirst(locale: AppLocale): BlogPost[] {
  return [...blogPosts]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .filter(
      (post) =>
        locale === routing.defaultLocale || hasBlogTranslation(post.slug, locale)
    )
    .map((post) => getLocalizedBlogPost(post.slug, locale)!);
}

/** Slugs with a real de/fr translation (for sitemap — keep in sync with de.ts / fr.ts keys). */
export const l10nBlogSlugs = Object.keys(deBlogPosts) as string[];

export function hreflangBlogLanguages(
  slug: string,
  path: string
): NonNullable<import("next").Metadata["alternates"]>["languages"] {
  const locales = routing.locales.filter((l) => hasBlogTranslation(slug, l));
  return hreflangLanguages(path, locales);
}

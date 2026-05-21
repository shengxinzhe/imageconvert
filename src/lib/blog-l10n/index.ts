import type { AppLocale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import {
  type BlogPost,
  blogPosts,
  getPostBySlug,
} from "@/lib/blog-posts";
import { deBlogPosts } from "@/lib/blog-l10n/de";
import { frBlogPosts } from "@/lib/blog-l10n/fr";

const overlays: Record<
  Exclude<AppLocale, "en">,
  Partial<Record<string, Pick<BlogPost, "title" | "description" | "content">>>
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
    .map((post) => getLocalizedBlogPost(post.slug, locale)!);
}

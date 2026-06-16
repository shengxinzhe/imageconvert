import type { AppLocale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import {
  getLocalizedBlogPost,
  getLocalizedBlogPostsNewestFirst,
  hasBlogTranslation,
} from "@/lib/blog-l10n";
import type { BlogPost } from "@/lib/blog-posts";
import type { ToolSlug } from "@/lib/tools-config";

/** Topic clusters for related-post internal links (indexing / crawl paths). */
export const BLOG_CLUSTERS = {
  heic: [
    "heic-windows-11-uk",
    "heic-windows-10-not-showing",
    "iphone-photos-pc-without-heic",
    "heic-iphone-photos-windows-us",
    "what-is-heic-file",
    "why-iphone-uses-heic",
    "heic-vs-jpg",
    "heic-windows-guide",
    "heic-mac-guide",
    "best-heic-converters-2026",
    "transfer-iphone-photos-to-windows",
    "heic-live-photo-guide",
    "heic-to-png-when-and-how",
    "heic-google-drive-batch-convert",
    "heic-chromebook-convert",
    "heic-android-open-convert",
    "heic-color-washed-out-after-convert",
    "heicsave-vs-browser-heic-converters",
    "heic-outlook-email-attachment",
    "heic-premiere-pro-import",
    "heic-wont-open-in-photoshop",
    "batch-heic-to-jpg-workflow",
    "disable-heic-iphone-jpg",
  ],
  webp: ["webp-vs-jpg", "webp-for-developers", "convert-webp-to-jpg-windows"],
  avif: [
    "avif-explained",
    "convert-avif-to-jpg-windows",
    "avif-thumbnails-not-showing-windows-explorer",
  ],
  privacy: ["privacy-browser-image-conversion"],
} as const satisfies Record<string, readonly string[]>;

export const BLOG_TOPICS = ["heic", "webp", "avif", "privacy"] as const;
export type BlogTopic = (typeof BLOG_TOPICS)[number];

const SLUG_TO_CLUSTER = new Map<string, string>();
for (const [cluster, slugs] of Object.entries(BLOG_CLUSTERS)) {
  for (const slug of slugs) {
    SLUG_TO_CLUSTER.set(slug, cluster);
  }
}

/** Primary converter CTA per article (HTML footer + crawl path to money pages). */
export const blogPrimaryTool: Partial<Record<string, ToolSlug>> = {
  "heic-windows-11-uk": "heic-to-jpg",
  "heic-windows-10-not-showing": "heic-to-jpg",
  "iphone-photos-pc-without-heic": "heic-to-jpg",
  "heic-iphone-photos-windows-us": "heic-to-jpg",
  "what-is-heic-file": "heic-to-jpg",
  "why-iphone-uses-heic": "heic-to-jpg",
  "heic-vs-jpg": "heic-to-jpg",
  "heic-windows-guide": "heic-to-jpg",
  "heic-mac-guide": "heic-to-jpg",
  "best-heic-converters-2026": "heic-to-jpg",
  "transfer-iphone-photos-to-windows": "heic-to-jpg",
  "heic-live-photo-guide": "heic-to-png",
  "heic-to-png-when-and-how": "heic-to-png",
  "heic-google-drive-batch-convert": "heic-to-jpg",
  "heic-chromebook-convert": "heic-to-jpg",
  "heic-android-open-convert": "heic-to-jpg",
  "heic-color-washed-out-after-convert": "heic-to-jpg",
  "heicsave-vs-browser-heic-converters": "heic-to-jpg",
  "heic-outlook-email-attachment": "heic-to-jpg",
  "heic-premiere-pro-import": "heic-to-jpg",
  "heic-wont-open-in-photoshop": "heic-to-jpg",
  "batch-heic-to-jpg-workflow": "heic-to-jpg",
  "disable-heic-iphone-jpg": "heic-to-jpg",
  "avif-explained": "avif-to-jpg",
  "convert-avif-to-jpg-windows": "avif-to-jpg",
  "avif-thumbnails-not-showing-windows-explorer": "avif-to-jpg",
  "webp-vs-jpg": "webp-to-jpg",
  "webp-for-developers": "jpg-to-webp",
  "convert-webp-to-jpg-windows": "webp-to-jpg",
  "privacy-browser-image-conversion": "heic-to-jpg",
};

/** High-value guides linked from every locale footer. */
export const footerGuideSlugs = [
  "what-is-heic-file",
  "batch-heic-to-jpg-workflow",
  "transfer-iphone-photos-to-windows",
  "heic-windows-guide",
  "privacy-browser-image-conversion",
] as const;

export function getRelatedBlogPosts(
  slug: string,
  locale: AppLocale,
  limit = 3
): BlogPost[] {
  const cluster = SLUG_TO_CLUSTER.get(slug) as BlogTopic | undefined;
  const candidates = cluster
    ? [...BLOG_CLUSTERS[cluster]]
    : [...BLOG_CLUSTERS.heic, ...BLOG_CLUSTERS.webp, ...BLOG_CLUSTERS.avif];

  const related: BlogPost[] = [];
  for (const candidate of candidates) {
    if (candidate === slug) continue;
    if (
      locale !== routing.defaultLocale &&
      !hasBlogTranslation(candidate, locale)
    ) {
      continue;
    }
    const post = getLocalizedBlogPost(candidate, locale);
    if (post) related.push(post);
    if (related.length >= limit) break;
  }
  return related;
}

export function getBlogPostsByTopic(topic: BlogTopic, locale: AppLocale): BlogPost[] {
  const posts: BlogPost[] = [];
  for (const slug of BLOG_CLUSTERS[topic]) {
    if (locale !== routing.defaultLocale && !hasBlogTranslation(slug, locale)) {
      continue;
    }
    const post = getLocalizedBlogPost(slug, locale);
    if (post) posts.push(post);
  }
  return posts;
}

export function getUncategorizedBlogPosts(locale: AppLocale): BlogPost[] {
  const categorized = new Set<string>(Object.values(BLOG_CLUSTERS).flat());
  return getLocalizedBlogPostsNewestFirst(locale).filter((post) => !categorized.has(post.slug));
}

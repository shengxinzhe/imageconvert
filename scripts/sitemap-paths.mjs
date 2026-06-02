/**
 * Shared URL paths for sitemap, IndexNow, and search-engine pings.
 * Keep in sync with next-sitemap.config.js lists.
 */
export const LOCALES = ["en", "de", "fr"];
export const DEFAULT_LOCALE = "en";

export const STATIC_PAGES = ["/about", "/contact", "/privacy", "/terms", "/dmca", "/blog"];

export const TOOL_SLUGS = [
  "heic-to-jpg",
  "heic-to-png",
  "heic-to-webp",
  "webp-to-png",
  "webp-to-jpg",
  "avif-to-jpg",
  "avif-to-png",
  "jpg-to-webp",
  "png-to-webp",
];

export const BLOG_SLUGS = [
  "what-is-heic-file",
  "why-iphone-uses-heic",
  "heic-vs-jpg",
  "heic-windows-guide",
  "heic-mac-guide",
  "best-heic-converters-2026",
  "avif-explained",
  "convert-avif-to-jpg-windows",
  "webp-vs-jpg",
  "webp-for-developers",
  "privacy-browser-image-conversion",
  "transfer-iphone-photos-to-windows",
  "heic-live-photo-guide",
  "convert-webp-to-jpg-windows",
  "heic-to-png-when-and-how",
  "heic-google-drive-batch-convert",
  "heic-chromebook-convert",
  "heic-android-open-convert",
  "heic-color-washed-out-after-convert",
  "heicsave-vs-browser-heic-converters",
  "heic-outlook-email-attachment",
  "heic-premiere-pro-import",
];

/** All de/fr blog slugs with real translations (sync with blog-l10n/de.ts keys). */
export const BLOG_SLUGS_L10N = BLOG_SLUGS;

export function localePath(path, locale) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (locale === DEFAULT_LOCALE) return normalized;
  return `/${locale}${normalized === "/" ? "" : normalized}`;
}

/** Every public path we want IndexNow / manual pings to cover. */
export function getIndexNowPaths() {
  const paths = new Set();

  for (const locale of LOCALES) {
    paths.add(localePath("/", locale));
    for (const page of STATIC_PAGES) {
      paths.add(localePath(page, locale));
    }
    for (const slug of TOOL_SLUGS) {
      paths.add(localePath(`/${slug}`, locale));
    }
    if (locale === DEFAULT_LOCALE) {
      for (const slug of BLOG_SLUGS) {
        paths.add(localePath(`/blog/${slug}`, DEFAULT_LOCALE));
      }
    } else {
      for (const slug of BLOG_SLUGS_L10N) {
        paths.add(localePath(`/blog/${slug}`, locale));
      }
    }
  }

  return [...paths].sort();
}

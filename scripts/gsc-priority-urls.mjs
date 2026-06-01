/**
 * Priority URLs for Google indexing requests and IndexNow after deploy.
 * Keep in sync with next-sitemap.config.js tool/blog lists.
 */
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://heicsave.com").replace(
  /\/$/,
  ""
);

const PATHS = [
  "/",
  "/about",
  "/contact",
  "/blog",
  "/heic-to-jpg",
  "/de/heic-to-jpg",
  "/fr/heic-to-jpg",
  "/heic-to-webp",
  "/webp-to-jpg",
  "/de/webp-to-jpg",
  "/fr/webp-to-jpg",
  "/blog/what-is-heic-file",
  "/blog/transfer-iphone-photos-to-windows",
  "/blog/privacy-browser-image-conversion",
  "/blog/heic-chromebook-convert",
  "/blog/heic-android-open-convert",
  "/blog/heic-color-washed-out-after-convert",
  "/blog/heicsave-vs-browser-heic-converters",
  "/blog/heic-outlook-email-attachment",
  "/de/about",
  "/de/contact",
  "/de/blog",
  "/de/blog/what-is-heic-file",
  "/de/blog/transfer-iphone-photos-to-windows",
  "/de/blog/privacy-browser-image-conversion",
  "/de/blog/heic-chromebook-convert",
  "/de/blog/heic-android-open-convert",
  "/de/blog/heic-color-washed-out-after-convert",
  "/de/blog/heicsave-vs-browser-heic-converters",
  "/de/blog/heic-outlook-email-attachment",
  "/fr/about",
  "/fr/contact",
  "/fr/blog",
  "/fr/blog/what-is-heic-file",
  "/fr/blog/transfer-iphone-photos-to-windows",
  "/fr/blog/privacy-browser-image-conversion",
  "/fr/blog/heic-chromebook-convert",
  "/fr/blog/heic-android-open-convert",
  "/fr/blog/heic-color-washed-out-after-convert",
  "/fr/blog/heicsave-vs-browser-heic-converters",
  "/fr/blog/heic-outlook-email-attachment",
];

export const PRIORITY_URLS = PATHS.map((p) => `${SITE_URL}${p}`);

/** @type {import('next-sitemap').IConfig} */
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://heicsave.com";

const LOCALES = ["en", "de", "fr"];
const DEFAULT_LOCALE = "en";

const EXCLUDED_PATHS = new Set([
  "/icon.png",
  "/apple-icon.png",
  "/opengraph-image.png",
]);

const TOOL_SLUGS = [
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

function localePath(path, locale) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (locale === DEFAULT_LOCALE) return normalized;
  return `/${locale}${normalized === "/" ? "" : normalized}`;
}

const TOOL_PATHS = new Set(TOOL_SLUGS.map((slug) => localePath(`/${slug}`, DEFAULT_LOCALE)));

const BLOG_SLUGS = [
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

/** de/fr blog slugs with real translations — sync with src/lib/blog-l10n/de.ts / fr.ts keys */
const BLOG_SLUGS_DE_L10N = new Set(
  BLOG_SLUGS.filter(
    (s) =>
      s !== "heic-windows-11-uk" && s !== "heic-iphone-photos-windows-us"
  )
);
const BLOG_SLUGS_FR_L10N = new Set(
  BLOG_SLUGS.filter(
    (s) =>
      s !== "heic-windows-11-uk" && s !== "heic-iphone-photos-windows-us"
  )
);

function isUntranslatedLocaleBlogPath(path) {
  if (path.startsWith("/de/blog/")) {
    const slug = path.slice("/de/blog/".length).replace(/\/$/, "");
    return !BLOG_SLUGS_DE_L10N.has(slug);
  }
  if (path.startsWith("/fr/blog/")) {
    const slug = path.slice("/fr/blog/".length).replace(/\/$/, "");
    return !BLOG_SLUGS_FR_L10N.has(slug);
  }
  return false;
}

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  // Next.js static routes use /en/... internally; middleware 301s them to unprefixed URLs.
  exclude: [...EXCLUDED_PATHS, "/en", "/en/*"],
  robotsTxtOptions: {
    // Expose child sitemap in robots.txt for Bing; do NOT use additionalSitemaps
    // (next-sitemap merges it into sitemap.xml index → duplicate sitemap-0 entry).
    includeNonIndexSitemaps: true,
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/icon.png", "/apple-icon.png", "/opengraph-image.png"],
      },
      // Explicit Allow for AI crawlers (GEO / llms.txt discoverability)
      ...[
        "GPTBot",
        "ChatGPT-User",
        "OAI-SearchBot",
        "ClaudeBot",
        "anthropic-ai",
        "PerplexityBot",
        "Google-Extended",
        "Applebot-Extended",
        "Bytespider",
        "CCBot",
        "cohere-ai",
        "Meta-ExternalAgent",
        "FacebookBot",
      ].map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: ["/icon.png", "/apple-icon.png", "/opengraph-image.png"],
      })),
    ],
  },
  transform: async (config, path) => {
    if (
      EXCLUDED_PATHS.has(path) ||
      path === "/en" ||
      path.startsWith("/en/") ||
      isUntranslatedLocaleBlogPath(path)
    ) {
      return null;
    }

    let priority = config.priority;
    let changefreq = config.changefreq;

    if (path === "/" || path === "/de" || path === "/fr") {
      priority = 0.85;
    } else if (
      path.endsWith("/heic-to-jpg") ||
      path === "/heic-to-jpg"
    ) {
      priority = 1.0;
      changefreq = "daily";
    } else if (
      TOOL_SLUGS.some((slug) => path.endsWith(`/${slug}`) || path === `/${slug}`)
    ) {
      priority = 0.9;
    } else if (path.includes("/blog/")) {
      priority = 0.6;
      changefreq = "monthly";
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
  additionalPaths: async () => {
    const staticPages = ["/about", "/contact", "/privacy", "/terms", "/dmca", "/blog", "/tools"];
    const now = new Date().toISOString();
    const entries = [];

    for (const locale of LOCALES) {
      const home = localePath("/", locale);
      entries.push({
        loc: home,
        changefreq: "weekly",
        priority: 0.85,
        lastmod: now,
      });

      for (const page of staticPages) {
        entries.push({
          loc: localePath(page, locale),
          changefreq: "monthly",
          priority: page === "/contact" ? 0.5 : 0.7,
          lastmod: now,
        });
      }

      for (const slug of TOOL_SLUGS) {
        const loc = localePath(`/${slug}`, locale);
        entries.push({
          loc,
          changefreq: slug === "heic-to-jpg" ? "daily" : "weekly",
          priority: slug === "heic-to-jpg" ? 1.0 : 0.9,
          lastmod: now,
        });
      }

      if (locale === DEFAULT_LOCALE) {
        for (const slug of BLOG_SLUGS) {
          entries.push({
            loc: localePath(`/blog/${slug}`, DEFAULT_LOCALE),
            changefreq: "monthly",
            priority: 0.6,
            lastmod: now,
          });
        }
      } else {
        const l10nSlugs =
          locale === "de" ? BLOG_SLUGS_DE_L10N : BLOG_SLUGS_FR_L10N;
        for (const slug of l10nSlugs) {
          entries.push({
            loc: localePath(`/blog/${slug}`, locale),
            changefreq: "monthly",
            priority: 0.65,
            lastmod: now,
          });
        }
      }
    }

    return entries;
  },
};

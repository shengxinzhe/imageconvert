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
  "what-is-heic-file",
  "why-iphone-uses-heic",
  "heic-vs-jpg",
  "heic-windows-guide",
  "heic-mac-guide",
  "best-heic-converters-2026",
  "avif-explained",
  "webp-vs-jpg",
  "webp-for-developers",
  "privacy-browser-image-conversion",
];

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  exclude: [...EXCLUDED_PATHS],
  robotsTxtOptions: {
    additionalSitemaps: [],
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/icon.png", "/apple-icon.png", "/opengraph-image.png"],
      },
    ],
  },
  transform: async (config, path) => {
    if (EXCLUDED_PATHS.has(path)) {
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
    const staticPages = ["/about", "/contact", "/privacy", "/terms", "/dmca", "/blog"];
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

      for (const slug of BLOG_SLUGS) {
        entries.push({
          loc: localePath(`/blog/${slug}`, locale),
          changefreq: "monthly",
          priority: 0.6,
          lastmod: now,
        });
      }
    }

    return entries;
  },
};

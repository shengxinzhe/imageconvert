/** @type {import('next-sitemap').IConfig} */
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://heicsave.com";

/** Single source of truth — keep in sync with scripts/sitemap-paths.mjs only there. */
const slugDataPromise = import("./scripts/sitemap-paths.mjs");

const EXCLUDED_PATHS = new Set([
  "/icon.png",
  "/apple-icon.png",
  "/opengraph-image.png",
]);

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  // Next.js static routes use /en/... internally; middleware 301s them to unprefixed URLs.
  exclude: [...EXCLUDED_PATHS, "/en", "/en/*"],
  robotsTxtOptions: {
    includeNonIndexSitemaps: true,
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/icon.png", "/apple-icon.png", "/opengraph-image.png"],
      },
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
    const { BLOG_SLUGS_DE_L10N, BLOG_SLUGS_FR_L10N, TOOL_SLUGS } =
      await slugDataPromise;

    if (
      EXCLUDED_PATHS.has(path) ||
      path === "/en" ||
      path.startsWith("/en/") ||
      (path.startsWith("/de/blog/") &&
        !BLOG_SLUGS_DE_L10N.includes(
          path.slice("/de/blog/".length).replace(/\/$/, ""),
        )) ||
      (path.startsWith("/fr/blog/") &&
        !BLOG_SLUGS_FR_L10N.includes(
          path.slice("/fr/blog/".length).replace(/\/$/, ""),
        ))
    ) {
      return null;
    }

    let priority = config.priority;
    let changefreq = config.changefreq;

    if (path === "/" || path === "/de" || path === "/fr") {
      priority = 0.85;
    } else if (path.endsWith("/heic-to-jpg") || path === "/heic-to-jpg") {
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
    const {
      LOCALES,
      DEFAULT_LOCALE,
      STATIC_PAGES,
      TOOL_SLUGS,
      BLOG_SLUGS,
      BLOG_SLUGS_DE_L10N,
      BLOG_SLUGS_FR_L10N,
      localePath,
    } = await slugDataPromise;

    const staticPages = [...STATIC_PAGES, "/tools"];
    const now = new Date().toISOString();
    const entries = [];

    for (const locale of LOCALES) {
      entries.push({
        loc: localePath("/", locale),
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
        entries.push({
          loc: localePath(`/${slug}`, locale),
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

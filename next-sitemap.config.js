/** @type {import('next-sitemap').IConfig} */
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://heicsave.com";

const EXCLUDED_PATHS = new Set([
  "/icon.png",
  "/apple-icon.png",
  "/opengraph-image.png",
]);

const TOOL_PATHS = new Set([
  "/heic-to-jpg",
  "/heic-to-png",
  "/webp-to-png",
  "/webp-to-jpg",
  "/avif-to-jpg",
  "/avif-to-png",
  "/jpg-to-webp",
  "/png-to-webp",
]);

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

    if (path === "/") {
      priority = 0.85;
    } else if (path === "/heic-to-jpg") {
      priority = 1.0;
      changefreq = "daily";
    } else if (TOOL_PATHS.has(path)) {
      priority = 0.9;
    } else if (path.startsWith("/blog/")) {
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
    const tools = [...TOOL_PATHS];
    const blogs = [
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
    const now = new Date().toISOString();

    return [
      ...tools.map((path) => ({
        loc: path,
        changefreq: path === "/heic-to-jpg" ? "daily" : "weekly",
        priority: path === "/heic-to-jpg" ? 1.0 : 0.9,
        lastmod: now,
      })),
      ...blogs.map((slug) => ({
        loc: `/blog/${slug}`,
        changefreq: "monthly",
        priority: 0.6,
        lastmod: now,
      })),
    ];
  },
};

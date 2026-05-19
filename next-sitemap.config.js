/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://imageconvert.io",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  exclude: [],
  additionalPaths: async (config) => {
    const tools = [
      "/heic-to-jpg",
      "/heic-to-png",
      "/webp-to-png",
      "/webp-to-jpg",
      "/avif-to-jpg",
      "/avif-to-png",
      "/jpg-to-webp",
      "/png-to-webp",
    ];
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
    return [
      ...tools.map((path) => ({
        loc: path,
        changefreq: "weekly",
        priority: 0.9,
        lastmod: new Date().toISOString(),
      })),
      ...blogs.map((slug) => ({
        loc: `/blog/${slug}`,
        changefreq: "monthly",
        priority: 0.6,
        lastmod: new Date().toISOString(),
      })),
    ];
  },
};

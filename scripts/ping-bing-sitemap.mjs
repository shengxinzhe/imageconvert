/**
 * Ping Bing Webmaster that sitemap index and child sitemap changed.
 * Skips when BING_SITEMAP_SKIP=1.
 */
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://heicsave.com").replace(
  /\/$/,
  ""
);

const SITEMAPS = [`${SITE_URL}/sitemap.xml`, `${SITE_URL}/sitemap-0.xml`];

async function pingOne(sitemapUrl) {
  const pingUrl = `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;
  const res = await fetch(pingUrl, { method: "GET" });
  if (res.ok) {
    console.log(`Bing sitemap ping: OK (${res.status}) ${sitemapUrl}`);
    return true;
  }
  console.warn(`Bing sitemap ping: failed (${res.status}) ${sitemapUrl}`);
  return false;
}

async function main() {
  if (process.env.BING_SITEMAP_SKIP === "1") {
    console.log("Bing sitemap ping: skipped (BING_SITEMAP_SKIP=1)");
    return;
  }

  await Promise.all(SITEMAPS.map(pingOne));
}

main().catch((err) => {
  console.warn("Bing sitemap ping:", err.message);
});

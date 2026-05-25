/**
 * Notify Google that sitemap.xml changed (legacy ping endpoint).
 * Skips when GOOGLE_SITEMAP_SKIP=1.
 */
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://heicsave.com").replace(
  /\/$/,
  ""
);
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;

async function main() {
  if (process.env.GOOGLE_SITEMAP_SKIP === "1") {
    console.log("Google sitemap ping: skipped (GOOGLE_SITEMAP_SKIP=1)");
    return;
  }

  const pingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`;
  const res = await fetch(pingUrl, { method: "GET" });

  if (res.ok) {
    console.log(`Google sitemap ping: OK (${res.status}) ${SITEMAP_URL}`);
    return;
  }

  console.warn(`Google sitemap ping: failed (${res.status})`);
}

main().catch((err) => {
  console.warn("Google sitemap ping:", err.message);
});

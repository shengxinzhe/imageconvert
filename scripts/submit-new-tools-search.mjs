/**
 * Submit batch-1 utility tool URLs to Bing (IndexNow) and ping Google/Bing sitemaps.
 * Google has no public per-URL ping API — prints GSC manual checklist.
 *
 * Usage: npm run submit:new-tools
 */
const KEY =
  process.env.INDEXNOW_KEY || "7c4e9a2b8f1d3e6a9c0b5d8e2f4a1b6c";
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://heicsave.com").replace(
  /\/$/,
  "",
);
const HOST = new URL(SITE_URL).host;

import { getNewToolIndexUrls } from "./sitemap-paths.mjs";

async function submitIndexNow(urlList) {
  const body = {
    host: HOST,
    key: KEY,
    keyLocation: `${SITE_URL}/${KEY}.txt`,
    urlList,
  };

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });

  if (res.ok || res.status === 202) {
    console.log(`IndexNow (Bing/Yandex): ${urlList.length} tool URLs (${res.status})`);
    return true;
  }
  const text = await res.text().catch(() => "");
  console.error(`IndexNow failed (${res.status})${text ? `: ${text.slice(0, 200)}` : ""}`);
  return false;
}

async function pingGoogleSitemap() {
  try {
    const sitemapUrl = `${SITE_URL}/sitemap.xml`;
    const pingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;
    const res = await fetch(pingUrl, { method: "GET" });
    if (res.ok) {
      console.log(`Google sitemap ping: OK (${res.status}) ${sitemapUrl}`);
      return true;
    }
    console.warn(`Google sitemap ping: failed (${res.status})`);
  } catch (err) {
    console.warn(`Google sitemap ping: ${err.message}`);
  }
  return false;
}

async function pingBingSitemap() {
  const sitemaps = [`${SITE_URL}/sitemap.xml`, `${SITE_URL}/sitemap-0.xml`];
  let ok = true;
  for (const sitemapUrl of sitemaps) {
    try {
      const pingUrl = `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;
      const res = await fetch(pingUrl, { method: "GET" });
      if (res.ok) {
        console.log(`Bing sitemap ping: OK (${res.status}) ${sitemapUrl}`);
      } else {
        console.warn(`Bing sitemap ping: failed (${res.status}) ${sitemapUrl}`);
        ok = false;
      }
    } catch (err) {
      console.warn(`Bing sitemap ping: ${err.message} ${sitemapUrl}`);
      ok = false;
    }
  }
  return ok;
}

async function main() {
  const toolUrls = getNewToolIndexUrls(SITE_URL);
  console.log(`New tool URLs (${toolUrls.length}):\n`);
  for (const url of toolUrls) {
    console.log(`  ${url}`);
  }
  console.log("");

  const indexNowOk = await submitIndexNow(toolUrls);
  await pingGoogleSitemap();
  await pingBingSitemap();

  console.log("\n--- Google Search Console (manual, ~12 URLs) ---");
  console.log("https://search.google.com/search-console → URL 检查 → 请求编入索引:\n");
  for (const url of toolUrls) {
    console.log(url);
  }

  if (!indexNowOk) process.exitCode = 1;
}

main().catch((err) => {
  console.error(err.message);
  process.exitCode = 1;
});

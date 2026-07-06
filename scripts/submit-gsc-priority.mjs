/**
 * Fix path: IndexNow priority URLs + print GSC manual checklist.
 * Use after sitemap regen when pages show "Discovered - not indexed".
 *
 * Usage: npm run submit:gsc-priority
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const KEY =
  process.env.INDEXNOW_KEY || "7c4e9a2b8f1d3e6a9c0b5d8e2f4a1b6c";
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://heicsave.com").replace(
  /\/$/,
  "",
);
const HOST = new URL(SITE_URL).host;

const __dirname = dirname(fileURLToPath(import.meta.url));
const priorityUrls = JSON.parse(
  readFileSync(join(__dirname, "gsc-priority-unindexed.json"), "utf8"),
);

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
    console.log(`IndexNow (Bing/Yandex): ${urlList.length} URLs (${res.status})`);
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
      console.log(`Google sitemap ping: OK (${res.status})`);
      return true;
    }
    console.warn(`Google sitemap ping: failed (${res.status})`);
  } catch (err) {
    console.warn(`Google sitemap ping: ${err.message}`);
  }
  return false;
}

async function main() {
  console.log(`Priority unindexed URLs (${priorityUrls.length}):\n`);
  for (const url of priorityUrls) {
    console.log(`  ${url}`);
  }
  console.log("");

  const indexNowOk = await submitIndexNow(priorityUrls);
  await pingGoogleSitemap();

  console.log("\n--- Google Search Console (manual) ---");
  console.log("1. https://search.google.com/search-console");
  console.log("2. 站点地图 → 重新抓取 https://heicsave.com/sitemap.xml");
  console.log("3. 网址检查 → 粘贴 URL → 测试实际网址 → 请求编入索引");
  console.log("   (每天约 10–12 条，勿重复狂点同一 URL)\n");
  for (const url of priorityUrls) {
    console.log(url);
  }

  if (!indexNowOk) process.exitCode = 1;
}

main().catch((err) => {
  console.error(err.message);
  process.exitCode = 1;
});

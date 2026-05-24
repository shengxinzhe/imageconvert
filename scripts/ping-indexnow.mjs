/**
 * Notify Bing/Yandex of recently updated URLs via IndexNow.
 * Skips when INDEXNOW_SKIP=1.
 */
const KEY = "7c4e9a2b8f1d3e6a9c0b5d8e2f4a1b6c";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://heicsave.com";
const HOST = new URL(SITE_URL).host;

const PRIORITY_PATHS = [
  "/",
  "/heic-to-jpg",
  "/heic-to-webp",
  "/blog/heic-google-drive-batch-convert",
  "/blog/convert-webp-to-jpg-windows",
  "/blog/heic-to-png-when-and-how",
  "/de/blog/heic-google-drive-batch-convert",
  "/fr/blog/heic-google-drive-batch-convert",
];

async function main() {
  if (process.env.INDEXNOW_SKIP === "1") {
    console.log("IndexNow: skipped (INDEXNOW_SKIP=1)");
    return;
  }

  const urlList = PRIORITY_PATHS.map((p) => `${SITE_URL.replace(/\/$/, "")}${p}`);

  const body = {
    host: HOST,
    key: KEY,
    keyLocation: `${SITE_URL.replace(/\/$/, "")}/${KEY}.txt`,
    urlList,
  };

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });

  if (res.ok || res.status === 202) {
    console.log(`IndexNow: submitted ${urlList.length} URLs (${res.status})`);
    return;
  }

  console.warn(`IndexNow: ping failed (${res.status})`);
}

main().catch((err) => {
  console.warn("IndexNow:", err.message);
});

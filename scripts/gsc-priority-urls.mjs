/**
 * Priority URLs for Google indexing requests and IndexNow after deploy.
 * Generated from scripts/sitemap-paths.mjs — keep lists in sync with next-sitemap.config.js.
 */
import { getIndexNowPaths } from "./sitemap-paths.mjs";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://heicsave.com").replace(
  /\/$/,
  ""
);

export const PRIORITY_URLS = getIndexNowPaths().map((p) => `${SITE_URL}${p}`);

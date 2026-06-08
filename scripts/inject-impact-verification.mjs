/**
 * impact.com requires verification meta as the first tag inside <head>.
 * Next.js injects charset/viewport/scripts first — patch prerendered HTML after build.
 * UUID must match src/lib/constants.ts IMPACT_SITE_VERIFICATION.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const UUID = "e0cf3e41-ceb9-4a55-b3f3-765b2cb45c55";
const IMPACT_TEXT = `Impact-Site-Verification: ${UUID}`;
const IMPACT_SNIPPET = `<meta name='impact-site-verification' value='${UUID}'>`;
const IMPACT_COMMENT = `<!-- ${IMPACT_TEXT} -->`;
const IMPACT_BODY = `<p>${IMPACT_TEXT}</p>`;
const IMPACT_REGEX = /<meta\s+name=['"]impact-site-verification['"][^>]*\/?>/gi;
const IMPACT_COMMENT_REGEX = /<!--\s*Impact-Site-Verification:[^>]*-->/gi;
const IMPACT_BODY_REGEX = /<p>\s*Impact-Site-Verification:\s*[^<]+\s*<\/p>/gi;

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const appDir = path.join(root, ".next", "server", "app");

function walkHtmlFiles(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkHtmlFiles(full, out);
    else if (entry.name.endsWith(".html")) out.push(full);
  }
  return out;
}

let patched = 0;

for (const file of walkHtmlFiles(appDir)) {
  let html = fs.readFileSync(file, "utf8");
  if (!html.includes("</head>")) continue;

  let cleaned = html
    .replace(IMPACT_REGEX, "")
    .replace(IMPACT_COMMENT_REGEX, "")
    .replace(IMPACT_BODY_REGEX, "");

  let updated = cleaned.replace(
    /<head([^>]*)>/i,
    `<head$1>${IMPACT_SNIPPET}${IMPACT_COMMENT}`
  );

  if (path.basename(file) === "en.html") {
    updated = updated.replace(/<body([^>]*)>/i, `<body$1>${IMPACT_BODY}`);
  }

  if (updated === html) continue;

  fs.writeFileSync(file, updated);
  patched += 1;
}

console.log(`Impact verification: patched ${patched} HTML file(s).`);

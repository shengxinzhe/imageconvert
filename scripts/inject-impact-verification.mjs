/**
 * impact.com requires verification meta as the first tag inside <head>.
 * Next.js injects charset/viewport/scripts first — patch prerendered HTML after build.
 * UUID must match src/lib/constants.ts IMPACT_SITE_VERIFICATION.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const UUID = "b4f6319b-3f90-4307-b1ad-476ab8478a38";
const IMPACT_META = `<meta name='impact-site-verification' value='${UUID}'>`;
const IMPACT_REGEX = /<meta\s+name=['"]impact-site-verification['"][^>]*\/?>/gi;

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

  const cleaned = html.replace(IMPACT_REGEX, "");
  const updated = cleaned.replace(/<head([^>]*)>/i, `<head$1>${IMPACT_META}`);
  if (updated === html) continue;

  fs.writeFileSync(file, updated);
  patched += 1;
}

console.log(`Impact verification: patched ${patched} HTML file(s).`);

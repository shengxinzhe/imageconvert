import sharp from "sharp";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(root, "public", "og.png");

const BRAND = "#0d9373";
const INK = "#171717";
const BODY = "#525252";
const MUTE = "#737373";
const BG = "#fafafa";

const svg = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="${BG}"/>
  <rect width="1200" height="8" fill="${BRAND}"/>
  <circle cx="1080" cy="120" r="180" fill="${BRAND}" opacity="0.08"/>
  <circle cx="100" cy="520" r="240" fill="${BRAND}" opacity="0.06"/>
  <text x="80" y="260" font-family="system-ui,Segoe UI,sans-serif" font-size="72" font-weight="700" fill="${INK}">HeicSave</text>
  <text x="80" y="340" font-family="system-ui,Segoe UI,sans-serif" font-size="36" fill="${BODY}">Free HEIC, WebP &amp; AVIF converters</text>
  <text x="80" y="400" font-family="system-ui,Segoe UI,sans-serif" font-size="26" fill="${MUTE}">Private · Browser-local · No upload</text>
  <text x="80" y="540" font-family="ui-monospace,monospace" font-size="22" fill="${BRAND}">heicsave.com</text>
</svg>
`;

await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(out);
console.log(`Wrote ${out}`);

import sharp from "sharp";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = join(root, "public");

const BRAND = "#0d9373";
const INK = "#171717";
const BODY = "#525252";
const MUTE = "#737373";
const BG = "#fafafa";

const ogSvg = `
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

function iconSvg(size) {
  const fontSize = Math.round(size * 0.44);
  const y = Math.round(size * 0.64);
  return `
<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${size}" height="${size}" rx="${Math.round(size * 0.2)}" fill="${BRAND}"/>
  <text x="50%" y="${y}" text-anchor="middle" font-family="system-ui,Segoe UI,sans-serif" font-size="${fontSize}" font-weight="700" fill="#ffffff">H</text>
</svg>
`;
}

async function writePng(svg, path, size) {
  const buffer = Buffer.from(svg);
  await sharp(buffer)
    .resize(size, size, { fit: "cover" })
    .png({ compressionLevel: 9 })
    .toFile(path);
  console.log(`Wrote ${path}`);
}

await sharp(Buffer.from(ogSvg))
  .png({ compressionLevel: 9 })
  .toFile(join(publicDir, "og.png"));
console.log(`Wrote ${join(publicDir, "og.png")}`);

await writePng(iconSvg(32), join(publicDir, "icon.png"), 32);
await writePng(iconSvg(180), join(publicDir, "apple-touch-icon.png"), 180);

await sharp(Buffer.from(iconSvg(32)))
  .resize(32, 32)
  .png()
  .toFile(join(publicDir, "favicon.ico"));
console.log(`Wrote ${join(publicDir, "favicon.ico")}`);

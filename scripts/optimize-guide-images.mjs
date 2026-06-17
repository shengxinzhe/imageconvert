/**
 * Resize + WebP guide screenshots for blog posts.
 * Usage: node scripts/optimize-guide-images.mjs
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const GUIDES_DIR = path.join(process.cwd(), "public", "guides");

/** @type {{ input: string; output: string; width: number; quality?: number }[]} */
const JOBS = [
  {
    input: "iphone-most-compatible-formats.webp",
    output: "iphone-most-compatible-formats.webp",
    width: 472,
    quality: 82,
  },
  {
    input: "windows-heif-codec.webp",
    output: "windows-heif-codec.webp",
    width: 960,
    quality: 82,
  },
  {
    input: "heicsave-dropzone-batch.webp",
    output: "heicsave-dropzone-batch.webp",
    width: 960,
    quality: 82,
  },
  {
    input: "usb-iphone-dcim-windows.webp",
    output: "usb-iphone-dcim-windows.webp",
    width: 960,
    quality: 82,
  },
];

for (const job of JOBS) {
  const src = path.join(GUIDES_DIR, job.input);
  const dest = path.join(GUIDES_DIR, job.output);
  const tmp = dest + ".tmp";

  await sharp(src)
    .rotate()
    .resize({ width: job.width, withoutEnlargement: true })
    .webp({ quality: job.quality ?? 82, effort: 6 })
    .toFile(tmp);

  fs.renameSync(tmp, dest);
  const { size } = fs.statSync(dest);
  const meta = await sharp(dest).metadata();
  console.log(
    `${job.output}: ${meta.width}x${meta.height}, ${Math.round(size / 1024)}KB`
  );
}

import sharp from "sharp";
import { readFileSync, unlinkSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const targets = [
  { path: "public/og.png", width: 1200, height: 630, maxKb: 120 },
  { path: "public/icon-512.png", width: 512, height: 512, maxKb: 80 },
  { path: "src/app/icon.png", width: 32, height: 32, maxKb: 5 },
  { path: "src/app/apple-icon.png", width: 180, height: 180, maxKb: 15 },
  { path: "src/app/opengraph-image.png", width: 1200, height: 630, maxKb: 120 },
];

function sizeKb(bytes) {
  return bytes / 1024;
}

async function writeOptimized(file, buffer) {
  const tmp = `${file}.tmp`;
  await sharp(buffer).toFile(tmp);
  unlinkSync(file);
  await sharp(tmp).toFile(file);
  unlinkSync(tmp);
}

async function compressOne({ path, width, height, maxKb }) {
  const file = join(root, path);
  const before = readFileSync(file).length;

  let quality = 82;
  let buffer = await sharp(file)
    .resize(width, height, { fit: "cover", position: "centre" })
    .jpeg({ quality, mozjpeg: true })
    .toBuffer();

  while (sizeKb(buffer.length) > maxKb && quality > 50) {
    quality -= 6;
    buffer = await sharp(file)
      .resize(width, height, { fit: "cover", position: "centre" })
      .jpeg({ quality, mozjpeg: true })
      .toBuffer();
  }

  const pngBuffer = await sharp(buffer)
    .png({ compressionLevel: 9, palette: true, colors: 128 })
    .toBuffer();

  await writeOptimized(file, pngBuffer);

  const after = readFileSync(file).length;
  console.log(
    `${path}: ${sizeKb(before).toFixed(1)} KB → ${sizeKb(after).toFixed(1)} KB (jpeg q${quality})`,
  );
}

for (const t of targets) {
  await compressOne(t);
}

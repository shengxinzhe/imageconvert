import sharp from "sharp";
import { readFileSync, unlinkSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const targets = [
  { path: "public/og.png", width: 1200, height: 630, palette: true },
  { path: "public/icon-512.png", width: 512, height: 512, palette: true },
  { path: "src/app/icon.png", width: 32, height: 32, palette: true },
  { path: "src/app/apple-icon.png", width: 180, height: 180, palette: true },
  { path: "src/app/opengraph-image.png", width: 1200, height: 630, palette: true },
];

function sizeKb(bytes) {
  return (bytes / 1024).toFixed(1);
}

for (const t of targets) {
  const file = join(root, t.path);
  const before = readFileSync(file).length;
  const tmp = `${file}.tmp`;

  await sharp(file)
    .resize(t.width, t.height, { fit: "cover", position: "centre" })
    .png({
      compressionLevel: 9,
      palette: t.palette,
      colors: t.palette ? 128 : undefined,
    })
    .toFile(tmp);

  unlinkSync(file);
  await sharp(tmp).toFile(file);
  unlinkSync(tmp);

  const after = readFileSync(file).length;
  console.log(`${t.path}: ${sizeKb(before)} KB → ${sizeKb(after)} KB`);
}

import type { ConversionJobPayload } from "./conversion-types";
import { decodeHeic } from "./heic";

function outputMime(to: ConversionJobPayload["to"]): string {
  if (to === "png") return "image/png";
  if (to === "webp") return "image/webp";
  return "image/jpeg";
}

function scaledSize(
  width: number,
  height: number,
  maxWidth: number | null,
): { width: number; height: number } {
  if (!maxWidth || width <= maxWidth) return { width, height };
  const scale = maxWidth / width;
  return {
    width: maxWidth,
    height: Math.max(1, Math.round(height * scale)),
  };
}

async function bitmapToMime(
  bitmap: ImageBitmap,
  mimeType: string,
  quality: number,
  maxWidth: number | null,
): Promise<Blob> {
  const { width, height } = scaledSize(bitmap.width, bitmap.height, maxWidth);
  const canvas = new OffscreenCanvas(width, height);
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas not supported");

  if (mimeType === "image/jpeg") {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, width, height);
  }

  ctx.drawImage(bitmap, 0, 0, width, height);
  bitmap.close();

  return canvas.convertToBlob({
    type: mimeType,
    quality: mimeType === "image/png" ? undefined : quality,
  });
}

async function rasterToOutput(
  bitmap: ImageBitmap,
  to: ConversionJobPayload["to"],
  quality: number,
  maxWidth: number | null,
): Promise<Blob> {
  const mime = outputMime(to);
  return bitmapToMime(bitmap, mime, quality, maxWidth);
}

async function convertNonHeic(
  blob: Blob,
  to: ConversionJobPayload["to"],
  quality: number,
  maxWidth: number | null,
): Promise<Blob> {
  const bitmap = await createImageBitmap(blob);
  return rasterToOutput(bitmap, to, quality, maxWidth);
}

/** Runs entirely inside a Web Worker (OffscreenCanvas + heic-to/next). */
export async function runConversionJob(
  payload: ConversionJobPayload,
): Promise<{ buffer: ArrayBuffer; mimeType: string }> {
  const { buffer, from, to, quality, maxWidth } = payload;
  const source = new Blob([buffer]);
  let result: Blob;

  if (from === "heic") {
    if (to === "webp") {
      const jpeg = await decodeHeic(source, "image/jpeg", quality, maxWidth, true);
      const bitmap = await createImageBitmap(jpeg);
      result = await rasterToOutput(bitmap, "webp", quality, null);
    } else if (to === "png") {
      result = await decodeHeic(source, "image/png", quality, maxWidth, true);
    } else {
      result = await decodeHeic(source, "image/jpeg", quality, maxWidth, true);
    }
  } else {
    result = await convertNonHeic(source, to, quality, maxWidth);
  }

  const mimeType = result.type || outputMime(to);
  const outBuffer = await result.arrayBuffer();
  return { buffer: outBuffer, mimeType };
}

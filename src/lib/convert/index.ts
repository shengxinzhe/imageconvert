import { DEFAULT_JPEG_QUALITY, DEFAULT_WEBP_QUALITY } from "@/lib/constants";
import { canvasConvert } from "./canvas";
import { preserveExifOnJpeg } from "./exif";

export type InputFormat = "heic" | "webp" | "avif" | "jpg" | "jpeg" | "png";
export type OutputFormat = "jpg" | "jpeg" | "png" | "webp";

export interface ConvertOptions {
  from: InputFormat;
  to: OutputFormat;
  quality?: number;
}

function outputMime(to: OutputFormat): string {
  if (to === "png") return "image/png";
  if (to === "webp") return "image/webp";
  return "image/jpeg";
}

function outputExtension(to: OutputFormat): string {
  if (to === "jpeg") return "jpg";
  return to;
}

export function getOutputFilename(originalName: string, to: OutputFormat): string {
  const base = originalName.replace(/\.[^.]+$/, "");
  return `${base}.${outputExtension(to)}`;
}

export function outputSupportsQuality(to: OutputFormat): boolean {
  return to === "jpg" || to === "jpeg" || to === "webp";
}

export function defaultQualityPercent(to: OutputFormat): number {
  if (to === "webp") return Math.round(DEFAULT_WEBP_QUALITY * 100);
  if (to === "jpg" || to === "jpeg") return Math.round(DEFAULT_JPEG_QUALITY * 100);
  return 90;
}

export async function convertImage(
  file: File,
  options: ConvertOptions,
): Promise<Blob> {
  const { from, to } = options;
  const mime = outputMime(to);
  const quality =
    options.quality ??
    (mime === "image/webp" ? DEFAULT_WEBP_QUALITY : DEFAULT_JPEG_QUALITY);

  let blob: Blob;

  if (from === "heic") {
    const { convertHeic } = await import("./heic");
    if (to === "webp") {
      const jpeg = await convertHeic(file, "image/jpeg", quality);
      const jpegFile = new File([jpeg], file.name.replace(/\.heic$/i, ".jpg"), {
        type: "image/jpeg",
      });
      blob = await canvasConvert(jpegFile, "image/webp", quality);
    } else {
      blob = await convertHeic(
        file,
        to === "png" ? "image/png" : "image/jpeg",
        quality,
      );
    }
  } else {
    blob = await canvasConvert(file, mime, mime === "image/png" ? undefined : quality);
  }

  if (to === "jpg" || to === "jpeg") {
    return preserveExifOnJpeg(file, blob);
  }

  return blob;
}

export function acceptMimeForInput(from: InputFormat): string {
  const map: Record<InputFormat, string> = {
    heic: "image/heic,image/heif,.heic,.heif",
    webp: "image/webp,.webp",
    avif: "image/avif,.avif",
    jpg: "image/jpeg,.jpg,.jpeg",
    jpeg: "image/jpeg,.jpg,.jpeg",
    png: "image/png,.png",
  };
  return map[from];
}

import { DEFAULT_JPEG_QUALITY, DEFAULT_WEBP_QUALITY } from "@/lib/constants";
import { isIos } from "@/lib/platform";
import { canvasConvert } from "./canvas";
import { preserveExifOnJpeg } from "./exif";
import { decodeHeic } from "./heic";

export type { InputFormat, OutputFormat } from "./conversion-types";
import type { InputFormat, OutputFormat } from "./conversion-types";

export interface ConvertOptions {
  from: InputFormat;
  to: OutputFormat;
  quality?: number;
  /** Max output width in pixels; height scales proportionally. */
  maxWidth?: number | null;
  /** HEIC→JPG only. Default true. WebP/PNG ignore EXIF embedding. */
  preserveExif?: boolean;
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
  const { from, to, maxWidth = null, preserveExif = true } = options;
  const mime = outputMime(to);
  const quality =
    options.quality ??
    (mime === "image/webp" ? DEFAULT_WEBP_QUALITY : DEFAULT_JPEG_QUALITY);

  let blob: Blob;

  if (from === "heic") {
    if (to === "webp") {
      const jpeg = await decodeHeic(file, "image/jpeg", quality, maxWidth, false);
      const jpegFile = new File([jpeg], file.name.replace(/\.heic$/i, ".jpg"), {
        type: "image/jpeg",
      });
      blob = await canvasConvert(jpegFile, "image/webp", quality, null);
    } else {
      blob = await decodeHeic(
        file,
        to === "png" ? "image/png" : "image/jpeg",
        quality,
        maxWidth,
        false,
      );
    }
  } else {
    blob = await canvasConvert(
      file,
      mime,
      mime === "image/png" ? undefined : quality,
      maxWidth,
    );
  }

  if ((to === "jpg" || to === "jpeg") && from === "heic" && preserveExif) {
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

/** `accept` for `<input type="file">` — iOS Photos needs `image/*` to open the library. */
export function fileInputAccept(from: InputFormat): string {
  const specific = acceptMimeForInput(from);
  if (isIos()) return `image/*,${specific}`;
  return specific;
}

export function supportsExifToggle(from: InputFormat, to: OutputFormat): boolean {
  return from === "heic" && (to === "jpg" || to === "jpeg");
}

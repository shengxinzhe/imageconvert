import { DEFAULT_JPEG_QUALITY, DEFAULT_WEBP_QUALITY } from "@/lib/constants";
import { canvasConvert } from "./canvas";
import { decodeHeic } from "./heic";

export type { InputFormat, OutputFormat } from "./conversion-types";
export {
  acceptMimeForInput,
  defaultQualityPercent,
  fileInputAccept,
  getOutputFilename,
  outputSupportsQuality,
  supportsExifToggle,
} from "./format";
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
    const { preserveExifOnJpeg } = await import("./exif");
    return preserveExifOnJpeg(file, blob);
  }

  return blob;
}

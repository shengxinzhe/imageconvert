import type { AppLocale } from "@/i18n/routing";
import type { InputFormat } from "@/lib/convert";
import { getT } from "@/lib/i18n/translations";

export type ConversionErrorDisplay = {
  message: string;
  guideSlug?: string;
};

export class ConversionError extends Error {
  readonly display: ConversionErrorDisplay;

  constructor(display: ConversionErrorDisplay) {
    super(display.message);
    this.name = "ConversionError";
    this.display = display;
  }
}

function isMemoryError(message: string, error: unknown): boolean {
  if (error instanceof DOMException) {
    return (
      error.name === "QuotaExceededError" ||
      error.name === "AbortError" ||
      /memory/i.test(error.message)
    );
  }
  return /memory|allocation|heap|out of memory|aw snap/i.test(message);
}

export function formatConversionError(
  error: unknown,
  from: InputFormat,
  locale: AppLocale,
  fileName?: string,
): ConversionErrorDisplay {
  const t = getT(locale);
  const raw = error instanceof Error ? error.message : String(error);
  const message = raw.trim() || "Unknown error";
  const lower = message.toLowerCase();
  const fileLabel = fileName ? `"${fileName}"` : t("errors.thisFile");

  if (isMemoryError(message, error)) {
    return { message: t("errors.memory", { file: fileLabel }) };
  }

  if (
    lower.includes("canvas") ||
    lower.includes("failed to load image") ||
    lower.includes("decode")
  ) {
    if (from === "avif") {
      return {
        message: t("errors.decodeAvif", { file: fileLabel }),
        guideSlug: "convert-avif-to-jpg-windows",
      };
    }
    if (from === "webp") {
      return { message: t("errors.decodeWebp", { file: fileLabel }) };
    }
    return { message: t("errors.decodeGeneric", { file: fileLabel }) };
  }

  if (from === "heic" || lower.includes("heic") || lower.includes("heif")) {
    return {
      message: t("errors.heic", { file: fileLabel }),
      guideSlug: "heic-live-photo-guide",
    };
  }

  if (lower.includes("security") || lower.includes("tainted")) {
    return { message: t("errors.security", { file: fileLabel }) };
  }

  if (lower.includes("not supported") || lower.includes("wasm")) {
    return { message: t("errors.unsupported") };
  }

  return {
    message: t("errors.generic", {
      file: fileName ?? t("errors.theFile"),
      detail: message,
    }),
  };
}

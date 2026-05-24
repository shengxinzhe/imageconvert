declare module "heic-to" {
  export function heicTo(options: {
    blob: Blob;
    type: "image/jpeg" | "image/png" | "bitmap";
    quality?: number;
    options?: Record<string, unknown>;
  }): Promise<Blob>;

  export function isHeic(file: Blob): Promise<boolean>;
}

declare module "heic-to/next" {
  export { heicTo, isHeic } from "heic-to";
}

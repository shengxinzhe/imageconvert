declare module "piexifjs" {
  export const ImageIFD: Record<string, number>;
  export const ExifIFD: Record<string, number>;
  export function insert(
    exifBytes: Record<string, Record<number, unknown>>,
    dataUrl: string,
  ): string;
}

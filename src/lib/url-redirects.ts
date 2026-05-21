/**
 * Permanent redirects for common search URL variants → canonical tool/blog paths.
 * Paths are locale-neutral (no /de prefix); middleware applies the active locale.
 */
export const PATH_REDIRECTS: Record<string, string> = {
  "/heic-to-jpeg": "/heic-to-jpg",
  "/heic-to-jpg-online": "/heic-to-jpg",
  "/heic-to-jpeg-free": "/heic-to-jpg",
  "/avif-to-jpeg": "/avif-to-jpg",
  "/avif-to-jpg-online": "/avif-to-jpg",
  "/avif-to-jpeg-free": "/avif-to-jpg",
  "/webp-to-jpeg": "/webp-to-jpg",
  "/webp-to-jpg-online": "/webp-to-jpg",
  "/blog/avif-to-jpg-guide": "/blog/convert-avif-to-jpg-windows",
  "/blog/how-to-convert-avif-to-jpg": "/blog/convert-avif-to-jpg-windows",
};

export function resolvePathRedirect(pathname: string): string | undefined {
  return PATH_REDIRECTS[pathname];
}

/** HeicSave AdSense publisher ID (public in page source; override via env if needed). */
export const ADSENSE_CLIENT_ID_DEFAULT = "ca-pub-1364330416083360";

/** Google AdSense — override with NEXT_PUBLIC_ADSENSE_CLIENT_ID on Vercel if needed. */
export function getAdSenseClientId(): string | undefined {
  const id =
    process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID?.trim() ||
    ADSENSE_CLIENT_ID_DEFAULT;
  return id.startsWith("ca-pub-") ? id : undefined;
}

export function isAdSenseScriptEnabled(): boolean {
  return Boolean(getAdSenseClientId());
}

export function getAdSenseSlotId(position: "sidebar" | "in-content"): string | undefined {
  const raw =
    position === "sidebar"
      ? process.env.NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR
      : process.env.NEXT_PUBLIC_ADSENSE_SLOT_IN_CONTENT;
  const id = raw?.trim();
  return id || undefined;
}

export function hasAdSenseDisplayUnits(): boolean {
  return Boolean(
    getAdSenseClientId() &&
      getAdSenseSlotId("sidebar") &&
      getAdSenseSlotId("in-content"),
  );
}

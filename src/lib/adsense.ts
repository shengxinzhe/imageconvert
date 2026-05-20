/** Google AdSense — set NEXT_PUBLIC_ADSENSE_CLIENT_ID on Vercel after you create an account. */
export function getAdSenseClientId(): string | undefined {
  const id = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID?.trim();
  return id && id.startsWith("ca-pub-") ? id : undefined;
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

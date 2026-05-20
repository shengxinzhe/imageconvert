import { AdSenseAd } from "@/components/ads/adsense-ad";
import { getAdSenseSlotId, hasAdSenseDisplayUnits } from "@/lib/adsense";

export function AdSlot({ position }: { position: "sidebar" | "in-content" }) {
  const slotId = getAdSenseSlotId(position);

  if (!hasAdSenseDisplayUnits() || !slotId) {
    return null;
  }

  return (
    <AdSenseAd
      slotId={slotId}
      layout={position === "in-content" ? "in-article" : "display"}
    />
  );
}

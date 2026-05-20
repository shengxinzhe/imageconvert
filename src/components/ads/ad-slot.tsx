import { AdSenseAd } from "@/components/ads/adsense-ad";
import { getAdSenseSlotId, hasAdSenseDisplayUnits } from "@/lib/adsense";

export function AdSlot({ position }: { position: "sidebar" | "in-content" }) {
  const slotId = getAdSenseSlotId(position);

  if (hasAdSenseDisplayUnits() && slotId) {
    return (
      <AdSenseAd
        slotId={slotId}
        layout={position === "in-content" ? "in-article" : "display"}
      />
    );
  }

  return (
    <aside
      className="my-6 flex min-h-[90px] items-center justify-center rounded-vercel border border-dashed border-hairline bg-canvas-soft font-mono text-xs text-mute"
      data-ad-position={position}
      aria-hidden
    >
      Ad · {position}
    </aside>
  );
}

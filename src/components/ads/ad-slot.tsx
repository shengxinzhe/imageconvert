import { EzoicAd } from "@/components/ads/ezoic-ad";
import { getEzoicPlaceholderId, isEzoicEnabled } from "@/lib/ezoic";

export function AdSlot({ position }: { position: "sidebar" | "in-content" }) {
  if (isEzoicEnabled()) {
    return <EzoicAd id={getEzoicPlaceholderId(position)} />;
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

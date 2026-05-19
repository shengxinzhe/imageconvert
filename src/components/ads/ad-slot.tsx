/** Placeholder for AdSense — replace with your ad script after approval */
export function AdSlot({ position }: { position: "sidebar" | "in-content" }) {
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

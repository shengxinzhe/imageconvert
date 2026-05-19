/** Placeholder for AdSense / ad network — replace with your ad script after approval */
export function AdSlot({ position }: { position: "sidebar" | "in-content" }) {
  return (
    <aside
      className="my-6 flex min-h-[90px] items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 text-center text-xs text-slate-400 dark:border-slate-700 dark:bg-slate-900/50"
      data-ad-position={position}
      aria-hidden
    >
      Ad space ({position})
    </aside>
  );
}

export function ConverterSkeleton() {
  return (
    <div
      className="animate-pulse rounded-vercel-lg border-2 border-dashed border-hairline bg-canvas-soft px-4 py-10 text-center"
      aria-hidden
    >
      <div className="mx-auto h-10 w-10 rounded-full bg-hairline" />
      <div className="mx-auto mt-4 h-4 w-40 rounded bg-hairline" />
      <div className="mx-auto mt-2 h-3 w-56 max-w-full rounded bg-hairline" />
    </div>
  );
}

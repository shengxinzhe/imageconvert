import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";
import { toolList } from "@/lib/tools-config";
import { ImageIcon } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-40 h-16 border-b border-hairline bg-canvas/90 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between gap-4 px-4 lg:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold text-ink"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-hairline bg-canvas-soft">
            <ImageIcon className="h-4 w-4" aria-hidden />
          </span>
          {SITE_NAME}
        </Link>
        <nav className="hidden items-center gap-0.5 md:flex" aria-label="Main">
          {toolList.slice(0, 4).map((t) => (
            <Link
              key={t.slug}
              href={t.path}
              className="rounded-full px-3 py-1.5 text-sm text-body transition-colors hover:bg-canvas-soft hover:text-ink"
            >
              {t.slug.replace(/-/g, " ")}
            </Link>
          ))}
          <Link
            href="/blog"
            className="rounded-full px-3 py-1.5 text-sm text-body transition-colors hover:bg-canvas-soft hover:text-ink"
          >
            Blog
          </Link>
        </nav>
        <Link
          href="/heic-to-jpg"
          className="hidden rounded-md bg-ink px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-[#333] sm:inline-flex"
        >
          Convert now
        </Link>
      </div>
    </header>
  );
}

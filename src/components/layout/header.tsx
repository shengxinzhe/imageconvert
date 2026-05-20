import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";
import { toolList } from "@/lib/tools-config";
import { MobileNav } from "@/components/layout/mobile-nav";

function LogoMark() {
  return (
    <span
      className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-[#50e3c2] to-[#0071e3] text-xs font-bold text-white shadow-sm"
      aria-hidden
    >
      H
    </span>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 h-16 border-b border-hairline bg-canvas/90 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between gap-4 px-4 lg:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold text-ink"
        >
          <LogoMark />
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
        <div className="flex items-center gap-2">
          <Link
            href="/heic-to-jpg"
            className="hidden rounded-md bg-ink px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-[#333] sm:inline-flex"
          >
            Convert now
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

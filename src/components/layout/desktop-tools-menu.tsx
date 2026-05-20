"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { toolList } from "@/lib/tools-config";
import { cn } from "@/lib/utils";

const primaryTools = toolList.slice(0, 4);
const moreTools = toolList.slice(4);

function formatLabel(slug: string) {
  return slug.replace(/-/g, " ");
}

export function DesktopToolsMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <nav className="hidden items-center gap-0.5 md:flex" aria-label="Main">
      {primaryTools.map((t) => (
        <Link
          key={t.slug}
          href={t.path}
          className="rounded-full px-3 py-1.5 text-sm text-body transition-colors hover:bg-canvas-soft hover:text-ink"
        >
          {formatLabel(t.slug)}
        </Link>
      ))}
      <div ref={ref} className="relative">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-sm text-body transition-colors hover:bg-canvas-soft hover:text-ink",
            open && "bg-canvas-soft text-ink",
          )}
          aria-expanded={open}
          aria-haspopup="true"
        >
          More tools
          <ChevronDown
            className={cn("h-4 w-4 transition-transform", open && "rotate-180")}
            aria-hidden
          />
        </button>
        {open && (
          <ul
            className="absolute left-0 top-full z-50 mt-1 min-w-[12rem] rounded-vercel border border-hairline bg-canvas py-1 shadow-card-hover"
            role="menu"
          >
            {moreTools.map((t) => (
              <li key={t.slug} role="none">
                <Link
                  href={t.path}
                  role="menuitem"
                  className="block px-4 py-2 text-sm capitalize text-body hover:bg-canvas-soft hover:text-ink"
                  onClick={() => setOpen(false)}
                >
                  {formatLabel(t.slug)}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <Link
        href="/about"
        className="rounded-full px-3 py-1.5 text-sm text-body transition-colors hover:bg-canvas-soft hover:text-ink"
      >
        About
      </Link>
      <Link
        href="/blog"
        className="rounded-full px-3 py-1.5 text-sm text-body transition-colors hover:bg-canvas-soft hover:text-ink"
      >
        Blog
      </Link>
    </nav>
  );
}

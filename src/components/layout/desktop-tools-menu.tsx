"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { ToolConfig } from "@/lib/tools-config";
import { cn } from "@/lib/utils";
import type { AppLocale } from "@/i18n/routing";
import { getT } from "@/lib/i18n/translations";

function formatLabel(slug: string) {
  return slug.replace(/-/g, " ");
}

export function DesktopToolsMenu({
  tools,
  locale,
}: {
  tools: ToolConfig[];
  locale: AppLocale;
}) {
  const t = getT(locale);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const primaryTools = tools.slice(0, 4);
  const moreTools = tools.slice(4);

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
      {primaryTools.map((tool) => (
        <Link
          key={tool.slug}
          href={`/${tool.slug}`}
          className="rounded-full px-3 py-1.5 text-sm text-body transition-colors hover:bg-canvas-soft hover:text-ink"
        >
          {formatLabel(tool.slug)}
        </Link>
      ))}
      <div ref={ref} className="relative">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-sm text-body transition-colors hover:bg-canvas-soft hover:text-ink",
            open && "bg-canvas-soft text-ink"
          )}
          aria-expanded={open}
          aria-haspopup="true"
        >
          {t("nav.moreTools")}
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
            {moreTools.map((tool) => (
              <li key={tool.slug} role="none">
                <Link
                  href={`/${tool.slug}`}
                  role="menuitem"
                  className="block px-4 py-2 text-sm capitalize text-body hover:bg-canvas-soft hover:text-ink"
                  onClick={() => setOpen(false)}
                >
                  {formatLabel(tool.slug)}
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
        {t("nav.about")}
      </Link>
      <Link
        href="/blog"
        className="rounded-full px-3 py-1.5 text-sm text-body transition-colors hover:bg-canvas-soft hover:text-ink"
      >
        {t("nav.blog")}
      </Link>
    </nav>
  );
}

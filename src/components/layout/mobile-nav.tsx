"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { SITE_NAME } from "@/lib/constants";
import { toolList } from "@/lib/tools-config";
import { cn } from "@/lib/utils";

function formatToolLabel(slug: string) {
  return slug.replace(/-/g, " ");
}

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-hairline bg-canvas-soft text-ink transition-colors hover:bg-canvas-soft-2"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open && (
        <div
          className="fixed inset-0 top-16 z-50 flex flex-col bg-canvas"
          id="mobile-nav-panel"
          role="dialog"
          aria-modal="true"
          aria-label={`${SITE_NAME} menu`}
        >
          <nav
            className="flex-1 overflow-y-auto border-t border-hairline px-4 py-4"
            aria-label="Mobile"
          >
            <p className="mb-2 px-2 text-xs font-medium uppercase tracking-wide text-mute">
              Converters
            </p>
            <ul className="space-y-0.5">
              {toolList.map((t) => (
                <li key={t.slug}>
                  <Link
                    href={t.path}
                    className={cn(
                      "block rounded-md px-3 py-2.5 text-sm capitalize text-body transition-colors hover:bg-canvas-soft hover:text-ink",
                      pathname === t.path && "bg-canvas-soft font-medium text-ink",
                    )}
                  >
                    {formatToolLabel(t.slug)}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mb-2 mt-6 px-2 text-xs font-medium uppercase tracking-wide text-mute">
              More
            </p>
            <ul className="space-y-0.5">
              <li>
                <Link
                  href="/blog"
                  className={cn(
                    "block rounded-md px-3 py-2.5 text-sm text-body transition-colors hover:bg-canvas-soft hover:text-ink",
                    pathname.startsWith("/blog") &&
                      "bg-canvas-soft font-medium text-ink",
                  )}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
          <div className="border-t border-hairline p-4">
            <Link
              href="/heic-to-jpg"
              className="flex w-full items-center justify-center rounded-md bg-ink px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-[#333]"
            >
              Convert HEIC now
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

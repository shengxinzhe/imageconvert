"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import type { AppLocale } from "@/i18n/routing";
import { getT } from "@/lib/i18n/translations";
import { Link, usePathname } from "@/i18n/navigation";
import { SITE_NAME } from "@/lib/constants";
import type { ToolConfig } from "@/lib/tools-config";
import { cn } from "@/lib/utils";

function formatToolLabel(slug: string) {
  return slug.replace(/-/g, " ");
}

export function MobileNav({
  tools,
  locale,
}: {
  tools: ToolConfig[];
  locale: AppLocale;
}) {
  const t = getT(locale);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const pathWithoutLocale =
    locale === "en"
      ? pathname
      : pathname.startsWith(`/${locale}`)
        ? pathname.slice(`/${locale}`.length) || "/"
        : pathname;

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
              {t("nav.mobileConverters")}
            </p>
            <ul className="space-y-0.5">
              {tools.map((tool) => (
                <li key={tool.slug}>
                  <Link
                    href={`/${tool.slug}`}
                    className={cn(
                      "block rounded-md px-3 py-2.5 text-sm capitalize text-body transition-colors hover:bg-canvas-soft hover:text-ink",
                      pathWithoutLocale === `/${tool.slug}` &&
                        "bg-canvas-soft font-medium text-ink"
                    )}
                  >
                    {formatToolLabel(tool.slug)}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mb-2 mt-6 px-2 text-xs font-medium uppercase tracking-wide text-mute">
              {t("nav.mobileMore")}
            </p>
            <ul className="space-y-0.5">
              <li>
                <Link
                  href="/about"
                  className={cn(
                    "block rounded-md px-3 py-2.5 text-sm text-body transition-colors hover:bg-canvas-soft hover:text-ink",
                    pathWithoutLocale === "/about" && "bg-canvas-soft font-medium text-ink"
                  )}
                >
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className={cn(
                    "block rounded-md px-3 py-2.5 text-sm text-body transition-colors hover:bg-canvas-soft hover:text-ink",
                    pathWithoutLocale.startsWith("/blog") && "bg-canvas-soft font-medium text-ink"
                  )}
                >
                  {t("nav.blog")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={cn(
                    "block rounded-md px-3 py-2.5 text-sm text-body transition-colors hover:bg-canvas-soft hover:text-ink",
                    pathWithoutLocale === "/contact" && "bg-canvas-soft font-medium text-ink"
                  )}
                >
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </nav>
          <div className="border-t border-hairline p-4">
            <Link
              href="/heic-to-jpg"
              className="flex w-full items-center justify-center rounded-md bg-ink px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-[#333]"
            >
              {t("nav.mobileCta")}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

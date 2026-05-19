import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";
import { toolList } from "@/lib/tools-config";
import { ImageIcon } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white"
        >
          <ImageIcon className="h-6 w-6 text-emerald-600" aria-hidden />
          {SITE_NAME}
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {toolList.slice(0, 4).map((t) => (
            <Link
              key={t.slug}
              href={t.path}
              className="rounded-md px-2 py-1.5 text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              {t.slug.replace(/-/g, " ")}
            </Link>
          ))}
          <Link
            href="/blog"
            className="rounded-md px-2 py-1.5 text-sm text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
          >
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
}

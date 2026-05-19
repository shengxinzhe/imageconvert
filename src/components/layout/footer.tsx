import Link from "next/link";
import { DMCA_EMAIL, SITE_NAME } from "@/lib/constants";
import { toolList } from "@/lib/tools-config";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <p className="font-semibold text-slate-900 dark:text-white">{SITE_NAME}</p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Free online image converters. Files never leave your browser.
          </p>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-slate-900 dark:text-white">Tools</p>
          <ul className="grid gap-1 text-sm text-slate-600 dark:text-slate-400">
            {toolList.map((t) => (
              <li key={t.slug}>
                <Link href={t.path} className="hover:text-emerald-600">
                  {t.title.split("—")[0].trim()}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-slate-900 dark:text-white">Legal</p>
          <ul className="grid gap-1 text-sm text-slate-600 dark:text-slate-400">
            <li>
              <Link href="/privacy" className="hover:text-emerald-600">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-emerald-600">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/dmca" className="hover:text-emerald-600">
                DMCA
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-emerald-600">
                Blog
              </Link>
            </li>
          </ul>
          <p className="mt-4 text-xs text-slate-500">DMCA: {DMCA_EMAIL}</p>
        </div>
      </div>
      <div className="border-t border-slate-200 px-4 py-4 text-center text-xs text-slate-500 dark:border-slate-800">
        © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
      </div>
    </footer>
  );
}

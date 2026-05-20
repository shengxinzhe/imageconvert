import Link from "next/link";
import { DMCA_EMAIL, SITE_NAME } from "@/lib/constants";
import { toolList } from "@/lib/tools-config";

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-canvas">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-3 lg:px-6">
        <div>
          <p className="text-sm font-semibold text-ink">{SITE_NAME}</p>
          <p className="mt-2 text-sm text-body">
            Free online image converters. Files never leave your browser.
          </p>
        </div>
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-mute">Tools</p>
          <ul className="grid gap-2 text-sm text-body">
            {toolList.map((t) => (
              <li key={t.slug}>
                <Link href={t.path} className="hover:text-ink">
                  {t.title.split("—")[0].trim()}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-mute">Legal</p>
          <ul className="grid gap-2 text-sm text-body">
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms">Terms of Service</Link>
            </li>
            <li>
              <Link href="/dmca">DMCA</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <p className="mt-4 font-mono text-xs text-mute">DMCA: {DMCA_EMAIL}</p>
        </div>
      </div>
      <div className="border-t border-hairline px-4 py-6 text-center font-mono text-xs text-mute">
        © {new Date().getFullYear()} {SITE_NAME}
      </div>
    </footer>
  );
}

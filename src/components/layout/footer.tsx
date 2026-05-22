import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { SITE_NAME } from "@/lib/constants";
import { getLocalizedToolList } from "@/lib/get-localized-tool";
import { getT } from "@/lib/i18n/translations";

export function Footer({ locale }: { locale: AppLocale }) {
  const t = getT(locale);
  const toolList = getLocalizedToolList(locale);

  return (
    <footer className="border-t border-hairline bg-canvas">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-3 lg:px-6">
        <div>
          <p className="text-sm font-semibold text-ink">{SITE_NAME}</p>
          <p className="mt-2 text-sm text-body">{t("footer.tagline")}</p>
        </div>
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-mute">{t("footer.tools")}</p>
          <ul className="grid gap-2 text-sm text-body">
            {toolList.map((tool) => (
              <li key={tool.slug}>
                <Link href={`/${tool.slug}`} className="hover:text-ink">
                  {tool.title.split("—")[0].trim()}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-mute">{t("footer.legal")}</p>
          <ul className="grid gap-2 text-sm text-body">
            <li>
              <Link href="/privacy">{t("footer.privacy")}</Link>
            </li>
            <li>
              <Link href="/terms">{t("footer.terms")}</Link>
            </li>
            <li>
              <Link href="/dmca">{t("footer.dmca")}</Link>
            </li>
            <li>
              <Link href="/about">{t("footer.about")}</Link>
            </li>
            <li>
              <Link href="/blog">{t("footer.blog")}</Link>
            </li>
            <li>
              <Link href="/contact">{t("footer.contact")}</Link>
            </li>
          </ul>
          <p className="mt-4 text-xs text-mute">
            DMCA:{" "}
            <Link href="/dmca" className="hover:text-ink">
              {t("footer.dmca")}
            </Link>
          </p>
        </div>
      </div>
      <div className="border-t border-hairline px-4 py-6 text-center font-mono text-xs text-mute">
        © {new Date().getFullYear()} {SITE_NAME}
      </div>
    </footer>
  );
}

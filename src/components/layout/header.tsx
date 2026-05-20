import { DesktopToolsMenu } from "@/components/layout/desktop-tools-menu";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { getLocalizedToolList } from "@/lib/get-localized-tool";
import { getT } from "@/lib/i18n/translations";
import { SITE_NAME } from "@/lib/constants";

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

export function Header({ locale }: { locale: AppLocale }) {
  const t = getT(locale);
  const tools = getLocalizedToolList(locale);

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
        <DesktopToolsMenu tools={tools} locale={locale} />
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <Link
            href="/heic-to-jpg"
            className="inline-flex rounded-md bg-ink px-2.5 py-1.5 text-xs font-medium text-white transition-colors hover:bg-[#333] md:hidden"
          >
            {t("nav.convertShort")}
          </Link>
          <Link
            href="/heic-to-jpg"
            className="hidden rounded-md bg-ink px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-[#333] md:inline-flex"
          >
            {t("nav.convert")}
          </Link>
          <MobileNav tools={tools} locale={locale} />
        </div>
      </div>
    </header>
  );
}

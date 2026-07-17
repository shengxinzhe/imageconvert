import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { AUTHOR_PEN_NAME } from "@/lib/author";
import { audienceStyles } from "@/lib/design-variants";
import { getT } from "@/lib/i18n/translations";
import { cn } from "@/lib/utils";

export function AuthorPageLayout({ locale }: { locale: AppLocale }) {
  const t = getT(locale);

  return (
    <>
      <section className="hero-heic border-b border-hairline">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center md:py-20 lg:px-6">
          <span
            className={cn(
              "inline-flex rounded-full border px-3 py-1 text-xs font-medium",
              audienceStyles.heic.badge
            )}
          >
            {t("author.badge")}
          </span>
          <div className="mx-auto mt-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#50e3c2] to-[#0071e3] text-xl font-bold text-white shadow-sm">
            MV
          </div>
          <h1 className="mt-6 text-balance text-3xl font-semibold tracking-display text-ink md:text-4xl">
            {AUTHOR_PEN_NAME}
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-lg text-body">{t("author.role")}</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 lg:px-6">
        <p className="text-body">{t("author.intro")}</p>
        <p className="mt-4 text-body">{t("author.affiliation")}</p>
        <p className="mt-4 text-body">{t("author.funding")}</p>
        <div className="mt-8 flex flex-wrap gap-4 text-sm">
          <Link
            href="/about#editorial-standards"
            className="font-medium text-link hover:text-link-deep"
          >
            {t("author.standardsCta")}
          </Link>
          <Link href="/contact" className="font-medium text-link hover:text-link-deep">
            {t("author.contactCta")}
          </Link>
          <Link href="/blog" className="font-medium text-link hover:text-link-deep">
            {t("author.blogCta")}
          </Link>
        </div>
      </section>
    </>
  );
}

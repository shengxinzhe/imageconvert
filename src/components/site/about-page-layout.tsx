import { BlogMarkdown } from "@/components/blog/blog-markdown";
import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { audienceStyles, getToolAudience } from "@/lib/design-variants";
import { getLocalizedToolList } from "@/lib/get-localized-tool";
import { getT } from "@/lib/i18n/translations";
import type { LegalPageContent } from "@/lib/legal-l10n/types";
import { toolShortTitle } from "@/lib/tool-display";
import { cn } from "@/lib/utils";
import { Archive, ArrowRight, BookOpen, ClipboardCheck, Lock, Sparkles } from "lucide-react";

const principleIcons = [Lock, Sparkles, Archive] as const;

export function AboutPageLayout({
  content,
  locale,
}: {
  content: LegalPageContent;
  locale: AppLocale;
}) {
  const t = getT(locale);
  const tools = getLocalizedToolList(locale);

  const principles = [1, 2, 3].map((n) => ({
    icon: principleIcons[n - 1],
    title: t(`about.principle${n}Title`),
    body: t(`about.principle${n}Body`),
  }));

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
            {t("about.badge")}
          </span>
          <h1 className="mt-6 text-balance text-3xl font-semibold tracking-display text-ink md:text-4xl">
            {content.h1}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-body">{t("about.heroSubtitle")}</p>
          {content.lastUpdated ? (
            <p className="mt-4 font-mono text-sm text-mute">{content.lastUpdated}</p>
          ) : null}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 lg:px-6">
        <h2 className="text-center text-2xl font-semibold tracking-display-sm text-ink">
          {t("about.principlesTitle")}
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {principles.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={cn("p-6", audienceStyles.heic.card)}
              >
                <Icon className="h-5 w-5 text-ink" aria-hidden />
                <h3 className="mt-4 font-medium text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-body">{item.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="content-band-soft border-y border-hairline py-16">
        <div className="mx-auto max-w-3xl px-4 lg:px-6">
          <h2 className="text-2xl font-semibold tracking-display-sm text-ink">
            {t("about.whyTitle")}
          </h2>
          <p className="mt-4 text-body">{t("about.whyBody")}</p>
          <p className="mt-3 text-body">{t("about.operatorBody")}</p>
          <h2 className="mt-10 text-2xl font-semibold tracking-display-sm text-ink">
            {t("about.whoWritesTitle")}
          </h2>
          <p className="mt-4 text-body">{t("about.whoWritesBody")}</p>
          <Link
            href="/about/author"
            className="mt-4 inline-flex text-sm font-medium text-link hover:text-link-deep"
          >
            {t("about.whoWritesCta")}
          </Link>
        </div>
      </section>

      <section
        id="editorial-standards"
        className="mx-auto max-w-3xl scroll-mt-24 px-4 py-16 lg:px-6"
      >
        <div className="flex items-start gap-3">
          <ClipboardCheck className="mt-0.5 h-5 w-5 shrink-0 text-ink" aria-hidden />
          <div className="min-w-0">
            <h2 className="text-2xl font-semibold tracking-display-sm text-ink">
              {t("about.editorialTitle")}
            </h2>
            <p className="mt-3 text-body">{t("about.editorialIntro")}</p>
            <ul className="mt-6 space-y-4">
              {[1, 2, 3, 4].map((n) => (
                <li key={n} className="rounded-vercel border border-hairline bg-canvas-soft px-4 py-3">
                  <h3 className="text-sm font-medium text-ink">
                    {t(`about.editorialStandard${n}Title` as "about.editorialStandard1Title")}
                  </h3>
                  <p className="mt-1 text-sm text-body">
                    {t(`about.editorialStandard${n}Body` as "about.editorialStandard1Body")}
                  </p>
                </li>
              ))}
            </ul>
            <h3 className="mt-8 text-lg font-semibold text-ink">
              {t("about.editorialTestingTitle")}
            </h3>
            <p className="mt-2 text-sm text-body">{t("about.editorialTestingIntro")}</p>
            <div className="mt-4 overflow-x-auto rounded-vercel border border-hairline">
              <table className="w-full min-w-[280px] text-left text-sm">
                <thead>
                  <tr className="border-b border-hairline bg-canvas-soft">
                    <th className="px-4 py-2.5 font-medium text-ink">
                      {t("about.editorialTableEnv")}
                    </th>
                    <th className="px-4 py-2.5 font-medium text-ink">
                      {t("about.editorialTableUse")}
                    </th>
                  </tr>
                </thead>
                <tbody className="text-body">
                  {[1, 2, 3].map((n) => (
                    <tr key={n} className="border-b border-hairline last:border-0">
                      <td className="px-4 py-2.5 font-mono text-xs text-ink">
                        {t(`about.editorialEnv${n}` as "about.editorialEnv1")}
                      </td>
                      <td className="px-4 py-2.5">
                        {t(`about.editorialEnv${n}Use` as "about.editorialEnv1Use")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-sm text-body">{t("about.editorialReviewBody")}</p>
            <p className="mt-3 text-sm text-body">{t("about.editorialFundingBody")}</p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <Link href="/blog" className="font-medium text-link hover:text-link-deep">
                {t("about.editorialBlogLink")}
              </Link>
              <Link href="/contact" className="font-medium text-link hover:text-link-deep">
                {t("about.editorialContactLink")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="content-band-soft border-y border-hairline py-16">
        <div className="mx-auto max-w-3xl px-4 lg:px-6">
          <div className="flex items-start gap-3">
            <BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-ink" aria-hidden />
            <div>
              <h2 className="text-2xl font-semibold tracking-display-sm text-ink">
                {t("about.changelogTitle")}
              </h2>
            <p className="mt-2 text-sm text-body">{t("about.changelogIntro")}</p>
            <ul className="mt-4 space-y-3 text-sm text-body">
              {[1, 2, 3].map((n) => (
                <li key={n} className="border-l-2 border-hairline pl-4">
                  {t(`about.changelog${n}` as "about.changelog1")}
                </li>
              ))}
            </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="content-band-soft border-y border-hairline py-16">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <h2 className="text-2xl font-semibold tracking-display-sm text-ink">
            {t("about.toolsTitle")}
          </h2>
          <p className="mt-2 max-w-2xl text-body">
            {t("about.toolsSubtitle", { count: tools.length })}
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/${tool.slug}`}
                className={cn(
                  "group p-5 transition hover:shadow-card-hover",
                  getToolAudience(tool.slug) === "heic"
                    ? audienceStyles.heic.card
                    : audienceStyles.developer.card
                )}
              >
                <p
                  className={cn(
                    "font-mono text-xs",
                    getToolAudience(tool.slug) === "heic" ? "text-mute" : "text-[#5e6ad2]"
                  )}
                >
                  {tool.from} → {tool.to}
                </p>
                <h3 className="mt-2 font-medium text-ink group-hover:text-[var(--mintlify-green)]">
                  {toolShortTitle(tool)}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-body">{tool.metaDescription}</p>
              </Link>
            ))}
          </div>
          <Link
            href="/heic-to-jpg"
            className={cn(
              "mt-8 inline-flex h-11 items-center px-5 text-sm font-medium",
              audienceStyles.heic.cta
            )}
          >
            {t("about.toolsCta")}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-16 prose-vercel lg:px-6">
        <h2 className="not-prose text-xl font-semibold text-ink">{t("about.detailsTitle")}</h2>
        <BlogMarkdown content={content.body} locale={locale} />
      </div>
    </>
  );
}

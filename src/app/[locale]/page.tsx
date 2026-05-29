import { WebsiteJsonLd } from "@/components/seo/website-json-ld";
import { Link } from "@/i18n/navigation";
import { routing, type AppLocale } from "@/i18n/routing";
import { getLocalizedBlogPostsNewestFirst } from "@/lib/blog-l10n";
import { audienceStyles, getToolAudience, homeStyles } from "@/lib/design-variants";
import { getLocalizedToolList } from "@/lib/get-localized-tool";
import { getT } from "@/lib/i18n/translations";
import { homeMetadata } from "@/lib/site-metadata";
import { Archive, ArrowRight, Lock, Sparkles } from "lucide-react";
import { toolShortTitle } from "@/lib/tool-display";
import { cn } from "@/lib/utils";

type PageProps = { params: { locale: string } };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: PageProps) {
  const locale = params.locale as AppLocale;
  return homeMetadata(locale);
}

export default function HomePage({ params }: PageProps) {
  const locale = params.locale as AppLocale;
  const t = getT(locale);
  const tools = getLocalizedToolList(locale);
  const heicTools = tools.filter((tool) => getToolAudience(tool.slug) === "heic");
  const devTools = tools.filter((tool) => getToolAudience(tool.slug) === "developer");

  return (
    <>
      <WebsiteJsonLd locale={locale} />
      <section className={homeStyles.heicSection}>
        <div className="mx-auto max-w-6xl px-4 py-20 text-center md:py-28 lg:px-6">
          <span
            className={cn(
              "inline-flex rounded-full border px-3 py-1 text-xs font-medium",
              audienceStyles.heic.badge
            )}
          >
            {t("home.heroBadge")}
          </span>
          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-display text-ink md:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            {t("home.heroTitle")}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-body">{t("home.heroSubtitle")}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/heic-to-jpg"
              className={cn(
                "inline-flex h-12 items-center px-6 text-sm font-medium",
                homeStyles.heicCta
              )}
            >
              {t("home.heroCtaHeic")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/heic-to-png"
              className="inline-flex h-12 items-center rounded-full border border-hairline bg-canvas px-6 text-sm font-medium text-ink hover:bg-canvas-soft"
            >
              {t("home.heroCtaPng")}
            </Link>
            <Link
              href="/avif-to-jpg"
              className="inline-flex h-12 items-center rounded-full border border-hairline bg-canvas px-6 text-sm font-medium text-ink hover:bg-canvas-soft"
            >
              {t("home.heroCtaAvif")}
            </Link>
          </div>
          <ul className="mx-auto mt-14 flex max-w-2xl flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-body">
            <li className="flex items-center gap-2">
              <Lock className="h-4 w-4 shrink-0 text-ink" aria-hidden />
              {t("home.heroTrust1")}
            </li>
            <li className="flex items-center gap-2">
              <Archive className="h-4 w-4 shrink-0 text-ink" aria-hidden />
              {t("home.heroTrust2")}
            </li>
            <li className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 shrink-0 text-ink" aria-hidden />
              {t("home.heroTrust3")}
            </li>
          </ul>
          <aside
            aria-label={t("home.aiSummaryTitle")}
            className="mx-auto mt-10 max-w-2xl rounded-vercel-lg border border-hairline bg-canvas px-5 py-4 text-left text-sm text-body shadow-card"
          >
            <h2 className="font-medium text-ink">{t("home.aiSummaryTitle")}</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-mute">
              <li>{t("home.aiFact1")}</li>
              <li>{t("home.aiFact2")}</li>
              <li>{t("home.aiFact3")}</li>
              <li>{t("home.aiFact4")}</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className={homeStyles.devSection}>
        <div className="mx-auto max-w-6xl px-4 py-16 lg:px-6">
          <span className={homeStyles.devBadge}>{t("home.devBadge")}</span>
          <h2 className="mt-3 text-2xl font-semibold tracking-display-sm text-ink md:text-3xl">
            {t("home.devTitle")}
          </h2>
          <p className="mt-2 max-w-xl text-body">{t("home.devSubtitle")}</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {devTools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/${tool.slug}`}
                className="group rounded-vercel-lg border border-hairline bg-canvas p-5 shadow-card transition hover:border-[#c4c4ef] hover:shadow-card-hover"
              >
                <p className="font-mono text-xs text-[#5e6ad2]">
                  {tool.from} → {tool.to}
                </p>
                <h3 className="mt-2 font-medium text-ink group-hover:text-[#5e6ad2]">
                  {toolShortTitle(tool)}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="content-band-soft py-16">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <h2 className="text-xl font-semibold text-ink">{t("home.heicToolsTitle")}</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {heicTools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/${tool.slug}`}
                className={cn("p-5 transition hover:shadow-card-hover", audienceStyles.heic.card)}
              >
                <h3 className="font-medium text-ink">{toolShortTitle(tool)}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-body">{tool.metaDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 lg:px-6">
        <p className="font-mono text-xs uppercase tracking-wider text-mute">{t("home.blogLabel")}</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-display-sm text-ink">{t("home.blogTitle")}</h2>
        <p className="mt-2 text-body">{t("home.blogSubtitle")}</p>
        <ul className="mt-8 divide-y divide-hairline border-y border-hairline">
          {getLocalizedBlogPostsNewestFirst(locale).slice(0, 6).map((post) => (
            <li key={post.slug} className="py-6">
              <Link href={`/blog/${post.slug}`} className="group block">
                <h3 className="font-medium text-ink group-hover:text-[var(--mintlify-green)]">
                  {post.title}
                </h3>
                <p className="mt-1 text-sm text-body">{post.description}</p>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/blog"
          className="mt-6 inline-flex items-center text-sm font-medium text-[var(--mintlify-green)] hover:underline"
        >
          {t("home.blogViewAll")}
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </section>
    </>
  );
}

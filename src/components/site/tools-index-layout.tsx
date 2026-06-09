import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { audienceStyles, getToolAudience } from "@/lib/design-variants";
import { getLocalizedToolList } from "@/lib/get-localized-tool";
import { getT } from "@/lib/i18n/translations";
import { HomeToolCard } from "@/components/site/home-tool-card";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export function ToolsIndexLayout({ locale }: { locale: AppLocale }) {
  const t = getT(locale);
  const tools = getLocalizedToolList(locale);
  const heicTools = tools.filter((tool) => getToolAudience(tool.slug) === "heic");
  const devTools = tools.filter((tool) => getToolAudience(tool.slug) === "developer");

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
            {t("toolsIndex.badge")}
          </span>
          <h1 className="mt-6 text-balance text-3xl font-semibold tracking-display text-ink md:text-4xl">
            {t("toolsIndex.title")}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-body">{t("toolsIndex.subtitle")}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 lg:px-6">
        <h2 className="text-2xl font-semibold tracking-display-sm text-ink">
          {t("toolsIndex.heicTitle")}
        </h2>
        <p className="mt-2 max-w-2xl text-body">{t("toolsIndex.heicSubtitle")}</p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {heicTools.map((tool) => (
            <HomeToolCard key={tool.slug} tool={tool} locale={locale} variant="heic" />
          ))}
        </div>
      </section>

      <section className="content-band-soft border-y border-hairline py-16">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <span className={audienceStyles.developer.badge}>{t("home.devBadge")}</span>
          <h2 className="mt-3 text-2xl font-semibold tracking-display-sm text-ink">
            {t("toolsIndex.devTitle")}
          </h2>
          <p className="mt-2 max-w-2xl text-body">{t("toolsIndex.devSubtitle")}</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {devTools.map((tool) => (
              <HomeToolCard key={tool.slug} tool={tool} locale={locale} variant="developer" />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 text-center lg:px-6">
        <p className="text-body">{t("toolsIndex.aboutBlurb")}</p>
        <Link
          href="/about"
          className={cn(
            "mt-6 inline-flex h-11 items-center px-5 text-sm font-medium",
            audienceStyles.heic.cta
          )}
        >
          {t("toolsIndex.aboutCta")}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </section>
    </>
  );
}

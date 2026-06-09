import dynamic from "next/dynamic";
import { getT } from "@/lib/i18n/translations";
import { Lock, Zap } from "lucide-react";
import { AdSlot } from "@/components/ads/ad-slot";
import { ToolJsonLd } from "@/components/seo/tool-json-ld";
import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { audienceStyles, getToolAudience } from "@/lib/design-variants";
import { hasAdSenseDisplayUnits } from "@/lib/adsense";
import { RelatedGuides } from "@/components/tool/related-guides";
import { RelatedToolsGrid } from "@/components/tool/related-tools-grid";
import type { ToolConfig, ToolSlug } from "@/lib/tools-config";
import { toolRelatedGuides } from "@/lib/tool-related-guides";
import { cn } from "@/lib/utils";

const ImageConverter = dynamic(
  () =>
    import("@/components/converter/image-converter").then((m) => ({
      default: m.ImageConverter,
    })),
  {
    ssr: false,
    loading: () => (
      <div className="h-48 animate-pulse rounded-vercel-lg bg-canvas-soft-2" />
    ),
  }
);

export async function ToolLandingPage({
  tool,
  locale,
}: {
  tool: ToolConfig;
  locale: AppLocale;
}) {
  const t = getT(locale);
  const audience = getToolAudience(tool.slug);
  const style = audienceStyles[audience];
  const guideConfig = toolRelatedGuides[tool.slug as ToolSlug];

  return (
    <article>
      <ToolJsonLd tool={tool} locale={locale} />
      <section className={cn("border-b border-hairline", style.hero)}>
        <div className="mx-auto max-w-6xl px-4 py-12 lg:px-6">
          <span
            className={cn(
              "inline-flex rounded-full border px-3 py-1 text-xs font-medium",
              style.badge
            )}
          >
            {style.label}
          </span>
          <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-display-sm text-ink md:text-[2.5rem] md:leading-tight">
            {tool.h1}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-body">{tool.heroSubtitle}</p>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_260px]">
            <div className={cn("p-6", style.card)}>
              <ImageConverter
                from={tool.from}
                to={tool.to}
                toolSlug={tool.slug}
                audience={audience}
                postConvertGuideSlug={guideConfig?.postConvertGuide}
              />
              <ul className="mt-6 flex flex-col gap-3 border-t border-hairline pt-6 text-sm text-body lg:hidden">
                <li className="flex gap-3">
                  <Lock className={cn("h-5 w-5 shrink-0", style.accentIcon)} aria-hidden />
                  {t("tool.filesStay")}
                </li>
                <li className="flex gap-3">
                  <Zap className={cn("h-5 w-5 shrink-0", style.accentIcon)} aria-hidden />
                  {t("tool.noSignup")}
                </li>
              </ul>
            </div>
            <aside className="hidden lg:block">
              <AdSlot position="sidebar" />
              <ul className="mt-6 space-y-4 text-sm text-body">
                <li className="flex gap-3">
                  <Lock className={cn("h-5 w-5 shrink-0", style.accentIcon)} aria-hidden />
                  {t("tool.filesStay")}
                </li>
                <li className="flex gap-3">
                  <Zap className={cn("h-5 w-5 shrink-0", style.accentIcon)} aria-hidden />
                  {t("tool.noSignup")}
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {hasAdSenseDisplayUnits() ? (
        <div className="content-band">
          <AdSlot position="in-content" />
        </div>
      ) : null}

      <section className={cn("mx-auto max-w-3xl px-4 py-12 lg:px-6", style.prose)}>
        <h2>{tool.whyConvert.title}</h2>
        {tool.whyConvert.paragraphs.map((p) => (
          <p key={p.slice(0, 40)}>{p}</p>
        ))}

        <h2>
          {t("tool.howToTitle", {
            from: tool.from.toUpperCase(),
            to: tool.to.toUpperCase(),
          })}
        </h2>
        <ol>
          {tool.howToSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>

        <h2>{t("tool.privacyHeading")}</h2>
        <p>{tool.privacyNote}</p>

        {tool.seoSections.map((s) => (
          <div key={s.heading}>
            <h2>{s.heading}</h2>
            {s.paragraphs?.map((p) => (
              <p key={p.slice(0, 48)}>{p}</p>
            ))}
            {s.content && !s.paragraphs?.length ? <p>{s.content}</p> : null}
          </div>
        ))}

        {guideConfig?.guides?.length ? (
          <RelatedGuides slugs={guideConfig.guides} locale={locale} />
        ) : null}

        <h2>{t("tool.faqHeading")}</h2>
        <div className="not-prose space-y-2">
          {tool.faqs.map((faq) => (
            <details
              key={faq.question}
              className="rounded-vercel border border-hairline bg-canvas p-4"
            >
              <summary className="cursor-pointer text-sm font-medium text-ink">
                {faq.question}
              </summary>
              <p className="mt-2 text-sm text-body">{faq.answer}</p>
            </details>
          ))}
        </div>

      </section>

      <section className="mx-auto max-w-6xl border-t border-hairline px-4 py-12 lg:px-6">
        <h2 className="text-2xl font-semibold tracking-display-sm text-ink">
          {t("tool.relatedHeading")}
        </h2>
        <p className="mt-2 max-w-2xl text-body">{t("tool.relatedSubtitle")}</p>
        <RelatedToolsGrid slugs={tool.relatedSlugs} locale={locale} />
        <p className="mt-8 text-sm text-body">
          <Link href="/tools" className="font-medium text-ink hover:text-[var(--mintlify-green)]">
            {t("tool.allToolsLink")}
          </Link>
        </p>
      </section>
    </article>
  );
}

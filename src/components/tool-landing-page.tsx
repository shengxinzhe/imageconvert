import dynamic from "next/dynamic";
import { getT } from "@/lib/i18n/translations";
import { Lock, Zap } from "lucide-react";
import { AdSlot } from "@/components/ads/ad-slot";
import { ToolJsonLd } from "@/components/seo/tool-json-ld";
import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { getLocalizedToolBySlug } from "@/lib/get-localized-tool";
import { audienceStyles, getToolAudience } from "@/lib/design-variants";
import { hasAdSenseDisplayUnits } from "@/lib/adsense";
import type { ToolConfig } from "@/lib/tools-config";
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
              <ImageConverter from={tool.from} to={tool.to} audience={audience} />
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

        <h2>{t("tool.relatedHeading")}</h2>
        <ul>
          {tool.relatedSlugs.map((slug) => {
            const related = getLocalizedToolBySlug(slug, locale);
            if (!related) return null;
            return (
              <li key={slug}>
                <Link href={`/${slug}`}>{related.title.split("—")[0].trim()}</Link>
              </li>
            );
          })}
        </ul>
      </section>
    </article>
  );
}

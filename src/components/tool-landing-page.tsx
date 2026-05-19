import dynamic from "next/dynamic";
import Link from "next/link";
import type { ToolConfig } from "@/lib/tools-config";
import { getToolBySlug, tools } from "@/lib/tools-config";
import { AdSlot } from "@/components/ads/ad-slot";
import { FaqJsonLd } from "@/components/seo/faq-json-ld";
import { SITE_URL } from "@/lib/constants";
import { Lock, Zap } from "lucide-react";

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

export function ToolLandingPage({ tool }: { tool: ToolConfig }) {
  return (
    <article>
      <FaqJsonLd faqs={tool.faqs} url={`${SITE_URL}${tool.path}`} />
      <section className="mesh-hero border-b border-hairline">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:px-6">
          <p className="font-mono text-xs uppercase tracking-wider text-mute">
            100% browser-based · Private
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-display-sm text-ink md:text-4xl">
            {tool.h1}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-body">{tool.heroSubtitle}</p>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_260px]">
            <div className="rounded-vercel-lg border border-hairline bg-canvas p-6 shadow-card">
              <ImageConverter from={tool.from} to={tool.to} />
            </div>
            <aside className="hidden lg:block">
              <AdSlot position="sidebar" />
              <ul className="mt-6 space-y-4 text-sm text-body">
                <li className="flex gap-3">
                  <Lock className="h-5 w-5 shrink-0 text-ink" aria-hidden />
                  Files never leave your device
                </li>
                <li className="flex gap-3">
                  <Zap className="h-5 w-5 shrink-0 text-ink" aria-hidden />
                  No signup · Free batch of 5
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <AdSlot position="in-content" />

      <section className="mx-auto max-w-3xl px-4 py-12 prose-vercel lg:px-6">
        <h2>{tool.whyConvert.title}</h2>
        {tool.whyConvert.paragraphs.map((p) => (
          <p key={p.slice(0, 40)}>{p}</p>
        ))}

        <h2>
          How to Convert ({tool.from.toUpperCase()} → {tool.to.toUpperCase()}) in 3 Steps
        </h2>
        <ol>
          {tool.howToSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>

        <h2>Privacy: Files never leave your browser</h2>
        <p>{tool.privacyNote}</p>

        {tool.seoSections.map((s) => (
          <div key={s.heading}>
            <h2>{s.heading}</h2>
            <p>{s.content}</p>
          </div>
        ))}

        <h2>Frequently Asked Questions</h2>
        <div className="not-prose space-y-2">
          {tool.faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-vercel border border-hairline bg-canvas p-4"
            >
              <summary className="cursor-pointer text-sm font-medium text-ink">
                {faq.question}
              </summary>
              <p className="mt-2 text-sm text-body">{faq.answer}</p>
            </details>
          ))}
        </div>

        <h2>Related Tools</h2>
        <ul>
          {tool.relatedSlugs.map((slug) => {
            const related = getToolBySlug(slug) ?? tools[slug as keyof typeof tools];
            if (!related) return null;
            return (
              <li key={slug}>
                <Link href={related.path}>{related.title.split("—")[0].trim()}</Link>
              </li>
            );
          })}
        </ul>
      </section>
    </article>
  );
}

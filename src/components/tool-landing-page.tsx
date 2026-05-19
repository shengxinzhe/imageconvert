import dynamic from "next/dynamic";
import Link from "next/link";
import type { ToolConfig } from "@/lib/tools-config";
import { getToolBySlug, tools } from "@/lib/tools-config";
import { AdSlot } from "@/components/ads/ad-slot";
import { FaqJsonLd } from "@/components/seo/faq-json-ld";
import { SITE_URL } from "@/lib/constants";
import { Shield, Zap } from "lucide-react";

const ImageConverter = dynamic(
  () =>
    import("@/components/converter/image-converter").then((m) => ({
      default: m.ImageConverter,
    })),
  {
    ssr: false,
    loading: () => (
      <div className="h-48 animate-pulse rounded-xl bg-slate-100 dark:bg-slate-800" />
    ),
  }
);

export function ToolLandingPage({ tool }: { tool: ToolConfig }) {
  return (
    <article>
      <FaqJsonLd faqs={tool.faqs} url={`${SITE_URL}${tool.path}`} />
      <section className="mx-auto max-w-6xl px-4 py-10">
        <p className="text-sm font-medium text-emerald-600">100% browser-based · Private</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
          {tool.h1}
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
          {tool.heroSubtitle}
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_280px]">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <ImageConverter from={tool.from} to={tool.to} />
          </div>
          <div className="hidden lg:block">
            <AdSlot position="sidebar" />
            <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex gap-2">
                <Shield className="h-5 w-5 shrink-0 text-emerald-600" />
                Files never leave your device
              </li>
              <li className="flex gap-2">
                <Zap className="h-5 w-5 shrink-0 text-emerald-600" />
                No signup · Free batch of 5
              </li>
            </ul>
          </div>
        </div>
      </section>

      <AdSlot position="in-content" />

      <section className="mx-auto max-w-3xl px-4 py-8 prose prose-slate dark:prose-invert">
        <h2>{tool.whyConvert.title}</h2>
        {tool.whyConvert.paragraphs.map((p) => (
          <p key={p.slice(0, 40)}>{p}</p>
        ))}

        <h2>How to Convert ({tool.from.toUpperCase()} → {tool.to.toUpperCase()}) in 3 Steps</h2>
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
        <div className="not-prose space-y-4">
          {tool.faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-lg border border-slate-200 p-4 dark:border-slate-700"
            >
              <summary className="cursor-pointer font-medium text-slate-900 dark:text-white">
                {faq.question}
              </summary>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{faq.answer}</p>
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

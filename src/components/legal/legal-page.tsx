import { BlogMarkdown } from "@/components/blog/blog-markdown";
import type { AppLocale } from "@/i18n/routing";
import type { LegalPageContent } from "@/lib/legal-l10n/types";

export function LegalPage({
  content,
  locale,
}: {
  content: LegalPageContent;
  locale: AppLocale;
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 prose-vercel lg:px-6">
      <h1>{content.h1}</h1>
      {content.lastUpdated ? (
        <p className="font-mono text-sm text-mute">{content.lastUpdated}</p>
      ) : null}
      <BlogMarkdown content={content.body} locale={locale} />
    </div>
  );
}

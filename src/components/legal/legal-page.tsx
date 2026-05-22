import { BlogMarkdown } from "@/components/blog/blog-markdown";
import { SafeEmail } from "@/components/legal/safe-email";
import type { AppLocale } from "@/i18n/routing";
import { DMCA_EMAIL, PRIVACY_EMAIL } from "@/lib/constants";
import type { LegalPageContent } from "@/lib/legal-l10n/types";

export function LegalPage({
  content,
  locale,
  showContactEmails = false,
  showDmcaEmail = false,
}: {
  content: LegalPageContent;
  locale: AppLocale;
  showContactEmails?: boolean;
  showDmcaEmail?: boolean;
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 prose-vercel lg:px-6">
      <h1>{content.h1}</h1>
      {content.lastUpdated ? (
        <p className="font-mono text-sm text-mute">{content.lastUpdated}</p>
      ) : null}
      <BlogMarkdown content={content.body} locale={locale} />
      {showContactEmails ? (
        <div className="mt-8 space-y-2 border-t border-hairline pt-6 text-sm text-body not-prose">
          <p>
            Privacy: <SafeEmail email={PRIVACY_EMAIL} />
          </p>
          <p>
            DMCA: <SafeEmail email={DMCA_EMAIL} />
          </p>
        </div>
      ) : null}
      {showDmcaEmail ? (
        <div className="mt-8 border-t border-hairline pt-6 text-sm text-body not-prose">
          <p>
            DMCA: <SafeEmail email={DMCA_EMAIL} />
          </p>
        </div>
      ) : null}
    </div>
  );
}

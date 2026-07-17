import { BlogMarkdown } from "@/components/blog/blog-markdown";
import { SafeEmail } from "@/components/legal/safe-email";
import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { DMCA_EMAIL, PRIVACY_EMAIL } from "@/lib/constants";
import { audienceStyles } from "@/lib/design-variants";
import { getT } from "@/lib/i18n/translations";
import type { LegalPageContent } from "@/lib/legal-l10n/types";
import { cn } from "@/lib/utils";
import { Clock, FileText, Mail, Scale } from "lucide-react";

export function ContactPageLayout({
  content,
  locale,
}: {
  content: LegalPageContent;
  locale: AppLocale;
}) {
  const t = getT(locale);

  const cards = [
    {
      icon: Mail,
      title: t("contact.cardPrivacyTitle"),
      body: t("contact.cardPrivacyBody"),
      email: PRIVACY_EMAIL,
      emailLabel: t("contact.emailPrivacyLabel"),
      link: { href: "/privacy" as const, label: t("contact.privacyLink") },
    },
    {
      icon: Scale,
      title: t("contact.cardDmcaTitle"),
      body: t("contact.cardDmcaBody"),
      email: DMCA_EMAIL,
      emailLabel: t("contact.emailDmcaLabel"),
      link: { href: "/dmca" as const, label: t("contact.dmcaLink") },
    },
    {
      icon: FileText,
      title: t("contact.cardAboutTitle"),
      body: t("contact.cardAboutBody"),
      link: { href: "/about" as const, label: t("contact.aboutLink") },
    },
    {
      icon: Clock,
      title: t("contact.cardResponseTitle"),
      body: t("contact.cardResponseBody"),
    },
  ];

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
            {t("contact.badge")}
          </span>
          <h1 className="mt-6 text-balance text-3xl font-semibold tracking-display text-ink md:text-4xl">
            {content.h1}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-body">{t("contact.heroSubtitle")}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 lg:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-xl font-semibold tracking-display-sm text-ink">
            {t("contact.topicsTitle")}
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-body marker:text-mute">
            <li>{t("contact.topicPrivacy")}</li>
            <li>{t("contact.topicBug")}</li>
            <li>{t("contact.topicDmca")}</li>
            <li>{t("contact.topicPartner")}</li>
            <li>{t("contact.topicOther")}</li>
          </ul>
          <p className="mt-4 text-sm text-body">{t("contact.slaBody")}</p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <Link href="/about/author" className="font-medium text-link hover:text-link-deep">
              {t("contact.authorLink")}
            </Link>
            <Link
              href="/about#editorial-standards"
              className="font-medium text-link hover:text-link-deep"
            >
              {t("contact.editorialLink")}
            </Link>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className={cn("flex flex-col p-6", audienceStyles.heic.card)}
              >
                <Icon className="h-5 w-5 text-ink" aria-hidden />
                <h2 className="mt-4 font-medium text-ink">{card.title}</h2>
                <p className="mt-2 flex-1 text-sm text-body">{card.body}</p>
                {"email" in card && card.email ? (
                  <p className="mt-4 text-sm text-ink">
                    <span className="font-medium">{card.emailLabel}: </span>
                    <SafeEmail email={card.email} />
                  </p>
                ) : null}
                {"link" in card && card.link ? (
                  <Link
                    href={card.link.href}
                    className="mt-3 text-sm font-medium text-[var(--mintlify-green)] hover:underline"
                  >
                    {card.link.label}
                  </Link>
                ) : null}
              </div>
            );
          })}
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 pb-16 prose-vercel lg:px-6">
        <h2 className="not-prose text-xl font-semibold text-ink">{t("contact.helpTitle")}</h2>
        <BlogMarkdown content={content.body} locale={locale} />
      </div>
    </>
  );
}

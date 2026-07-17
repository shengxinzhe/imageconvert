import type { AppLocale } from "@/i18n/routing";
import { AUTHOR_PATH, AUTHOR_PEN_NAME } from "@/lib/author";
import { SITE_NAME } from "@/lib/constants";
import { absoluteUrl } from "@/lib/locale-path";
import { getT } from "@/lib/i18n/translations";
import { SCHEMA_LANG } from "@/lib/schema-l10n";

export function AuthorJsonLd({ locale }: { locale: AppLocale }) {
  const t = getT(locale);
  const pageUrl = absoluteUrl(AUTHOR_PATH, locale);

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${pageUrl}#profile`,
        url: pageUrl,
        name: t("author.metaTitle"),
        description: t("author.metaDescription"),
        inLanguage: SCHEMA_LANG[locale],
        mainEntity: {
          "@type": "Person",
          "@id": `${pageUrl}#person`,
          name: AUTHOR_PEN_NAME,
          url: pageUrl,
          jobTitle: t("author.role"),
          worksFor: {
            "@type": "Organization",
            name: SITE_NAME,
            url: absoluteUrl("/", locale),
          },
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

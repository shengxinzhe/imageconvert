import { AuthorPageLayout } from "@/components/site/author-page-layout";
import { AuthorJsonLd } from "@/components/seo/author-json-ld";
import { routing, type AppLocale } from "@/i18n/routing";
import { AUTHOR_PATH } from "@/lib/author";
import { getT } from "@/lib/i18n/translations";
import { legalPageMetadata } from "@/lib/site-metadata";

type PageProps = { params: { locale: string } };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: PageProps) {
  const locale = params.locale as AppLocale;
  const t = getT(locale);
  return legalPageMetadata(
    AUTHOR_PATH,
    {
      title: t("author.metaTitle"),
      description: t("author.metaDescription"),
    },
    locale,
  );
}

export default function AuthorPage({ params }: PageProps) {
  const locale = params.locale as AppLocale;
  return (
    <>
      <AuthorJsonLd locale={locale} />
      <AuthorPageLayout locale={locale} />
    </>
  );
}

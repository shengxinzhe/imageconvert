import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { AUTHOR_PATH } from "@/lib/author";
import { getT } from "@/lib/i18n/translations";

function TeamAvatar() {
  return (
    <span
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#50e3c2] to-[#0071e3] text-xs font-bold text-white shadow-sm"
      aria-hidden
    >
      MV
    </span>
  );
}

export function BlogAuthorByline({ locale }: { locale: AppLocale }) {
  const t = getT(locale);

  return (
    <div className="not-prose mt-4 flex items-start gap-3 rounded-vercel border border-hairline bg-canvas-soft px-4 py-3">
      <TeamAvatar />
      <div className="min-w-0">
        <p className="text-sm font-medium text-ink">
          <Link href={AUTHOR_PATH} className="hover:text-link-deep">
            {t("blog.authorName")}
          </Link>
        </p>
        <p className="mt-0.5 text-xs leading-relaxed text-body">
          {t("blog.authorBio")}{" "}
          <Link href={AUTHOR_PATH} className="font-medium text-link hover:text-link-deep">
            {t("blog.authorAboutLink")}
          </Link>
          {" · "}
          <Link
            href="/about#editorial-standards"
            className="font-medium text-link hover:text-link-deep"
          >
            {t("blog.authorStandardsLink")}
          </Link>
        </p>
      </div>
    </div>
  );
}

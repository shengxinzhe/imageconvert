import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { getT } from "@/lib/i18n/translations";

function TeamAvatar() {
  return (
    <span
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#50e3c2] to-[#0071e3] text-xs font-bold text-white shadow-sm"
      aria-hidden
    >
      H
    </span>
  );
}

export function BlogAuthorByline({ locale }: { locale: AppLocale }) {
  const t = getT(locale);

  return (
    <div className="not-prose mt-4 flex items-start gap-3 rounded-vercel border border-hairline bg-canvas-soft px-4 py-3">
      <TeamAvatar />
      <div className="min-w-0">
        <p className="text-sm font-medium text-ink">{t("blog.authorName")}</p>
        <p className="mt-0.5 text-xs leading-relaxed text-body">
          {t("blog.authorBio")}{" "}
          <Link href="/about" className="font-medium text-link hover:text-link-deep">
            {t("blog.authorAboutLink")}
          </Link>
        </p>
      </div>
    </div>
  );
}

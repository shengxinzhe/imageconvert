import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { audienceStyles } from "@/lib/design-variants";
import type { ToolConfig } from "@/lib/tools-config";
import { heicCardUseKeys, toolHomeCardId } from "@/lib/home-tool-cards";
import { getT } from "@/lib/i18n/translations";
import { toolShortTitle } from "@/lib/tool-display";
import { cn } from "@/lib/utils";

type Variant = "heic" | "developer";

export function HomeToolCard({
  tool,
  locale,
  variant,
}: {
  tool: ToolConfig;
  locale: AppLocale;
  variant: Variant;
}) {
  const t = getT(locale);
  const cardId = toolHomeCardId[tool.slug as keyof typeof toolHomeCardId];
  const prefix = `home.cards.${cardId}`;

  return (
    <Link
      href={`/${tool.slug}`}
      className={cn(
        "group p-5 shadow-card transition hover:shadow-card-hover",
        variant === "heic"
          ? audienceStyles.heic.card
          : "rounded-vercel-lg border border-hairline bg-canvas hover:border-[#c4c4ef]"
      )}
    >
      <p
        className={cn(
          "font-mono text-xs",
          variant === "heic" ? "text-mute" : "text-[#5e6ad2]"
        )}
      >
        {tool.from} → {tool.to}
      </p>
      <h3
        className={cn(
          "mt-2 font-medium text-ink",
          variant === "developer" && "group-hover:text-[#5e6ad2]"
        )}
      >
        {toolShortTitle(tool)}
      </h3>
      <p className="mt-2 text-sm text-body">{t(`${prefix}.scenario`)}</p>
      {variant === "heic" ? (
        <ul className="mt-3 flex flex-wrap gap-2">
          {heicCardUseKeys.map((key) => (
            <li
              key={key}
              className="rounded-full border border-hairline bg-canvas-soft px-2.5 py-0.5 text-xs text-ink"
            >
              {t(`${prefix}.${key}`)}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-3 font-mono text-xs text-[#5e6ad2]">{t(`${prefix}.tags`)}</p>
      )}
    </Link>
  );
}

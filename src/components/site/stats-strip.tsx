import { cn } from "@/lib/utils";
import { Globe, Layers, ServerOff } from "lucide-react";

type Stat = {
  icon: typeof Layers;
  label: string;
};

export function StatsStrip({
  stats,
  className,
}: {
  stats: Stat[];
  className?: string;
}) {
  return (
    <ul
      className={cn(
        "mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3 sm:gap-6",
        className
      )}
    >
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <li
            key={stat.label}
            className="rounded-vercel-lg border border-hairline bg-canvas px-4 py-5 text-center shadow-card"
          >
            <Icon className="mx-auto h-5 w-5 text-ink" aria-hidden />
            <p className="mt-3 text-sm font-medium text-ink">{stat.label}</p>
          </li>
        );
      })}
    </ul>
  );
}

export const statIcons = {
  tools: Layers,
  languages: Globe,
  upload: ServerOff,
} as const;

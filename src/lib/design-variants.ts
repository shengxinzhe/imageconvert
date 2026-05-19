import type { ToolSlug } from "@/lib/tools-config";

/** Layered styles on top of shared Vercel/Cal base tokens (DESIGN.md) */
export type ToolAudience = "heic" | "developer";

const HEIC_SLUGS: ToolSlug[] = ["heic-to-jpg", "heic-to-png"];

export function getToolAudience(slug: string): ToolAudience {
  return HEIC_SLUGS.includes(slug as ToolSlug) ? "heic" : "developer";
}

export const audienceStyles = {
  heic: {
    label: "iPhone & iPad",
    hero: "hero-heic",
    badge: "border-hairline bg-canvas text-ink",
    cta: "rounded-full bg-ink text-white hover:bg-[#333]",
    card: "rounded-2xl border border-hairline bg-canvas shadow-card",
    accentText: "text-ink",
    accentIcon: "text-ink",
    prose: "prose-vercel prose-heic",
  },
  developer: {
    label: "Developers & the web",
    hero: "mesh-hero",
    badge: "border-[#e4e4ff] bg-[#f5f5ff] font-mono text-xs text-[#5e6ad2]",
    cta: "rounded-full bg-[#5e6ad2] text-white hover:bg-[#4f5bb8]",
    card: "rounded-vercel-lg border border-hairline bg-canvas shadow-card",
    accentText: "text-[#5e6ad2]",
    accentIcon: "text-[#5e6ad2]",
    prose: "prose-vercel prose-dev",
  },
} as const;

export const homeStyles = {
  heicSection: "hero-heic border-b border-hairline",
  devSection: "bg-canvas-soft border-b border-hairline",
  devBadge: audienceStyles.developer.badge,
  heicCta: audienceStyles.heic.cta,
  devCta: audienceStyles.developer.cta,
};

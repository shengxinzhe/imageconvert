export function isEzoicEnabled(): boolean {
  return process.env.NEXT_PUBLIC_EZOIC_ENABLED === "true";
}

export function runEzoic(fn: () => void) {
  if (typeof window === "undefined") return;
  if (!window.ezstandalone) {
    window.ezstandalone = { cmd: [] } as NonNullable<typeof window.ezstandalone>;
  }
  window.ezstandalone.cmd.push(fn);
}

export function getEzoicPlaceholderId(position: "sidebar" | "in-content"): number {
  const raw =
    position === "sidebar"
      ? process.env.NEXT_PUBLIC_EZOIC_PLACEHOLDER_SIDEBAR
      : process.env.NEXT_PUBLIC_EZOIC_PLACEHOLDER_IN_CONTENT;
  const id = Number(raw);
  return Number.isFinite(id) ? id : position === "sidebar" ? 101 : 102;
}

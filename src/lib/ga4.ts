/** HeicSave GA4 measurement ID (public in page source; override via env if needed). */
export const GA_MEASUREMENT_ID_DEFAULT = "G-3EJJVL98R0";

export function getGaMeasurementId(): string | undefined {
  const id =
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ||
    GA_MEASUREMENT_ID_DEFAULT;
  return id.startsWith("G-") ? id : undefined;
}

export function isGa4Enabled(): boolean {
  return Boolean(getGaMeasurementId());
}

type GtagWindow = Window & { gtag?: (...args: unknown[]) => void };

function gtag(...args: unknown[]) {
  if (typeof window === "undefined") return;
  (window as GtagWindow).gtag?.(...args);
}

/** Send a GA4 page_view (only after cookie consent). */
export function trackGaPageview(pagePath?: string) {
  const id = getGaMeasurementId();
  if (!id || typeof window === "undefined") return;

  const path =
    pagePath ?? window.location.pathname + window.location.search;

  gtag("event", "page_view", {
    send_to: id,
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}

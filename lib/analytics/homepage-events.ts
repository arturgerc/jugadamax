type HomepageEventName =
  | "homepage_category_click"
  | "homepage_affiliate_click"
  | "homepage_review_click"
  | "homepage_latest_click"
  | "homepage_promo_click";

type HomepageEventParams = Record<string, string | number | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Safe homepage analytics helper. No-ops during SSR and when gtag is absent.
 * Never throws; never blocks navigation; never sends personal data.
 */
export function trackHomepageEvent(
  event: HomepageEventName,
  params: HomepageEventParams = {},
): void {
  if (typeof window === "undefined") return;

  const payload = { event, ...params };

  try {
    window.dispatchEvent(new CustomEvent("jugadamax:analytics", { detail: payload }));
  } catch {
    // ignore
  }

  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", event, params);
    }
  } catch {
    // ignore
  }
}

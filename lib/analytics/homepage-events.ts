type AnalyticsEventName =
  | "homepage_category_click"
  | "homepage_affiliate_click"
  | "homepage_review_click"
  | "homepage_latest_click"
  | "homepage_promo_click"
  | "crypto_page_affiliate_click"
  | "crypto_page_review_click"
  | "crypto_page_category_click"
  | "fiat_page_affiliate_click"
  | "fiat_page_review_click"
  | "fiat_page_category_click"
  | "bonus_page_affiliate_click"
  | "bonus_page_review_click"
  | "bonus_page_category_click";

type AnalyticsEventParams = Record<string, string | number | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Safe analytics helper. No-ops during SSR and when gtag is absent.
 * Never throws; never blocks navigation; never sends personal data.
 */
export function trackHomepageEvent(
  event: AnalyticsEventName,
  params: AnalyticsEventParams = {},
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

/** Alias for non-homepage surfaces that reuse the same safe helper. */
export const trackAnalyticsEvent = trackHomepageEvent;

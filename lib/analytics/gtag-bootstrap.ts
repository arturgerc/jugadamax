const DENIED_ADS = {
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
} as const;

let stubReady = false;
let configuredMeasurementId: string | null = null;

/**
 * Create the gtag stub + dataLayer. Safe to call multiple times.
 * Does not load the external Google script.
 */
export function ensureGtagStub(): void {
  if (typeof window === "undefined") return;
  if (stubReady && typeof window.gtag === "function") return;

  window.dataLayer = window.dataLayer || [];
  const dataLayer = window.dataLayer;
  window.gtag = function gtag() {
    // Match Google's snippet: push the Arguments object, not a rest array.
    // eslint-disable-next-line prefer-rest-params
    dataLayer.push(arguments);
  };

  stubReady = true;
}

/** Consent Mode defaults — all denied before any measurement. */
export function setConsentDefaultsDenied(): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  window.gtag("consent", "default", {
    analytics_storage: "denied",
    ...DENIED_ADS,
  });
}

export function updateAnalyticsConsentGranted(): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  window.gtag("consent", "update", {
    analytics_storage: "granted",
    ...DENIED_ADS,
  });
}

export function updateAnalyticsConsentDenied(): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  window.gtag("consent", "update", {
    analytics_storage: "denied",
    ...DENIED_ADS,
  });
}

/**
 * Prepare Consent Mode for an upcoming GA load after the visitor granted analytics.
 */
export function prepareAnalyticsForLoad(): void {
  ensureGtagStub();
  setConsentDefaultsDenied();
  updateAnalyticsConsentGranted();
}

export function configureGaMeasurement(measurementId: string): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  if (configuredMeasurementId === measurementId) return;

  window.gtag("js", new Date());
  window.gtag("config", measurementId);
  configuredMeasurementId = measurementId;
}

/**
 * Best-effort removal of first-party GA cookies on the current host.
 * Cannot clear cookies on googletagmanager.com / google domains.
 */
export function clearFirstPartyGaCookies(): void {
  if (typeof document === "undefined" || typeof window === "undefined") return;

  const names = document.cookie
    .split(";")
    .map((part) => part.trim().split("=")[0])
    .filter((name) => name === "_ga" || name.startsWith("_ga_"));

  if (names.length === 0) return;

  const hostname = window.location.hostname;
  const domainCandidates = new Set<string | undefined>([
    undefined,
    hostname,
    `.${hostname}`,
  ]);

  const parts = hostname.split(".");
  if (parts.length > 2) {
    const parent = parts.slice(-2).join(".");
    domainCandidates.add(parent);
    domainCandidates.add(`.${parent}`);
  }

  for (const name of names) {
    for (const domain of domainCandidates) {
      const domainAttr = domain ? `; domain=${domain}` : "";
      document.cookie = `${name}=; Max-Age=0; path=/${domainAttr}`;
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domainAttr}`;
    }
  }
}

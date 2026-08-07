export type AnalyticsConsentValue = "granted" | "denied";

export const ANALYTICS_CONSENT_STORAGE_KEY = "jm_analytics_consent_v1";

export const ANALYTICS_PREFERENCES_EVENT = "jugadamax:analytics-preferences";

export const ANALYTICS_CONSENT_CHANGED_EVENT = "jugadamax:analytics-consent-changed";

function notifyConsentChanged(): void {
  if (typeof window === "undefined") return;
  try {
    window.dispatchEvent(new Event(ANALYTICS_CONSENT_CHANGED_EVENT));
  } catch {
    // ignore
  }
}

/**
 * Read persisted analytics consent from localStorage.
 * Returns null when unset or when storage is unavailable.
 */
export function getAnalyticsConsent(): AnalyticsConsentValue | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(ANALYTICS_CONSENT_STORAGE_KEY);
    if (raw === "granted" || raw === "denied") return raw;
    return null;
  } catch {
    return null;
  }
}

export function setAnalyticsConsent(value: AnalyticsConsentValue): void {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(ANALYTICS_CONSENT_STORAGE_KEY, value);
  } catch {
    // Storage may be unavailable (private mode / blocked). Preference is best-effort.
  }

  notifyConsentChanged();
}

export function clearAnalyticsConsent(): void {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.removeItem(ANALYTICS_CONSENT_STORAGE_KEY);
  } catch {
    // ignore
  }

  notifyConsentChanged();
}

/** Ask the mounted AnalyticsRoot to reopen the consent panel. */
export function openAnalyticsPreferences(): void {
  if (typeof window === "undefined") return;

  try {
    window.dispatchEvent(new Event(ANALYTICS_PREFERENCES_EVENT));
  } catch {
    // ignore
  }
}

export function subscribeAnalyticsConsent(onStoreChange: () => void): () => void {
  if (typeof window === "undefined") {
    return () => {};
  }

  const onChange = () => onStoreChange();
  window.addEventListener(ANALYTICS_CONSENT_CHANGED_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(ANALYTICS_CONSENT_CHANGED_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

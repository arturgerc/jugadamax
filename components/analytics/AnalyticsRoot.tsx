"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { AnalyticsConsent, type AnalyticsConsentLocale } from "@/components/analytics/AnalyticsConsent";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import {
  ANALYTICS_PREFERENCES_EVENT,
  getAnalyticsConsent,
  setAnalyticsConsent,
  subscribeAnalyticsConsent,
} from "@/lib/analytics/consent";
import {
  clearFirstPartyGaCookies,
  updateAnalyticsConsentDenied,
} from "@/lib/analytics/gtag-bootstrap";
import { getGaMeasurementId } from "@/lib/analytics/measurement-id";

type AnalyticsRootProps = {
  locale: AnalyticsConsentLocale;
};

function useIsClient(): boolean {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

function useAnalyticsConsentStore() {
  return useSyncExternalStore(
    subscribeAnalyticsConsent,
    getAnalyticsConsent,
    () => null,
  );
}

/**
 * Shared ES/EN analytics shell: consent UI + GA4 loader.
 * Renders nothing when NEXT_PUBLIC_GA_MEASUREMENT_ID is unset.
 * Client-only; does not affect static route classification.
 */
export function AnalyticsRoot({ locale }: AnalyticsRootProps) {
  const measurementId = getGaMeasurementId();
  const isClient = useIsClient();
  const consent = useAnalyticsConsentStore();
  const [preferencesOpen, setPreferencesOpen] = useState(false);

  useEffect(() => {
    if (!measurementId) return;

    function onPreferencesOpen() {
      setPreferencesOpen(true);
    }

    window.addEventListener(ANALYTICS_PREFERENCES_EVENT, onPreferencesOpen);
    return () => {
      window.removeEventListener(ANALYTICS_PREFERENCES_EVENT, onPreferencesOpen);
    };
  }, [measurementId]);

  if (!measurementId || !isClient) {
    return null;
  }

  function handleAccept() {
    setAnalyticsConsent("granted");
    setPreferencesOpen(false);
  }

  function handleReject() {
    const wasGranted = consent === "granted";
    setAnalyticsConsent("denied");
    setPreferencesOpen(false);

    if (wasGranted) {
      updateAnalyticsConsentDenied();
      clearFirstPartyGaCookies();
      // Reload so the external tag is not kept active for the rest of the SPA session.
      window.location.reload();
    }
  }

  const showPanel = preferencesOpen || consent === null;

  return (
    <>
      <GoogleAnalytics
        measurementId={measurementId}
        active={consent === "granted"}
      />
      {showPanel ? (
        <AnalyticsConsent
          locale={locale}
          onAccept={handleAccept}
          onReject={handleReject}
        />
      ) : null}
    </>
  );
}

"use client";

import Script from "next/script";
import {
  configureGaMeasurement,
  prepareAnalyticsForLoad,
} from "@/lib/analytics/gtag-bootstrap";

type GoogleAnalyticsProps = {
  measurementId: string;
  active: boolean;
};

/**
 * Loads GA4 only when `active` (analytics consent granted).
 * Consent Mode is applied before the external script and config.
 * Does not implement manual page_view tracking.
 */
export function GoogleAnalytics({ measurementId, active }: GoogleAnalyticsProps) {
  if (!active || !measurementId) {
    return null;
  }

  // Idempotent stub + Consent Mode must exist before the external tag runs.
  prepareAnalyticsForLoad();

  return (
    <Script
      id="jm-ga4-gtag"
      src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`}
      strategy="afterInteractive"
      onLoad={() => {
        prepareAnalyticsForLoad();
        configureGaMeasurement(measurementId);
      }}
    />
  );
}

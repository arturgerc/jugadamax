"use client";

import { openAnalyticsPreferences } from "@/lib/analytics/consent";
import { getGaMeasurementId } from "@/lib/analytics/measurement-id";
import { cn, focusRing } from "@/lib/utils";

type AnalyticsPreferencesButtonProps = {
  locale: "es-MX" | "en";
  className?: string;
};

/**
 * Footer control to reopen analytics consent. Hidden when GA is not configured.
 */
export function AnalyticsPreferencesButton({
  locale,
  className,
}: AnalyticsPreferencesButtonProps) {
  const measurementId = getGaMeasurementId();

  if (!measurementId) {
    return null;
  }

  const label =
    locale === "es-MX" ? "Preferencias de analítica" : "Analytics preferences";

  return (
    <button
      type="button"
      onClick={() => openAnalyticsPreferences()}
      className={cn(
        "rounded-sm text-sm text-muted-foreground transition-colors hover:text-foreground",
        focusRing,
        className,
      )}
    >
      {label}
    </button>
  );
}

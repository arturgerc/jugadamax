"use client";

import Link from "next/link";
import { cn, focusRing } from "@/lib/utils";

export type AnalyticsConsentLocale = "es-MX" | "en";

type AnalyticsConsentProps = {
  locale: AnalyticsConsentLocale;
  onAccept: () => void;
  onReject: () => void;
};

const COPY = {
  "es-MX": {
    title: "Analítica y privacidad",
    text: "Usamos Google Analytics para entender cómo se utiliza JugadaMax. Puedes aceptar o rechazar la analítica opcional.",
    accept: "Aceptar analítica",
    reject: "Rechazar",
    privacyLabel: "Política de privacidad",
    privacyHref: "/politica-de-privacidad",
  },
  en: {
    title: "Analytics and privacy",
    text: "We use Google Analytics to understand how JugadaMax is used. You can accept or reject optional analytics.",
    accept: "Accept analytics",
    reject: "Reject",
    privacyLabel: "Privacy Policy",
    privacyHref: "/en/privacy-policy",
  },
} as const;

/**
 * Compact bottom consent panel. Accept and Reject share comparable prominence.
 */
export function AnalyticsConsent({ locale, onAccept, onReject }: AnalyticsConsentProps) {
  const copy = COPY[locale];

  return (
    <div
      role="dialog"
      aria-labelledby="jm-analytics-consent-title"
      aria-describedby="jm-analytics-consent-desc"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border/60 bg-[var(--jm-graphite)]/95 p-4 shadow-[0_-8px_24px_rgba(0,0,0,0.35)] backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="min-w-0 max-w-2xl">
          <h2
            id="jm-analytics-consent-title"
            className="text-sm font-semibold text-foreground"
          >
            {copy.title}
          </h2>
          <p
            id="jm-analytics-consent-desc"
            className="mt-1 text-sm text-muted-foreground"
          >
            {copy.text}{" "}
            <Link
              href={copy.privacyHref}
              className={cn(
                "rounded-sm text-[var(--jm-gold)] underline-offset-2 hover:underline",
                focusRing,
              )}
            >
              {copy.privacyLabel}
            </Link>
          </p>
        </div>

        <div className="flex shrink-0 flex-wrap gap-2">
          <button
            type="button"
            onClick={onReject}
            className={cn(
              "inline-flex min-h-10 items-center justify-center rounded-md border border-border/80 bg-transparent px-4 text-sm font-medium text-foreground transition-colors hover:bg-card",
              focusRing,
            )}
          >
            {copy.reject}
          </button>
          <button
            type="button"
            onClick={onAccept}
            className={cn(
              "inline-flex min-h-10 items-center justify-center rounded-md bg-[var(--jm-gold)] px-4 text-sm font-semibold text-[var(--jm-navy)] transition-colors hover:bg-[var(--jm-gold-strong)]",
              focusRing,
            )}
          >
            {copy.accept}
          </button>
        </div>
      </div>
    </div>
  );
}

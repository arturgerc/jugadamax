"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { UiLocale } from "@/lib/i18n/ui-labels";

/**
 * Editorial rating display. Renders ONLY when a rating is present (author-
 * attributed editorial score, 0–5). Never fabricates or aggregates a rating
 * (Constitution Principle V) — if no rating exists, renders nothing.
 */
export function RatingStars({
  rating,
  className,
  locale,
}: {
  rating?: number;
  className?: string;
  /** Defaults from route: /en/* → English, otherwise Spanish. */
  locale?: UiLocale;
}) {
  const pathname = usePathname();
  const resolvedLocale: UiLocale =
    locale ?? (pathname?.startsWith("/en") ? "en" : "es");

  if (rating === undefined || rating === null) return null;

  const value = Math.round(Math.max(0, Math.min(5, rating)) * 10) / 10;
  const ariaLabel =
    resolvedLocale === "en"
      ? `Editorial rating ${value.toFixed(1)} out of 5`
      : `Calificación editorial ${value.toFixed(1)} de 5`;

  return (
    <span
      aria-label={ariaLabel}
      className={cn("inline-flex items-center gap-1 text-sm", className)}
    >
      <span aria-hidden="true" className="text-primary">
        ★
      </span>
      <span className="font-semibold text-foreground">{value.toFixed(1)}</span>
      <span className="text-muted-foreground">/5</span>
    </span>
  );
}

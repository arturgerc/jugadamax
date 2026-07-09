import type { ImageRef } from "@/types/content";
import Link from "next/link";
import { OperatorLogo } from "@/components/brand/OperatorLogo";
import { cn, focusRing } from "@/lib/utils";

export type OfferCardVisualVariant = "mexico" | "crypto" | "fiat" | "sportsbook" | "dark";

export type OfferCardProps = {
  operatorName: string;
  operatorId: string;
  badge?: string;
  headline: string;
  subheadline?: string;
  offerText: string;
  promoCode?: string;
  paymentBadges: string[];
  featureBullets: string[];
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  termsNote: string;
  responsibleNote: string;
  visualVariant?: OfferCardVisualVariant;
  logo?: ImageRef;
  className?: string;
};

const AFFILIATE_REL = "sponsored nofollow noopener noreferrer";

function isExternalHref(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://");
}

const variantShell: Record<OfferCardVisualVariant, string> = {
  mexico:
    "border-primary/30 bg-gradient-to-br from-[#16233f] via-[#111417] to-[#0A1931] shadow-[0_4px_24px_-4px_rgba(0,0,0,0.45)]",
  fiat: "border-primary/25 bg-gradient-to-br from-primary/8 via-[#111417] to-[#0A1931]",
  sportsbook:
    "border-emerald-500/25 bg-gradient-to-br from-emerald-500/8 via-[#111417] to-[#0A1931]",
  crypto:
    "border-primary/20 bg-gradient-to-br from-[#16233f] via-[#111417] to-[#0A1931] ring-1 ring-primary/10",
  dark: "border-white/10 bg-card",
};

const variantGlow: Record<OfferCardVisualVariant, string> = {
  mexico:
    "bg-[radial-gradient(ellipse_at_top_right,rgba(255,184,0,0.12),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(0,168,107,0.08),transparent_45%),radial-gradient(ellipse_at_top_left,rgba(196,30,58,0.06),transparent_40%)]",
  fiat: "bg-[radial-gradient(ellipse_at_top_right,rgba(255,184,0,0.1),transparent_55%)]",
  sportsbook:
    "bg-[radial-gradient(ellipse_at_top_right,rgba(0,168,107,0.12),transparent_55%)]",
  crypto: "bg-[radial-gradient(ellipse_at_top_right,rgba(255,184,0,0.08),transparent_55%)]",
  dark: "bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.04),transparent_55%)]",
};

const variantBadge: Record<OfferCardVisualVariant, string> = {
  mexico: "border-primary/30 bg-primary/10 text-primary",
  fiat: "border-primary/25 bg-primary/10 text-primary",
  sportsbook: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
  crypto: "border-primary/25 bg-primary/10 text-primary",
  dark: "border-white/15 bg-white/5 text-muted-foreground",
};

/**
 * Premium affiliate offer card for approved Mexico/LATAM partners.
 * CSS gradients only — no external imagery required beyond optional operator logo.
 */
export function OfferCard({
  operatorName,
  operatorId,
  badge,
  headline,
  subheadline,
  offerText,
  promoCode,
  paymentBadges,
  featureBullets,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  termsNote,
  responsibleNote,
  visualVariant = "dark",
  logo,
  className,
}: OfferCardProps) {
  const variant = visualVariant;

  return (
    <article
      className={cn(
        "relative overflow-hidden rounded-2xl border p-5 sm:p-6",
        variantShell[variant],
        className,
      )}
      aria-label={`Oferta de ${operatorName}`}
    >
      <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0", variantGlow[variant])} />

      <div className="relative flex flex-col gap-5 lg:flex-row lg:items-stretch lg:justify-between">
        <div className="min-w-0 flex-1 space-y-4">
          <div className="flex flex-wrap items-start gap-3">
            <OperatorLogo name={operatorName} logo={logo} operatorId={operatorId} />
            <div className="min-w-0 flex-1 space-y-1.5">
              {badge ? (
                <span
                  className={cn(
                    "inline-flex items-center rounded-full border px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide",
                    variantBadge[variant],
                  )}
                >
                  {badge}
                </span>
              ) : null}
              <h3 className="text-lg font-bold tracking-tight text-foreground sm:text-xl">{headline}</h3>
              {subheadline ? (
                <p className="text-sm font-medium text-muted-foreground">{subheadline}</p>
              ) : null}
            </div>
          </div>

          <p
            className={cn(
              "rounded-lg border px-3 py-2.5 text-sm font-medium text-foreground",
              variant === "mexico" || variant === "fiat"
                ? "border-primary/25 bg-primary/5"
                : variant === "sportsbook"
                  ? "border-emerald-500/20 bg-emerald-500/5"
                  : "border-white/10 bg-[#16233f]/60",
            )}
          >
            {offerText}
          </p>

          {promoCode ? (
            <p className="text-xs text-muted-foreground">
              Código promocional informado por el operador:{" "}
              <span className="font-mono font-semibold text-foreground">{promoCode}</span>. Verifica
              términos oficiales antes de usarlo.
            </p>
          ) : null}

          {paymentBadges.length > 0 ? (
            <ul className="flex flex-wrap gap-1.5" aria-label="Métodos de pago o mercados">
              {paymentBadges.map((label) => (
                <li
                  key={label}
                  className="inline-flex items-center rounded-md border border-border/60 bg-[#16233f]/80 px-2.5 py-1 text-xs font-medium text-muted-foreground"
                >
                  {label}
                </li>
              ))}
            </ul>
          ) : null}

          {featureBullets.length > 0 ? (
            <ul className="grid gap-2 sm:grid-cols-2">
              {featureBullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex gap-2 text-sm leading-snug text-muted-foreground"
                >
                  <span aria-hidden="true" className="mt-0.5 shrink-0 text-primary">
                    ✓
                  </span>
                  {bullet}
                </li>
              ))}
            </ul>
          ) : null}

          <div className="space-y-2 border-t border-white/10 pt-3">
            <p className="text-xs leading-relaxed text-muted-foreground">{termsNote}</p>
            <p className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/8 px-2.5 py-1 text-xs font-medium text-emerald-400">
              {responsibleNote}
            </p>
          </div>
        </div>

        <div className="flex shrink-0 flex-col justify-center gap-2 lg:w-56">
          <a
            href={primaryCtaHref}
            target="_blank"
            rel={AFFILIATE_REL}
            className={cn(
              "inline-flex min-h-11 w-full items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold",
              "bg-primary text-primary-foreground transition-colors hover:bg-[var(--jm-gold-strong)]",
              focusRing,
            )}
          >
            {primaryCtaLabel}
          </a>
          {secondaryCtaLabel && secondaryCtaHref ? (
            isExternalHref(secondaryCtaHref) ? (
              <a
                href={secondaryCtaHref}
                target="_blank"
                rel={AFFILIATE_REL}
                className={cn(
                  "inline-flex min-h-11 w-full items-center justify-center rounded-md border border-primary/40 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/10",
                  focusRing,
                )}
              >
                {secondaryCtaLabel}
              </a>
            ) : (
              <Link
                href={secondaryCtaHref}
                className={cn(
                  "inline-flex min-h-11 w-full items-center justify-center rounded-md border border-primary/40 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/10",
                  focusRing,
                )}
              >
                {secondaryCtaLabel}
              </Link>
            )
          ) : null}
        </div>
      </div>
    </article>
  );
}

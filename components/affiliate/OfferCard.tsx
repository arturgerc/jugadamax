import type { ImageRef } from "@/types/content";
import Link from "next/link";
import { OperatorLogo } from "@/components/brand/OperatorLogo";
import { cn, focusRing } from "@/lib/utils";

export type OfferCardVisualVariant = "mexico" | "crypto" | "fiat" | "sportsbook" | "dark";

export type OfferCardVisual = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  chips?: string[];
  variant?: "betsson" | "mexico" | "crypto" | "dark";
  compact?: boolean;
};

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
  visual?: OfferCardVisual;
  visualVariant?: OfferCardVisualVariant;
  mobileMaxBullets?: number;
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

const visualPanelShell: Record<NonNullable<OfferCardVisual["variant"]>, string> = {
  betsson:
    "border-orange-500/25 bg-gradient-to-br from-[#0A1931] via-[#111a2e] to-[#0d1424] shadow-[inset_0_1px_0_rgba(255,184,0,0.12)]",
  mexico:
    "border-primary/30 bg-gradient-to-br from-[#16233f] via-[#111417] to-[#0A1931]",
  crypto:
    "border-primary/20 bg-gradient-to-br from-[#16233f] via-[#111417] to-[#0A1931]",
  dark: "border-white/10 bg-gradient-to-br from-[#16233f] to-[#0A1931]",
};

const visualPanelGlow: Record<NonNullable<OfferCardVisual["variant"]>, string> = {
  betsson:
    "bg-[radial-gradient(ellipse_at_top_right,rgba(255,107,0,0.22),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(147,51,234,0.14),transparent_50%)]",
  mexico:
    "bg-[radial-gradient(ellipse_at_top_right,rgba(255,184,0,0.14),transparent_55%)]",
  crypto:
    "bg-[radial-gradient(ellipse_at_top_right,rgba(255,184,0,0.1),transparent_55%)]",
  dark: "bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.05),transparent_55%)]",
};

function OfferVisualPanel({ visual }: { visual: OfferCardVisual }) {
  const panelVariant = visual.variant ?? "dark";
  const compact = visual.compact === true;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border",
        compact ? "p-2.5" : "p-2.5 md:p-3 lg:p-4",
        visualPanelShell[panelVariant],
      )}
    >
      <div className={cn("pointer-events-none absolute inset-0", visualPanelGlow[panelVariant])} />

      {panelVariant === "betsson" ? (
        <>
          <div className="pointer-events-none absolute -right-2 -top-2 h-10 w-10 rounded-full border border-orange-400/20 bg-orange-500/10 md:-right-3 md:-top-3 md:h-14 md:w-14" />
          <div className="pointer-events-none absolute -bottom-3 -left-1 h-7 w-7 rounded-full border border-purple-400/15 bg-purple-500/8 md:-bottom-4 md:-left-2 md:h-10 md:w-10" />
          <div className="pointer-events-none absolute bottom-4 right-6 h-4 w-4 rounded-full bg-gradient-to-br from-[#FFB800] to-[#FF6B00] opacity-70 shadow-[0_0_12px_rgba(255,107,0,0.35)] md:bottom-6 md:right-8 md:h-5 md:w-5" />
          {!compact ? (
            <div className="pointer-events-none absolute right-10 top-4 hidden h-3 w-3 rounded-full bg-[#FFB800]/50 md:block" />
          ) : null}
        </>
      ) : null}

      <div className={cn("relative", compact ? "space-y-1.5" : "space-y-1 md:space-y-2")}>
        {visual.eyebrow ? (
          <p
            className={cn(
              "font-semibold uppercase tracking-wide text-orange-300/90",
              compact ? "text-[0.6rem]" : "text-[0.6rem] md:text-[0.65rem]",
            )}
          >
            {visual.eyebrow}
          </p>
        ) : null}
        <p
          className={cn(
            "font-extrabold leading-tight tracking-tight text-[#F5F5F0]",
            compact ? "text-base" : "text-base md:text-lg lg:text-xl",
            panelVariant === "betsson" &&
              "bg-gradient-to-r from-[#FFB800] via-[#FFC300] to-[#FF8C00] bg-clip-text text-transparent",
          )}
        >
          {visual.title}
        </p>
        {visual.subtitle ? (
          <p
            className={cn(
              "text-muted-foreground",
              compact ? "text-[0.7rem]" : "text-[0.7rem] md:text-xs",
            )}
          >
            {visual.subtitle}
          </p>
        ) : null}
        {visual.chips && visual.chips.length > 0 ? (
          <ul className="flex flex-wrap gap-1">
            {visual.chips.map((chip) => (
              <li
                key={chip}
                className={cn(
                  "rounded border font-medium",
                  compact ? "px-1.5 py-0.5 text-[0.6rem]" : "px-1.5 py-0.5 text-[0.6rem] md:px-2 md:text-[0.65rem]",
                  panelVariant === "betsson"
                    ? "border-orange-500/25 bg-orange-500/10 text-orange-200/90"
                    : "border-white/15 bg-white/5 text-muted-foreground",
                )}
              >
                {chip}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

type OfferCardCtasProps = {
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
};

function OfferCardCtas({
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
}: OfferCardCtasProps) {
  return (
    <>
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
    </>
  );
}

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
  visual,
  visualVariant = "dark",
  mobileMaxBullets,
  logo,
  className,
}: OfferCardProps) {
  const variant = visualVariant;
  const showInlineOfferText = !visual;

  return (
    <article
      className={cn(
        "relative overflow-hidden rounded-2xl border p-4 sm:p-5 lg:p-6",
        variantShell[variant],
        className,
      )}
      aria-label={`Oferta de ${operatorName}`}
    >
      <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0", variantGlow[variant])} />

      <div className="relative flex flex-col gap-3 lg:flex-row lg:items-stretch lg:justify-between lg:gap-5">
        <div className="min-w-0 flex-1 space-y-3 lg:space-y-4">
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

          {showInlineOfferText ? (
            <p
              className={cn(
                "rounded-lg border px-3 py-2.5 text-base font-extrabold tracking-tight text-foreground sm:text-lg",
                variant === "mexico" || variant === "fiat"
                  ? "border-primary/30 bg-primary/8 text-primary"
                  : variant === "sportsbook"
                    ? "border-emerald-500/25 bg-emerald-500/8 text-emerald-300"
                    : "border-white/10 bg-[#16233f]/60",
              )}
            >
              {offerText}
            </p>
          ) : null}

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
            <ul className="grid gap-1.5 md:grid-cols-2 md:gap-2">
              {featureBullets.map((bullet, index) => (
                <li
                  key={bullet}
                  className={cn(
                    "flex gap-2 text-sm leading-snug text-muted-foreground",
                    mobileMaxBullets != null &&
                      index >= mobileMaxBullets &&
                      "max-md:hidden",
                  )}
                >
                  <span aria-hidden="true" className="mt-0.5 shrink-0 text-primary">
                    ✓
                  </span>
                  {bullet}
                </li>
              ))}
            </ul>
          ) : null}

          <div className="space-y-2 border-t border-white/10 pt-2.5 md:pt-3">
            <p className="text-xs leading-relaxed text-muted-foreground">{termsNote}</p>
            <p className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/8 px-2.5 py-1 text-xs font-medium text-emerald-400">
              {responsibleNote}
            </p>
          </div>
        </div>

        <div className="flex shrink-0 flex-col justify-center gap-2 lg:w-60">
          <div className="order-1 flex flex-col gap-2 lg:order-2">
            <OfferCardCtas
              primaryCtaLabel={primaryCtaLabel}
              primaryCtaHref={primaryCtaHref}
              secondaryCtaLabel={secondaryCtaLabel}
              secondaryCtaHref={secondaryCtaHref}
            />
          </div>
          {visual ? (
            <div className="order-2 lg:order-1">
              <OfferVisualPanel visual={visual} />
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}

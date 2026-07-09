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
  variant?: "betsson" | "betfury" | "fivehundred" | "mexico" | "crypto" | "dark";
  compact?: boolean;
};

export type OfferCardEmphasis = "standard" | "comparison-primary" | "comparison-secondary";

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
  emphasis?: OfferCardEmphasis;
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
  betfury:
    "border-fuchsia-500/25 bg-gradient-to-br from-[#0A0A12] via-[#111127] to-[#0A1931] shadow-[inset_0_1px_0_rgba(236,72,153,0.12)]",
  fivehundred:
    "border-pink-500/20 bg-gradient-to-br from-[#120818] via-[#16121f] to-[#0A1931] shadow-[inset_0_1px_0_rgba(236,72,153,0.08)]",
  mexico:
    "border-primary/30 bg-gradient-to-br from-[#16233f] via-[#111417] to-[#0A1931]",
  crypto:
    "border-primary/20 bg-gradient-to-br from-[#16233f] via-[#111417] to-[#0A1931]",
  dark: "border-white/10 bg-gradient-to-br from-[#16233f] to-[#0A1931]",
};

const visualPanelGlow: Record<NonNullable<OfferCardVisual["variant"]>, string> = {
  betsson:
    "bg-[radial-gradient(ellipse_at_top_right,rgba(255,107,0,0.22),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(147,51,234,0.14),transparent_50%)]",
  betfury:
    "bg-[radial-gradient(ellipse_at_top_right,rgba(236,72,153,0.22),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.16),transparent_50%),radial-gradient(ellipse_at_center,rgba(239,68,68,0.08),transparent_60%)]",
  fivehundred:
    "bg-[radial-gradient(ellipse_at_top_right,rgba(236,72,153,0.18),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(127,29,29,0.12),transparent_50%)]",
  mexico:
    "bg-[radial-gradient(ellipse_at_top_right,rgba(255,184,0,0.14),transparent_55%)]",
  crypto:
    "bg-[radial-gradient(ellipse_at_top_right,rgba(255,184,0,0.1),transparent_55%)]",
  dark: "bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.05),transparent_55%)]",
};

const emphasisShell: Record<OfferCardEmphasis, string> = {
  standard: "",
  "comparison-primary":
    "border-pink-500/30 ring-1 ring-pink-500/10 shadow-[0_4px_24px_-10px_rgba(236,72,153,0.18)]",
  "comparison-secondary": "border-white/8 bg-[#111417]/95 shadow-none ring-0",
};

const emphasisGlow: Record<OfferCardEmphasis, string | null> = {
  standard: null,
  "comparison-primary":
    "bg-[radial-gradient(ellipse_at_top_right,rgba(236,72,153,0.12),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(127,29,29,0.06),transparent_50%)]",
  "comparison-secondary": "",
};

const emphasisBadge: Partial<Record<OfferCardEmphasis, string>> = {
  "comparison-primary": "border-pink-500/30 bg-pink-500/10 text-pink-200",
  "comparison-secondary": "border-white/12 bg-white/5 text-muted-foreground",
};

function OfferVisualPanel({ visual }: { visual: OfferCardVisual }) {
  const panelVariant = visual.variant ?? "dark";
  const compact = visual.compact === true;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border",
        compact ? "p-2.5" : "p-2 max-md:p-2.5 md:p-3 lg:p-4",
        panelVariant === "fivehundred" && compact && "p-3",
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

      {panelVariant === "betfury" ? (
        <>
          <div className="pointer-events-none absolute -right-2 -top-2 h-9 w-9 rounded-full border border-fuchsia-400/25 bg-fuchsia-500/10 md:h-12 md:w-12" />
          <div className="pointer-events-none absolute -bottom-3 -left-2 h-6 w-6 rounded-full border border-blue-400/20 bg-blue-500/10 md:h-8 md:w-8" />
          <div className="pointer-events-none absolute bottom-5 right-7 h-4 w-4 rounded-full bg-gradient-to-br from-[#EC4899] to-[#EF4444] opacity-80 shadow-[0_0_10px_rgba(236,72,153,0.35)] md:h-5 md:w-5" />
          <div className="pointer-events-none absolute right-12 top-5 hidden h-3 w-3 rotate-45 border border-blue-400/30 bg-blue-500/15 md:block" />
        </>
      ) : null}

      {panelVariant === "fivehundred" ? (
        <>
          <div className="pointer-events-none absolute -right-2 -top-2 h-8 w-8 rounded-full border border-pink-400/20 bg-pink-500/10 md:h-10 md:w-10" />
          <div className="pointer-events-none absolute -bottom-2 -left-1 h-5 w-5 rounded-full border border-red-500/15 bg-red-500/8 md:h-7 md:w-7" />
          <div className="pointer-events-none absolute bottom-4 right-6 h-3.5 w-3.5 rounded-full bg-gradient-to-br from-[#EC4899] to-[#BE123C] opacity-75 shadow-[0_0_8px_rgba(236,72,153,0.3)] md:h-4 md:w-4" />
        </>
      ) : null}

      <div className={cn("relative", compact ? "space-y-1.5" : "space-y-1 md:space-y-2")}>
        {visual.eyebrow ? (
          <p
            className={cn(
              "font-semibold uppercase tracking-wide",
              compact ? "text-[0.6rem]" : "text-[0.6rem] md:text-[0.65rem]",
              panelVariant === "betsson" && "text-orange-300/90",
              panelVariant === "betfury" && "text-fuchsia-300/90",
              panelVariant === "fivehundred" && "text-pink-300/90",
              panelVariant !== "betsson" &&
                panelVariant !== "betfury" &&
                panelVariant !== "fivehundred" &&
                "text-muted-foreground",
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
            panelVariant === "betfury" &&
              "bg-gradient-to-r from-[#F472B6] via-[#EF4444] to-[#60A5FA] bg-clip-text text-transparent",
            panelVariant === "fivehundred" &&
              "bg-gradient-to-r from-[#F472B6] via-[#E11D48] to-[#FB7185] bg-clip-text text-transparent",
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
                    : panelVariant === "betfury"
                      ? "border-fuchsia-500/25 bg-fuchsia-500/10 text-fuchsia-200/90"
                      : panelVariant === "fivehundred"
                        ? "border-pink-500/25 bg-pink-500/10 text-pink-200/90"
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
  emphasis = "standard",
  logo,
  className,
}: OfferCardProps) {
  const variant = visualVariant === "crypto" && emphasis === "comparison-secondary" ? "dark" : visualVariant;
  const showInlineOfferText = !visual;
  const hidePaymentBadgesOnMobile = Boolean(visual?.chips && visual.chips.length > 0);
  const emphasisOverlay = emphasisGlow[emphasis];
  const showVariantGlow = emphasis === "standard";

  return (
    <article
      className={cn(
        "relative overflow-hidden rounded-2xl border p-3 sm:p-5 lg:p-6",
        emphasis === "comparison-secondary" && "sm:p-4",
        variantShell[variant],
        emphasisShell[emphasis],
        className,
      )}
      aria-label={`Oferta de ${operatorName}`}
    >
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0",
          showVariantGlow && variantGlow[variant],
          emphasisOverlay,
        )}
      />

      <div className="relative flex flex-col gap-3 lg:flex-row lg:items-stretch lg:justify-between lg:gap-5">
        <div className="min-w-0 flex-1 space-y-2.5 sm:space-y-3 lg:space-y-4">
          <div className="flex flex-wrap items-start gap-2.5 sm:gap-3">
            <OperatorLogo name={operatorName} logo={logo} operatorId={operatorId} />
            <div className="min-w-0 flex-1 space-y-1">
              {badge ? (
                <span
                  className={cn(
                    "inline-flex items-center rounded-full border px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide",
                    emphasisBadge[emphasis] ?? variantBadge[variant],
                  )}
                >
                  {badge}
                </span>
              ) : null}
              <h3 className="text-base font-bold tracking-tight text-foreground sm:text-lg lg:text-xl">
                {headline}
              </h3>
              {subheadline ? (
                <p className="text-xs font-medium leading-snug text-muted-foreground sm:text-sm">
                  {subheadline}
                </p>
              ) : null}
            </div>
          </div>

          <div className="flex flex-col gap-2 lg:hidden">
            <OfferCardCtas
              primaryCtaLabel={primaryCtaLabel}
              primaryCtaHref={primaryCtaHref}
              secondaryCtaLabel={secondaryCtaLabel}
              secondaryCtaHref={secondaryCtaHref}
            />
            {visual ? <OfferVisualPanel visual={visual} /> : null}
          </div>

          {showInlineOfferText ? (
            <p
              className={cn(
                "rounded-lg border px-3 py-2 text-sm font-extrabold tracking-tight text-foreground sm:py-2.5 sm:text-base lg:text-lg",
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
            <p className="text-[0.7rem] leading-snug text-muted-foreground sm:text-xs">
              Código promocional informado por el operador:{" "}
              <span className="font-mono font-semibold text-foreground">{promoCode}</span>. Verifica
              términos oficiales antes de usarlo.
            </p>
          ) : null}

          {paymentBadges.length > 0 ? (
            <ul
              className={cn(
                "flex flex-wrap gap-1.5",
                hidePaymentBadgesOnMobile && "max-md:hidden",
              )}
              aria-label="Métodos de pago o mercados"
            >
              {paymentBadges.map((label) => (
                <li
                  key={label}
                  className="inline-flex items-center rounded-md border border-border/60 bg-[#16233f]/80 px-2 py-0.5 text-[0.7rem] font-medium text-muted-foreground sm:px-2.5 sm:py-1 sm:text-xs"
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
                    "flex gap-2 text-xs leading-snug text-muted-foreground sm:text-sm",
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

          <div className="space-y-1.5 border-t border-white/10 pt-2 sm:space-y-2 sm:pt-2.5 md:pt-3">
            <p className="text-[0.7rem] leading-relaxed text-muted-foreground sm:text-xs">
              {termsNote}
            </p>
            <p className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/8 px-2 py-0.5 text-[0.7rem] font-medium text-emerald-400 sm:px-2.5 sm:py-1 sm:text-xs">
              {responsibleNote}
            </p>
          </div>
        </div>

        <div className="hidden shrink-0 flex-col justify-center gap-2 lg:flex lg:w-60">
          {visual ? <OfferVisualPanel visual={visual} /> : null}
          <OfferCardCtas
            primaryCtaLabel={primaryCtaLabel}
            primaryCtaHref={primaryCtaHref}
            secondaryCtaLabel={secondaryCtaLabel}
            secondaryCtaHref={secondaryCtaHref}
          />
        </div>
      </div>
    </article>
  );
}

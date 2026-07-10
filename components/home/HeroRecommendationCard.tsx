import Link from "next/link";
import type { Casino } from "@/types/content";
import { getBonusesForCasino, getReviewForCasino } from "@/lib/content";
import { cn, focusRing } from "@/lib/utils";
import { OperatorLogo } from "@/components/brand/OperatorLogo";
import { LicenseInfo } from "@/components/trust/LicenseInfo";

const AFFILIATE_REL = "sponsored nofollow noopener noreferrer";

const trustPills = [
  "Metodología publicada",
  "Pagos crypto y locales",
  "Bonos sin urgencia falsa",
] as const;

/**
 * Editorial recommendation preview for the homepage hero.
 * Optional affiliate CTA when a featured partner has an approved tracking link.
 */
export function HeroRecommendationCard({
  casino,
  eyebrow = "Recomendación editorial",
  topBadge,
  affiliateCtaLabel,
  affiliateCtaHref,
  className,
}: {
  casino: Casino;
  eyebrow?: string;
  topBadge?: string;
  affiliateCtaLabel?: string;
  affiliateCtaHref?: string;
  className?: string;
}) {
  const headlineBonus = getBonusesForCasino(casino.id).find((b) => b.active);
  const review = getReviewForCasino(casino.id);
  const isFeatured = Boolean(affiliateCtaHref);

  return (
    <aside aria-label="Recomendación editorial" className={cn("space-y-4", className)}>
      <div
        className={cn(
          "rounded-2xl border bg-card/80 p-5 backdrop-blur-sm sm:p-6",
          isFeatured
            ? "border-amber-400/40 bg-gradient-to-br from-[#16233f]/95 via-card/90 to-[#0A1931]/95 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5),0_0_24px_-8px_rgba(255,184,0,0.22)] ring-1 ring-amber-400/10"
            : "border-white/10 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)]",
        )}
      >
        {topBadge ? (
          <span className="inline-flex items-center rounded-full border border-amber-400/35 bg-amber-400/10 px-2.5 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-amber-300">
            {topBadge}
          </span>
        ) : null}
        <p
          className={cn(
            "text-[0.65rem] font-semibold uppercase tracking-wide text-primary",
            topBadge ? "mt-2" : null,
          )}
        >
          {eyebrow}
        </p>

        <div className="mt-4 flex items-start gap-3">
          <OperatorLogo name={casino.name} logo={casino.logo} operatorId={casino.id} />
          <div className="min-w-0 flex-1">
            <p className="text-lg font-semibold text-foreground">{casino.name}</p>
            {casino.summary ? (
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {casino.summary}
              </p>
            ) : null}
          </div>
        </div>

        {headlineBonus ? (
          <div
            className={cn(
              "mt-4 rounded-lg border px-3 py-2.5",
              isFeatured
                ? "border-amber-400/20 bg-amber-400/5"
                : "border-white/8 bg-[#16233f]/50",
            )}
          >
            <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-muted-foreground">
              Bono
            </p>
            <p className="mt-1 text-sm text-foreground">{headlineBonus.title}</p>
          </div>
        ) : null}

        {casino.payments && casino.payments.length > 0 ? (
          <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Métodos de pago">
            {casino.payments.map((p) => (
              <li
                key={`${p.kind}-${p.name}`}
                className="inline-flex items-center rounded-md bg-[#16233f]/60 px-2 py-0.5 text-xs font-medium text-muted-foreground ring-1 ring-white/10"
              >
                {p.name}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-4">
          <LicenseInfo licensing={casino.licensing} />
        </div>

        {affiliateCtaHref && affiliateCtaLabel ? (
          <div className="mt-5 space-y-2">
            <a
              href={affiliateCtaHref}
              target="_blank"
              rel={AFFILIATE_REL}
              className={cn(
                "inline-flex min-h-11 w-full items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold",
                "bg-primary text-primary-foreground shadow-[0_2px_12px_-4px_rgba(255,184,0,0.35)] transition-colors hover:bg-[var(--jm-gold-strong)]",
                focusRing,
              )}
            >
              {affiliateCtaLabel}
            </a>
            <p className="text-center text-[0.65rem] leading-snug text-muted-foreground">
              Enlace de afiliado · 18+ · Aplican T&amp;C
            </p>
          </div>
        ) : null}

        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
          {review ? (
            <Link
              href={`/reviews/${review.slug}`}
              className="inline-flex min-h-11 items-center text-sm font-medium text-foreground underline underline-offset-2 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              Leer reseña
            </Link>
          ) : null}
          <Link
            href="/casinos-crypto"
            className="inline-flex min-h-11 items-center text-sm font-medium text-primary underline underline-offset-2 transition-colors hover:text-[var(--jm-gold-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
          >
            Ver ranking crypto
          </Link>
        </div>
      </div>

      <ul className="flex flex-wrap gap-2" aria-label="Enfoque editorial">
        {trustPills.map((label) => (
          <li
            key={label}
            className="inline-flex items-center rounded-full border border-accent/30 bg-accent/8 px-2.5 py-1 text-[0.65rem] font-medium text-accent"
          >
            {label}
          </li>
        ))}
      </ul>
    </aside>
  );
}

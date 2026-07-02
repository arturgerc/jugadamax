import Link from "next/link";
import type { Casino } from "@/types/content";
import { getBonusesForCasino, getReviewForCasino } from "@/lib/content";
import { cn } from "@/lib/utils";
import { OperatorLogo } from "@/components/brand/OperatorLogo";
import { LicenseInfo } from "@/components/trust/LicenseInfo";

const trustPills = [
  "Metodología publicada",
  "Pagos crypto y locales",
  "Bonos sin urgencia falsa",
] as const;

/**
 * Editorial recommendation preview — internal links only, no affiliate CTA.
 */
export function HeroRecommendationCard({
  casino,
  className,
}: {
  casino: Casino;
  className?: string;
}) {
  const headlineBonus = getBonusesForCasino(casino.id).find((b) => b.active);
  const review = getReviewForCasino(casino.id);

  return (
    <aside aria-label="Recomendación editorial" className={cn("space-y-4", className)}>
      <div className="rounded-2xl border border-white/10 bg-card/80 p-5 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)] backdrop-blur-sm sm:p-6">
        <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-primary">
          Recomendación editorial
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
          <div className="mt-4 rounded-lg border border-white/8 bg-[#16233f]/50 px-3 py-2.5">
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
                className="inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ring-1 ring-white/10 bg-[#16233f]/60 text-muted-foreground"
              >
                {p.name}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-4">
          <LicenseInfo licensing={casino.licensing} />
        </div>

        <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
          <Link
            href="/casinos-crypto"
            className="inline-flex min-h-11 items-center text-sm font-medium text-primary underline underline-offset-2 transition-colors hover:text-[var(--jm-gold-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
          >
            Ver ranking crypto
          </Link>
          {review ? (
            <Link
              href={`/reviews/${review.slug}`}
              className="inline-flex min-h-11 items-center text-sm font-medium text-foreground underline underline-offset-2 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              Leer reseña
            </Link>
          ) : null}
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

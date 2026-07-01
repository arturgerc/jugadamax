import Link from "next/link";
import { getCasinosByVertical } from "@/lib/content";
import { Container } from "@/components/layout/Container";
import { HeroRecommendationCard } from "@/components/home/HeroRecommendationCard";
import { cn } from "@/lib/utils";

/**
 * Homepage hero v2 (FR-001).
 *
 * Editorial two-column layout. Internal CTAs only — no affiliate links in the
 * hero. Static, lightweight, mobile-first. No autoplay video or particles.
 */
export function Hero({ className }: { className?: string }) {
  const featuredCasino = getCasinosByVertical("crypto-casino")[0];

  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-border/60 bg-[var(--jm-navy)]",
        className,
      )}
    >
      {/* Subtle background gradients — decorative only */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,184,0,0.07),transparent_55%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,168,107,0.05),transparent_50%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--jm-graphite)]/40 via-transparent to-transparent"
      />

      <Container className="relative py-10 sm:py-14 lg:py-16">
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-12 lg:gap-y-8 xl:gap-x-16">
          {/* Left: editorial intro */}
          <div className="max-w-xl space-y-4 lg:max-w-none">
            <span className="inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
              México · Crypto-first · Rankings editoriales
            </span>

            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
              Casinos crypto, casinos fiat y apuestas en México
            </h1>

            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Rankings claros y reseñas honestas para elegir operadores con confianza. Evaluamos
              seguridad, pagos, licencias y experiencia de usuario.
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                href="/casinos-crypto"
                className="inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_2px_12px_-4px_rgba(255,184,0,0.35)] transition-colors hover:bg-[var(--jm-gold-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              >
                Ver casinos crypto
              </Link>
              <Link
                href="/como-evaluamos"
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              >
                Cómo evaluamos
              </Link>
            </div>

            <p className="text-xs text-muted-foreground">
              Solo para mayores de 18 años. Juega de forma responsable.
            </p>
          </div>

          {/* Right: editorial recommendation preview */}
          {featuredCasino ? (
            <HeroRecommendationCard casino={featuredCasino} className="mt-8 lg:mt-0" />
          ) : null}
        </div>
      </Container>
    </section>
  );
}

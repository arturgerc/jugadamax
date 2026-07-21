import { HomepageContainer } from "@/components/home/HomepageContainer";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { cn } from "@/lib/utils";

const CHECK_ITEMS = ["KYC y privacidad", "Pagos", "Bonos", "Retiros"] as const;

/**
 * Homepage hero V3 — compressed editorial intro without affiliate operator card.
 */
export function HomepageHeroV3({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-border/60 bg-[var(--jm-navy)]",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,184,0,0.07),transparent_55%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,168,107,0.05),transparent_50%)]"
      />

      <HomepageContainer className="relative py-6 sm:py-8 lg:py-10">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-8 xl:gap-10">
          <div className="max-w-2xl space-y-3 lg:max-w-none">
            <span className="inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
              México · LATAM · Evaluación editorial
            </span>

            <h1 className="text-[2rem] font-bold leading-tight tracking-tight text-foreground sm:text-[2.25rem] lg:text-[2.4rem]">
              Casinos crypto y sin KYC para México
            </h1>

            <p className="text-base leading-relaxed text-muted-foreground sm:text-[1.05rem]">
              Comparamos privacidad, pagos, promociones, juegos y retiros para ayudarte a elegir
              casinos crypto en México y LATAM.
            </p>

            <div className="flex flex-col gap-2.5 pt-0.5 min-[390px]:flex-row min-[390px]:flex-wrap">
              <TrackedLink
                href="#top-casinos"
                event="homepage_category_click"
                section="hero"
                position={1}
                destination="#top-casinos"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_2px_12px_-4px_rgba(255,184,0,0.35)] transition-colors hover:bg-[var(--jm-gold-strong)] min-[390px]:w-auto"
              >
                Ver top casinos
              </TrackedLink>
              <TrackedLink
                href="/casinos-sin-kyc"
                event="homepage_category_click"
                section="hero"
                position={2}
                destination="/casinos-sin-kyc"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/60 min-[390px]:w-auto"
              >
                Casinos sin KYC
              </TrackedLink>
            </div>
          </div>

          <aside
            aria-labelledby="hero-check-heading"
            className="max-h-[190px] overflow-hidden rounded-xl border border-white/10 bg-[#111417]/80 p-3 sm:max-h-none sm:p-4"
          >
            <h2
              id="hero-check-heading"
              className="text-sm font-semibold tracking-tight text-foreground"
            >
              Qué revisamos
            </h2>
            <ul className="mt-2 grid grid-cols-2 gap-1.5">
              {CHECK_ITEMS.map((title) => (
                <li
                  key={title}
                  className="rounded-md border border-white/8 bg-[#0A1931]/50 px-2 py-1.5 text-[0.7rem] font-semibold leading-tight text-foreground sm:text-xs"
                >
                  {title}
                </li>
              ))}
            </ul>
            <p className="mt-2 text-[0.65rem] leading-snug text-muted-foreground">
              Revisa siempre las condiciones vigentes.
            </p>
          </aside>
        </div>
      </HomepageContainer>
    </section>
  );
}

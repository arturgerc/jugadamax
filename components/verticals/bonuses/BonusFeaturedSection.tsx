import { BonusFeaturedCard } from "@/components/verticals/bonuses/BonusFeaturedCard";
import { resolveFeaturedBonuses } from "@/components/verticals/bonuses/bonus-data";
import {
  BONUS_SURFACES,
  sectionHeadingClassName,
} from "@/components/verticals/bonuses/bonus-visual";

/**
 * Exactly three primary featured promotions for /bonos.
 */
export function BonusFeaturedSection() {
  const rows = resolveFeaturedBonuses();
  if (rows.length === 0) return null;

  return (
    <section
      id="promociones-destacadas"
      aria-labelledby="promociones-destacadas-heading"
      className="mb-7 scroll-mt-24 sm:mb-10 lg:mb-12"
    >
      <div className={BONUS_SURFACES.commercialShell}>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,184,0,0.1),transparent_55%)]"
        />
        <div className="relative p-3.5 sm:p-5 lg:p-6">
          <div className="max-w-3xl space-y-1.5">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-primary/90">
              Zona comercial
            </p>
            <h2
              id="promociones-destacadas-heading"
              className={sectionHeadingClassName()}
            >
              Promociones destacadas
            </h2>
            <p className="text-sm text-muted-foreground sm:text-base">
              Tres ofertas prioritarias para comparar rápido: casino en México, rewards crypto y un
              paquete de casino crypto. El orden es editorial y puede diferir de las puntuaciones de
              reseña.
            </p>
          </div>

          <ul className="mt-4 grid grid-cols-1 gap-3 sm:mt-5 sm:grid-cols-2 sm:gap-4 xl:grid-cols-3">
            {rows.map((row, index) => (
              <li key={row.bonus.id} className="min-w-0 xl:min-w-0">
                <BonusFeaturedCard
                  row={row}
                  position={index + 1}
                  featured={index === 0}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

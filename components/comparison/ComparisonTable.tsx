import Link from "next/link";
import type { Casino, Vertical } from "@/types/content";
import { getBonusesForCasino, getReviewForCasino } from "@/lib/content";
import { cn } from "@/lib/utils";
import { RatingStars } from "@/components/ranking/RatingStars";
import { AffiliateCta } from "@/components/trust/AffiliateCta";

/**
 * Side-by-side comparison table (FR-010).
 *
 * Horizontal overflow is confined to the inner scroll wrapper (`overflow-x-auto`)
 * so it never causes horizontal PAGE overflow (FR-031). Links to the evaluation
 * methodology (FR-011).
 */
export function ComparisonTable({
  casinos,
  vertical,
  className,
}: {
  casinos: Casino[];
  vertical: Vertical;
  className?: string;
}) {
  if (casinos.length === 0) return null;

  return (
    <div className={cn("space-y-3", className)}>
      <div className="w-full overflow-x-auto rounded-lg border border-border/60">
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-border/60 bg-card/60 text-muted-foreground">
              <th scope="col" className="px-3 py-2 font-medium">#</th>
              <th scope="col" className="px-3 py-2 font-medium">Operador</th>
              <th scope="col" className="px-3 py-2 font-medium">Calificación</th>
              <th scope="col" className="px-3 py-2 font-medium">Bono</th>
              <th scope="col" className="px-3 py-2 font-medium">Pagos</th>
              <th scope="col" className="px-3 py-2 font-medium">Acción</th>
            </tr>
          </thead>
          <tbody>
            {casinos.map((casino, index) => {
              const rank = casino.rankByVertical[vertical] ?? index + 1;
              const headlineBonus = getBonusesForCasino(casino.id).find((b) => b.active)?.title;
              const payments = (casino.payments ?? []).map((p) => p.name).join(", ");
              const review = getReviewForCasino(casino.id);

              return (
                <tr key={casino.id} className="border-b border-border/40 last:border-0">
                  <td className="px-3 py-3 font-semibold text-foreground">{rank}</td>
                  <td className="px-3 py-3 font-medium text-foreground">
                    {casino.name}
                    {review && (
                      <Link
                        href={`/reviews/${review.slug}`}
                        className="mt-0.5 block text-xs font-normal text-primary underline underline-offset-2"
                      >
                        Leer reseña
                      </Link>
                    )}
                  </td>
                  <td className="px-3 py-3">
                    {casino.rating !== undefined ? (
                      <RatingStars rating={casino.rating} />
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )}
                  </td>
                  <td className="px-3 py-3 text-muted-foreground">{headlineBonus ?? "—"}</td>
                  <td className="px-3 py-3 text-muted-foreground">{payments || "—"}</td>
                  <td className="px-3 py-3">
                    <AffiliateCta href={casino.affiliateUrl} label="Visitar" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-muted-foreground">
        El orden se basa en nuestra{" "}
        <Link
          href="/como-evaluamos"
          className="font-medium text-primary underline underline-offset-2"
        >
          metodología de evaluación
        </Link>
        .
      </p>
    </div>
  );
}

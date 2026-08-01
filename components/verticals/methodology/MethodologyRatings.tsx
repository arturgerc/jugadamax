import Link from "next/link";
import { cn, focusRing } from "@/lib/utils";

export function MethodologyRatings() {
  return (
    <section
      id="calificaciones"
      aria-labelledby="method-ratings-heading"
      className="mb-8 scroll-mt-24 rounded-2xl border border-cyan-500/15 bg-gradient-to-b from-[#101820]/80 to-[#0c121c]/50 p-4 sm:mb-10 sm:p-5"
    >
      <h2
        id="method-ratings-heading"
        className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
      >
        Cómo funcionan las calificaciones
      </h2>
      <div className="mt-3 max-w-4xl space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
        <p>
          Las puntuaciones son juicios cualitativos editoriales. No publicamos bandas numéricas ni
          una fórmula matemática ponderada que convierta criterios en un score automático.
        </p>
        <p>
          El contexto de la calificación depende del producto, del GEO y de la audiencia prevista.
          Las relaciones comerciales no garantizan una puntuación positiva. La colocación destacada
          y la calificación son decisiones distintas.
        </p>
        <p>
          Las páginas de reseña muestran atribución de autor o del equipo editorial, junto con
          fechas del registro editorial.
        </p>
      </div>
      <Link
        href="/reviews"
        className={cn(
          "mt-4 inline-flex min-h-11 items-center rounded-md border border-primary/35 bg-primary/10 px-4 text-sm font-semibold text-primary",
          focusRing,
        )}
      >
        Ver reseñas
      </Link>
    </section>
  );
}

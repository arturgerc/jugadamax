import Link from "next/link";
import { cn, focusRing } from "@/lib/utils";

export function MethodologyAffiliateTransparency() {
  return (
    <section
      aria-labelledby="method-affiliate-heading"
      className="mb-8 scroll-mt-24 rounded-2xl border border-primary/25 bg-gradient-to-br from-[#1a1510]/90 via-[#111417]/85 to-[#0d1820]/90 p-4 sm:mb-10 sm:p-5"
    >
      <h2
        id="method-affiliate-heading"
        className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
      >
        Independencia editorial y afiliación
      </h2>
      <div className="mt-3 max-w-4xl space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
        <p>
          JugadaMax puede recibir una comisión a través de enlaces de afiliado aprobados. Esa
          compensación no añade un costo extra directo al lector.
        </p>
        <p>
          La afiliación puede influir en qué campañas comerciales están disponibles o en la
          visibilidad de algunos operadores. No convierte una afirmación comercial en un hecho
          verificado ni garantiza una calificación positiva.
        </p>
        <p>
          La divulgación debe permanecer visible en las páginas comerciales. No afirmamos
          independencia financiera absoluta respecto a la monetización por afiliación.
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <Link
          href="/divulgacion-afiliados"
          className={cn(
            "inline-flex min-h-11 items-center rounded-md border border-primary/40 bg-primary/15 px-4 text-sm font-semibold text-primary",
            focusRing,
          )}
        >
          Divulgación de afiliados
        </Link>
        <Link
          href="/partners"
          className={cn(
            "inline-flex min-h-11 items-center rounded-md border border-white/15 bg-[#0A1931]/55 px-4 text-sm font-medium text-foreground transition-colors hover:border-primary/40",
            focusRing,
          )}
        >
          Socios
        </Link>
      </div>
    </section>
  );
}

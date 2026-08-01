import Link from "next/link";
import { cn, focusRing } from "@/lib/utils";

export function AboutAffiliateTransparency() {
  return (
    <section
      aria-labelledby="about-affiliate-heading"
      className="mb-8 scroll-mt-24 rounded-2xl border border-primary/25 bg-gradient-to-br from-[#1a1510]/90 via-[#111417]/85 to-[#0d1820]/90 p-4 sm:mb-10 sm:p-5"
    >
      <h2
        id="about-affiliate-heading"
        className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
      >
        Modelo de afiliación y transparencia
      </h2>
      <div className="mt-3 max-w-4xl space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
        <p>
          JugadaMax puede recibir una comisión cuando un lector usa ciertos enlaces comerciales. Eso
          no añade un costo extra directo al lector.
        </p>
        <p>
          Las relaciones comerciales pueden influir en qué operadores reciben visibilidad o
          posición en rankings y páginas comerciales. Las calificaciones siguen siendo opiniones
          editoriales de JugadaMax, no hechos neutrales ni puntuaciones de usuarios.
        </p>
        <p>
          Divulgamos los enlaces de afiliado y las superficies comerciales. La política completa
          está en la página de divulgación.
        </p>
      </div>
      <Link
        href="/divulgacion-afiliados"
        className={cn(
          "mt-4 inline-flex min-h-11 items-center rounded-md border border-primary/40 bg-primary/15 px-4 text-sm font-semibold text-primary",
          focusRing,
        )}
      >
        Divulgación de afiliados
      </Link>
    </section>
  );
}

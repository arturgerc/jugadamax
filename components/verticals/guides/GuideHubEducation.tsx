import Link from "next/link";
import { cn, focusRing } from "@/lib/utils";

const METHOD_STEPS = [
  {
    heading: "Fuentes revisadas",
    body: "Revisamos información publicada por el operador y fuentes externas cuando aplican.",
    accent: "border-primary/30 bg-primary/10 text-primary",
  },
  {
    heading: "Fechas reales",
    body: "Priorizamos fechas reales de publicación y actualización en cada guía.",
    accent: "border-cyan-400/30 bg-cyan-500/10 text-cyan-200",
  },
  {
    heading: "Opinión vs datos",
    body: "Separamos opinión editorial de datos verificables.",
    accent: "border-primary/30 bg-primary/10 text-primary",
  },
  {
    heading: "Afiliación clara",
    body: "Divulgamos afiliación cuando hay enlaces comerciales en otras páginas del sitio.",
    accent: "border-cyan-400/30 bg-cyan-500/10 text-cyan-200",
  },
] as const;

const METHOD_LIMIT = {
  heading: "Límites honestos",
  body: "No prometemos verificación diaria ni asesoría legal o financiera.",
} as const;

const FAQ_ITEMS = [
  {
    q: "¿Las guías son consejos legales o financieros?",
    a: "No. Son contenido editorial educativo. Confirma siempre términos, disponibilidad y riesgos en el operador y con asesores cualificados cuando corresponda.",
  },
  {
    q: "¿Cómo sé quién escribió una guía?",
    a: "Cada guía muestra un autor identificado. Puedes abrir su perfil interno en /autores para ver bio, especialidades y enlaces de identidad.",
  },
  {
    q: "¿Qué significa la fecha de actualización?",
    a: "Es la fecha real del registro editorial cuando la guía se actualizó. Si no hay updatedAt, mostramos la fecha de publicación.",
  },
  {
    q: "¿LinkedIn garantiza la exactitud del contenido?",
    a: "No. LinkedIn se usa para identidad y distribución. No es una fuente factual de casinos, pagos, bonos o licencias.",
  },
  {
    q: "¿Hay botones de registro en el centro de guías?",
    a: "No. El hub de guías es editorial. Los CTAs de afiliado viven en páginas comerciales como rankings o bonos, con divulgación.",
  },
] as const;

const RELATED = [
  { href: "/casinos-crypto", label: "Casinos crypto" },
  { href: "/casinos-fiat", label: "Casinos fiat" },
  { href: "/bonos", label: "Bonos" },
  { href: "/reviews", label: "Reseñas" },
  { href: "/noticias", label: "Noticias" },
  { href: "/como-evaluamos", label: "Cómo evaluamos" },
  { href: "/juego-responsable", label: "Juego responsable" },
] as const;

/**
 * Methodology, FAQ, and related routes for Guide Hub V2.
 */
export function GuideHubEducation() {
  return (
    <div className="mt-8 space-y-8 sm:mt-10 sm:space-y-10 lg:mt-12 lg:space-y-12">
      <section
        id="como-investigamos"
        aria-labelledby="como-investigamos-heading"
        className="scroll-mt-24"
      >
        <h2
          id="como-investigamos-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
        >
          Cómo investigamos y actualizamos las guías
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground sm:text-base">
          JugadaMax publica guías editoriales. No operamos casinos ni garantizamos resultados,
          disponibilidad o condiciones de terceros.
        </p>

        <ol className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
          {METHOD_STEPS.map((step, index) => (
            <li
              key={step.heading}
              className="rounded-xl border border-white/10 bg-[#111417]/55 p-3.5"
            >
              <div className="flex items-start gap-2.5">
                <span
                  aria-hidden="true"
                  className={cn(
                    "inline-flex size-7 shrink-0 items-center justify-center rounded-full border text-[0.7rem] font-bold",
                    step.accent,
                  )}
                >
                  {index + 1}
                </span>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-foreground">{step.heading}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-2 rounded-xl border border-primary/20 bg-gradient-to-r from-[#1a160f]/80 to-[#111417]/70 p-3.5 sm:mt-3">
          <div className="flex items-start gap-2.5">
            <span
              aria-hidden="true"
              className="inline-flex size-7 shrink-0 items-center justify-center rounded-full border border-primary/35 bg-primary/10 text-[0.7rem] font-bold text-primary"
            >
              5
            </span>
            <div className="min-w-0">
              <h3 className="text-sm font-semibold text-foreground">
                {METHOD_LIMIT.heading}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {METHOD_LIMIT.body}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="guias-faq-heading">
        <h2
          id="guias-faq-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
        >
          Preguntas frecuentes
        </h2>
        <div className="mt-4 max-w-3xl space-y-2">
          {FAQ_ITEMS.map((item) => (
            <details
              key={item.q}
              className="group rounded-lg border border-white/10 bg-[#111417]/60 open:border-primary/25"
            >
              <summary
                className={cn(
                  "cursor-pointer list-none px-3.5 py-3 text-sm font-semibold text-foreground",
                  "[&::-webkit-details-marker]:hidden",
                )}
              >
                <span className="flex items-center justify-between gap-2">
                  {item.q}
                  <span
                    aria-hidden="true"
                    className="text-primary transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="border-t border-white/8 px-3.5 pb-3.5 pt-2.5 text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section aria-labelledby="guias-relacionadas-heading">
        <h2
          id="guias-relacionadas-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
        >
          También puedes revisar
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
          Combina guías con rankings, reseñas, bonos y noticias antes de decidir.
        </p>
        <nav aria-label="Rutas relacionadas" className="mt-4 flex flex-wrap gap-2">
          {RELATED.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "inline-flex min-h-11 items-center rounded-full border border-white/12 bg-[#111417]/70 px-3.5 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50",
                focusRing,
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </section>
    </div>
  );
}

import Link from "next/link";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { resolveBettingBonusRows } from "@/components/verticals/betting/betting-data";
import { cn, focusRing } from "@/lib/utils";

const EVALUATION = [
  {
    title: "Seguridad y reputación",
    body: "Revisamos información publicada del operador: claridad, jurisdicción informada y señales de juego responsable.",
  },
  {
    title: "Mercados deportivos",
    body: "Comparamos qué deportes y competiciones informa cada operador, sin asumir disponibilidad en todo México.",
  },
  {
    title: "Bonos y condiciones",
    body: "Mostramos promociones informadas. Separamos ofertas de apuestas y de casino cuando el producto lo indica.",
  },
  {
    title: "Pagos, KYC y experiencia",
    body: "Consideramos métodos publicados, posibles verificaciones y facilidad de uso informada, sin garantizar tiempos de retiro.",
  },
] as const;

const MARKETS = [
  "Fútbol",
  "Liga MX",
  "Champions League",
  "Tenis",
  "Baloncesto",
  "UFC / combates",
  "Esports",
] as const;

const FAQ = [
  {
    q: "¿Qué es una casa de apuestas?",
    a: "Una casa de apuestas permite apostar en eventos deportivos u otros mercados disponibles, según las reglas y condiciones de cada operador.",
  },
  {
    q: "¿JugadaMax opera una casa de apuestas?",
    a: "No. JugadaMax es un medio editorial/afiliado. No aceptamos apuestas, no procesamos pagos de juego y no garantizamos cuotas ni resultados.",
  },
  {
    q: "¿Cómo separamos bonos de casino y de apuestas?",
    a: "Cuando la fuente central indica producto sportsbook o mixed, lo etiquetamos. Si una promoción es solo de casino, no la presentamos como bono deportivo garantizado.",
  },
  {
    q: "¿Las cuotas y mercados cambian?",
    a: "Sí. Cuotas, límites y mercados pueden cambiar antes o durante un evento según cada operador.",
  },
  {
    q: "¿Un operador internacional está disponible en todo México?",
    a: "No necesariamente. La disponibilidad depende de jurisdicción, cuenta, GEO y términos oficiales. Español en la interfaz no equivale a licencia mexicana.",
  },
  {
    q: "¿Es necesario verificar identidad?",
    a: "Muchos operadores pueden solicitar KYC según políticas internas, métodos de pago y requisitos de cumplimiento.",
  },
  {
    q: "¿Cómo apostar de forma responsable?",
    a: "Solo si eres mayor de 18 años. Define límites y no apuestes dinero que no puedas permitirte perder. Si deja de ser entretenimiento, busca ayuda.",
  },
] as const;

/**
 * Lower educational sections for Betting Page V2 (bonus → FAQ).
 */
export function BettingEducation({
  paymentMethods = [],
}: {
  paymentMethods?: string[];
}) {
  const bonusRows = resolveBettingBonusRows();

  return (
    <div className="space-y-6 sm:space-y-10 lg:space-y-12">
      <section
        id="bonos-deportivos"
        aria-labelledby="bonos-deportivos-heading"
        className="scroll-mt-24"
      >
        <h2
          id="bonos-deportivos-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          Condiciones de bonos deportivos
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground sm:text-base">
          Promociones deportivas o mixtas tomadas del registro editorial. Confirma siempre rollover,
          cuotas mínimas, vigencia y si la oferta aplica a apuestas o casino.
        </p>
        {bonusRows.length > 0 ? (
          <ul className="mt-3 space-y-2 sm:mt-4">
            {bonusRows.map((row) => (
              <li
                key={`${row.operatorId}-${row.title}`}
                className="rounded-xl border border-white/10 bg-[#111417]/55 p-3 sm:p-4"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-semibold text-foreground">{row.operatorName}</p>
                  <span className="rounded-full border border-cyan-500/25 bg-cyan-500/10 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-cyan-200">
                    {row.productLabel}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-foreground/90">{row.title}</p>
                {row.terms ? (
                  <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground sm:line-clamp-3 sm:text-sm">
                    {row.terms}
                  </p>
                ) : null}
                <TrackedLink
                  href={row.reviewHref}
                  event="betting_page_review_click"
                  section="bonos-deportivos"
                  operator={row.operatorId}
                  destination={row.reviewHref}
                  className="mt-1.5 inline-flex min-h-11 items-center text-sm font-medium text-primary underline-offset-2 hover:underline"
                >
                  Ver reseña →
                </TrackedLink>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 max-w-3xl text-sm text-muted-foreground">
            No hay paquetes deportivos activos listados en el registro editorial para la selección
            actual. Revisa cada operador antes de registrarte.
          </p>
        )}
      </section>

      <section
        id="mercados-deportivos"
        aria-labelledby="mercados-deportivos-heading"
        className="scroll-mt-24"
      >
        <h2
          id="mercados-deportivos-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          Deportes y mercados populares
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          En México, el fútbol — incluida la Liga MX — suele ser de los más consultados. Otros
          mercados dependen de cada operador. No inventamos cobertura de ligas ni cuotas.
        </p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Categorías de referencia">
          {MARKETS.map((name) => (
            <li
              key={name}
              className="inline-flex items-center rounded-lg border border-white/10 bg-[#16233f]/60 px-3 py-1.5 text-sm font-medium text-muted-foreground"
            >
              {name}
            </li>
          ))}
        </ul>
      </section>

      <section
        id="pagos-apuestas"
        aria-labelledby="pagos-apuestas-heading"
        className="scroll-mt-24"
      >
        <h2
          id="pagos-apuestas-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          Pagos, retiros y KYC
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Los operadores pueden ofrecer tarjetas, SPEI, OXXO, transferencias o crypto según su
          producto. Comisiones, tiempos, límites y verificación dependen de cada cuenta.
        </p>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          Antes de depositar o retirar, confirma requisitos de identidad y políticas vigentes en el
          sitio oficial. JugadaMax no garantiza velocidad de retiro ni aprobación KYC.
        </p>
        {paymentMethods.length > 0 ? (
          <div className="mt-5">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Métodos informados en la selección activa
            </p>
            <ul
              className="mt-2 flex flex-wrap gap-2"
              aria-label="Métodos de pago de la selección"
            >
              {paymentMethods.map((name) => (
                <li
                  key={name}
                  className="inline-flex items-center rounded-lg border border-primary/20 bg-primary/8 px-3 py-1.5 text-sm font-medium text-foreground"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </section>

      <section
        id="como-evaluamos-apuestas"
        aria-labelledby="como-evaluamos-apuestas-heading"
        className="scroll-mt-24"
      >
        <h2
          id="como-evaluamos-apuestas-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          Cómo evaluamos las casas de apuestas
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground sm:text-base">
          Evaluación editorial. No es asesoría financiera ni legal. Más detalle en{" "}
          <Link
            href="/como-evaluamos"
            className={cn("font-medium text-primary underline-offset-2 hover:underline", focusRing)}
          >
            cómo evaluamos
          </Link>
          .
        </p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {EVALUATION.map((item) => (
            <li
              key={item.title}
              className="rounded-xl border border-white/10 bg-[#111417]/55 p-4"
            >
              <h3 className="text-sm font-semibold text-foreground sm:text-base">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section
        id="juego-responsable-apuestas"
        aria-labelledby="juego-responsable-apuestas-heading"
        className="scroll-mt-24 rounded-2xl border border-accent/25 bg-accent/5 p-5 sm:p-6"
      >
        <h2
          id="juego-responsable-apuestas-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          Juego responsable
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Las apuestas son entretenimiento para mayores de 18 años. Define presupuesto y límites de
          tiempo. Si sientes presión o necesidad de recuperar pérdidas, detente y busca apoyo.
        </p>
        <nav className="mt-4 flex flex-wrap gap-2" aria-label="Recursos de juego responsable">
          <Link
            href="/juego-responsable"
            className={cn(
              "inline-flex min-h-11 items-center rounded-full border border-accent/30 bg-accent/10 px-3.5 text-sm font-medium text-accent",
              focusRing,
            )}
          >
            Juego responsable
          </Link>
          <Link
            href="/divulgacion-afiliados"
            className={cn(
              "inline-flex min-h-11 items-center rounded-full border border-white/12 px-3.5 text-sm font-medium text-foreground",
              focusRing,
            )}
          >
            Divulgación de afiliados
          </Link>
        </nav>
      </section>

      <section aria-labelledby="faq-apuestas-heading">
        <h2
          id="faq-apuestas-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          Preguntas frecuentes
        </h2>
        <div className="mt-4 max-w-3xl space-y-2">
          {FAQ.map((item) => (
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
    </div>
  );
}

import Link from "next/link";
import { sectionHeadingClassName } from "@/components/verticals/bonuses/bonus-visual";
import { cn, focusRing } from "@/lib/utils";

const TERM_GROUPS = [
  {
    label: "Activación y juego",
    accent: "border-amber-500/20 bg-amber-500/[0.04]",
    marker: "text-amber-300",
    items: [
      {
        marker: "A",
        title: "Requisito de apuesta (wagering)",
        body: "Cuántas veces debes apostar el bono o el depósito + bono antes de retirar. Un porcentaje alto no es automáticamente mejor si el wagering es exigente.",
      },
      {
        marker: "B",
        title: "Depósito mínimo",
        body: "Monto mínimo para activar la promoción. Puede variar por método de pago (por ejemplo SPEI frente a tarjeta).",
      },
      {
        marker: "C",
        title: "Juegos elegibles",
        body: "Slots, live casino o apuestas deportivas pueden contribuir de forma distinta — o no contribuir — al wagering.",
      },
    ],
  },
  {
    label: "Límites y cuenta",
    accent: "border-sky-500/20 bg-sky-500/[0.04]",
    marker: "text-sky-300",
    items: [
      {
        marker: "D",
        title: "Vigencia",
        body: "Plazo para activar y completar condiciones. Si no está publicada, confírmala en el operador antes de depositar.",
      },
      {
        marker: "E",
        title: "Límite de retiro",
        body: "Tope de ganancias retirables derivadas del bono. Revisa también apuesta máxima mientras el bono esté activo.",
      },
      {
        marker: "F",
        title: "Verificación de cuenta",
        body: "Muchos operadores pueden pedir documentos antes de pagar retiros, aunque el registro inicial sea sencillo.",
      },
    ],
  },
] as const;

const PRODUCT_PANELS = [
  {
    title: "Fiat / México",
    accent: "border-amber-500/25 bg-gradient-to-b from-[#18140f] to-[#111417]",
    bar: "from-amber-400/70 to-transparent",
    body: "Las promociones fiat o locales suelen explicarse en MXN y pueden involucrar tarjetas, OXXO, SPEI u otros métodos tradicionales cuando el operador los ofrece.",
  },
  {
    title: "Crypto",
    accent: "border-violet-500/25 bg-gradient-to-b from-[#15101c] to-[#111417]",
    bar: "from-violet-400/70 to-transparent",
    body: "Las promociones crypto pueden usar USDT u otras monedas, wallets y redes distintas. Un bono en crypto no elimina wagering, límites ni posibles controles de cuenta.",
  },
  {
    title: "Apuestas",
    accent: "border-emerald-500/25 bg-gradient-to-b from-[#0f1714] to-[#111417]",
    bar: "from-emerald-400/70 to-transparent",
    body: "Las promociones deportivas pueden tener cuotas mínimas, mercados elegibles y reglas distintas a las de casino. En operadores mixtos, confirma si eliges Casino o Sports antes de depositar.",
  },
] as const;

const ALERT_SIGNALS = [
  "Promesas de ganancias",
  "Bonos “sin condiciones”",
  "Promesas de retiros sin reglas claras",
  "Falta de términos públicos",
  "Presión para depositar rápido",
  "Cuentas duplicadas o abuso promocional",
] as const;

const FAQ_ITEMS = [
  {
    q: "¿Un bono es dinero gratis?",
    a: "No. Es una promoción con condiciones. Debes leer wagering, vigencia, juegos elegibles y límites antes de aceptarla.",
  },
  {
    q: "¿Por qué algunas filas dicen “No publicado”?",
    a: "Porque JugadaMax no tiene ese dato confirmado en el registro editorial. No inventamos depósito mínimo, wagering ni vigencia.",
  },
  {
    q: "¿Los bonos crypto son mejores que los fiat?",
    a: "No necesariamente. Cambian moneda, pagos y a veces verificación, pero siguen teniendo requisitos de apuesta y límites.",
  },
  {
    q: "¿Un bono deportivo sirve para casino?",
    a: "No siempre. Algunos paquetes son solo sportsbook. Confirma el producto elegible en los términos del operador.",
  },
  {
    q: "¿JugadaMax garantiza que la oferta esté disponible?",
    a: "No. Somos un medio editorial/afiliado. Disponibilidad, GEO, cuenta y términos oficiales del operador mandan.",
  },
] as const;

/**
 * Educational blocks for /bonos — terms, fiat/crypto/sports, warnings, FAQ.
 */
export function BonusEducationSections() {
  return (
    <div className="mb-8 space-y-8 sm:mb-10 sm:space-y-10 lg:mb-12">
      <section
        id="terminos-bonos"
        aria-labelledby="terminos-bonos-heading"
        className="scroll-mt-24"
      >
        <h2 id="terminos-bonos-heading" className={sectionHeadingClassName()}>
          Cómo leer los términos de un bono
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground sm:text-base">
          Antes de aceptar una promoción, revisa estas condiciones clave en el sitio del operador.
        </p>
        <div className="mt-5 space-y-5">
          {TERM_GROUPS.map((group) => (
            <div key={group.label}>
              <p className="mb-2 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                {group.label}
              </p>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
                {group.items.map((item) => (
                  <li
                    key={item.title}
                    className={cn(
                      "rounded-xl border p-3.5 sm:p-4",
                      group.accent,
                    )}
                  >
                    <div className="flex items-start gap-2.5">
                      <span
                        aria-hidden="true"
                        className={cn(
                          "mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full border border-white/15 bg-[#0A1931]/60 text-[0.65rem] font-bold",
                          group.marker,
                        )}
                      >
                        {item.marker}
                      </span>
                      <div className="min-w-0">
                        <h3 className="text-sm font-semibold text-foreground sm:text-base">
                          {item.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="bonos-fiat-crypto-sports-heading">
        <h2 id="bonos-fiat-crypto-sports-heading" className={sectionHeadingClassName()}>
          Bonos fiat, crypto y de apuestas
        </h2>
        <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
          {PRODUCT_PANELS.map((panel) => (
            <li
              key={panel.title}
              className={cn("relative overflow-hidden rounded-xl border p-4", panel.accent)}
            >
              <div
                aria-hidden="true"
                className={cn(
                  "absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r",
                  panel.bar,
                )}
              />
              <h3 className="text-sm font-semibold text-foreground sm:text-base">
                {panel.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{panel.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="bonos-alertas-heading">
        <h2 id="bonos-alertas-heading" className={sectionHeadingClassName()}>
          Señales de alerta
        </h2>
        <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {ALERT_SIGNALS.map((item) => (
            <li
              key={item}
              className="flex gap-2.5 rounded-lg border border-amber-500/25 bg-gradient-to-r from-amber-500/[0.08] to-transparent px-4 py-3 text-sm text-muted-foreground"
            >
              <span
                aria-hidden="true"
                className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full border border-amber-400/40 bg-amber-500/15 text-[0.7rem] font-bold text-amber-300"
              >
                !
              </span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="bonos-faq-heading">
        <h2 id="bonos-faq-heading" className={sectionHeadingClassName()}>
          Preguntas frecuentes
        </h2>
        <div className="mt-4 max-w-3xl space-y-2">
          {FAQ_ITEMS.map((item) => (
            <details
              key={item.q}
              className="group rounded-lg border border-white/10 bg-[#111417]/60 open:border-primary/25 open:bg-[#131920]/80"
            >
              <summary
                className={cn(
                  "cursor-pointer list-none px-3.5 py-3 text-sm font-semibold text-foreground transition-colors duration-150 hover:text-primary",
                  "[&::-webkit-details-marker]:hidden",
                )}
              >
                <span className="flex items-center justify-between gap-2">
                  {item.q}
                  <span
                    aria-hidden="true"
                    className="text-primary transition-transform duration-150 group-open:rotate-45"
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
        <p className="mt-4 max-w-3xl text-sm text-muted-foreground">
          Más contexto en{" "}
          <Link
            href="/juego-responsable"
            className={cn(
              "font-medium text-foreground underline-offset-2 hover:underline",
              focusRing,
            )}
          >
            juego responsable
          </Link>{" "}
          y en nuestra{" "}
          <Link
            href="/como-evaluamos"
            className={cn(
              "font-medium text-foreground underline-offset-2 hover:underline",
              focusRing,
            )}
          >
            metodología
          </Link>
          .
        </p>
      </section>
    </div>
  );
}

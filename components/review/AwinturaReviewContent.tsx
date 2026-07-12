import Link from "next/link";
import type { Author, Casino, Review } from "@/types/content";
import {
  AWINTURA_CARD_AFFILIATE_URL,
  AWINTURA_REGISTRATION_AFFILIATE_URL,
} from "@/lib/affiliate/constants";
import { AwinturaFeaturedCard } from "@/components/affiliate/AwinturaFeaturedCard";
import { MobileStickyOfferCta } from "@/components/affiliate/MobileStickyOfferCta";
import { AffiliateDisclosure } from "@/components/trust/AffiliateDisclosure";
import { ResponsibleGamblingNotice } from "@/components/trust/ResponsibleGamblingNotice";
import { JurisdictionWarning } from "@/components/trust/JurisdictionWarning";
import { ReviewHeader } from "@/components/review/ReviewHeader";
import { VerdictBox } from "@/components/review/VerdictBox";
import { ProsCons } from "@/components/review/ProsCons";
import {
  SourceReferenceBlock,
  type SourceReference,
} from "@/components/trust/SourceReferenceBlock";
import { cn, focusRing } from "@/lib/utils";

const AFFILIATE_REL = "sponsored nofollow noopener noreferrer";

const JURISDICTION_WARNING =
  "Awintura opera como casino internacional. México no aparece en la lista de países restringidos publicada en los términos revisados, pero JugadaMax no afirma autorización local mexicana. La disponibilidad, pagos, bonos, KYC y acceso dependen de la ubicación, la cuenta y los términos vigentes.";

const EXTERNAL_RISK_NOTE =
  "Las evaluaciones externas son favorables en seguridad general, pero la muestra de opiniones de jugadores sigue siendo limitada. Las reglas de bonos, conversión, KYC, rollover de depósito y retiros requieren revisión antes de depositar.";

const QUICK_SUMMARY = [
  { title: "Tipo", text: "Casino fiat/multi-currency con sportsbook adicional" },
  { title: "Campaña", text: "Hasta $60,000 + 250 FS + 200% freebets según GEO" },
  { title: "Pagos", text: "Tarjetas y algunas opciones crypto según cajero" },
  { title: "Principal precaución", text: "Bonos, KYC, rollover de depósitos y retiros" },
] as const;

const CAMPAIGN_CARDS = [
  { title: "Hasta $60,000", text: "según campaña, cuenta, GEO y términos" },
  { title: "Hasta 250 FS", text: "según campaña, cuenta, GEO y términos" },
  { title: "Hasta 200% freebets", text: "según campaña, cuenta, GEO y términos" },
  { title: "Cifras y moneda variables", text: "según campaña, cuenta, GEO y términos" },
] as const;

const CASINO_PRODUCT_CARDS = [
  { title: "Slots", text: "Lobby amplio con múltiples proveedores; el catálogo exacto puede variar por región." },
  { title: "Live casino", text: "Ruleta, blackjack, baccarat y mesas en vivo según disponibilidad del proveedor." },
  { title: "Table games", text: "Juegos de mesa RNG, póker y video póker sujetos a catálogo vigente." },
  { title: "Instant / crash", text: "Formatos instantáneos y crash-style donde el operador los habilita." },
  { title: "Jackpots", text: "Jackpots y bonus-buy games según catálogo y términos del operador." },
  { title: "VIP and rewards", text: "VIP club, logros, loot boxes y recompensas sujetas a actividad y términos." },
  { title: "Wheel of Fortune", text: "Mecánica Wheel of Fortune dentro del producto casino." },
  { title: "Tournaments and achievements", text: "Torneos, logros y campañas estacionales según disponibilidad." },
] as const;

const SPORTSBOOK_CARDS = [
  { title: "Sports markets", text: "Mercados deportivos sujetos a jurisdicción, cuenta y catálogo vigente del operador." },
  { title: "Freebets", text: "Freebets y promociones deportivas según campaña activa y términos oficiales." },
  { title: "Sport bonus balance", text: "Balances de bono deportivo separados del saldo de casino según reglas publicadas." },
  { title: "Betting rules and eligibility", text: "Cuotas mínimas, mercados elegibles, rollover y vencimiento deben confirmarse en términos." },
] as const;

const PAYMENT_CARDS = [
  { title: "Visa / Mastercard", text: "Tarjetas donde el cajero las habilita; límites y comisiones varían por país y cuenta." },
  { title: "E-wallets", text: "E-wallets y métodos locales LATAM según país; no todos están disponibles en México." },
  { title: "Bitcoin / Tether / Binance Pay", text: "Opciones crypto secundarias según cajero, red y cuenta — no convierten a Awintura en casino crypto en JugadaMax." },
  { title: "Mexico cashier not independently verified", text: "Una base externa reporta OXXO Pay y SPEI, pero JugadaMax no verificó su disponibilidad en un cajero mexicano en vivo." },
] as const;

const CONDITIONS_CARDS = [
  { title: "Bonus activation before deposit", text: "Los términos indican que la promoción debe activarse antes de depositar." },
  { title: "Specific wagering overrides generic rules", text: "Reglas genéricas (p. ej. x30 casino, x5 sport) pueden diferir de la promoción concreta." },
  { title: "Maximum bonus conversion", text: "La transferencia máxima desde un saldo de bono suele limitarse a x5 del valor del bono/premio." },
  { title: "KYC", text: "Verificación de identidad puede aplicarse antes de retiros o en situaciones de riesgo." },
  { title: "Same-method withdrawal", text: "Reglas de retiro por el mismo método pueden aplicarse según términos oficiales." },
  { title: "Deposit-turnover fees/restrictions", text: "Retirar sin suficiente rollover del depósito puede generar comisiones o restricciones." },
] as const;

const ANALYSIS_PARAGRAPHS = [
  "Awintura combina un catálogo amplio de casino — slots, live casino, mesas, jackpots, torneos, Wheel of Fortune, VIP y gamificación — con sportsbook y freebets en la misma cuenta. JugadaMax lo clasifica como casino fiat/multi-moneda con sportsbook adicional, no como casino crypto ni como operador local mexicano.",
  "La campaña suministrada para JugadaMax muestra hasta $60,000, 250 free spins y 200% freebets, pero la homepage pública de Awintura presenta otras cifras (p. ej. hasta 6,000 USD + 300 FS). Moneda, landing, país y promoción activa pueden cambiar lo que ve cada usuario. Confirma siempre la oferta en Active Promotions tras el redirect.",
  "Por eso Awintura no aparece en /casinos-crypto: las opciones Bitcoin, Tether y Binance Pay son métodos de pago secundarios, no la clasificación editorial principal. En pagos, JugadaMax no garantiza OXXO ni SPEI para cuentas mexicanas hasta verificar el cajero en vivo.",
  "En bonos y retiros, los términos distinguen saldos de casino y sport, exigen activación previa, limitan conversión y pueden aplicar KYC, reglas de mismo método y comisiones por bajo rollover de depósito. No prometemos retiros rápidos ni wagering universal único para la campaña JugadaMax.",
  "Calificamos Awintura 4.1/5 como operador internacional mixto secundario: licencia Curaçao identificable, producto amplio y señales externas favorables, pero sin licencia local mexicana, variabilidad promocional, reglas de bonos complejas y muestra limitada de feedback. 18+ solamente.",
] as const;

const FAQ_ITEMS = [
  {
    question: "¿Cuál es el bono de Awintura?",
    answer:
      "La creatividad de campaña suministrada muestra hasta $60,000, 250 FS y 200% freebets. Las páginas públicas pueden mostrar otras cifras. Confirma la promoción activa, moneda, depósito mínimo y wagering en tu cuenta antes de depositar.",
  },
  {
    question: "¿Por qué cambia el bono por país o cuenta?",
    answer:
      "Awintura ajusta promociones por GEO, moneda, landing de afiliado y perfil de cuenta. La campaña JugadaMax no garantiza las mismas cifras que ve todo usuario en el sitio público.",
  },
  {
    question: "¿Awintura ofrece freebets?",
    answer:
      "Sí, la campaña suministrada incluye hasta 200% freebets para sportsbook según términos. Cuotas mínimas, rollover, eventos elegibles y vencimiento deben confirmarse en la promoción activa.",
  },
  {
    question: "¿Awintura tiene casino y sportsbook?",
    answer:
      "Sí. Awintura es un operador mixto con casino y sportsbook en una sola cuenta. JugadaMax lo cubre en casinos fiat, bonos y apuestas, pero no en la homepage ni en casinos crypto.",
  },
  {
    question: "¿Awintura acepta pagos fiat?",
    answer:
      "Awintura publica tarjetas y otros métodos fiat según país. Disponibilidad, moneda, mínimos y comisiones dependen del cajero y la cuenta.",
  },
  {
    question: "¿Awintura acepta Bitcoin o USDT?",
    answer:
      "Fuentes oficiales mencionan Bitcoin, Tether y Binance Pay entre opciones posibles. Esto no convierte a Awintura en casino crypto en JugadaMax; confirma redes y activos en el cajero.",
  },
  {
    question: "¿Awintura ofrece OXXO o SPEI en México?",
    answer:
      "Una base externa reporta OXXO Pay y SPEI, pero JugadaMax no verificó su disponibilidad en un cajero mexicano en vivo. Confirma siempre los métodos mostrados en tu cuenta.",
  },
  {
    question: "¿Awintura está disponible en México?",
    answer:
      "México no aparece en la lista de países restringidos revisada en términos generales, pero esto no equivale a autorización local mexicana. Revisa ley aplicable y términos vigentes.",
  },
  {
    question: "¿Awintura requiere KYC?",
    answer:
      "El operador puede solicitar verificación de identidad, titularidad de pago y dirección antes de retiros o en situaciones de riesgo según su política AML/KYC.",
  },
  {
    question: "¿Cómo funcionan los retiros?",
    answer:
      "Los retiros pueden estar sujetos a KYC, reglas de mismo método, límites, tiempos variables y restricciones por bajo rollover del depósito. JugadaMax no promete plazos fijos.",
  },
  {
    question: "¿Awintura tiene licencia?",
    answer:
      "Awintura es operado por Wiraon B.V. bajo licencia Curaçao OGL/2024/686/0183. Briantie Limited actúa como agente de pagos. No es licencia local mexicana.",
  },
] as const;

const SOURCE_REFERENCES: SourceReference[] = [
  { label: "Awintura official homepage", href: "https://awintura.com/en/" },
  { label: "Awintura Terms and Conditions", href: "https://awintura.com/en/terms" },
  { label: "Awintura AML Policy", href: "https://awintura.com/en/aml-policy" },
  { label: "Awintura Responsible Gaming", href: "https://awintura.com/en/responsible-gaming" },
  { label: "Awintura About", href: "https://awintura.com/en/about" },
  {
    label: "Casino Guru Awintura review",
    href: "https://casino.guru/awintura-casino-review",
    note: "Evaluación externa — no es una valoración JugadaMax.",
  },
  { label: "Metodología editorial JugadaMax", href: "/como-evaluamos" },
];

export function AwinturaReviewContent({
  review,
  casino,
  author,
}: {
  review: Review;
  casino: Casino;
  author: Author;
}) {
  return (
    <>
      <article className="mx-auto w-full max-w-5xl space-y-7 sm:space-y-8">
        <ReviewHeader review={review} casino={casino} author={author} />

        <div className="mx-auto w-full max-w-4xl space-y-3">
          <AffiliateDisclosure />
          <ResponsibleGamblingNotice />
          <JurisdictionWarning>{JURISDICTION_WARNING}</JurisdictionWarning>
        </div>

        <div id="review-primary-offer">
          <AwinturaFeaturedCard context="review" />
        </div>

        <section
          aria-labelledby="awintura-quick-summary-heading"
          className="rounded-xl border border-border/60 bg-card p-4 sm:p-5"
        >
          <h2 id="awintura-quick-summary-heading" className="text-lg font-semibold text-foreground">
            Resumen rápido
          </h2>
          <dl className="mt-4 grid gap-3 sm:grid-cols-2">
            {QUICK_SUMMARY.map((item) => (
              <div key={item.title} className="rounded-lg border border-white/10 bg-[#111417] p-3">
                <dt className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {item.title}
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.text}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section aria-labelledby="awintura-campaign-heading">
          <h2 id="awintura-campaign-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Desglose de la campaña JugadaMax
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Creatividad de campaña suministrada — no garantiza importes universales para todas las
            cuentas.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {CAMPAIGN_CARDS.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-[#D49A00]/20 bg-[#1A1409]/80 p-3"
              >
                <p className="text-sm font-bold text-[#FFD54A]">{card.title}</p>
                <p className="mt-1 text-xs text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="awintura-figures-heading"
          className="rounded-xl border border-border/60 bg-card p-4 sm:p-5"
        >
          <h2 id="awintura-figures-heading" className="text-lg font-semibold text-foreground">
            Por qué cambian las cifras
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            La creatividad de afiliado suministrada muestra hasta $60,000 + 250 FS + 200% freebets.
            La homepage pública de Awintura puede mostrar otras estructuras de bienvenida (p. ej.
            hasta 6,000 USD + 300 FS). La moneda de la cuenta, el país, la landing de entrada y la
            promoción activa pueden cambiar lo que ve cada usuario. Debes confirmar la oferta
            mostrada tras el redirect y dentro de Active Promotions antes de depositar.
          </p>
        </section>

        <section aria-labelledby="awintura-casino-heading">
          <h2 id="awintura-casino-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Producto casino
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {CASINO_PRODUCT_CARDS.map((card) => (
              <div key={card.title} className="rounded-xl border border-border/60 bg-card p-4">
                <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="awintura-sportsbook-heading">
          <h2 id="awintura-sportsbook-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Producto sportsbook
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {SPORTSBOOK_CARDS.map((card) => (
              <div key={card.title} className="rounded-xl border border-border/60 bg-card p-4">
                <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="awintura-payments-heading">
          <h2 id="awintura-payments-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Pagos
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {PAYMENT_CARDS.map((card) => (
              <div key={card.title} className="rounded-xl border border-border/60 bg-card p-4">
                <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="awintura-conditions-heading">
          <h2
            id="awintura-conditions-heading"
            className="text-lg font-semibold text-foreground sm:text-xl"
          >
            Bonos, KYC y condiciones de retiro
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {CONDITIONS_CARDS.map((card) => (
              <div key={card.title} className="rounded-xl border border-border/60 bg-card p-4">
                <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="awintura-licence-heading"
          className="rounded-xl border border-border/60 bg-card p-4 sm:p-5"
        >
          <h2 id="awintura-licence-heading" className="text-lg font-semibold text-foreground">
            Licencia y titularidad
          </h2>
          <dl className="mt-4 space-y-2 text-sm text-muted-foreground">
            <div>
              <dt className="font-semibold text-foreground">Operador</dt>
              <dd>Wiraon B.V. — registro 146886</dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">Dirección</dt>
              <dd>Korporaalweg 10, Willemstad, Curaçao</dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">Licencia</dt>
              <dd>Curaçao — OGL/2024/686/0183</dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">Agente de pagos</dt>
              <dd>Briantie Limited — registro HE 385770</dd>
            </div>
          </dl>
        </section>

        <section
          aria-labelledby="awintura-external-heading"
          className="rounded-xl border border-amber-500/25 bg-amber-500/5 p-4 sm:p-5"
        >
          <h2 id="awintura-external-heading" className="text-lg font-semibold text-foreground">
            Nota de evaluación externa
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Casino Guru muestra actualmente un Safety Index Very High de 9.8, pero la muestra de
            opiniones de usuarios sigue siendo pequeña. Las valoraciones de terceros no son
            valoraciones JugadaMax. JugadaMax asigna de forma independiente 4.1/5.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{EXTERNAL_RISK_NOTE}</p>
        </section>

        <VerdictBox verdict={review.verdict} rating={review.rating} />

        <section aria-label="Pros y contras">
          <h2 className="mb-3 text-xl font-semibold text-foreground">Pros y contras</h2>
          <ProsCons pros={review.pros} cons={review.cons} />
        </section>

        <section aria-label="Análisis" className="mx-auto max-w-4xl space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Análisis</h2>
          {ANALYSIS_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              {paragraph}
            </p>
          ))}
        </section>

        <section
          aria-labelledby="awintura-final-cta-heading"
          className="rounded-xl border border-[#D49A00]/20 bg-gradient-to-br from-[#537A28]/8 via-card to-[#1A1409] p-4 sm:p-5"
        >
          <h2 id="awintura-final-cta-heading" className="text-lg font-semibold text-foreground">
            Registrarse en Awintura
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Confirma la promoción activa, métodos de pago, reglas de verificación y límites de retiro
            en el sitio oficial antes de depositar.
          </p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            <a
              href={AWINTURA_REGISTRATION_AFFILIATE_URL}
              target="_blank"
              rel={AFFILIATE_REL}
              className={cn(
                "inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold",
                "bg-[#FFD54A] text-[#090704] transition-colors hover:bg-[#F2B600]",
                focusRing,
              )}
            >
              Registrarse en Awintura
            </a>
            <Link
              href="/casinos-fiat"
              className={cn(
                "inline-flex min-h-11 items-center justify-center rounded-md border border-[#537A28]/40 px-5 py-2.5 text-sm font-semibold text-[#6FA536] transition-colors hover:bg-[#537A28]/10",
                focusRing,
              )}
            >
              Comparar casinos fiat
            </Link>
          </div>
        </section>

        <section aria-labelledby="awintura-faq-heading">
          <h2 id="awintura-faq-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Preguntas frecuentes
          </h2>
          <div className="mt-4 divide-y divide-white/10 rounded-xl border border-border/60 bg-card">
            {FAQ_ITEMS.map((item) => (
              <details key={item.question} className="group px-4 py-1 sm:px-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 py-4 text-sm font-semibold text-foreground marker:content-none [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                  >
                    ▾
                  </span>
                </summary>
                <p className="pb-4 text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <SourceReferenceBlock
          title="Fuentes y referencias"
          description="Hechos publicados por el operador, creatividad de campaña suministrada, evaluaciones externas y metodología editorial JugadaMax. Las reseñas externas informan precaución — no son valoraciones JugadaMax."
          items={SOURCE_REFERENCES}
        />
      </article>

      <MobileStickyOfferCta
        showAfterId="review-primary-offer"
        compactPrimaryLabel="Ver"
        compactSecondaryLabel="Comparar"
        primaryLabel="Ver Awintura"
        primaryHref={AWINTURA_CARD_AFFILIATE_URL}
        secondaryLabel="Comparar"
        secondaryHref="/casinos-fiat"
      />
    </>
  );
}

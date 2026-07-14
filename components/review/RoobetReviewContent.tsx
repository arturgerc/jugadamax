import Link from "next/link";
import type { Author, Casino, Review } from "@/types/content";
import { ROOBET_MX_CASINO_AFFILIATE_URL } from "@/lib/affiliate/constants";
import { RoobetFeaturedCard } from "@/components/affiliate/RoobetFeaturedCard";
import { MobileStickyOfferCta } from "@/components/affiliate/MobileStickyOfferCta";
import { AffiliateDisclosure } from "@/components/trust/AffiliateDisclosure";
import { ResponsibleGamblingNotice } from "@/components/trust/ResponsibleGamblingNotice";
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
  "Roobet es un operador crypto internacional. La disponibilidad, promociones, pagos, sportsbook, KYC y retiros dependen de tu ubicación, cuenta y de los términos oficiales. JugadaMax no afirma que Roobet cuente con licencia local mexicana.";

const CAMPAIGN_SNAPSHOT_NOTE =
  "Campaña visible en la captura suministrada; puede finalizar, cambiar o no estar disponible para todas las cuentas.";

const QUICK_SUMMARY = [
  { title: "Tipo", text: "Casino crypto internacional con sportsbook adicional" },
  { title: "Promociones", text: "Campañas rotativas de casino, VIP y deportes" },
  { title: "Pagos", text: "Crypto y otros métodos según país y cajero" },
  { title: "Principal precaución", text: "Elegibilidad, KYC, promociones y retiros" },
] as const;

const CASINO_PROMO_CARDS = [
  {
    title: "$100,000 Weekly Raffle",
    text: "Entradas por actividad según reglas de campaña",
  },
  {
    title: "Crown the Champions",
    text: "Prize pool promocional de hasta $1,500,000 según términos",
  },
  {
    title: "Drops & Wins",
    text: "Campaña promocional que anuncia $25,000,000 en rewards",
  },
] as const;

const VIP_PROMO_CARDS = [
  {
    title: "VIP Summer Giveaway",
    text: "Entradas y premios sujetos a nivel, actividad y campaña",
  },
] as const;

const SPORTSBOOK_PROMO_CARDS = [
  {
    title: "$125,000 Football Frenzy",
    text: "Campaña deportiva y participación semanal según términos",
  },
  {
    title: "Parlay Power Play",
    text: "Promoción de combinadas con campaña World Cup",
  },
  {
    title: "2-Goals Up Advantage",
    text: "Pago anticipado bajo reglas específicas de la promoción",
  },
] as const;

const BRAND_PROMO_CARDS = [
  {
    title: "Roobet x Chelsea FC",
    text: "Campaña de partnership, no bono garantizado",
  },
] as const;

const CASINO_PRODUCT_CARDS = [
  { title: "Slots", text: "Lobby amplio con múltiples proveedores; catálogo sujeto a región." },
  { title: "Live casino", text: "Ruleta, blackjack y mesas en vivo según disponibilidad." },
  { title: "Roulette and blackjack", text: "Formatos RNG y live sujetos a catálogo vigente." },
  { title: "Crash and instant games", text: "Juegos instantáneos y crash-style donde el operador los habilita." },
  { title: "Originals", text: "Títulos propios y formatos house-edge según catálogo del operador." },
  { title: "Jackpot games", text: "Jackpots y juegos con premios acumulados según términos." },
] as const;

const SPORTSBOOK_CARDS = [
  { title: "Football and major sports", text: "Mercados deportivos sujetos a jurisdicción y catálogo vigente." },
  { title: "Esports where available", text: "Esports y eventos digitales según disponibilidad regional." },
  { title: "Parlay promotions", text: "Combinadas y promociones deportivas según campaña activa." },
  { title: "Early-payout campaigns", text: "Promociones de pago anticipado bajo reglas específicas." },
  { title: "Sports availability by GEO", text: "Mercados, cuotas y elegibilidad varían por país y cuenta." },
] as const;

const VIP_REWARDS_CARDS = [
  { title: "Weekly Raffle", text: "Entradas por actividad según reglas de campaña vigente." },
  { title: "VIP campaigns", text: "Campañas VIP y niveles sujetos a actividad y términos." },
  { title: "Crown the Champions", text: "Campaña promocional con prize pool según términos oficiales." },
  { title: "Drops & Wins", text: "Campaña rotativa de casino con rewards según proveedor y operador." },
  { title: "Recurring and seasonal campaigns", text: "Promociones estacionales y eventos temáticos según calendario." },
] as const;

const PAYMENT_CARDS = [
  { title: "Bitcoin / Ethereum", text: "Activos crypto habituales; confirma red, mínimos y comisiones en el cajero." },
  { title: "USDT / USDC", text: "Stablecoins según red y país; verifica dirección y límites antes de depositar." },
  { title: "Litecoin / XRP", text: "Altcoins adicionales según cajero y cuenta." },
  { title: "Other methods by jurisdiction", text: "Otros métodos pueden aparecer según mercado; no asumas disponibilidad universal." },
] as const;

const ANALYSIS_PARAGRAPHS = [
  "Roobet integra casino crypto, live casino, Originals y sportsbook en una sola plataforma internacional. JugadaMax lo clasifica como casino crypto con sportsbook adicional y lo mantiene en el ranking manual de /casinos-crypto en la posición editorial existente, por debajo de BetFury, 500 Casino, Gamdom y Rainbet.",
  "Las capturas de promociones de julio de 2026 muestran Weekly Raffle, Drops & Wins, Crown the Champions, campañas VIP y acciones deportivas como Football Frenzy o Parlay Power Play. Son campañas rotativas: importes, entradas, elegibilidad y vencimiento pueden cambiar o no aplicar a tu cuenta o jurisdicción.",
  "El sportsbook complementa el casino dentro de la misma cuenta, pero no convierte a Roobet en operador local mexicano ni en recomendación principal de apuestas en JugadaMax. Mercados, cuotas mínimas, mercados elegibles y promociones deportivas deben confirmarse en términos vigentes.",
  "En licencia y KYC, fuentes externas identifican a Raw Entertainment B.V. y licencias de Curaçao y Anjouan. Esto no equivale a autorización local mexicana. Roobet puede solicitar verificación antes de retiros o promociones; JugadaMax no garantiza tiempos de retiro ni ausencia de KYC.",
  "Calificamos Roobet 4.1/5: buena variedad de producto, promociones visibles y campaña de afiliado activa, con cautela sobre prize pools no garantizados, reglas promocionales complejas y dependencia de jurisdicción. La colocación México-facing es comparativa internacional, no afirmación de licencia local. 18+.",
] as const;

const FAQ_ITEMS = [
  {
    question: "¿Roobet tiene bono de bienvenida?",
    answer:
      "Roobet muestra campañas rotativas de casino, VIP y deportes. JugadaMax no publica un bono de bienvenida fijo ni garantizado; confirma promociones activas en el operador antes de depositar.",
  },
  {
    question: "¿Qué promociones tiene Roobet?",
    answer:
      "Las capturas suministradas incluyen Weekly Raffle, Drops & Wins, Crown the Champions, campañas VIP y promociones deportivas. Pueden finalizar, cambiar o no estar disponibles para todas las cuentas.",
  },
  {
    question: "¿Qué es Drops & Wins?",
    answer:
      "Es una campaña promocional de casino que anuncia rewards acumulados según términos del operador y proveedores participantes. No garantiza premios individuales ni elegibilidad universal.",
  },
  {
    question: "¿Cómo funciona Weekly Raffle?",
    answer:
      "La campaña visible indica entradas por actividad de apuesta según reglas de campaña. Premios, entradas y elegibilidad dependen de términos oficiales y pueden variar por cuenta.",
  },
  {
    question: "¿Roobet tiene sportsbook?",
    answer:
      "Sí, Roobet incluye sportsbook como producto adicional. Mercados, promociones deportivas y disponibilidad dependen de jurisdicción y términos vigentes.",
  },
  {
    question: "¿Roobet acepta criptomonedas?",
    answer:
      "Roobet se orienta a pagos crypto. Bitcoin, Ethereum, USDT, USDC, Litecoin, XRP y otros métodos pueden estar disponibles según país y cajero; confirma redes y límites antes de depositar.",
  },
  {
    question: "¿Roobet está disponible en México?",
    answer:
      "Roobet es un operador internacional. JugadaMax no afirma licencia local mexicana ni disponibilidad legal universal; revisa restricciones regionales y términos oficiales.",
  },
  {
    question: "¿Roobet requiere KYC?",
    answer:
      "Roobet puede solicitar verificación de identidad, residencia y propiedad del método de pago antes de retiros, promociones o por controles de riesgo.",
  },
  {
    question: "¿Cuánto tarda Roobet en procesar retiros?",
    answer:
      "JugadaMax no garantiza tiempos de retiro. Redes, límites, revisiones, comisiones y controles antifraude pueden afectar el procesamiento.",
  },
  {
    question: "¿Roobet tiene licencia?",
    answer:
      "Fuentes externas identifican licencias de Curaçao y Anjouan bajo Raw Entertainment B.V. Confirma números, restricciones y políticas directamente en Roobet; no equivale a licencia local mexicana.",
  },
  {
    question: "¿Roobet está asociado con Chelsea FC?",
    answer:
      "Las capturas muestran una campaña Roobet x Chelsea FC como partnership promocional. No implica bono garantizado ni beneficios automáticos para todos los usuarios.",
  },
] as const;

const SOURCE_REFERENCES: SourceReference[] = [
  { label: "Roobet — sitio oficial", href: "https://roobet.com/" },
  { label: "Roobet — promociones", href: "https://roobet.com/promotions" },
  { label: "Roobet — términos y condiciones", href: "https://roobet.com/terms" },
  {
    label: "Casino Guru — reseña de Roobet",
    href: "https://casino.guru/roobet-casino-review",
    note: "Evaluación externa; no es la calificación editorial de JugadaMax (4.1/5).",
  },
  { label: "Metodología editorial JugadaMax", href: "/como-evaluamos" },
  {
    label: "Guía JugadaMax — Roobet en México",
    href: "/guias/roobet-mexico-crypto",
    note: "Contenido editorial complementario; no sustituye la reseña estructurada.",
  },
  {
    label: "Capturas de campañas suministradas (julio 2026)",
    note: "Weekly Raffle, Drops & Wins, Crown the Champions, VIP, sportsbook y partnership Chelsea FC.",
  },
];

function PromoCardGrid({
  title,
  cards,
}: {
  title: string;
  cards: readonly { title: string; text: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-violet-200">{title}</h3>
      <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-xl border border-violet-500/20 bg-[#0B0B22]/80 p-3"
          >
            <p className="text-sm font-bold text-violet-100">{card.title}</p>
            <p className="mt-1 text-xs text-muted-foreground">{card.text}</p>
            <p className="mt-2 text-[0.65rem] leading-snug text-muted-foreground/80">
              {CAMPAIGN_SNAPSHOT_NOTE}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function RoobetReviewContent({
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
          <div
            role="note"
            className="rounded-lg border border-amber-500/25 bg-amber-500/5 px-4 py-3 text-sm leading-relaxed text-muted-foreground"
          >
            {JURISDICTION_WARNING}
          </div>
        </div>

        <div id="review-primary-offer">
          <RoobetFeaturedCard context="review" />
        </div>

        <section aria-labelledby="roobet-resumen-rapido-heading">
          <h2
            id="roobet-resumen-rapido-heading"
            className="text-lg font-semibold text-foreground sm:text-xl"
          >
            Resumen rápido
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {QUICK_SUMMARY.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-violet-500/20 bg-[#0B0B22]/80 p-3"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-violet-300">
                  {card.title}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="roobet-promos-heading">
          <h2 id="roobet-promos-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Instantánea de promociones (julio 2026)
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Campañas visibles en capturas suministradas — no promociones permanentes ni garantizadas.
          </p>
          <div className="mt-4 space-y-5">
            <PromoCardGrid title="Casino" cards={CASINO_PROMO_CARDS} />
            <PromoCardGrid title="VIP" cards={VIP_PROMO_CARDS} />
            <PromoCardGrid title="Sportsbook" cards={SPORTSBOOK_PROMO_CARDS} />
            <PromoCardGrid title="Marca" cards={BRAND_PROMO_CARDS} />
          </div>
        </section>

        <section aria-labelledby="roobet-casino-heading">
          <h2 id="roobet-casino-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Casino y Originals
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {CASINO_PRODUCT_CARDS.map((card) => (
              <div key={card.title} className="rounded-xl border border-border/60 bg-card p-4">
                <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="roobet-sportsbook-heading">
          <h2
            id="roobet-sportsbook-heading"
            className="text-lg font-semibold text-foreground sm:text-xl"
          >
            Sportsbook y promociones deportivas
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

        <section aria-labelledby="roobet-vip-heading">
          <h2 id="roobet-vip-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            VIP y recompensas recurrentes
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {VIP_REWARDS_CARDS.map((card) => (
              <div key={card.title} className="rounded-xl border border-border/60 bg-card p-4">
                <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="roobet-payments-heading">
          <h2 id="roobet-payments-heading" className="text-lg font-semibold text-foreground sm:text-xl">
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

        <section aria-labelledby="roobet-kyc-heading">
          <h2 id="roobet-kyc-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            KYC y retiros
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-border/60 bg-card p-4">
              <h3 className="text-sm font-semibold text-foreground">Verificación KYC</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Roobet puede solicitar verificación de identidad, residencia y propiedad del método
                de pago antes de retiros, promociones o por controles de riesgo.
              </p>
            </div>
            <div className="rounded-xl border border-border/60 bg-card p-4">
              <h3 className="text-sm font-semibold text-foreground">Retiros</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                JugadaMax no garantiza tiempos de retiro. Redes, límites, revisiones, comisiones y
                controles antifraude pueden afectar el procesamiento.
              </p>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="roobet-licence-heading"
          className="rounded-xl border border-border/60 bg-card p-4 sm:p-5"
        >
          <h2 id="roobet-licence-heading" className="text-lg font-semibold text-foreground">
            Licencia y titularidad
          </h2>
          <dl className="mt-4 space-y-2 text-sm text-muted-foreground">
            <div>
              <dt className="font-semibold text-foreground">Operador reportado por fuente externa</dt>
              <dd>Raw Entertainment B.V.</dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">Jurisdicciones de licencia reportadas</dt>
              <dd>Curaçao Gaming Authority · Anjouan Gaming</dd>
            </div>
          </dl>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            JugadaMax no publica números de licencia como hechos confirmados por el operador sin
            verificación directa en términos vigentes. Confirma entidad, restricciones regionales y
            políticas antes de registrarte.
          </p>
        </section>

        <section
          aria-labelledby="roobet-external-heading"
          className="rounded-xl border border-violet-500/20 bg-[#0B0B22]/60 p-4 sm:p-5"
        >
          <h2 id="roobet-external-heading" className="text-lg font-semibold text-foreground">
            Nota de evaluación externa
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Casino Guru currently reports an Above Average Safety Index of 7.9/10 and good user
            feedback based on a limited review sample. It also reports mostly fair terms with one
            identified concern. These are external assessments, not JugadaMax ratings. JugadaMax
            independently assigns 4.1/5.
          </p>
        </section>

        <VerdictBox verdict={review.verdict} rating={review.rating} />

        <ProsCons pros={review.pros} cons={review.cons} />

        <section aria-labelledby="roobet-analisis-heading">
          <h2 id="roobet-analisis-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Análisis editorial
          </h2>
          <div className="mt-4 space-y-3">
            {ANALYSIS_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-sm leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="roobet-final-cta-heading"
          className="rounded-xl border border-violet-500/25 bg-gradient-to-br from-[#070817] via-[#0B0B22] to-[#211C50] p-5 sm:p-6"
        >
          <h2 id="roobet-final-cta-heading" className="text-lg font-semibold text-foreground">
            Revisar Roobet
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Confirma promociones activas, disponibilidad, criptomonedas, KYC y reglas de retiro
            directamente en Roobet antes de depositar.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={ROOBET_MX_CASINO_AFFILIATE_URL}
              target="_blank"
              rel={AFFILIATE_REL}
              className={cn(
                "inline-flex min-h-11 items-center justify-center rounded-md bg-[#8B5CF6] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#A78BFA]",
                focusRing,
              )}
            >
              Visitar Roobet
            </a>
            <Link
              href="/casinos-crypto"
              className={cn(
                "inline-flex min-h-11 items-center justify-center rounded-md border border-violet-400/35 px-5 py-2.5 text-sm font-semibold text-violet-200 transition-colors hover:bg-violet-500/10",
                focusRing,
              )}
            >
              Comparar casinos crypto
            </Link>
          </div>
        </section>

        <section aria-labelledby="roobet-faq-heading">
          <h2 id="roobet-faq-heading" className="text-lg font-semibold text-foreground sm:text-xl">
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
          description="Información oficial del operador, capturas de campaña suministradas, evaluación externa y opinión editorial de JugadaMax."
          items={SOURCE_REFERENCES}
        />
      </article>

      <MobileStickyOfferCta
        showAfterId="review-primary-offer"
        compactPrimaryLabel="Visitar"
        compactSecondaryLabel="Comparar"
        primaryLabel="Visitar Roobet"
        primaryHref={ROOBET_MX_CASINO_AFFILIATE_URL}
        secondaryLabel="Comparar"
        secondaryHref="/casinos-crypto"
      />
    </>
  );
}

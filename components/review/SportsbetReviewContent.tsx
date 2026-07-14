import Link from "next/link";
import type { Author, Casino, Review } from "@/types/content";
import {
  SPORTSBETIO_BETTING_AFFILIATE_URL,
  SPORTSBETIO_REGISTRATION_AFFILIATE_URL,
  SPORTSBETIO_WORLD_CUP_TOURNAMENT_URL,
} from "@/lib/affiliate/constants";
import { isSportsbetWorldCupCampaignActive } from "@/lib/affiliate/sportsbetio-campaign";
import { SportsbetFeaturedCard } from "@/components/affiliate/SportsbetFeaturedCard";
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
  "Sportsbet.io es un operador internacional con licencia de Curaçao. México no aparece en la lista de jurisdicciones restringidas revisada, pero esto no equivale a licencia local mexicana. La disponibilidad, registro, promociones, pagos, KYC y retiros dependen de la ubicación, la cuenta y los términos vigentes.";

const QUICK_SUMMARY = [
  { title: "Tipo", text: "Sportsbook crypto con casino adicional" },
  { title: "Welcome", text: "100% hasta 300 USDT — Sports o Casino" },
  { title: "Pagos", text: "BTC, USDT y otras monedas según cuenta" },
  { title: "Principal precaución", text: "Safety Index externo, KYC y retiros" },
] as const;

const WELCOME_SPORTS = [
  "100% hasta 300 USDT",
  "Depósito mínimo: 10 USDT",
  "Wagering publicado: 15x",
] as const;

const WELCOME_CASINO = [
  "100% hasta 300 USDT",
  "Depósito mínimo: 10 USDT",
  "Wagering publicado: 40x",
] as const;

const WELCOME_ACTIVATION = [
  "Activa Sports o Casino en Rewards",
  "No combines ambas opciones sin confirmación",
] as const;

const WELCOME_ELIGIBILITY = [
  "Cuenta, GEO y términos vigentes",
  "Promoción no garantizada para todas las cuentas",
] as const;

const WC_ACTIVE_CARDS = [
  { title: "Prize pool", text: "$777,777 total" },
  { title: "Campeón", text: "$300,000 según campaña" },
  { title: "Puntos", text: "1 punto por cada $1 apostado" },
  { title: "Cuota mínima", text: "1.25 por selección" },
  { title: "Premios finales", text: "Top 100 según leaderboard" },
  { title: "Finaliza", text: "19 julio 2026 · 23:00 UTC" },
] as const;

const OTHER_PROMOS = [
  "World Cup Wager Races",
  "World Cup Cash Drops",
  "Daily Boost",
  "Match Day Spin Insurance",
  "Pragmatic Play Drops & Wins",
  "VIP Clubhouse",
] as const;

const SPORTSBOOK_CARDS = [
  { title: "Fútbol", text: "Mercados pre-match y live según catálogo vigente." },
  { title: "Live betting", text: "Cuotas variables; liquidación anticipada no garantizada." },
  { title: "Esports", text: "Disciplinas digitales según disponibilidad regional." },
  { title: "Básquetbol y tenis", text: "Deportes populares sujetos a calendario activo." },
  {
    title: "Cricket y deportes internacionales",
    text: "Cobertura amplia; confirma mercados en tu cuenta.",
  },
  { title: "Combinadas / parlays", text: "Acumuladores sujetos a reglas de liquidación." },
  { title: "Formatos de cuotas", text: "Decimal y otros formatos según preferencia de cuenta." },
  { title: "Reglas de liquidación", text: "Revisa siempre términos de apuestas y void rules." },
] as const;

const CASINO_CARDS = [
  { title: "Slots", text: "Lobby amplio según proveedores habilitados por región." },
  { title: "Live casino", text: "Mesas en vivo sujetas a catálogo y horarios." },
  { title: "Originals", text: "Juegos propios del operador según disponibilidad." },
  { title: "Ruleta y blackjack", text: "Mesas RNG y live según catálogo vigente." },
  { title: "Baccarat", text: "Variantes live y RNG donde el operador las habilita." },
  { title: "Crash / instant games", text: "Formatos rápidos sujetos a límites y términos." },
  { title: "Jackpot games", text: "Premios progresivos según proveedor y región." },
  { title: "Torneos", text: "Competiciones rotativas con reglas específicas." },
] as const;

const PAYMENT_CARDS = [
  { title: "Bitcoin / Ethereum", text: "Depósitos y retiros crypto según red y mínimos." },
  { title: "USDT / USDC", text: "Stablecoins; confirma red antes de transferir." },
  { title: "Litecoin / XRP", text: "Activos adicionales según cajero de cuenta." },
  { title: "Otras criptomonedas", text: "Catálogo amplio; disponibilidad variable por país." },
  { title: "Fiat donde disponible", text: "Términos contemplan fiat; confirma en tu cajero." },
  { title: "Cajero específico", text: "Métodos visibles pueden diferir entre usuarios." },
] as const;

const KYC_CARDS = [
  {
    title: "KYC",
    text: "Identidad, dirección y propiedad del método de pago pueden solicitarse.",
  },
  {
    title: "Retiros fiat",
    text: "Hasta tres días laborables después de aprobación según proveedor.",
  },
  {
    title: "Retiro con bono activo",
    text: "Los bonos pueden imponer wagering y condiciones adicionales.",
  },
  {
    title: "Volumen de depósito",
    text: "Puede exigirse al menos 1x; controles mayores pueden aplicarse en casos de riesgo.",
  },
  {
    title: "Seguridad de contraseña",
    text: "Cambiar la contraseña bloquea retiros durante 48 horas según términos.",
  },
  {
    title: "Comisiones",
    text: "Red, banco o proveedor pueden aplicar fees.",
  },
] as const;

const ANALYSIS_PARAGRAPHS = [
  "Sportsbet.io es ante todo un sportsbook crypto con apuestas pre-match, live, esports y mercados combinados. JugadaMax lo clasifica como sportsbook-first con casino crypto sustancial — no como operador fiat — y lo coloca en /casinos-crypto, /apuestas y /bonos crypto, pero no en /casinos-fiat ni homepage.",
  "Aunque admite múltiples criptomonedas y también fiat según términos, la propuesta principal es crypto-first. Por eso aparece en casinos-crypto como campaña internacional activa junto a Vodka.bet, sin recibir un rank canónico numerado.",
  "El Champions Welcome Bonus publicado ofrece 100% hasta 300 USDT con elección Sports o Casino, depósito mínimo 10 USDT y wagering distinto: 15x para Sports y 40x para Casino. Debes activar la recompensa en Rewards antes de depositar.",
  "La campaña temporal $777,777 World Cup Tournament finaliza el 19 de julio de 2026 a las 23:00 UTC. JugadaMax la trata como snapshot editorial con CTA temporal; tras el vencimiento permanece como referencia histórica.",
  "Operado por mBet Solutions N.V. (129230) bajo licencia Curaçao OGL/2023/110/0072. México no figura en la lista restringida revisada, pero esto no equivale a licencia local mexicana.",
  "Las señales externas son mixtas: Casino Guru 5.9/10 vs AskGamblers 8.5/10 editorial. JugadaMax asigna 4.0/5 por producto sólido y transparencia corporativa, con cautela sobre Safety Index, KYC y retiros. 18+.",
] as const;

const FAQ_ITEMS = [
  {
    question: "¿Cuál es el bono de Sportsbet.io?",
    answer:
      "El Champions Welcome Bonus publicado ofrece 100% hasta 300 USDT para Sports o Casino, con depósito mínimo de 10 USDT. Elegibilidad, activación y términos dependen de la cuenta y GEO.",
  },
  {
    question: "¿Puedo elegir entre bono Sports y Casino?",
    answer:
      "Sí. Debes activar Sports o Casino en la sección Rewards antes de depositar. No combines ambas opciones sin confirmar los términos oficiales.",
  },
  {
    question: "¿Cuál es el wagering del bono?",
    answer:
      "La promoción publicada establece 15x para Sports y 40x para Casino. Mercados, juegos elegibles y apuesta máxima pueden variar según términos vigentes.",
  },
  {
    question: "¿Qué es el torneo World Cup de $777,777?",
    answer:
      "Es una campaña temporal con leaderboard, puntos por apuestas elegibles y cuota mínima 1.25. Participación, premios y elegibilidad dependen de las reglas oficiales.",
  },
  {
    question: "¿El torneo World Cup sigue activo?",
    answer:
      "La campaña suministrada finaliza el 19 de julio de 2026 a las 23:00 UTC. Tras esa fecha, JugadaMax muestra el bloque como campaña finalizada.",
  },
  {
    question: "¿Sportsbet.io tiene sportsbook?",
    answer:
      "Sí. Sportsbook pre-match, live betting, esports y mercados combinados forman el producto principal.",
  },
  {
    question: "¿Sportsbet.io tiene casino?",
    answer:
      "Sí. Casino, live casino, slots, Originals y juegos instantáneos complementan el sportsbook.",
  },
  {
    question: "¿Sportsbet.io acepta Bitcoin y USDT?",
    answer:
      "Sportsbet.io es crypto-first y admite BTC, USDT, USDC y otras criptomonedas según cuenta y país. Confirma red y mínimos en el cajero.",
  },
  {
    question: "¿Sportsbet.io acepta monedas fiat?",
    answer:
      "Los términos oficiales contemplan fiat, pero monedas y métodos dependen de la cuenta y el país. JugadaMax no garantiza MXN ni métodos locales.",
  },
  {
    question: "¿Sportsbet.io tiene aplicación?",
    answer:
      "Android se descarga desde el sitio oficial; iOS usa PWA. Comprueba compatibilidad, permisos y destino antes de instalar.",
  },
  {
    question: "¿Sportsbet.io requiere KYC?",
    answer:
      "Sí, el operador puede solicitar identidad, dirección y propiedad del método de pago. Verificación de email es requisito antes de retirar.",
  },
  {
    question: "¿Cuánto tardan los retiros?",
    answer:
      "JugadaMax no garantiza tiempos. Retiros fiat pueden tardar hasta tres días laborables tras aprobación; crypto depende de red y revisiones.",
  },
  {
    question: "¿Sportsbet.io está disponible en México?",
    answer:
      "México no aparece en la lista restringida revisada, pero esto no equivale a licencia local. El usuario debe verificar ley local y elegibilidad de cuenta.",
  },
  {
    question: "¿Sportsbet.io tiene licencia?",
    answer:
      "Operado por mBet Solutions N.V. bajo licencia Curaçao OGL/2023/110/0072. No es licencia local mexicana.",
  },
] as const;

const SOURCE_REFERENCES: SourceReference[] = [
  { label: "Sportsbet.io — sitio oficial", href: "https://sportsbet.io/" },
  {
    label: "Champions Welcome Bonus",
    href: "https://sportsbet.io/de/promotions/2025-04-welcome-champion",
  },
  {
    label: "Términos generales",
    href: "https://sportsbet.io/de/help-centre/help-other/help-other-terms-and-conditions/general-terms-conditions",
  },
  {
    label: "Jurisdicciones restringidas",
    href: "https://sportsbet.io/de/help-centre/help-other/help-other-terms-and-conditions/restricted-jurisdictions",
  },
  { label: "Promociones oficiales", href: "https://sportsbet.io/de/promotions" },
  { label: "Guía de aplicación", href: "https://sportsbet.io/de/promotions/sportsbetio-app" },
  {
    label: "Casino Guru — reseña de Sportsbet.io",
    href: "https://casino.guru/sportsbet-io-casino-review",
    note: "Evaluación externa; no es la calificación editorial de JugadaMax (4.0/5).",
  },
  {
    label: "AskGamblers — reseña de Sportsbet.io",
    href: "https://www.askgamblers.com/online-casinos/reviews/sportsbet-io-casino",
    note: "Evaluación externa con señales mixtas.",
  },
  { label: "Metodología editorial JugadaMax", href: "/como-evaluamos" },
  {
    label: "Enlaces de campaña suministrados por el partner",
    note: "Registro general, sportsbook y torneo World Cup temporal.",
  },
];

export function SportsbetReviewContent({
  review,
  casino,
  author,
}: {
  review: Review;
  casino: Casino;
  author: Author;
}) {
  const wcActive = isSportsbetWorldCupCampaignActive();

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
          <SportsbetFeaturedCard context="review" />
        </div>

        <section aria-labelledby="sportsbetio-resumen-heading">
          <h2 id="sportsbetio-resumen-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Resumen rápido
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {QUICK_SUMMARY.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-[#36B958]/20 bg-[#11161C]/80 p-3"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-[#65E782]">
                  {card.title}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="sportsbetio-welcome-heading">
          <h2 id="sportsbetio-welcome-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Champions Welcome Bonus
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-[#36B958]/20 bg-[#171E25]/80 p-4">
              <p className="text-sm font-bold text-[#45D067]">Sports</p>
              <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
                {WELCOME_SPORTS.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-[#36B958]/20 bg-[#171E25]/80 p-4">
              <p className="text-sm font-bold text-[#45D067]">Casino</p>
              <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
                {WELCOME_CASINO.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-[#2B3540]/60 bg-[#171E25]/80 p-4">
              <p className="text-sm font-bold text-[#DCE5EC]">Activación</p>
              <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
                {WELCOME_ACTIVATION.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-[#2B3540]/60 bg-[#171E25]/80 p-4">
              <p className="text-sm font-bold text-[#DCE5EC]">Elegibilidad</p>
              <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
                {WELCOME_ELIGIBILITY.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section aria-labelledby="sportsbetio-wc-heading">
          <h2 id="sportsbetio-wc-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            {wcActive
              ? "$777,777 World Cup Tournament"
              : "$777,777 World Cup Tournament — campaña finalizada"}
          </h2>
          {wcActive ? (
            <>
              <p className="mt-2 text-sm text-[#65E782]">Activa hasta el 19 de julio de 2026</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {WC_ACTIVE_CARDS.map((card) => (
                  <div
                    key={card.title}
                    className="rounded-xl border border-[#36B958]/20 bg-[#171E25]/80 p-4"
                  >
                    <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{card.text}</p>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Participación, puntos, cuotas mínimas, apuestas válidas, leaderboard, premios,
                elegibilidad y fechas dependen de las reglas oficiales de la campaña.
              </p>
              <div className="mt-4">
                <a
                  href={SPORTSBETIO_WORLD_CUP_TOURNAMENT_URL}
                  target="_blank"
                  rel={AFFILIATE_REL}
                  className={cn(
                    "inline-flex min-h-11 items-center justify-center rounded-md bg-[#45D067] px-5 py-2.5 text-sm font-semibold text-[#11161C] transition-colors hover:bg-[#65E782]",
                    focusRing,
                  )}
                >
                  Ver torneo World Cup
                </a>
              </div>
            </>
          ) : (
            <>
              <p className="mt-2 text-sm font-medium text-muted-foreground">Campaña finalizada</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Snapshot histórico de la campaña suministrada: $777,777 total, $300,000 para el
                campeón, 1 punto por cada $1 apostado, cuota mínima 1.25, top 100 en leaderboard.
                Finalizó el 19 de julio de 2026 a las 23:00 UTC. Consulta promociones vigentes en
                Sportsbet.io.
              </p>
              <div className="mt-4">
                <a
                  href={SPORTSBETIO_BETTING_AFFILIATE_URL}
                  target="_blank"
                  rel={AFFILIATE_REL}
                  className={cn(
                    "inline-flex min-h-11 items-center justify-center rounded-md border border-[#36B958]/40 bg-[#171E25] px-5 py-2.5 text-sm font-semibold text-[#65E782] transition-colors hover:bg-[#36B958]/10",
                    focusRing,
                  )}
                >
                  Ver apuestas Sportsbet.io
                </a>
              </div>
            </>
          )}
        </section>

        <section aria-labelledby="sportsbetio-promos-heading">
          <h2 id="sportsbetio-promos-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Otras promociones actuales
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {OTHER_PROMOS.map((title) => (
              <div key={title} className="rounded-xl border border-border/60 bg-card p-4">
                <h3 className="text-sm font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Promoción rotativa; disponibilidad y términos pueden cambiar.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="sportsbetio-sportsbook-heading">
          <h2
            id="sportsbetio-sportsbook-heading"
            className="text-lg font-semibold text-foreground sm:text-xl"
          >
            Sportsbook
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {SPORTSBOOK_CARDS.map((card) => (
              <div key={card.title} className="rounded-xl border border-border/60 bg-card p-4">
                <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <a
              href={SPORTSBETIO_BETTING_AFFILIATE_URL}
              target="_blank"
              rel={AFFILIATE_REL}
              className={cn(
                "inline-flex min-h-11 items-center justify-center rounded-md bg-[#45D067] px-5 py-2.5 text-sm font-semibold text-[#11161C] transition-colors hover:bg-[#65E782]",
                focusRing,
              )}
            >
              Ver apuestas Sportsbet.io
            </a>
          </div>
        </section>

        <section aria-labelledby="sportsbetio-casino-heading">
          <h2 id="sportsbetio-casino-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Casino y Originals
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {CASINO_CARDS.map((card) => (
              <div key={card.title} className="rounded-xl border border-border/60 bg-card p-4">
                <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Bases externas describen un catálogo muy amplio de numerosos proveedores, pero el
            número exacto y la disponibilidad regional pueden cambiar.
          </p>
        </section>

        <section
          aria-labelledby="sportsbetio-app-heading"
          className="rounded-xl border border-[#36B958]/25 bg-gradient-to-br from-[#11161C] via-[#171E25] to-[#202932] p-5 sm:p-6"
        >
          <h2 id="sportsbetio-app-heading" className="text-lg font-semibold text-foreground">
            Aplicación móvil
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Android se descarga desde el sitio oficial de Sportsbet.io. iOS utiliza una Progressive
            Web App (PWA). Cuenta, GEO, permisos y compatibilidad del dispositivo deben comprobarse
            antes de instalar.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Comprueba dominio, firma, permisos y compatibilidad antes de instalar cualquier
            aplicación.
          </p>
          <div className="mt-4">
            <a
              href={SPORTSBETIO_REGISTRATION_AFFILIATE_URL}
              target="_blank"
              rel={AFFILIATE_REL}
              className={cn(
                "inline-flex min-h-11 items-center justify-center rounded-md bg-[#45D067] px-5 py-2.5 text-sm font-semibold text-[#11161C] transition-colors hover:bg-[#65E782]",
                focusRing,
              )}
            >
              Visitar Sportsbet.io
            </a>
          </div>
        </section>

        <section aria-labelledby="sportsbetio-payments-heading">
          <h2 id="sportsbetio-payments-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Pagos
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {PAYMENT_CARDS.map((card) => (
              <div key={card.title} className="rounded-xl border border-border/60 bg-card p-4">
                <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Enviar una moneda o red incorrecta puede causar una pérdida irreversible. Comprueba
            siempre activo, red y dirección antes de depositar.
          </p>
        </section>

        <section aria-labelledby="sportsbetio-kyc-heading">
          <h2 id="sportsbetio-kyc-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            KYC y retiros
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {KYC_CARDS.map((card) => (
              <div key={card.title} className="rounded-xl border border-border/60 bg-card p-4">
                <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="sportsbetio-licence-heading"
          className="rounded-xl border border-border/60 bg-card p-4 sm:p-5"
        >
          <h2 id="sportsbetio-licence-heading" className="text-lg font-semibold text-foreground">
            Licencia y titularidad
          </h2>
          <dl className="mt-4 space-y-2 text-sm text-muted-foreground">
            <div>
              <dt className="font-semibold text-foreground">Operador</dt>
              <dd>mBet Solutions N.V.</dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">Registro</dt>
              <dd>129230</dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">Licencia</dt>
              <dd>Curaçao Gaming Authority — OGL/2023/110/0072</dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">Empresa de pagos</dt>
              <dd>mProcessing Solutions Ltd — Nicosia, Cyprus</dd>
            </div>
          </dl>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            No es una licencia local mexicana. México no aparece en la lista restringida revisada,
            pero la ausencia de restricción no equivale a autorización regulatoria local.
          </p>
        </section>

        <section
          aria-labelledby="sportsbetio-external-heading"
          className="rounded-xl border border-[#36B958]/20 bg-[#11161C]/60 p-4 sm:p-5"
        >
          <h2 id="sportsbetio-external-heading" className="text-lg font-semibold text-foreground">
            Nota de evaluación externa
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Las señales externas son mixtas. Casino Guru muestra un Safety Index de 5.9/10 y señala
            impacto de reclamaciones, aunque no encontró reglas predatorias en los términos.
            AskGamblers publica un CasinoRank de 8.5/10 y una valoración de usuarios de 9.1/10.
            Estas cifras pertenecen a terceros y no son la calificación de JugadaMax. JugadaMax
            asigna de forma independiente 4.0/5.
          </p>
        </section>

        <VerdictBox verdict={review.verdict} rating={review.rating} />

        <ProsCons pros={review.pros} cons={review.cons} />

        <section aria-labelledby="sportsbetio-analisis-heading">
          <h2 id="sportsbetio-analisis-heading" className="text-lg font-semibold text-foreground sm:text-xl">
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
          aria-labelledby="sportsbetio-final-cta-heading"
          className="rounded-xl border border-[#36B958]/25 bg-gradient-to-br from-[#11161C] via-[#171E25] to-[#202932] p-5 sm:p-6"
        >
          <h2 id="sportsbetio-final-cta-heading" className="text-lg font-semibold text-foreground">
            Revisar Sportsbet.io
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Confirma la promoción seleccionada, criptomoneda, red, KYC, mercados y reglas de retiro
            directamente en Sportsbet.io antes de depositar o apostar.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={SPORTSBETIO_REGISTRATION_AFFILIATE_URL}
              target="_blank"
              rel={AFFILIATE_REL}
              className={cn(
                "inline-flex min-h-11 items-center justify-center rounded-md bg-[#45D067] px-5 py-2.5 text-sm font-semibold text-[#11161C] transition-colors hover:bg-[#65E782]",
                focusRing,
              )}
            >
              Visitar Sportsbet.io
            </a>
            <Link
              href="/casinos-crypto"
              className={cn(
                "inline-flex min-h-11 items-center justify-center rounded-md border border-[#36B958]/40 px-5 py-2.5 text-sm font-semibold text-[#65E782] transition-colors hover:bg-[#36B958]/10",
                focusRing,
              )}
            >
              Comparar casinos crypto
            </Link>
          </div>
        </section>

        <section aria-labelledby="sportsbetio-faq-heading">
          <h2 id="sportsbetio-faq-heading" className="text-lg font-semibold text-foreground sm:text-xl">
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
          description="Información oficial, enlaces de campaña suministrados, evaluaciones externas y opinión editorial de JugadaMax."
          items={SOURCE_REFERENCES}
        />
      </article>

      <MobileStickyOfferCta
        showAfterId="review-primary-offer"
        compactPrimaryLabel="Visitar"
        compactSecondaryLabel="Comparar"
        primaryLabel="Visitar Sportsbet.io"
        primaryHref={SPORTSBETIO_REGISTRATION_AFFILIATE_URL}
        secondaryLabel="Comparar"
        secondaryHref="/casinos-crypto"
      />
    </>
  );
}

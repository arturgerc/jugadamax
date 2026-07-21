import Link from "next/link";
import type { Author, Casino, Review } from "@/types/content";
import {
  ANONYMOUS_CASINO_AFFILIATE_URL,
  ANONYMOUS_CASINO_PROMO_CODE,
} from "@/lib/affiliate/constants";
import { AnonymousCasinoFeaturedCard } from "@/components/affiliate/AnonymousCasinoFeaturedCard";
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
  "Anonymous Casino / CryptoCasino.CC es un casino crypto internacional. JugadaMax no afirma licencia local mexicana ni anonimato técnico absoluto. Disponibilidad, registro, pagos, límites, controles antifraude y retiros dependen de tu ubicación, cuenta y reglas vigentes del dominio de registro.";

const QUICK_SUMMARY = [
  { title: "Tipo", text: "Casino crypto sin KYC" },
  { title: "Registro", text: "Email + contraseña" },
  { title: "Pagos", text: "BTC, ETH, USDT y cinco crypto más" },
  { title: "Principal precaución", text: "Sin licencia verificada y límites de retiro" },
] as const;

const NO_KYC_CARDS = [
  {
    title: "Sin documentos",
    text: "El sitio se promociona como no-KYC.",
  },
  {
    title: "Email y contraseña",
    text: "El FAQ describe registro con email y password.",
  },
  {
    title: "Crypto-only",
    text: "Los depósitos y retiros se realizan con criptomonedas.",
  },
  {
    title: "Política vigente",
    text: "Terms y controles pueden cambiar.",
  },
] as const;

const PRIVACY_ADVANTAGES = [
  "Sin carga de documentos en el flujo público de registro",
  "Sin datos de tarjeta bancaria",
  "Depósitos basados en wallets",
  "Campos de alta limitados",
  "Sin dependencia de banca fiat",
] as const;

const PRIVACY_LIMITS = [
  "El email es un identificador",
  "La Privacy Policy informa tratamiento de IP",
  "Se procesa el número de wallet",
  "Pueden usarse cookies",
  "El historial blockchain es público",
  "Aplican investigaciones antifraude",
  "Las leyes locales siguen vigentes",
  "No-KYC no es una licencia",
] as const;

const CRYPTO_ASSETS = [
  "BTC",
  "ETH",
  "XRP",
  "USDT",
  "SOL",
  "DOGE",
  "USDC",
  "LTC",
] as const;

const CONDITIONS_CARDS = [
  {
    title: "Movimiento del depósito",
    text: "Los Terms publican un requisito 1x de turnover sobre depósitos antes del retiro.",
  },
  {
    title: "Ruleta / Baccarat",
    text: "Puede aplicarse hasta 10x si la actividad se centra solo en live Roulette y Baccarat.",
  },
  {
    title: "Frecuencia de retiros",
    text: "Hasta 2 retiros por día y hasta 7 por semana calendario.",
  },
  {
    title: "Límites por activo",
    text: "Existen mínimos y máximos diarios, semanales y mensuales según criptomoneda.",
  },
  {
    title: "Procesamiento",
    text: "Los retiros dependen de la blockchain y de los límites publicados.",
  },
  {
    title: "Transferencias incorrectas",
    text: "Si la recuperación es técnicamente posible, puede aplicarse una tarifa de al menos €300.",
  },
] as const;

const GAME_CATEGORIES = [
  "Slots",
  "Bonus Buy",
  "Jackpot",
  "Megaways",
  "Books",
  "Classic",
  "Bonanza",
  "Crash",
  "Plinko",
  "Limbo",
  "Mines",
  "Dice",
  "Keno",
  "Blackjack",
  "Roulette",
  "Baccarat",
  "Game Shows",
  "Lightning Games",
  "Poker",
  "Live Casino",
] as const;

const REGISTRATION_STEPS = [
  "Abre el enlace de registro aprobado.",
  "Selecciona Register.",
  "Introduce tu email.",
  "Crea una contraseña.",
  "Acepta los Terms.",
  "Confirma el email si el operador lo solicita.",
  "Selecciona una criptomoneda en el cajero.",
] as const;

function buildAnalysisParagraphs(rating: number): string[] {
  return [
    "Anonymous Casino es la marca promocional del casino disponible en CryptoCasino.CC. No son operadores distintos: la misma integración se presenta con ambas denominaciones en materiales públicos y en esta reseña.",
    "Dentro del cluster sin KYC de JugadaMax, Anonymous Casino ocupa el primer puesto editorial por su posicionamiento claro de privacidad, registro con email y contraseña, cobertura crypto y amplitud de catálogo. ETH Casino y LTC Casino permanecen como alternativas especializadas.",
    "El modelo sin KYC reduce la verificación documental, pero no elimina trazabilidad técnica. La Privacy Policy informa tratamiento de IP, wallet, cookies e información transaccional; las blockchains públicas siguen siendo auditable.",
    "Los Terms permiten varias cuentas, aunque también autorizan restricciones de retiro ante sospecha de abuso o emails no confirmados. Existen turnover 1x, posible 10x en ciertos juegos live, límites de retiro y poderes de investigación antifraude.",
    `Casino Guru publica un Safety Index 5.3/10 (Below average) sin licencia verificada, aunque no encontró cláusulas depredadoras en los Terms directamente revisados. JugadaMax asigna ${rating}/5 como opinión editorial de encaje de producto en el nicho no-KYC, no como certificación de seguridad ni agregación de usuarios. 18+.`,
  ];
}

const FAQ_ITEMS = [
  {
    question: "¿Anonymous Casino y CryptoCasino.CC son lo mismo?",
    answer:
      "Anonymous Casino es la marca promocional utilizada para el casino disponible en CryptoCasino.CC.",
  },
  {
    question: "¿Anonymous Casino requiere KYC?",
    answer:
      "Anonymous Casino, disponible en CryptoCasino.CC, se presenta como casino crypto sin KYC y sin verificación documental. Confirma siempre las reglas vigentes después del redirect.",
  },
  {
    question: "¿Pide documentos?",
    answer:
      "Según el FAQ público de CryptoCasino.CC, la cuenta puede crearse mediante email y contraseña sin introducir datos personales en el formulario descrito.",
  },
  {
    question: "¿Cómo me registro?",
    answer:
      "Abre el enlace afiliado, selecciona Register, introduce email, crea contraseña, acepta Terms y confirma el correo si se solicita. Luego elige criptomoneda en el cajero.",
  },
  {
    question: "¿Es completamente anónimo?",
    answer:
      "No-KYC reduce la verificación documental, pero email, IP, cookies, wallets y blockchain pueden generar trazabilidad.",
  },
  {
    question: "¿Qué datos procesa?",
    answer:
      "La Privacy Policy informa tratamiento de IP, número de wallet crypto, cookies/preferencias, información de depósitos, ganancias y cashouts, marketing salvo opt-out e información antifraude.",
  },
  {
    question: "¿Puedo tener varias cuentas?",
    answer:
      "Los Terms publicados permiten varias cuentas, pero también autorizan restricciones de retiro en casos de sospecha de abuso o emails no confirmados. JugadaMax no interpreta esta regla como autorización para evadir bloqueos, controles antifraude, autoexclusión, restricciones legales o límites vigentes.",
  },
  {
    question: "¿Cuál es el código de Anonymous Casino?",
    answer: `El código de registro/campaña suministrado para JugadaMax es ${ANONYMOUS_CASINO_PROMO_CODE}.`,
  },
  {
    question: `¿El código ${ANONYMOUS_CASINO_PROMO_CODE} da un bono?`,
    answer: "El código identifica la campaña de registro y no garantiza un bono.",
  },
  {
    question: "¿Qué criptomonedas acepta?",
    answer:
      "Según Terms y FAQ de depósitos: BTC, ETH, XRP, USDT, SOL, DOGE, USDC y LTC. Confirma red y mínimos en el cajero.",
  },
  {
    question: "¿Tiene slots?",
    answer:
      "Sí. Incluye slots, Bonus Buy, jackpots, Megaways y formatos clásicos según catálogo.",
  },
  {
    question: "¿Tiene juegos crypto?",
    answer: "Sí. Crash, Plinko, Limbo, Mines, Dice y Keno forman parte del catálogo público.",
  },
  {
    question: "¿Tiene casino en vivo?",
    answer:
      "Sí. Blackjack, ruleta, baccarat, game shows, lightning games y poker aparecen según disponibilidad.",
  },
  {
    question: "¿Tiene apuestas deportivas?",
    answer: "Anonymous Casino se presenta como casino crypto, no como sportsbook.",
  },
  {
    question: "¿Cuánto tardan los retiros?",
    answer:
      "Los retiros se procesan según los tiempos de la blockchain y los límites publicados. JugadaMax no garantiza retiros instantáneos.",
  },
  {
    question: "¿Cuántos retiros puedo hacer?",
    answer:
      "Los Terms publican hasta 2 retiros por día y hasta 7 por semana calendario, además de límites por periodo y activo.",
  },
  {
    question: "¿Qué significa el requisito 1x?",
    answer:
      "Antes de retirar, los depósitos deben moverse al menos una vez (1x). En ciertos casos de juego solo en live Roulette/Baccarat puede aplicarse hasta 10x.",
  },
  {
    question: "¿Está disponible en México?",
    answer:
      "JugadaMax no garantiza disponibilidad universal desde México. Confirma acceso y Terms después del redirect.",
  },
  {
    question: "¿Tiene licencia mexicana?",
    answer:
      "No. JugadaMax no confirma licencia mexicana ni una licencia internacional verificada de forma independiente.",
  },
  {
    question: "¿Por qué JugadaMax le da 4.9/5?",
    answer:
      "JugadaMax asigna a Anonymous Casino una valoración editorial de 4.9/5 por su enfoque especializado sin KYC, registro sencillo, variedad crypto y catálogo de juegos. Esta puntuación no es un agregado de usuarios ni una garantía de seguridad, licencia o retiro.",
  },
] as const;

const SOURCE_REFERENCES: SourceReference[] = [
  { label: "Sitio oficial CryptoCasino.CC", href: "https://www.cryptocasino.cc/" },
  {
    label: "FAQ — cómo crear una cuenta",
    href: "https://www.cryptocasino.cc/faq/your-first-steps/how-do-i-create-an-account",
  },
  {
    label: "Terms and Conditions",
    href: "https://www.cryptocasino.cc/terms-and-conditions",
  },
  {
    label: "FAQ — métodos de depósito",
    href: "https://www.cryptocasino.cc/faq/deposits/what-deposit-methods-do-you-accept",
  },
  {
    label: "Privacy Policy",
    href: "https://www.cryptocasino.cc/faq/general-information/privacy-policy",
  },
  {
    label: "Evaluación externa Casino Guru",
    href: "https://casino.guru/cryptocasino-cc-review",
  },
  { label: "TTR Blog", href: "https://ttrblog.io/" },
  { label: "Kick: LTCCASINO-COM", href: "https://kick.com/ltccasino-com" },
  { label: "Metodología editorial JugadaMax", href: "/como-evaluamos" },
  {
    label: "Enlace de registro suministrado por el partner",
    note: "URL afiliada de campaña; el código identifica la campaña y no garantiza bono.",
  },
];

export function AnonymousCasinoReviewContent({
  review,
  casino,
  author,
}: {
  review: Review;
  casino: Casino;
  author: Author;
}) {
  const analysisParagraphs = buildAnalysisParagraphs(review.rating);

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
          <AnonymousCasinoFeaturedCard context="review" />
        </div>

        <section id="resumen-cryptocasino" aria-labelledby="anonymous-resumen-heading">
          <h2 id="anonymous-resumen-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Resumen rápido
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {QUICK_SUMMARY.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-[#E0001B]/25 bg-[#0B0D12]/80 p-3"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-[#FF4A2E]">
                  {card.title}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Valoración editorial JugadaMax:{" "}
            <span className="font-semibold text-foreground">{review.rating}/5</span>
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Código de registro:{" "}
            <span className="font-mono font-semibold text-foreground">
              {ANONYMOUS_CASINO_PROMO_CODE}
            </span>
            . No garantiza un bono.
          </p>
        </section>

        <section aria-labelledby="anonymous-identity-heading">
          <h2 id="anonymous-identity-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Anonymous Casino y CryptoCasino.CC
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Anonymous Casino es la marca promocional utilizada para el casino disponible en
            CryptoCasino.CC. En esta reseña usamos ambos nombres para claridad SEO y de marca, sin
            implicar que sean operadores separados.
          </p>
        </section>

        <section aria-labelledby="anonymous-nokyc-heading">
          <h2 id="anonymous-nokyc-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Anonymous Casino sin KYC
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {NO_KYC_CARDS.map((card) => (
              <div key={card.title} className="rounded-xl border border-border/60 bg-card p-4">
                <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Anonymous Casino, disponible en CryptoCasino.CC, se presenta como casino crypto sin KYC
            y sin verificación documental. Según el FAQ público de CryptoCasino.CC, la cuenta puede
            crearse mediante email y contraseña sin introducir datos personales en el formulario
            descrito.
          </p>
        </section>

        <section aria-labelledby="anonymous-register-heading">
          <h2 id="anonymous-register-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Cómo registrarse en Anonymous Casino
          </h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
            {REGISTRATION_STEPS.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            El FAQ público describe un flujo sin nombre, dirección, teléfono ni documentos en el
            formulario.
          </p>
        </section>

        <section aria-labelledby="anonymous-privacy-heading">
          <h2 id="anonymous-privacy-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Privacidad: ventajas y límites
          </h2>
          <p className="mt-2 text-sm font-medium text-[#FF4A2E]">
            Sin KYC no significa invisibilidad técnica absoluta.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-[#E0001B]/25 bg-[#0B0D12]/70 p-4">
              <h3 className="text-sm font-semibold text-foreground">Ventajas de privacidad</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {PRIVACY_ADVANTAGES.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden="true" className="text-[#FF1C24]">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-border/60 bg-card p-4">
              <h3 className="text-sm font-semibold text-foreground">Límites de privacidad</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {PRIVACY_LIMITS.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden="true" className="text-amber-400">
                      !
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section aria-labelledby="anonymous-accounts-heading">
          <h2 id="anonymous-accounts-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            ¿Se permiten varias cuentas?
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Los Terms de CryptoCasino.CC permiten registrar varias cuentas sin una limitación
            general, pero indican que los retiros pueden restringirse ante sospecha de abuso o emails
            no confirmados.
          </p>
          <div
            role="note"
            className="mt-4 rounded-lg border border-amber-500/25 bg-amber-500/5 px-4 py-3 text-sm leading-relaxed text-muted-foreground"
          >
            No utilices varias cuentas para evadir autoexclusión, restricciones legales, bloqueos,
            límites o controles de seguridad. JugadaMax no interpreta esta regla como autorización
            para evadir bloqueos, controles antifraude, autoexclusión, restricciones legales o límites
            vigentes.
          </div>
        </section>

        <section aria-labelledby="anonymous-payments-heading">
          <h2 id="anonymous-payments-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Criptomonedas soportadas
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {CRYPTO_ASSETS.map((asset) => (
              <li
                key={asset}
                className="inline-flex items-center rounded-full border border-[#E0001B]/30 bg-[#151820]/80 px-2.5 py-1 text-xs font-semibold text-[#F7F7F7]"
              >
                {asset}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-muted-foreground">
            Comprueba activo, red y dirección antes de transferir fondos. Una transferencia
            blockchain incorrecta puede ser irreversible.
          </p>
        </section>

        <section aria-labelledby="anonymous-conditions-heading">
          <h2 id="anonymous-conditions-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Condiciones importantes de depósito y retiro
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {CONDITIONS_CARDS.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-[#E0001B]/20 bg-[#0B0D12]/80 p-4"
              >
                <h3 className="text-sm font-semibold text-[#FF4A2E]">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Los retiros se procesan según los tiempos de la blockchain y los límites publicados.
            JugadaMax no garantiza retiros instantáneos.{" "}
            <a
              href="https://www.cryptocasino.cc/terms-and-conditions"
              target="_blank"
              rel="noopener noreferrer"
              className={cn("font-medium text-[#FF4A2E] underline-offset-2 hover:underline", focusRing)}
            >
              Consulta los Terms oficiales
            </a>
            .
          </p>
        </section>

        <section aria-labelledby="anonymous-antifraud-heading">
          <h2 id="anonymous-antifraud-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Controles antifraude y cuenta
          </h2>
          <div
            role="note"
            className="mt-4 rounded-lg border border-amber-500/25 bg-amber-500/5 px-4 py-3 text-sm leading-relaxed text-muted-foreground"
          >
            El modelo sin KYC no elimina los controles antifraude. Los Terms permiten bloquear o
            investigar cuentas ante actividad sospechosa, incluida colusión, fraude de pagos,
            software de terceros, trampas o intentos de ocultar huellas blockchain. Una
            investigación puede restringir la cuenta durante un periodo prolongado.
          </div>
        </section>

        <section aria-labelledby="anonymous-games-heading">
          <h2 id="anonymous-games-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Juegos de casino
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {GAME_CATEGORIES.map((game) => (
              <li
                key={game}
                className="inline-flex rounded-lg border border-border/60 bg-card px-2.5 py-1.5 text-xs font-medium text-muted-foreground"
              >
                {game}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-muted-foreground">
            Anonymous Casino se presenta como casino crypto, no como sportsbook. El número exacto de
            títulos puede cambiar.
          </p>
        </section>

        <section aria-labelledby="anonymous-mobile-heading">
          <h2 id="anonymous-mobile-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Experiencia móvil y navegador
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            CryptoCasino.CC funciona desde navegador, lo que facilita alternar entre wallet y sesión
            de juego en teléfono. Antes de depositar, confirma compatibilidad, red y dirección de
            destino.
          </p>
        </section>

        <section aria-labelledby="anonymous-licence-heading">
          <h2 id="anonymous-licence-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Licencia
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            JugadaMax no confirma licencia local mexicana ni una licencia internacional vigente
            verificada de forma independiente. Revisa footer y Terms después del redirect.
          </p>
        </section>

        <section aria-labelledby="anonymous-external-heading">
          <h2 id="anonymous-external-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Evaluaciones externas y riesgos
          </h2>
          <div className="mt-4 rounded-xl border border-amber-500/25 bg-amber-500/5 p-4 sm:p-5">
            <h3 className="text-sm font-semibold text-foreground">Evaluación externa</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Casino Guru publica una evaluación externa inferior y no confirma una licencia vigente.
              También señala que no encontró reglas depredadoras en los Terms directamente revisados.
              En la verificación en vivo de esta integración, el Safety Index publicado es 5.3/10
              (Below average). Esta evaluación externa no es la puntuación de JugadaMax.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              JugadaMax asigna a Anonymous Casino una valoración editorial de 4.9/5 por su enfoque
              especializado sin KYC, registro sencillo, variedad crypto y catálogo de juegos. Esta
              puntuación no es un agregado de usuarios ni una garantía de seguridad, licencia o
              retiro.
            </p>
          </div>
        </section>

        <VerdictBox verdict={review.verdict} rating={review.rating} />
        <ProsCons pros={review.pros} cons={review.cons} />

        <section aria-labelledby="anonymous-analysis-heading">
          <h2 id="anonymous-analysis-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Análisis editorial
          </h2>
          <div className="mt-4 space-y-4">
            {analysisParagraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="text-sm leading-relaxed text-muted-foreground sm:text-base"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section aria-labelledby="anonymous-community-heading">
          <h2 id="anonymous-community-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            TTR Blog y Kick
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            El proyecto mantiene vínculos editoriales con{" "}
            <a
              href="https://ttrblog.io/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn("text-[#FF4A2E] underline-offset-2 hover:underline", focusRing)}
            >
              TTR Blog
            </a>{" "}
            y el canal de streaming{" "}
            <a
              href="https://kick.com/ltccasino-com"
              target="_blank"
              rel="noopener noreferrer"
              className={cn("text-[#FF4A2E] underline-offset-2 hover:underline", focusRing)}
            >
              LTCCASINO-COM
            </a>
            , pero esta relación no sustituye la evaluación independiente.
          </p>
        </section>

        <section
          aria-labelledby="anonymous-final-cta-heading"
          className="rounded-xl border border-[#E0001B]/30 bg-gradient-to-br from-[#050607] via-[#0B0D12] to-[#151820] p-5 sm:p-6"
        >
          <h2 id="anonymous-final-cta-heading" className="text-lg font-semibold text-foreground">
            Registrarse en Anonymous Casino
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Confirma el dominio de destino, política sin KYC, criptomoneda, red, turnover, límites y
            reglas de retiro antes de depositar.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={ANONYMOUS_CASINO_AFFILIATE_URL}
              target="_blank"
              rel={AFFILIATE_REL}
              className={cn(
                "inline-flex min-h-11 items-center justify-center rounded-md bg-[#E0001B] px-5 py-2.5 text-sm font-semibold text-[#F7F7F7] transition-colors hover:bg-[#FF1C24]",
                focusRing,
              )}
            >
              Registrarse en Anonymous Casino
            </a>
            <Link
              href="/casinos-sin-kyc"
              className={cn(
                "inline-flex min-h-11 items-center justify-center rounded-md border border-[#E0001B]/45 px-5 py-2.5 text-sm font-semibold text-[#FF4A2E] transition-colors hover:bg-[#B30016]/20",
                focusRing,
              )}
            >
              Comparar casinos sin KYC
            </Link>
          </div>
        </section>

        <section aria-labelledby="anonymous-faq-heading">
          <h2 id="anonymous-faq-heading" className="text-lg font-semibold text-foreground sm:text-xl">
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
          description="Políticas publicadas por el operador, evaluación externa, enlaces relacionados, metodología editorial y enlace de campaña afiliada."
          items={SOURCE_REFERENCES}
        />
      </article>

      <MobileStickyOfferCta
        showAfterId="review-primary-offer"
        compactPrimaryLabel="Registrarse"
        compactSecondaryLabel="Comparar"
        primaryLabel="Registrarse"
        primaryHref={ANONYMOUS_CASINO_AFFILIATE_URL}
        secondaryLabel="Comparar"
        secondaryHref="/casinos-sin-kyc"
      />
    </>
  );
}

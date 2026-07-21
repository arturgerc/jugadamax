import Link from "next/link";
import type { Author, Casino, Review } from "@/types/content";
import {
  ETHCASINO_AFFILIATE_URL,
  ETHCASINO_PROMO_CODE,
} from "@/lib/affiliate/constants";
import { EthCasinoFeaturedCard } from "@/components/affiliate/EthCasinoFeaturedCard";
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
  "ETH Casino es un casino crypto internacional. JugadaMax no afirma licencia local mexicana ni anonimato técnico absoluto. Disponibilidad, registro, pagos, límites, controles antifraude y retiros dependen de tu ubicación, cuenta y reglas vigentes del dominio de registro.";

const QUICK_SUMMARY = [
  { title: "Tipo", text: "Casino Ethereum sin KYC" },
  { title: "Registro", text: "Email + contraseña" },
  { title: "Pagos", text: "ETH, BTC, USDT y otras ocho crypto" },
  { title: "Principal precaución", text: "Sin licencia verificada y límites de retiro" },
] as const;

const NO_KYC_CARDS = [
  {
    title: "Sin documentos",
    text: "El FAQ público afirma que no requiere documentos personales.",
  },
  {
    title: "Email y contraseña",
    text: "El registro descrito utiliza email y password.",
  },
  {
    title: "Retiros",
    text: "El operador declara que no exige KYC para solicitar retiros.",
  },
  {
    title: "Política vigente",
    text: "Estas reglas pueden cambiar; confirma siempre el dominio de registro.",
  },
] as const;

const PRIVACY_ADVANTAGES = [
  "Sin carga de documentos según el operador",
  "Sin flujo de tarjeta bancaria",
  "Pagos desde wallets crypto",
  "Información de alta limitada (email + contraseña)",
  "2FA disponible / recomendable",
] as const;

const PRIVACY_LIMITS = [
  "El email sigue siendo un identificador",
  "IP y dispositivo pueden registrarse",
  "Las transacciones blockchain son públicas",
  "La actividad de wallets puede analizarse",
  "Aplican controles antifraude",
  "Las leyes locales siguen vigentes",
  "No-KYC no es una licencia mexicana",
] as const;

const CRYPTO_ASSETS = [
  "BTC",
  "ETH",
  "XRP",
  "USDT",
  "SOL",
  "BNB",
  "DOGE",
  "ADA",
  "USDC",
  "TRX",
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
    text: "Hasta 2 retiros por día y hasta 7 por semana calendario, según los Terms.",
  },
  {
    title: "Límites por red",
    text: "Existen mínimos y máximos diarios, semanales y mensuales según criptomoneda.",
  },
  {
    title: "Procesamiento",
    text: "ETH Casino afirma procesar retiros de forma inmediata; la llegada depende de la red.",
  },
  {
    title: "Transferencias incorrectas",
    text: "Una recuperación técnica puede implicar una tarifa elevada y no está garantizada.",
  },
] as const;

const GAME_CATEGORIES = [
  "Slots",
  "Bonus Buy",
  "Jackpots",
  "Megaways",
  "Crash",
  "Plinko",
  "Dice",
  "Lottery",
  "Bingo",
  "Scratch",
  "Blackjack",
  "Roulette",
  "Baccarat",
  "Game Shows",
  "Lightning Games",
  "Craps",
  "Live Casino",
] as const;

const PROVIDERS = [
  "Evolution",
  "BGaming",
  "Hacksaw",
  "Pragmatic Play",
  "Platipus",
  "Endorphina",
  "PG Soft",
  "Spinomenal",
] as const;

const REGISTRATION_STEPS = [
  "Abre el enlace de registro suministrado por el partner.",
  "Introduce tu email.",
  "Crea una contraseña.",
  "Selecciona tu criptomoneda preferida.",
  "Acepta los Terms.",
  "Confirma el email.",
] as const;

function buildAnalysisParagraphs(rating: number): string[] {
  return [
    "ETH Casino se presenta como un casino Ethereum-first: la marca gira alrededor de ETH, wallets y una experiencia crypto-only, no alrededor de pagos fiat mexicanos ni de un bono de bienvenida permanente.",
    "La URL /reviews/ethcasino ya concentra interés de búsqueda en México; esta actualización refuerza la misma página indexada con estructura editorial más clara, sin cambiar el slug ni fabricar una publicación nueva.",
    "El diferenciador principal es la política pública sin KYC. ETH Casino declara que no exige verificación documental y que el registro se completa con email, contraseña y confirmación de correo. JugadaMax atribuye esas afirmaciones al operador y recuerda que pueden cambiar.",
    "La privacidad tiene límites técnicos: el email, la IP, el dispositivo, las direcciones de wallet y el historial en blockchains públicas pueden generar trazabilidad. Los Terms también contemplan controles antifraude y restricciones de cuenta.",
    `El operador admite once criptomonedas en sus Terms, con un catálogo de slots, juegos crypto y live casino de proveedores reconocidos según disponibilidad. Los retiros tienen límites diarios/semanales/mensuales y requisitos de movimiento del depósito. Casino Guru publica un Safety Index 5.3/10 (Below average) con licencia no verificada; JugadaMax asigna ${rating}/5 como opinión editorial propia, no como certificación de seguridad ni agregación de usuarios. 18+.`,
  ];
}

const FAQ_ITEMS = [
  {
    question: "¿ETH Casino requiere KYC?",
    answer:
      "ETH Casino declara que no exige verificación KYC y que permite registrarse mediante email y contraseña. Esta es una política publicada por el operador y puede cambiar. Confirma siempre las reglas vigentes después del redirect.",
  },
  {
    question: "¿ETH Casino pide documentos?",
    answer:
      "Según el FAQ público del operador, no se requieren documentos personales para jugar o solicitar retiros. Confirma el dominio de registro porque las reglas pueden actualizarse.",
  },
  {
    question: "¿Cómo me registro en ETH Casino?",
    answer:
      "Según el material público del operador: abre el enlace de registro, introduce email, crea contraseña, selecciona criptomoneda, acepta Terms y confirma el correo.",
  },
  {
    question: "¿ETH Casino es completamente anónimo?",
    answer:
      "No-KYC reduce la información documental solicitada, pero email, dispositivos, wallets y blockchain pueden generar trazabilidad.",
  },
  {
    question: "¿Puedo tener varias cuentas?",
    answer:
      "El FAQ público de ETH Casino afirma que permite varias cuentas. JugadaMax no interpreta esta política como autorización para evadir restricciones legales, controles antifraude, límites, bloqueos, autoexclusión o reglas del dominio de registro.",
  },
  {
    question: "¿Cuál es el código de ETH Casino?",
    answer: `El código de registro/campaña suministrado para JugadaMax es ${ETHCASINO_PROMO_CODE}.`,
  },
  {
    question: `¿El código ${ETHCASINO_PROMO_CODE} da un bono?`,
    answer:
      "JugadaMax no promociona un bono de bienvenida garantizado. El código jg7kkva6a identifica la campaña de registro.",
  },
  {
    question: "¿ETH Casino acepta Ethereum?",
    answer:
      "Sí. Ethereum forma parte central de su identidad. Confirma red y dirección antes de transferir fondos.",
  },
  {
    question: "¿Qué otras criptomonedas acepta?",
    answer:
      "Según los Terms: BTC, ETH, XRP, USDT, SOL, BNB, DOGE, ADA, USDC, TRX y LTC. Verifica mínimos, red y disponibilidad en el cajero.",
  },
  {
    question: "¿ETH Casino tiene slots?",
    answer:
      "Sí. Ofrece slots, Bonus Buy, jackpots, Megaways y otros formatos según el catálogo vigente.",
  },
  {
    question: "¿ETH Casino tiene casino en vivo?",
    answer:
      "Sí. Incluye live casino, blackjack, ruleta, baccarat, game shows y lightning games según disponibilidad.",
  },
  {
    question: "¿ETH Casino tiene apuestas deportivas?",
    answer:
      "ETH Casino se presenta como casino crypto, no como sportsbook principal.",
  },
  {
    question: "¿Cuánto tardan los retiros?",
    answer:
      "ETH Casino afirma que procesa los retiros de forma inmediata; el tiempo de llegada depende de la red. JugadaMax no garantiza retiros instantáneos.",
  },
  {
    question: "¿Qué límites de retiro existen?",
    answer:
      "Los Terms publican límites diarios, semanales y mensuales, hasta 2 retiros por día y hasta 7 por semana, además de requisitos de movimiento del depósito.",
  },
  {
    question: "¿ETH Casino está disponible en México?",
    answer:
      "JugadaMax no garantiza disponibilidad universal desde México. Confirma acceso, restricciones regionales y términos después del redirect.",
  },
  {
    question: "¿ETH Casino tiene licencia?",
    answer:
      "JugadaMax no confirma licencia local mexicana ni una licencia internacional verificada de forma independiente. Fuentes externas también señalan ausencia de licencia verificada.",
  },
  {
    question: "¿Por qué JugadaMax le da 4.7/5?",
    answer:
      "JugadaMax asigna a ETH Casino una valoración editorial de 4.7/5 por su propuesta diferenciada sin KYC, registro sencillo, amplia compatibilidad crypto y catálogo de juegos. Esta puntuación no es un agregado de usuarios ni una garantía de seguridad o retiro.",
  },
] as const;

const SOURCE_REFERENCES: SourceReference[] = [
  { label: "Sitio oficial ETH Casino", href: "https://www.ethcasino.io/" },
  {
    label: "FAQ — ¿requiere KYC?",
    href: "https://www.ethcasino.io/faq/your-account/does-eth-casino-require-kyc",
  },
  {
    label: "FAQ — cómo registrarse",
    href: "https://www.ethcasino.io/faq/your-account/how-do-i-sign-up-at-eth-casino",
  },
  {
    label: "FAQ — múltiples cuentas",
    href: "https://www.ethcasino.io/faq/your-account/can-i-hold-multiple-accounts-at-eth-casino",
  },
  {
    label: "Página oficial no-KYC",
    href: "https://www.ethcasino.io/nokyccasino",
  },
  {
    label: "Terms and Conditions",
    href: "https://www.ethcasino.io/faq/operational-information/terms-and-conditions",
  },
  {
    label: "FAQ — tiempos de retiro",
    href: "https://www.ethcasino.io/faq/withdrawals/how-long-does-it-take-to-receive-my-winnings-from-eth-casino",
  },
  {
    label: "Migración TTR Casino",
    href: "https://www.ethcasino.io/ttr-casino",
  },
  {
    label: "Evaluación externa Casino Guru",
    href: "https://casino.guru/eth-casino-review-1",
  },
  { label: "TTR Blog", href: "https://ttrblog.io/" },
  { label: "Kick: LTCCASINO-COM", href: "https://kick.com/ltccasino-com" },
  { label: "Metodología editorial JugadaMax", href: "/como-evaluamos" },
  {
    label: "Enlace de registro suministrado por el partner",
    note: "URL afiliada de campaña; el código identifica la campaña y no garantiza bono.",
  },
];

export function EthCasinoReviewContent({
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
          <EthCasinoFeaturedCard context="review" />
        </div>

        <section id="resumen-ethcasino" aria-labelledby="ethcasino-resumen-heading">
          <h2 id="ethcasino-resumen-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Resumen rápido
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {QUICK_SUMMARY.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-[#10BBD7]/20 bg-[#0D1824]/80 p-3"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-[#56E8F6]">
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
            <span className="font-mono font-semibold text-foreground">{ETHCASINO_PROMO_CODE}</span>
            . No garantiza un bono.
          </p>
        </section>

        <section aria-labelledby="ethcasino-update-heading">
          <h2 id="ethcasino-update-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Por qué actualizamos esta reseña
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Conservamos la URL indexada{" "}
            <span className="font-medium text-foreground">/reviews/ethcasino</span> y reforzamos el
            enfoque editorial en no-KYC, registro con email y contraseña, pagos crypto y riesgos
            reales de retiro y jurisdicción, sin posicionar la marca alrededor de un bono de
            bienvenida.
          </p>
        </section>

        <section aria-labelledby="ethcasino-nokyc-heading">
          <h2 id="ethcasino-nokyc-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            ETH Casino sin KYC
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
            ETH Casino declara que no exige verificación KYC y que permite registrarse mediante email
            y contraseña. Según el FAQ público del operador, no se requieren documentos personales
            para jugar o solicitar retiros. Esta es una política publicada por el operador y puede
            cambiar. Confirma siempre las reglas vigentes después del redirect.
          </p>
        </section>

        <section aria-labelledby="ethcasino-register-heading">
          <h2 id="ethcasino-register-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Cómo registrarse en ETH Casino
          </h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
            {REGISTRATION_STEPS.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            El operador declara que no solicita nombre, dirección, teléfono ni documento oficial
            durante este flujo. La confirmación de email forma parte del proceso descrito.
          </p>
        </section>

        <section aria-labelledby="ethcasino-privacy-heading">
          <h2 id="ethcasino-privacy-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Privacidad: ventajas y límites
          </h2>
          <p className="mt-2 text-sm font-medium text-[#56E8F6]">
            Sin KYC no significa invisibilidad técnica absoluta.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-[#10BBD7]/20 bg-[#0D1824]/70 p-4">
              <h3 className="text-sm font-semibold text-foreground">Ventajas de privacidad</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {PRIVACY_ADVANTAGES.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden="true" className="text-[#21D6EB]">
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

        <section aria-labelledby="ethcasino-accounts-heading">
          <h2 id="ethcasino-accounts-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            ¿ETH Casino permite varias cuentas?
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            El FAQ público de ETH Casino afirma que permite varias cuentas.
          </p>
          <div
            role="note"
            className="mt-4 rounded-lg border border-amber-500/25 bg-amber-500/5 px-4 py-3 text-sm leading-relaxed text-muted-foreground"
          >
            JugadaMax no interpreta esta política como autorización para evadir restricciones
            legales, controles antifraude, límites, bloqueos, autoexclusión o reglas del dominio de
            registro.
          </div>
        </section>

        <section aria-labelledby="ethcasino-payments-heading">
          <h2 id="ethcasino-payments-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Criptomonedas soportadas
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {CRYPTO_ASSETS.map((asset) => (
              <li
                key={asset}
                className="inline-flex items-center rounded-full border border-[#10BBD7]/25 bg-[#16394A]/30 px-2.5 py-1 text-xs font-semibold text-[#DFFBFF]"
              >
                {asset}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-muted-foreground">
            Comprueba activo, red y dirección antes de transferir fondos. Las operaciones blockchain
            normalmente no pueden revertirse.
          </p>
        </section>

        <section aria-labelledby="ethcasino-conditions-heading">
          <h2 id="ethcasino-conditions-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Condiciones importantes de depósito y retiro
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {CONDITIONS_CARDS.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-[#10BBD7]/20 bg-[#0D1824]/80 p-4"
              >
                <h3 className="text-sm font-semibold text-[#56E8F6]">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            ETH Casino afirma que procesa los retiros de forma inmediata; el tiempo de llegada
            depende de la red. JugadaMax no garantiza retiros instantáneos.{" "}
            <a
              href="https://www.ethcasino.io/faq/operational-information/terms-and-conditions"
              target="_blank"
              rel="noopener noreferrer"
              className={cn("font-medium text-[#56E8F6] underline-offset-2 hover:underline", focusRing)}
            >
              Consulta los Terms oficiales
            </a>
            .
          </p>
        </section>

        <section aria-labelledby="ethcasino-games-heading">
          <h2 id="ethcasino-games-heading" className="text-lg font-semibold text-foreground sm:text-xl">
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
            Proveedores representativos según disponibilidad: {PROVIDERS.join(", ")}. El número exacto
            de títulos puede cambiar.
          </p>
        </section>

        <section aria-labelledby="ethcasino-mobile-heading">
          <h2 id="ethcasino-mobile-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Uso en móvil
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            ETH Casino funciona desde navegador, lo que facilita alternar entre wallet, exchange y
            sesión de juego en teléfono. Antes de depositar, confirma compatibilidad, red y dirección
            de destino.
          </p>
        </section>

        <section aria-labelledby="ethcasino-security-heading">
          <h2 id="ethcasino-security-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Seguridad y juego responsable
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Protege email, contraseña y wallets. Un modelo sin KYC no elimina phishing, pérdida de
            claves ni restricciones antifraude. Solo mayores de 18 años; establece límites personales
            y consulta{" "}
            <Link href="/juego-responsable" className={cn("text-[#56E8F6] underline-offset-2 hover:underline", focusRing)}>
              juego responsable
            </Link>
            .
          </p>
        </section>

        <section aria-labelledby="ethcasino-external-heading">
          <h2 id="ethcasino-external-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Evaluaciones externas y riesgos
          </h2>
          <div className="mt-4 rounded-xl border border-amber-500/25 bg-amber-500/5 p-4 sm:p-5">
            <h3 className="text-sm font-semibold text-foreground">Evaluación externa</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Casino Guru publica una evaluación externa inferior a la valoración editorial de
              JugadaMax y señala ausencia de licencia verificada y riesgos vinculados a casinos
              relacionados. También indica que no encontró reglas depredadoras en los términos
              directamente revisados. En la verificación en vivo de esta integración, el Safety Index
              publicado es 5.3/10 (Below average). Esta evaluación externa no es la puntuación de
              JugadaMax.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              JugadaMax asigna a ETH Casino una valoración editorial de 4.7/5 por su propuesta
              diferenciada sin KYC, registro sencillo, amplia compatibilidad crypto y catálogo de
              juegos. Esta puntuación no es un agregado de usuarios ni una garantía de seguridad o
              retiro.
            </p>
          </div>
        </section>

        <VerdictBox verdict={review.verdict} rating={review.rating} />
        <ProsCons pros={review.pros} cons={review.cons} />

        <section aria-labelledby="ethcasino-analysis-heading">
          <h2 id="ethcasino-analysis-heading" className="text-lg font-semibold text-foreground sm:text-xl">
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

        <section aria-labelledby="ethcasino-community-heading">
          <h2 id="ethcasino-community-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            TTR Blog y comunidad
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            El material oficial describe ETH Casino como sucesor de TTR Casino. El proyecto mantiene
            relación con{" "}
            <a
              href="https://ttrblog.io/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn("text-[#56E8F6] underline-offset-2 hover:underline", focusRing)}
            >
              TTR Blog
            </a>{" "}
            y el canal de Kick{" "}
            <a
              href="https://kick.com/ltccasino-com"
              target="_blank"
              rel="noopener noreferrer"
              className={cn("text-[#56E8F6] underline-offset-2 hover:underline", focusRing)}
            >
              LTCCASINO-COM
            </a>
            . Esa conexión comunitaria no sustituye una evaluación editorial independiente ni prueba
            de seguridad.
          </p>
        </section>

        <section
          aria-labelledby="ethcasino-final-cta-heading"
          className="rounded-xl border border-[#10BBD7]/25 bg-gradient-to-br from-[#080D18] via-[#0D1824] to-[#132535] p-5 sm:p-6"
        >
          <h2 id="ethcasino-final-cta-heading" className="text-lg font-semibold text-foreground">
            Registrarse en ETH Casino
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Confirma el dominio de destino, política sin KYC, criptomoneda, red, límites y reglas de
            retiro antes de depositar.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={ETHCASINO_AFFILIATE_URL}
              target="_blank"
              rel={AFFILIATE_REL}
              className={cn(
                "inline-flex min-h-11 items-center justify-center rounded-md bg-[#10BBD7] px-5 py-2.5 text-sm font-semibold text-[#080D18] transition-colors hover:bg-[#21D6EB]",
                focusRing,
              )}
            >
              Registrarse en ETH Casino
            </a>
            <Link
              href="/casinos-sin-kyc"
              className={cn(
                "inline-flex min-h-11 items-center justify-center rounded-md border border-[#21D6EB]/40 px-5 py-2.5 text-sm font-semibold text-[#56E8F6] transition-colors hover:bg-[#16394A]/40",
                focusRing,
              )}
            >
              Comparar casinos sin KYC
            </Link>
          </div>
        </section>

        <section aria-labelledby="ethcasino-faq-heading">
          <h2 id="ethcasino-faq-heading" className="text-lg font-semibold text-foreground sm:text-xl">
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
          description="Política publicada por el operador, evaluación externa, enlaces relacionados, metodología editorial y enlace de campaña afiliada."
          items={SOURCE_REFERENCES}
        />
      </article>

      <MobileStickyOfferCta
        showAfterId="review-primary-offer"
        compactPrimaryLabel="Registrarse"
        compactSecondaryLabel="Comparar"
        primaryLabel="Registrarse"
        primaryHref={ETHCASINO_AFFILIATE_URL}
        secondaryLabel="Comparar"
        secondaryHref="/casinos-sin-kyc"
      />
    </>
  );
}

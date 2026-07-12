import type { Metadata } from "next";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { notFound } from "next/navigation";
import {
  getAuthorById,
  getBonusesForCasino,
  getCasinoById,
  getReviewBySlug,
  getReviews,
} from "@/lib/content";
import { filterReviewsForSurface, isOperatorAllowedOnSurface, isOperatorCtaAllowed } from "@/content/operators/status";
import { buildMetadata } from "@/lib/seo/metadata";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Container } from "@/components/layout/Container";
import { PaymentBadges } from "@/components/ranking/PaymentBadges";
import { AffiliateDisclosure } from "@/components/trust/AffiliateDisclosure";
import { ResponsibleGamblingNotice } from "@/components/trust/ResponsibleGamblingNotice";
import { OperatorCta } from "@/components/trust/OperatorCta";
import { LicenseInfo } from "@/components/trust/LicenseInfo";
import { getCasinoOutboundLink } from "@/lib/affiliate/operator-links";
import {
  BETFURY_AFFILIATE_URL,
  BETFURY_PROMO_CODE,
  BETSSON_MX_CASINO_WELCOME_URL,
  BETSSON_MX_HOME_URL,
  FIVEHUNDRED_CASINO_GLOBAL_AFFILIATE_URL,
  RAINBET_REFERRAL_URL,
  ONE_XBET_AFFILIATE_URL,
  ONE_XBET_PROMO_CODE,
  MELBET_AFFILIATE_URL,
  MELBET_PROMO_CODE,
  MELLSTROY_GLOBAL_AFFILIATE_URL,
  GAMDOM_GLOBAL_AFFILIATE_URL,
} from "@/lib/affiliate/constants";
import { OfferCard } from "@/components/affiliate/OfferCard";
import { GamdomFeaturedCard } from "@/components/affiliate/GamdomFeaturedCard";
import { OneXBetFeaturedCard } from "@/components/affiliate/OneXBetFeaturedCard";
import { MelbetFeaturedCard } from "@/components/affiliate/MelbetFeaturedCard";
import { MellstroyFeaturedCard } from "@/components/affiliate/MellstroyFeaturedCard";
import { VodkabetReviewContent } from "@/components/review/VodkabetReviewContent";
import { MobileStickyOfferCta } from "@/components/affiliate/MobileStickyOfferCta";
import { ReviewHeader } from "@/components/review/ReviewHeader";
import { VerdictBox } from "@/components/review/VerdictBox";
import { ProsCons } from "@/components/review/ProsCons";
import { StakeHighRollerSection } from "@/components/review/StakeHighRollerSection";
import type { ReviewRelatedLink } from "@/types/content";
import { cn, focusRing } from "@/lib/utils";

const AFFILIATE_REL = "sponsored nofollow noopener noreferrer";

/** Shared review layout: wide article shell + readable prose column. */
const REVIEW_ARTICLE_CLASS = "mx-auto w-full max-w-5xl space-y-7 sm:space-y-8";
const REVIEW_PROSE_CLASS = "mx-auto w-full max-w-4xl";

function ReviewProse({
  children,
  className,
  as: Component = "div",
  ...props
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
} & ComponentPropsWithoutRef<"section">) {
  return (
    <Component className={cn(REVIEW_PROSE_CLASS, className)} {...props}>
      {children}
    </Component>
  );
}

const BETSSON_BONUS_CONDITIONS = [
  { label: "Bono", value: "Hasta $15,000 MXN + 200 giros gratis" },
  {
    label: "Extra app",
    value: "+25 giros gratis extra si usas la app, según términos oficiales",
  },
  { label: "Depósito", value: "Desde $200 según promoción publicada" },
  { label: "SPEI", value: "Mínimo $100 por SPEI según términos oficiales" },
  { label: "Juegos elegibles", value: "Revisar juegos participantes y restricciones" },
  { label: "Requisitos", value: "Revisar requisitos de apuesta, límites y vencimiento" },
  {
    label: "Retiro",
    value: "Sujeto a verificación, método de pago y términos del operador",
  },
] as const;

const BETSSON_PAYMENTS_CARDS = [
  {
    title: "Métodos visibles",
    text: "Visa, Mastercard, OXXO y SPEI según disponibilidad.",
  },
  {
    title: "Depósitos",
    text: "Los mínimos pueden depender de la promoción y del método elegido.",
  },
  {
    title: "Retiros",
    text: "Los tiempos de retiro dependen del método, verificación de cuenta, límites y términos oficiales.",
  },
  {
    title: "Verificación",
    text: "El operador puede solicitar validación de identidad antes de permitir retiros o ciertas promociones.",
  },
] as const;

const BETSSON_PRODUCT_CARDS = [
  {
    title: "Casino online",
    text: "Slots, casino en vivo y juegos de mesa pueden estar disponibles según catálogo vigente.",
  },
  {
    title: "Apuestas deportivas",
    text: "Betsson también combina sportsbook para fútbol, Liga MX y otros deportes, sujeto a mercados disponibles.",
  },
  {
    title: "App Betsson",
    text: "La promoción puede incluir giros extra en app. Revisa requisitos del dispositivo y términos oficiales.",
  },
] as const;

const BETSSON_FAQ = [
  {
    question: "¿Betsson MX tiene bono de bienvenida?",
    answer:
      "Sí, la promoción visible para casino muestra hasta $15,000 MXN + 200 giros gratis, con condiciones oficiales que deben revisarse antes de depositar.",
  },
  {
    question: "¿Qué métodos de pago aparecen en Betsson MX?",
    answer:
      "En nuestra revisión aparecen Visa, Mastercard, OXXO y SPEI, pero la disponibilidad puede cambiar según cuenta, método y términos del operador.",
  },
  {
    question: "¿Cuánto tarda un retiro en Betsson?",
    answer:
      "Los tiempos de retiro dependen del método de pago, verificación de cuenta, límites y políticas internas del operador. JugadaMax no garantiza tiempos de retiro.",
  },
  {
    question: "¿Betsson MX es más casino o apuestas?",
    answer:
      "Betsson combina casino online y apuestas deportivas. Para JugadaMax encaja como operador fiat/mixed para usuarios que buscan pagos locales en México.",
  },
] as const;

const BETFURY_BONUS_CABINET = [
  { label: "Oferta principal", value: "Hasta 590% + Free Spins" },
  { label: "Valor visible", value: "Hasta $10,500 según promoción del operador" },
  { label: "1er depósito", value: "150% + 50 Free Spins desde $5" },
  { label: "2º depósito", value: "180% + 75 Free Spins desde $20" },
  { label: "3er depósito", value: "200% + 100 Free Spins desde $100" },
  { label: "Código promocional", value: BETFURY_PROMO_CODE },
  {
    label: "Condiciones",
    value: "Revisar wagering, límites, juegos elegibles y vencimiento",
  },
] as const;

const BETFURY_REWARDS_CARDS = [
  {
    title: "Free Fury Wheel",
    text: "Giros/recompensas según disponibilidad y nivel.",
  },
  {
    title: "Cashback",
    text: "Recompensas de devolución según reglas del operador.",
  },
  {
    title: "Rakeback",
    text: "Bonos vinculados a actividad según términos.",
  },
  {
    title: "Bonos semanales y mensuales",
    text: "Promociones regulares según nivel y actividad.",
  },
  {
    title: "VIP bonuses",
    text: "VIP Welcome, Birthday y Personal VIP Bonuses según elegibilidad.",
  },
  {
    title: "Promo codes",
    text: "Códigos promocionales pueden aparecer en campañas o canales oficiales.",
  },
] as const;

const BETFURY_PAYMENTS_CARDS = [
  {
    title: "Crypto focus",
    text: "BetFury se orienta a usuarios crypto y ecosistema BFG.",
  },
  {
    title: "Depósitos",
    text: "Métodos, redes y mínimos dependen de términos oficiales.",
  },
  {
    title: "Retiros",
    text: "Tiempos y límites dependen de método, verificación y políticas internas.",
  },
  {
    title: "KYC",
    text: "El operador puede solicitar verificación antes de retiros o promociones.",
  },
] as const;

const BETFURY_PRODUCT_CARDS = [
  {
    title: "Casino online",
    text: "Slots, live casino y juegos pueden variar según catálogo vigente.",
  },
  {
    title: "Sportsbook",
    text: "BetFury también puede incluir apuestas deportivas según disponibilidad.",
  },
  {
    title: "Gamificación",
    text: "Bonus Cabinet, niveles, wheel, cashback y recompensas hacen la experiencia más promocional.",
  },
  {
    title: "BFG",
    text: "El ecosistema BFG puede formar parte de la experiencia, con reglas propias del operador.",
  },
] as const;

const BETFURY_FAQ = [
  {
    question: "¿BetFury tiene bono de bienvenida?",
    answer:
      "En la promoción visible, BetFury muestra hasta 590% + Free Spins dentro de Bonus Cabinet, sujeto a términos oficiales.",
  },
  {
    question: "¿Cuál es el código promocional de BetFury?",
    answer: `El código promocional confirmado para JugadaMax es ${BETFURY_PROMO_CODE}. Verifica siempre que el código y la promoción estén activos antes de registrarte.`,
  },
  {
    question: "¿BetFury paga rápido?",
    answer:
      "JugadaMax no garantiza tiempos de retiro. Los retiros dependen del método, red crypto, verificación de cuenta, límites y políticas internas del operador.",
  },
  {
    question: "¿BetFury es mejor para casino o sportsbook?",
    answer:
      "BetFury combina casino, posibles apuestas deportivas y gamificación. Encaja mejor para usuarios que buscan una experiencia crypto con promociones y recompensas por nivel.",
  },
] as const;

const ONEXBET_CASINO_PACKAGE = [
  { label: "Titular visible", value: "Hasta 40,000 MXN + 150 giros gratis" },
  { label: "Tipo", value: "Paquete de bienvenida para casino (nuevos usuarios elegibles)" },
  { label: "Código promocional", value: ONE_XBET_PROMO_CODE },
  {
    label: "Importante",
    value: "“Hasta” indica un máximo; puede depender de depósitos elegibles y términos oficiales",
  },
] as const;

const ONEXBET_REGISTRATION_STEPS = [
  "Entra desde el enlace de afiliado de JugadaMax",
  "Selecciona México / MXN si está disponible en el registro",
  `Introduce el código promocional ${ONE_XBET_PROMO_CODE} cuando el operador lo solicite`,
  "Elige el paquete de casino o la ruta deportiva según tu preferencia",
  "Revisa términos oficiales, wagering y reglas de retiro antes de depositar",
] as const;

const ONEXBET_CASINO_CARDS = [
  { title: "Slots", text: "Catálogo amplio según proveedores y disponibilidad regional." },
  { title: "Casino en vivo", text: "Mesas y game shows sujetos a catálogo vigente del operador." },
  { title: "Juegos de mesa", text: "Ruleta, blackjack y otros formatos según disponibilidad." },
  {
    title: "Giros gratis",
    text: "Los 150 giros del paquete dependen de elegibilidad, juegos y términos — no están garantizados.",
  },
] as const;

const ONEXBET_SPORTS_CARDS = [
  { title: "Fútbol y Liga MX", text: "Mercados locales e internacionales según calendario del operador." },
  { title: "Apuestas en vivo", text: "Cuotas y estadísticas durante eventos según disponibilidad." },
  { title: "eSports", text: "Disciplinas adicionales pueden variar por región y términos." },
  {
    title: "Bono deportivo",
    text: "Tratamiento separado del paquete de casino: bono de primer depósito según términos vigentes.",
  },
] as const;

const ONEXBET_PAYMENTS_CARDS = [
  {
    title: "Métodos",
    text: "MXN, OXXO, SPEI, tarjetas y opciones crypto pueden aparecer según cajero vigente.",
  },
  {
    title: "Retiros",
    text: "Tiempos, límites y comisiones dependen de método, verificación y políticas internas.",
  },
  {
    title: "KYC",
    text: "1xBet puede solicitar verificación antes de retiros o promociones.",
  },
  {
    title: "Disponibilidad",
    text: "Métodos y monedas activas deben confirmarse en el operador antes de depositar.",
  },
] as const;

const ONEXBET_FAQ = [
  {
    question: "¿Cuál es el paquete de bienvenida de 1xBet?",
    answer:
      "En el registro para México, 1xBet muestra un paquete de bienvenida de casino con titular hasta 40,000 MXN + 150 giros gratis para nuevos usuarios elegibles, sujeto a términos oficiales y depósitos.",
  },
  {
    question: "¿Cuál es el código promocional de JugadaMax para 1xBet?",
    answer: `El código promocional confirmado es ${ONE_XBET_PROMO_CODE}. Verifica que esté activo antes de registrarte.`,
  },
  {
    question: "¿Los 40,000 MXN se reciben en un solo depósito?",
    answer:
      "No necesariamente. El titular usa “hasta” como máximo y el banner se refiere a un paquete ligado a depósitos. JugadaMax no inventa porcentajes ni número de depósitos: confírmalo en 1xBet.",
  },
  {
    question: "¿Los 150 giros gratis están garantizados?",
    answer:
      "No. Los giros dependen de elegibilidad, juegos participantes, depósitos y términos oficiales. JugadaMax no garantiza su acreditación.",
  },
  {
    question: "¿1xBet ofrece casino y apuestas?",
    answer:
      "Sí. 1xBet combina casino online y sportsbook en una misma cuenta, pero bonos y reglas pueden diferir entre productos.",
  },
  {
    question: "¿Qué debo revisar antes de retirar?",
    answer:
      "Verificación de cuenta, wagering cumplido, límites, método de retiro activo, comisiones y reglas antifraude publicadas por el operador.",
  },
  {
    question: "¿Puede 1xBet solicitar KYC?",
    answer:
      "Sí. El operador puede pedir documentación o verificación adicional antes de retiros o ciertas promociones, según sus políticas.",
  },
] as const;

const ONEXBET_ANALYSIS_SECTIONS = [
  {
    title: "Nuestra valoración",
    paragraphs: [
      "1xBet es un operador mixto internacional que combina casino online, casino en vivo, slots y apuestas deportivas bajo una misma cuenta. Para usuarios de México y LATAM, JugadaMax lo presenta como candidato secundario frente a partners fiat locales como Betsson MX, pero puede interesar a quien busca mercados deportivos amplios, eSports y un paquete de bienvenida visible en el registro.",
      "Nuestra conclusión editorial: 1xBet puede funcionar como operador mixto internacional para comparar casino + sportsbook, especialmente si el usuario revisa con calma el paquete de bienvenida, introduce el código 1x_5259707 cuando corresponda y confirma wagering, depósitos elegibles y reglas de retiro directamente en el operador antes de mover fondos.",
    ],
  },
  {
    title: "Paquete de bienvenida",
    paragraphs: [
      "En la pantalla de registro para México, 1xBet muestra un paquete de bienvenida de casino con titular hasta 40,000 MXN + 150 giros gratis, vinculado a depósitos según la campaña publicada. JugadaMax no interpreta ese titular como un crédito único garantizado en el primer depósito: el operador presenta un paquete que puede distribuirse en varios tramos, sujetos a términos oficiales, juegos elegibles, requisitos de apuesta, límites y vencimiento.",
      "El código promocional confirmado para la campaña de JugadaMax es 1x_5259707. Debes introducirlo durante el registro si el operador lo solicita y verificar que la promoción siga activa antes de depositar. No confundas identificadores de tracking (BTAG, site ID o parámetros de afiliado) con el código promocional visible para el usuario.",
    ],
  },
  {
    title: "Casino y sportsbook",
    paragraphs: [
      "En apuestas deportivas, 1xBet suele mostrar fútbol, Liga MX, mercados internacionales, apuestas en vivo, eSports y otras disciplinas según disponibilidad. El bono deportivo debe tratarse por separado del paquete de casino: la ruta habitual es un bono de primer depósito según términos vigentes, con reglas de rollover, cuotas mínimas y mercados elegibles propias.",
      "En casino, el operador publica categorías como slots, casino en vivo, juegos de mesa y otros formatos según catálogo vigente. Los 150 giros gratis del paquete de bienvenida, cuando aplican, dependen de elegibilidad, juegos participantes y condiciones publicadas por 1xBet — JugadaMax no garantiza su acreditación automática.",
    ],
  },
  {
    title: "Pagos, KYC y retiros",
    paragraphs: [
      "En pagos y retiros, métodos, límites, comisiones, monedas y tiempos pueden variar por país, método y estado de verificación. 1xBet puede solicitar KYC antes de permitir retiros o ciertas promociones. No afirmamos retiros rápidos ni garantizados.",
    ],
  },
] as const;

const MELBET_DEPOSIT_STAGES = [
  { label: "1.º depósito", value: "100% hasta MX$7,000" },
  { label: "2.º depósito", value: "50% hasta MX$3,500" },
  { label: "3.º depósito", value: "25% hasta MX$3,500" },
  { label: "4.º depósito", value: "25% hasta MX$3,500" },
  { label: "Depósito mínimo", value: "MX$100" },
  { label: "Wagering", value: "5x del bono según términos publicados" },
  {
    label: "Apuestas calificadas",
    value:
      "Acumuladas con al menos 2 selecciones y cuota mínima de 1.40 por selección según la promoción mostrada",
  },
  {
    label: "Vigencia",
    value: "Revisar periodos de 15 días y términos vigentes",
  },
] as const;

const MELBET_REGISTRATION_STEPS = [
  "Entra desde el enlace de afiliado de JugadaMax",
  "Regístrate y completa la información de perfil si el operador la solicita",
  `Introduce el código promocional ${MELBET_PROMO_CODE} cuando corresponda`,
  "Selecciona o acepta el bono deportivo relevante antes de depositar",
  "Realiza un depósito elegible desde MX$100 según términos vigentes",
  "Revisa términos oficiales, rollover y reglas de retiro antes de apostar",
] as const;

const MELBET_CASINO_CARDS = [
  { title: "Slots", text: "Catálogo de slots según proveedores y disponibilidad regional." },
  { title: "Live casino", text: "Mesas y game shows sujetos al catálogo vigente del operador." },
  { title: "Juegos de mesa", text: "Ruleta, blackjack y otros formatos según disponibilidad." },
  {
    title: "Fast games",
    text: "Formatos rápidos según catálogo visible; promociones de casino aparte del bono deportivo.",
  },
] as const;

const MELBET_SPORTS_CARDS = [
  { title: "Fútbol y Liga MX", text: "Mercados locales e internacionales según calendario del operador." },
  { title: "Apuestas en vivo", text: "Cuotas y estadísticas durante eventos según disponibilidad." },
  { title: "eSports", text: "Disciplinas adicionales pueden variar por región y términos." },
  {
    title: "Reglas de mercado",
    text: "Cuotas, liquidación y mercados elegibles para el bono deben confirmarse en Melbet.",
  },
] as const;

const MELBET_PAYMENTS_CARDS = [
  {
    title: "Métodos",
    text: "Opciones de depósito y retiro según cajero vigente; JugadaMax no inventa métodos concretos.",
  },
  {
    title: "Retiros",
    text: "Tiempos, límites y comisiones dependen de método, verificación y políticas internas.",
  },
  {
    title: "KYC",
    text: "Melbet puede solicitar verificación antes de retiros o promociones.",
  },
  {
    title: "Disponibilidad",
    text: "Monedas, límites y reglas activas deben confirmarse en el operador antes de depositar.",
  },
] as const;

const MELBET_FAQ = [
  {
    question: "¿Cuál es el bono de bienvenida de Melbet?",
    answer:
      "El bono deportivo visible para nuevos usuarios elegibles puede alcanzar hasta MX$17,500 en los primeros cuatro depósitos, sujeto a términos oficiales, depósito mínimo y condiciones de apuesta.",
  },
  {
    question: "¿El bono de MX$17,500 se recibe en un solo depósito?",
    answer:
      "No. El titular usa “hasta” como máximo repartido en cuatro tramos: 100% hasta MX$7,000, 50% hasta MX$3,500, 25% hasta MX$3,500 y 25% hasta MX$3,500, según depósitos elegibles y términos publicados.",
  },
  {
    question: "¿Cuál es el código promocional de JugadaMax?",
    answer: `El código promocional confirmado es ${MELBET_PROMO_CODE}. Verifica que esté activo antes de registrarte.`,
  },
  {
    question: "¿Cuál es el depósito mínimo?",
    answer:
      "Según la promoción mostrada, el depósito mínimo elegible es MX$100. Confirma el importe vigente en Melbet antes de depositar.",
  },
  {
    question: "¿Qué requisito de apuesta tiene el bono?",
    answer:
      "La promoción visible indica requisito de apuesta 5x del monto del bono, con acumuladas de al menos 2 selecciones y cuota mínima de 1.40 por selección, según términos publicados.",
  },
  {
    question: "¿Melbet incluye casino y apuestas deportivas?",
    answer:
      "Sí. Melbet combina sportsbook y casino en una misma cuenta, pero el paquete de MX$17,500 corresponde al bono deportivo, no a promociones de casino.",
  },
  {
    question: "¿Melbet puede solicitar verificación KYC?",
    answer:
      "Sí. El operador puede pedir documentación o verificación adicional antes de retiros o ciertas promociones, según sus políticas.",
  },
  {
    question: "¿JugadaMax garantiza retiros rápidos?",
    answer:
      "No. JugadaMax no garantiza tiempos de retiro. Los retiros dependen del método, verificación de cuenta, límites y políticas internas del operador.",
  },
] as const;

const MELBET_ANALYSIS_SECTIONS = [
  {
    title: "Nuestra valoración",
    paragraphs: [
      "Melbet es un operador mixto internacional que combina apuestas deportivas, casino online, slots, live casino y fast games bajo una misma cuenta. Para usuarios de México y LATAM, JugadaMax lo presenta como partner activo secundario tras Betsson MX y 1xBet, especialmente si buscas un bono deportivo escalonado y una plataforma amplia para comparar sportsbook + casino.",
      "Nuestra conclusión editorial: Melbet puede encajar para usuarios que comparan un sportsbook internacional con bono escalonado y también quieren explorar casino en la misma cuenta, siempre que revisen rollover, cuotas mínimas, vigencia, depósitos elegibles y reglas de retiro directamente en el operador antes de mover fondos.",
    ],
  },
  {
    title: "Bono deportivo",
    paragraphs: [
      "El bono deportivo de bienvenida mostrado para México puede alcanzar hasta MX$17,500 distribuidos en los primeros cuatro depósitos elegibles: 100% hasta MX$7,000 en el primer depósito, 50% hasta MX$3,500 en el segundo, 25% hasta MX$3,500 en el tercero y 25% hasta MX$3,500 en el cuarto. JugadaMax no interpreta ese titular como un crédito único garantizado.",
      "Según la promoción visible, el requisito de apuesta es 5x del monto del bono, con apuestas acumuladas de al menos 2 selecciones y cuota mínima de 1.40 por selección. El primer depósito elegible debe realizarse dentro de los 15 días posteriores al registro; los depósitos posteriores deben seguir el timing indicado por el operador tras cumplir el wagering del bono anterior.",
    ],
  },
  {
    title: "Casino y sportsbook",
    paragraphs: [
      "En casino, Melbet publica slots, casino en vivo, juegos de mesa y fast games según catálogo vigente. JugadaMax no atribuye el paquete de MX$17,500 al casino: las promociones de casino deben revisarse por separado según términos vigentes del operador.",
      "En apuestas deportivas, el operador suele mostrar fútbol, Liga MX, mercados internacionales, apuestas en vivo, eSports y otras disciplinas según disponibilidad. Cuotas, liquidación y reglas de mercado pueden variar; confirma siempre la información vigente en Melbet.",
    ],
  },
  {
    title: "Pagos, KYC y retiros",
    paragraphs: [
      "En pagos, retiros y verificación, métodos, límites, comisiones, monedas y tiempos pueden variar por país, método y estado de la cuenta. Melbet puede solicitar KYC antes de permitir retiros o ciertas promociones. JugadaMax no garantiza retiros rápidos ni tiempos fijos.",
    ],
  },
  {
    title: "Para quién puede encajar",
    paragraphs: [
      "Melbet puede interesar a usuarios que priorizan un bono deportivo escalonado, mercados en vivo y la opción de explorar casino en la misma cuenta, siempre revisando condiciones detalladas del bono. Si buscas principalmente casino fiat local, también puedes comparar la sección de casinos fiat de JugadaMax.",
    ],
  },
] as const;

const FIVEHUNDRED_PRODUCT_CARDS = [
  {
    title: "Slots",
    text: "Catálogo de slots y juegos destacados según disponibilidad.",
  },
  {
    title: "Live casino",
    text: "Mesas y juegos en vivo pueden variar por proveedor.",
  },
  {
    title: "Sportsbook",
    text: "Apuestas deportivas disponibles según mercado y jurisdicción.",
  },
  {
    title: "Originals / cases",
    text: "Funciones gaming adicionales sujetas a reglas del operador.",
  },
] as const;

const FIVEHUNDRED_PAYMENTS_CARDS = [
  {
    title: "Crypto focus",
    text: "500 Casino se orienta a usuarios crypto.",
  },
  {
    title: "Depósitos",
    text: "Métodos, redes y mínimos dependen del operador.",
  },
  {
    title: "Retiros",
    text: "Tiempos y límites dependen de verificación, red y políticas internas.",
  },
  {
    title: "KYC",
    text: "El operador puede solicitar verificación antes de retiros o promociones.",
  },
] as const;

const FIVEHUNDRED_FAQ = [
  {
    question: "¿500 Casino tiene promociones?",
    answer:
      "Sí, el operador muestra promociones visibles, pero JugadaMax recomienda revisar siempre términos, requisitos y disponibilidad antes de depositar.",
  },
  {
    question: "¿500 Casino es crypto o fiat?",
    answer:
      "JugadaMax lo trata como casino crypto. Si buscas pagos locales como OXXO o SPEI, revisa operadores fiat como Betsson MX.",
  },
  {
    question: "¿Por qué 500 Casino está debajo de BetFury?",
    answer:
      "Porque BetFury tiene una campaña y propuesta de Bonus Cabinet más clara para el ranking actual. 500 Casino queda como alternativa crypto para comparar.",
  },
  {
    question: "¿JugadaMax garantiza retiros en 500 Casino?",
    answer:
      "No. Los retiros dependen del método, verificación, límites y políticas internas del operador.",
  },
] as const;

const RAINBET_PROMO_CONDITIONS = [
  { label: "Wager Lock", value: "Promoción con requisito de apuesta según términos oficiales" },
  { label: "No Wager Lock", value: "Desbloqueo por volumen de apuesta según fórmula del operador" },
  { label: "Depósito mínimo", value: "$30 según página pública de promociones" },
  { label: "Depósito máximo", value: "$700 según página pública de promociones" },
  { label: "Wager Lock (wagering)", value: "40x según términos publicados" },
  { label: "Free spins", value: "Sweet Bonanza (Pragmatic Play) según elegibilidad y país" },
  {
    label: "Condiciones",
    value: "Revisar juegos excluidos, RTP, apuesta máxima activa y reglas de retiro",
  },
] as const;

const RAINBET_REWARDS_CARDS = [
  {
    title: "Rakeback",
    text: "Devolución parcial según actividad y reglas del operador.",
  },
  {
    title: "Daily / weekly / monthly",
    text: "Bonos periódicos visibles en el sistema de rewards.",
  },
  {
    title: "Rank-up rewards",
    text: "Recompensas al subir de nivel en la escalera VIP.",
  },
  {
    title: "Weekly free spins",
    text: "Giros semanales sujetos a elegibilidad y términos.",
  },
  {
    title: "Calendar rewards",
    text: "Recompensas de calendario según campañas activas.",
  },
  {
    title: "VIP ranks",
    text: "Bronze, Silver, Gold, Platinum, Diamond, Infernal e Infernal Diamond.",
  },
] as const;

const RAINBET_PAYMENTS_CARDS = [
  {
    title: "Crypto focus",
    text: "Rainbet se presenta como operador crypto-first.",
  },
  {
    title: "Criptomonedas",
    text: "BTC, ETH, LTC, XRP, SOL, TRX, BNB, USDT y USDC según cajero oficial.",
  },
  {
    title: "Depósitos",
    text: "El operador indica acreditación tras una confirmación en blockchain.",
  },
  {
    title: "Retiros",
    text: "El sitio publica procesamiento típico de 5–15 minutos; JugadaMax no lo garantiza.",
  },
  {
    title: "KYC",
    text: "Verificación, límites y restricciones pueden aplicarse según políticas internas.",
  },
] as const;

const RAINBET_PRODUCT_CARDS = [
  {
    title: "Casino / slots",
    text: "Catálogo amplio con proveedores como Pragmatic Play, Evolution, Hacksaw y BGaming.",
  },
  {
    title: "Live casino",
    text: "Mesas en vivo y game shows según disponibilidad del catálogo.",
  },
  {
    title: "Sportsbook",
    text: "Apuestas deportivas tradicionales y esports según mercados y jurisdicción.",
  },
  {
    title: "Rainbet Originals",
    text: "Plinko, Limbo, Wheel, Mines, Dice, Blackjack y otros títulos propios del operador.",
  },
] as const;

const RAINBET_FAQ = [
  {
    question: "¿Rainbet ofrece bonos?",
    answer:
      "Sí, la página pública de promociones muestra rutas Wager Lock y No Wager Lock, además de mecánicas de primer depósito y free spins. JugadaMax recomienda revisar siempre términos, elegibilidad y disponibilidad antes de depositar.",
  },
  {
    question: "¿Rainbet tiene promociones sin wager lock?",
    answer:
      "El operador publica una No Wager Lock Promotion con fórmula de desbloqueo por volumen de apuesta. Las condiciones, juegos elegibles y límites deben confirmarse en el sitio oficial.",
  },
  {
    question: "¿Qué criptomonedas acepta Rainbet?",
    answer:
      "Según información del operador, Rainbet soporta BTC, ETH, LTC, XRP, SOL, TRX, BNB, USDT y USDC. Redes, mínimos y comisiones pueden variar.",
  },
  {
    question: "¿Rainbet tiene sportsbook?",
    answer:
      "Sí, Rainbet combina casino crypto con sportsbook de deportes tradicionales y esports, sujeto a mercados disponibles y restricciones regionales.",
  },
  {
    question: "¿Rainbet garantiza retiros rápidos?",
    answer:
      "No. El operador publica tiempos estimados de 5–15 minutos, pero JugadaMax no garantiza velocidad de retiro. Verificación, red, límites y políticas internas pueden alterar cualquier plazo.",
  },
  {
    question: "¿Rainbet es mejor que BetFury?",
    answer:
      "JugadaMax coloca BetFury por encima por la campaña activa y la propuesta de Bonus Cabinet. Rainbet queda como alternativa crypto para comparar, no como reemplazo automático del partner destacado.",
  },
] as const;

const GAMDOM_PRODUCT_CARDS = [
  {
    title: "Casino online",
    text: "Slots, mesas y live dealer según catálogo vigente del operador.",
  },
  {
    title: "Sportsbook",
    text: "Apuestas deportivas integradas en la misma cuenta, sujetas a mercados y restricciones regionales.",
  },
  {
    title: "Originals",
    text: "Juegos propios de house edge dentro del ecosistema Gamdom, útiles para explorar el producto crypto.",
  },
  {
    title: "Experiencia unificada",
    text: "Casino, sportsbook y Rewards comparten una sola cuenta; revisa reglas de saldo y promociones por sección.",
  },
] as const;

const GAMDOM_REWARDS_CARDS = [
  {
    title: "Welcome offer revisada",
    text: "Rakeback elevado al 15% durante 7 días para nuevos usuarios elegibles, según revisión editorial de julio de 2026.",
  },
  {
    title: "Ventana de activación",
    text: "La oferta debía reclamarse desde Rewards durante las primeras 6 horas tras el registro. Confirma siempre la ventana vigente.",
  },
  {
    title: "Rewards continuo",
    text: "Rakeback, misiones y beneficios acumulables visibles en el panel Rewards según actividad y términos.",
  },
  {
    title: "Promociones rotativas",
    text: "Campañas de casino, sportsbook, wager, jackpot y eventos temáticos que pueden cambiar o finalizar sin aviso.",
  },
] as const;

const GAMDOM_PAYMENTS_CARDS = [
  {
    title: "Enfoque crypto",
    text: "Gamdom se orienta a depósitos y retiros con criptomonedas. Métodos, redes y límites deben confirmarse en el cajero oficial.",
  },
  {
    title: "Verificación",
    text: "El operador puede solicitar KYC por seguridad, retiros, actividad inusual o cumplimiento de sus términos internos.",
  },
  {
    title: "Retiros",
    text: "JugadaMax no garantiza tiempos, montos ni disponibilidad de retiro. Red, verificación y políticas antifraude pueden alterar cualquier estimación.",
  },
  {
    title: "Jurisdicción",
    text: "Disponibilidad, promociones y reglas de cuenta dependen de tu ubicación y de los términos oficiales de Gamdom.",
  },
] as const;

const GAMDOM_FAQ = [
  {
    question: "¿Gamdom tiene oferta de bienvenida?",
    answer:
      "En la revisión editorial de julio de 2026, Gamdom mostraba rakeback elevado al 15% durante 7 días para nuevos usuarios elegibles. La disponibilidad, el cálculo y las reglas pueden cambiar; confirma siempre en el operador.",
  },
  {
    question: "¿Cómo se activa el rakeback de Gamdom?",
    answer:
      "Según la oferta revisada, debía reclamarse desde la sección Rewards durante las primeras 6 horas tras el registro. Después de activarla, el rakeback promocional se aplicaba durante los siguientes 7 días según términos oficiales.",
  },
  {
    question: "¿Gamdom tiene casino y sportsbook?",
    answer:
      "Sí. Gamdom combina casino online, sportsbook y juegos Originals en una sola cuenta, sujeto a catálogo, mercados y restricciones regionales vigentes.",
  },
  {
    question: "¿Gamdom está disponible en México?",
    answer:
      "JugadaMax no afirma disponibilidad universal para México. La elegibilidad, pagos, verificación y promociones dependen de los términos oficiales de Gamdom y de tu jurisdicción.",
  },
] as const;

const MELLSTROY_WELCOME_COMPARISON = [
  { label: "Página de promociones", value: "Hasta 660% + 400 FS" },
  { label: "Creatividad de registro", value: "550% + 400 FS" },
  {
    label: "Interpretación",
    value: "Las promociones pueden variar por campaña o flujo de registro",
  },
  {
    label: "Importante",
    value:
      "JugadaMax no garantiza ninguna de las cifras; confirma la oferta activa antes de depositar",
  },
] as const;

const MELLSTROY_PROMO_CARDS = [
  {
    title: "Cashback",
    text: "Hasta 30% cashback según promoción visible; no es un beneficio permanente ni garantizado.",
  },
  {
    title: "Verificación telefónica",
    text: "20 FS por verificar el teléfono según elegibilidad y términos vigentes.",
  },
  {
    title: "Free spins semanales",
    text: "Promoción visible de free spins semanales; disponibilidad sujeta a campaña y cuenta.",
  },
  {
    title: "Lucky Wheel",
    text: "Premios diarios según Fortune Wheel / Lucky Wheel y reglas del operador.",
  },
  {
    title: "Bono deportivo",
    text: "Hasta +15% a tu sports win según términos; producto adicional, no el foco principal.",
  },
  {
    title: "Campañas adicionales",
    text: "Lucky Races y otras campañas visibles pueden cambiar sin aviso.",
  },
] as const;

const MELLSTROY_PRODUCT_CARDS = [
  { title: "Slots", text: "Catálogo de casino con juegos destacados según disponibilidad regional." },
  { title: "Live casino", text: "Mesas y formatos en vivo sujetos al catálogo vigente del operador." },
  { title: "Fortune Wheel", text: "Rueda de premios visible en la interfaz; reglas y elegibilidad en términos oficiales." },
  { title: "Casino games", text: "Sección principal de juegos de casino dentro de la plataforma crypto." },
  {
    title: "Sportsbook",
    text: "Apuestas deportivas disponibles como producto adicional; no es el posicionamiento principal de JugadaMax.",
  },
  {
    title: "Bonos y promociones",
    text: "Página dedicada a promociones activas; confirma siempre la oferta vigente al registrarte.",
  },
] as const;

const MELLSTROY_PAYMENTS_CARDS = [
  {
    title: "USDT visible",
    text: "La interfaz suministrada muestra USDT como método de pago crypto.",
  },
  {
    title: "Otros métodos",
    text: "Otras monedas y redes deben confirmarse directamente en el cajero oficial.",
  },
  {
    title: "KYC",
    text: "Mellstroy puede solicitar verificación de identidad antes de retiros o promociones.",
  },
  {
    title: "Retiros",
    text: "Métodos, límites y tiempos varían; JugadaMax no garantiza plazos de retiro.",
  },
  {
    title: "Disponibilidad",
    text: "La elegibilidad depende de jurisdicción, cuenta y términos vigentes del operador.",
  },
] as const;

const MELLSTROY_ANALYSIS_SECTIONS = [
  {
    title: "Nuestra valoración",
    paragraphs: [
      "Mellstroy recibe una calificación editorial provisional de 3.9/5 en JugadaMax. Es una opinión editorial del equipo, no una puntuación agregada de usuarios ni una garantía de calidad operativa.",
      "La plataforma destaca por promociones visibles, Fortune Wheel y una mezcla de casino crypto con sportsbook adicional, pero la discrepancia entre creatividades (660% vs 550%) obliga a confirmar la oferta activa antes de depositar.",
    ],
  },
  {
    title: "Bono y promociones",
    paragraphs: [
      "La página de promociones suministrada muestra hasta 660% + 400 FS, mientras que otra creatividad de registro muestra 550% + 400 FS. JugadaMax no garantiza ninguna cifra: la oferta puede variar por campaña, flujo de registro, cuenta, GEO y términos vigentes.",
      "También aparecen cashback de hasta 30%, 20 FS por verificar el teléfono, free spins semanales, Lucky Wheel y un bono deportivo de hasta +15% según términos. Ninguna promoción debe interpretarse como permanente o automática.",
    ],
  },
  {
    title: "Casino y sportsbook",
    paragraphs: [
      "El foco editorial está en el casino crypto: slots, live casino, Fortune Wheel y pagos crypto. El sportsbook existe como producto adicional dentro de la misma cuenta, pero no define la clasificación principal de Mellstroy en JugadaMax.",
      "La interfaz puede resultar intensa o muy promocional para usuarios que prefieren una experiencia minimalista. Explora el catálogo y confirma juegos elegibles para bonos antes de apostar.",
    ],
  },
  {
    title: "Pagos, KYC y retiros",
    paragraphs: [
      "USDT es el método crypto visible en la interfaz suministrada. Otros activos, redes, mínimos y comisiones deben verificarse en el cajero oficial del operador.",
      "Mellstroy puede solicitar KYC, aplicar límites internos o restringir promociones según jurisdicción. JugadaMax no afirma retiros rápidos ni garantizados.",
    ],
  },
  {
    title: "Para quién puede encajar",
    paragraphs: [
      "Mellstroy puede encajar para usuarios que comparan casinos crypto internacionales, aceptan revisar términos con detalle y no necesitan pagos fiat locales como OXXO o SPEI.",
      "Puede ser menos adecuado para quien busca máxima claridad en bonos desde el primer vistazo, operadores con licencia local verificada o una experiencia sin múltiples campañas simultáneas.",
    ],
  },
] as const;

const MELLSTROY_FAQ = [
  {
    question: "¿Cuál es el bono de bienvenida de Mellstroy?",
    answer:
      "La página de promociones suministrada muestra hasta 660% + 400 FS según términos vigentes. Otra creatividad de registro muestra 550% + 400 FS. JugadaMax no garantiza ninguna cifra; confirma la oferta activa durante el registro.",
  },
  {
    question: "¿El bono es de 660% o 550%?",
    answer:
      "Depende de la campaña o creatividad que veas. Las promociones pueden variar por flujo de registro, cuenta, GEO y términos vigentes. Revisa siempre la oferta activa en Mellstroy antes de depositar.",
  },
  {
    question: "¿Qué significa 400 FS?",
    answer:
      "FS suele referirse a free spins (giros gratis). La cantidad, juegos elegibles, wagering y vencimiento deben confirmarse en los términos oficiales del operador.",
  },
  {
    question: "¿Mellstroy ofrece cashback?",
    answer:
      "La promoción visible menciona cashback de hasta 30% según términos. No es un beneficio permanente ni garantizado; revisa elegibilidad y reglas en el operador.",
  },
  {
    question: "¿Mellstroy tiene sportsbook?",
    answer:
      "Sí, la interfaz muestra sección de apuestas deportivas como producto adicional. JugadaMax clasifica a Mellstroy principalmente como casino crypto.",
  },
  {
    question: "¿Mellstroy acepta USDT?",
    answer:
      "USDT es visible en la interfaz suministrada. Otros métodos crypto deben confirmarse en el cajero oficial del operador.",
  },
  {
    question: "¿Mellstroy puede solicitar KYC?",
    answer:
      "Sí. El operador puede pedir verificación de identidad antes de retiros o ciertas promociones, según sus políticas.",
  },
  {
    question: "¿JugadaMax garantiza retiros rápidos?",
    answer:
      "No. JugadaMax no garantiza tiempos de retiro. Los retiros dependen del método, verificación, límites y políticas internas del operador.",
  },
] as const;

function RelatedLinkBadge({
  kind,
  label,
}: {
  kind?: ReviewRelatedLink["kind"];
  label?: string;
}) {
  if (kind === "blog") {
    return (
      <span
        aria-hidden="true"
        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-[#16233f]"
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="8" width="20" height="24" rx="2" stroke="#B8B8B0" strokeWidth="1.5" />
          <path d="M14 14h12M14 18h12M14 22h8" stroke="#FFB800" strokeWidth="1.5" strokeLinecap="round" />
          <text x="20" y="34" textAnchor="middle" fill="#F5F5F0" fontSize="7" fontWeight="700" fontFamily="system-ui, sans-serif">
            TTR
          </text>
        </svg>
      </span>
    );
  }

  if (kind === "streaming") {
    return (
      <span
        aria-hidden="true"
        className="inline-flex h-10 shrink-0 items-center gap-1 rounded-lg bg-[#53FC18] px-2.5"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="7" y="11" textAnchor="middle" fill="#000" fontSize="11" fontWeight="900" fontFamily="system-ui, sans-serif">
            K
          </text>
        </svg>
        <span className="text-[0.65rem] font-bold tracking-tight text-black">Kick</span>
      </span>
    );
  }

  const labelUpper = label?.toUpperCase() ?? "";

  if (labelUpper.includes("AYUDA")) {
    return (
      <span
        aria-hidden="true"
        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-[#16233f]"
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="10" stroke="#FFB800" strokeWidth="1.5" />
          <path d="M16 16.5a4 4 0 0 1 7.2 2c0 2.5-3.2 2.8-3.2 5" stroke="#F5F5F0" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="20" cy="27" r="1" fill="#F5F5F0" />
        </svg>
      </span>
    );
  }

  if (labelUpper.includes("PAGO") || labelUpper.includes("DEPÓSITO") || labelUpper.includes("DEPOSITO")) {
    return (
      <span
        aria-hidden="true"
        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-[#16233f]"
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="14" width="20" height="14" rx="2" stroke="#B8B8B0" strokeWidth="1.5" />
          <path d="M10 18h20" stroke="#FFB800" strokeWidth="1.5" />
          <rect x="14" y="22" width="6" height="2" rx="0.5" fill="#F5F5F0" />
        </svg>
      </span>
    );
  }

  if (labelUpper.includes("CALIENTE")) {
    return (
      <span
        aria-hidden="true"
        className="inline-flex h-10 w-10 shrink-0 flex-col items-center justify-center rounded-lg border border-primary/20 bg-[#f5f5f0] ring-1 ring-primary/15"
      >
        <span className="text-[0.55rem] font-bold leading-none text-[#c41e3a]">CA</span>
        <span className="mt-0.5 text-[0.4rem] font-semibold leading-none text-[#111417]">Caliente</span>
      </span>
    );
  }

  if (labelUpper.includes("BETSSON")) {
    return (
      <span
        aria-hidden="true"
        className="inline-flex h-10 w-10 shrink-0 flex-col items-center justify-center rounded-lg border border-primary/20 bg-[#16233f] ring-1 ring-primary/15"
      >
        <span className="text-[0.55rem] font-bold leading-none text-primary">BE</span>
        <span className="mt-0.5 text-[0.4rem] font-semibold leading-none text-muted-foreground">Betsson</span>
      </span>
    );
  }

  let websiteToken = "LTC";
  let websiteSubtitle = "Casino";
  if (labelUpper.includes("CRYPTOCASINO") || labelUpper.includes(".CC")) {
    websiteToken = "CC";
    websiteSubtitle = "Crypto";
  } else if (labelUpper.includes("ETH")) {
    websiteToken = "ETH";
    websiteSubtitle = "Casino";
  }

  return (
    <span
      aria-hidden="true"
      className="inline-flex h-10 w-10 shrink-0 flex-col items-center justify-center rounded-lg border border-primary/20 bg-[#16233f] ring-1 ring-primary/15"
    >
      <span className="text-[0.55rem] font-bold leading-none text-primary">{websiteToken}</span>
      <span className="mt-0.5 text-[0.45rem] font-semibold leading-none text-muted-foreground">
        {websiteSubtitle}
      </span>
    </span>
  );
}

export function generateStaticParams() {
  return filterReviewsForSurface(getReviews(), "reviews").map((review) => ({
    slug: review.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const review = getReviewBySlug(slug);
  if (!review) {
    return {
      title: "Página no encontrada",
      robots: { index: false, follow: true },
    };
  }
  const casino = getCasinoById(review.casinoId);
  const name = casino?.name ?? review.title;

  return buildMetadata({
    title: review.title,
    description: `Reseña editorial de ${name}: veredicto, pros y contras, pagos y licencia. Con divulgación de afiliados y juego responsable +18.`,
    path: `/reviews/${review.slug}`,
    type: "article",
    ...(review.slug === "stake"
      ? {
          languageAlternates: {
            "es-MX": `/reviews/${review.slug}`,
            en: `/en/reviews/${review.slug}`,
          },
        }
      : {}),
  });
}

export default async function ReviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const review = getReviewBySlug(slug);
  if (!review || !isOperatorAllowedOnSurface(review.casinoId, "reviews")) notFound();

  const casino = getCasinoById(review.casinoId);
  const author = getAuthorById(review.authorId);
  if (!casino || !author) notFound();

  const headlineBonus = getBonusesForCasino(casino.id).find((b) => b.active)?.title;
  const trustNote = review.trustSummary ?? casino.licensing?.notes;
  const outboundLink = isOperatorCtaAllowed(casino.id)
    ? getCasinoOutboundLink(casino, "mx")
    : undefined;

  const breadcrumb = breadcrumbJsonLd([
    { name: "Inicio", path: "/" },
    { name: "Reseñas", path: "/reviews" },
    { name: casino.name, path: `/reviews/${review.slug}` },
  ]);

  const article = articleJsonLd({
    headline: review.title,
    path: `/reviews/${review.slug}`,
    authorName: author.name,
    datePublished: review.publishedAt,
    dateModified: review.updatedAt,
    type: "Article",
  });

  if (review.slug === "vodka-bet") {
    return (
      <>
        <Container className="pt-8 pb-[calc(6.5rem+env(safe-area-inset-bottom))] md:pt-8 md:pb-8">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
          />
          <VodkabetReviewContent review={review} casino={casino} author={author} />
        </Container>
      </>
    );
  }

  return (
    <>
    <Container
      className={cn(
        review.slug === "betsson" ||
          review.slug === "betfury" ||
          review.slug === "500-casino" ||
          review.slug === "rainbet" ||
          review.slug === "gamdom" ||
          review.slug === "1xbet" ||
          review.slug === "melbet" ||
          review.slug === "mellstroy"
          ? "pt-8 pb-[calc(6.5rem+env(safe-area-inset-bottom))] md:pt-8 md:pb-8"
          : "py-8",
      )}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
      />

      <article className={REVIEW_ARTICLE_CLASS}>
        <ReviewHeader review={review} casino={casino} author={author} />

        <ReviewProse className="space-y-3">
          <AffiliateDisclosure />
          <ResponsibleGamblingNotice />
        </ReviewProse>

        {review.slug === "betsson" ? (
          <div id="review-primary-offer">
            <OfferCard
            headingLevel="h2"
            operatorName="Betsson"
            operatorId="betsson"
            badge="Partner aprobado"
            headline="Promoción de casino Betsson MX"
            subheadline="Oferta destacada para usuarios de México"
            offerText="Hasta $15,000 MXN + 200 giros gratis"
            paymentBadges={["Visa", "Mastercard", "OXXO", "SPEI"]}
            featureBullets={[
              "Promoción de bienvenida publicada por Betsson MX",
              "Casino online y apuestas deportivas",
              "Pagos locales como OXXO y SPEI según términos",
              "Revisa requisitos de apuesta, límites y verificación",
            ]}
            primaryCtaLabel="Ver bono Betsson"
            primaryCtaHref={BETSSON_MX_CASINO_WELCOME_URL}
            secondaryCtaLabel="Entrar a Betsson MX"
            secondaryCtaHref={BETSSON_MX_HOME_URL}
            termsNote="Promoción publicada por Betsson MX. Bonos, giros, métodos de pago, verificación y retiros dependen de los términos oficiales del operador y de tu jurisdicción."
            responsibleNote="18+ | Juega con responsabilidad"
            visual={{
              eyebrow: "Oferta publicada por Betsson MX",
              title: "Hasta $15,000 MXN + 200 giros gratis",
              subtitle: "+25 giros extra en la app, según términos",
              chips: ["OXXO", "SPEI", "Visa", "Mastercard"],
              variant: "betsson",
            }}
            visualVariant="fiat"
            mobileMaxBullets={3}
            logo={casino.logo}
          />
          </div>
        ) : null}

        {review.slug === "betfury" ? (
          <div id="review-primary-offer">
            <OfferCard
            headingLevel="h2"
            operatorName="BetFury"
            operatorId="betfury"
            badge="Crypto partner destacado"
            headline="BetFury: Bonus Cabinet y casino crypto"
            subheadline="Free Spins, cashback, rakeback y recompensas por nivel"
            offerText="Hasta 590% + Free Spins según términos oficiales"
            promoCode={BETFURY_PROMO_CODE}
            paymentBadges={["BFG", "Crypto", "Free Spins", "Cashback"]}
            featureBullets={[
              "Bonus Cabinet con depósitos escalonados según términos oficiales",
              "Hasta $10,500 visible en la promoción del operador",
              "Free Fury Wheel, cashback, rakeback y bonos regulares",
              `Código promocional: ${BETFURY_PROMO_CODE}`,
            ]}
            primaryCtaLabel="Ver bonos BetFury"
            primaryCtaHref={BETFURY_AFFILIATE_URL}
            secondaryCtaLabel="Comparar casinos crypto"
            secondaryCtaHref="/casinos-crypto"
            termsNote="Bonos, porcentajes, free spins, cashback, retiros, verificación y disponibilidad dependen de los términos oficiales de BetFury y de tu jurisdicción."
            responsibleNote="18+ | Juega con responsabilidad"
            visual={{
              eyebrow: "Bonus Cabinet",
              title: "Hasta 590% + Free Spins",
              subtitle: "Hasta $10,500 según términos oficiales",
              chips: ["BFG", "Free Spins", "Cashback"],
              variant: "betfury",
              compact: true,
            }}
            visualVariant="crypto"
            mobileMaxBullets={3}
            logo={casino.logo}
          />
          </div>
        ) : null}

        {review.slug === "500-casino" ? (
          <div id="review-primary-offer">
            <OfferCard
            headingLevel="h2"
            operatorName="500 Casino"
            operatorId="500-casino"
            badge="Crypto candidato"
            headline="500 Casino: casino crypto, slots y sportsbook"
            subheadline="Promociones visibles, casino y apuestas según términos oficiales"
            offerText="Promociones, juegos y pagos según términos oficiales"
            paymentBadges={["Crypto", "Slots", "Live", "Sportsbook"]}
            featureBullets={[
              "Casino crypto con slots, live casino y sportsbook",
              "Promociones visibles en el operador según términos oficiales",
              "Interfaz gaming con juegos destacados y categorías múltiples",
              "Revisa pagos, retiros, verificación y disponibilidad regional",
            ]}
            primaryCtaLabel="Visitar 500 Casino"
            primaryCtaHref={FIVEHUNDRED_CASINO_GLOBAL_AFFILIATE_URL}
            secondaryCtaLabel="Comparar casinos crypto"
            secondaryCtaHref="/casinos-crypto"
            termsNote="Promociones, juegos, pagos, retiros, verificación y disponibilidad dependen de los términos oficiales de 500 Casino y de tu jurisdicción."
            responsibleNote="18+ | Juega con responsabilidad"
            visual={{
              eyebrow: "Crypto casino",
              title: "500 Casino",
              subtitle: "Slots, sportsbook y promociones visibles",
              chips: ["Crypto", "Slots", "Live", "Sportsbook"],
              variant: "fivehundred",
            }}
            visualVariant="crypto"
            emphasis="comparison-primary"
            mobileMaxBullets={3}
          />
          </div>
        ) : null}

        {review.slug === "rainbet" ? (
          <div id="review-primary-offer">
            <OfferCard
            headingLevel="h2"
            operatorName="Rainbet"
            operatorId="rainbet"
            badge="Crypto candidato"
            headline="Rainbet: casino crypto, sportsbook y Originals"
            subheadline="Promociones, rewards y pagos crypto según términos oficiales"
            offerText="Wager Lock y No Wager Lock según página oficial de promociones"
            paymentBadges={["BTC", "ETH", "USDT", "SOL", "LTC"]}
            featureBullets={[
              "Casino crypto con miles de juegos y proveedores destacados",
              "Sportsbook y Rainbet Originals en una sola cuenta",
              "Rewards: rakeback, daily, weekly, monthly y rank-up",
              "Revisa promociones, pagos, KYC y disponibilidad regional",
            ]}
            primaryCtaLabel="Visitar Rainbet"
            primaryCtaHref={RAINBET_REFERRAL_URL}
            secondaryCtaLabel="Comparar casinos crypto"
            secondaryCtaHref="/casinos-crypto"
            termsNote="Promociones, recompensas, pagos, retiros, verificación y disponibilidad dependen de los términos oficiales de Rainbet y de tu jurisdicción."
            responsibleNote="18+ | Juega con responsabilidad"
            visual={{
              eyebrow: "Crypto rewards",
              title: "Rewards + Sportsbook",
              subtitle: "Originals, VIP y promos según términos",
              chips: ["Crypto", "Originals", "Sportsbook", "Rewards"],
              variant: "rainbet",
              compact: true,
            }}
            visualVariant="crypto"
            mobileMaxBullets={3}
            logo={{
              src: "/operators/rainbet.png",
              alt: "Rainbet",
              width: 96,
              height: 56,
            }}
          />
          </div>
        ) : null}

        {review.slug === "gamdom" ? (
          <div id="review-primary-offer">
            <GamdomFeaturedCard context="review" />
          </div>
        ) : null}

        {review.slug === "1xbet" ? (
          <div id="review-primary-offer">
            <OneXBetFeaturedCard context="review" />
          </div>
        ) : null}

        {review.slug === "melbet" ? (
          <div id="review-primary-offer">
            <MelbetFeaturedCard context="review" />
          </div>
        ) : null}

        {review.slug === "mellstroy" ? (
          <div id="review-primary-offer">
            <MellstroyFeaturedCard context="review" />
          </div>
        ) : null}

        {review.slug === "betsson" ? (
          <section
            aria-labelledby="betsson-resumen-rapido-heading"
            className="rounded-xl border border-border/60 bg-card p-4 sm:p-5"
          >
            <h2
              id="betsson-resumen-rapido-heading"
              className="text-lg font-semibold text-foreground"
            >
              Resumen rápido de Betsson MX
            </h2>
            <dl className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-white/10 bg-[#111417] p-3">
                <dt className="text-xs font-semibold uppercase tracking-wide text-primary">Bono</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Hasta $15,000 MXN + 200 giros gratis, según términos oficiales
                </dd>
              </div>
              <div className="rounded-lg border border-white/10 bg-[#111417] p-3">
                <dt className="text-xs font-semibold uppercase tracking-wide text-primary">Pagos</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Visa, Mastercard, OXXO y SPEI según disponibilidad
                </dd>
              </div>
              <div className="rounded-lg border border-white/10 bg-[#111417] p-3">
                <dt className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Ideal para
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Usuarios que buscan casino fiat, apuestas y pagos locales
                </dd>
              </div>
              <div className="rounded-lg border border-white/10 bg-[#111417] p-3">
                <dt className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Revisar
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Requisitos de apuesta, límites, verificación y juegos elegibles
                </dd>
              </div>
            </dl>
          </section>
        ) : null}

        {review.slug === "betsson" ? (
          <section
            aria-labelledby="betsson-bonus-condiciones-heading"
            className="rounded-xl border border-border/60 bg-card p-4 sm:p-5"
          >
            <h2
              id="betsson-bonus-condiciones-heading"
              className="text-lg font-semibold text-foreground sm:text-xl"
            >
              Bono y condiciones principales
            </h2>
            <dl className="mt-4 grid gap-2 sm:grid-cols-2">
              {BETSSON_BONUS_CONDITIONS.map((row) => (
                <div
                  key={row.label}
                  className="rounded-lg border border-white/10 bg-[#111417] px-3 py-2.5"
                >
                  <dt className="text-xs font-semibold uppercase tracking-wide text-primary">
                    {row.label}
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{row.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              Los datos reflejan una promoción publicada por Betsson MX y pueden cambiar. Confirma
              siempre la oferta vigente en el sitio del operador antes de depositar.
            </p>
          </section>
        ) : null}

        {review.slug === "betsson" ? (
          <section aria-labelledby="betsson-pagos-retiros-heading">
            <h2
              id="betsson-pagos-retiros-heading"
              className="text-lg font-semibold text-foreground sm:text-xl"
            >
              Pagos y retiros en Betsson MX
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {BETSSON_PAYMENTS_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl border border-border/60 bg-card p-4"
                >
                  <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {review.slug === "betsson" ? (
          <section aria-labelledby="betsson-casino-app-heading">
            <h2
              id="betsson-casino-app-heading"
              className="text-lg font-semibold text-foreground sm:text-xl"
            >
              Casino, apuestas y app
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {BETSSON_PRODUCT_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl border border-border/60 bg-card p-4"
                >
                  <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {review.slug === "betfury" ? (
          <section
            aria-labelledby="betfury-resumen-rapido-heading"
            className="rounded-xl border border-border/60 bg-card p-4 sm:p-5"
          >
            <h2
              id="betfury-resumen-rapido-heading"
              className="text-lg font-semibold text-foreground"
            >
              Resumen rápido de BetFury
            </h2>
            <dl className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-white/10 bg-[#111417] p-3">
                <dt className="text-xs font-semibold uppercase tracking-wide text-primary">Bono</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Hasta 590% + Free Spins según términos oficiales
                </dd>
              </div>
              <div className="rounded-lg border border-white/10 bg-[#111417] p-3">
                <dt className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Código promocional
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {BETFURY_PROMO_CODE}
                </dd>
              </div>
              <div className="rounded-lg border border-white/10 bg-[#111417] p-3">
                <dt className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Ideal para
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Usuarios que buscan casino crypto gamificado y recompensas por nivel
                </dd>
              </div>
              <div className="rounded-lg border border-white/10 bg-[#111417] p-3">
                <dt className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Revisar
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Términos de bonos, límites, verificación y disponibilidad regional
                </dd>
              </div>
            </dl>
          </section>
        ) : null}

        {review.slug === "betfury" ? (
          <section
            aria-labelledby="betfury-bonus-cabinet-heading"
            className="rounded-xl border border-border/60 bg-card p-4 sm:p-5"
          >
            <h2
              id="betfury-bonus-cabinet-heading"
              className="text-lg font-semibold text-foreground sm:text-xl"
            >
              Bonus Cabinet y condiciones principales
            </h2>
            <dl className="mt-4 grid gap-2 sm:grid-cols-2">
              {BETFURY_BONUS_CABINET.map((row) => (
                <div
                  key={row.label}
                  className="rounded-lg border border-white/10 bg-[#111417] px-3 py-2.5"
                >
                  <dt className="text-xs font-semibold uppercase tracking-wide text-primary">
                    {row.label}
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{row.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              Los datos reflejan información visible en BetFury y pueden cambiar. Confirma siempre
              la promoción vigente en el operador antes de depositar.
            </p>
          </section>
        ) : null}

        {review.slug === "betfury" ? (
          <section aria-labelledby="betfury-recompensas-heading">
            <h2
              id="betfury-recompensas-heading"
              className="text-lg font-semibold text-foreground sm:text-xl"
            >
              Recompensas y promociones BetFury
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {BETFURY_REWARDS_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl border border-border/60 bg-card p-4"
                >
                  <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {review.slug === "betfury" ? (
          <section aria-labelledby="betfury-pagos-retiros-heading">
            <h2
              id="betfury-pagos-retiros-heading"
              className="text-lg font-semibold text-foreground sm:text-xl"
            >
              Pagos, retiros y verificación
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {BETFURY_PAYMENTS_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl border border-border/60 bg-card p-4"
                >
                  <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {review.slug === "betfury" ? (
          <section aria-labelledby="betfury-producto-heading">
            <h2
              id="betfury-producto-heading"
              className="text-lg font-semibold text-foreground sm:text-xl"
            >
              Casino, sportsbook y gamificación
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {BETFURY_PRODUCT_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl border border-border/60 bg-card p-4"
                >
                  <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {review.slug === "500-casino" ? (
          <section
            aria-labelledby="500-resumen-rapido-heading"
            className="rounded-xl border border-border/60 bg-card p-4 sm:p-5"
          >
            <h2
              id="500-resumen-rapido-heading"
              className="text-lg font-semibold text-foreground"
            >
              Resumen rápido de 500 Casino
            </h2>
            <dl className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-white/10 bg-[#111417] p-3">
                <dt className="text-xs font-semibold uppercase tracking-wide text-primary">Tipo</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Casino crypto con slots y sportsbook
                </dd>
              </div>
              <div className="rounded-lg border border-white/10 bg-[#111417] p-3">
                <dt className="text-xs font-semibold uppercase tracking-wide text-primary">Promos</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Promociones visibles según términos oficiales
                </dd>
              </div>
              <div className="rounded-lg border border-white/10 bg-[#111417] p-3">
                <dt className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Ideal para
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Usuarios que comparan alternativas crypto frente a BetFury y Gamdom
                </dd>
              </div>
              <div className="rounded-lg border border-white/10 bg-[#111417] p-3">
                <dt className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Revisar
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Bonos, pagos, retiros, KYC y disponibilidad
                </dd>
              </div>
            </dl>
          </section>
        ) : null}

        {review.slug === "500-casino" ? (
          <section aria-labelledby="500-juegos-producto-heading">
            <h2
              id="500-juegos-producto-heading"
              className="text-lg font-semibold text-foreground sm:text-xl"
            >
              Juegos y producto
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {FIVEHUNDRED_PRODUCT_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl border border-border/60 bg-card p-4"
                >
                  <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {review.slug === "500-casino" ? (
          <section aria-labelledby="500-pagos-retiros-heading">
            <h2
              id="500-pagos-retiros-heading"
              className="text-lg font-semibold text-foreground sm:text-xl"
            >
              Pagos y retiros
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {FIVEHUNDRED_PAYMENTS_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl border border-border/60 bg-card p-4"
                >
                  <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {review.slug === "500-casino" ? (
          <section
            aria-labelledby="500-posicion-editorial-heading"
            className="rounded-xl border border-border/60 bg-card p-4 sm:p-5"
          >
            <h2
              id="500-posicion-editorial-heading"
              className="text-lg font-semibold text-foreground sm:text-xl"
            >
              Por qué aparece debajo de BetFury
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              JugadaMax muestra 500 Casino como alternativa crypto, pero BetFury recibe prioridad
              por la campaña activa y la propuesta de Bonus Cabinet. La posición puede cambiar si
              mejoran términos, tracking, ofertas o confirmación de partner.
            </p>
          </section>
        ) : null}

        {review.slug === "rainbet" ? (
          <section
            aria-labelledby="rainbet-resumen-rapido-heading"
            className="rounded-xl border border-border/60 bg-card p-4 sm:p-5"
          >
            <h2
              id="rainbet-resumen-rapido-heading"
              className="text-lg font-semibold text-foreground"
            >
              Resumen rápido de Rainbet
            </h2>
            <dl className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-white/10 bg-[#111417] p-3">
                <dt className="text-xs font-semibold uppercase tracking-wide text-primary">Tipo</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Casino crypto con sportsbook y Rainbet Originals
                </dd>
              </div>
              <div className="rounded-lg border border-white/10 bg-[#111417] p-3">
                <dt className="text-xs font-semibold uppercase tracking-wide text-primary">Promos</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Wager Lock y No Wager Lock según términos oficiales
                </dd>
              </div>
              <div className="rounded-lg border border-white/10 bg-[#111417] p-3">
                <dt className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Ideal para
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Usuarios que priorizan casino crypto, Originals, sportsbook y rewards activos
                </dd>
              </div>
              <div className="rounded-lg border border-white/10 bg-[#111417] p-3">
                <dt className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Revisar
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Bonos, pagos, retiros, KYC, free spins y disponibilidad regional
                </dd>
              </div>
            </dl>
          </section>
        ) : null}

        {review.slug === "rainbet" ? (
          <section
            aria-labelledby="rainbet-promociones-heading"
            className="rounded-xl border border-border/60 bg-card p-4 sm:p-5"
          >
            <h2
              id="rainbet-promociones-heading"
              className="text-lg font-semibold text-foreground sm:text-xl"
            >
              Promociones y condiciones
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Información basada en la página pública de promociones de Rainbet. Verifica siempre
              elegibilidad, requisitos y reglas vigentes antes de depositar.
            </p>
            <dl className="mt-4 divide-y divide-white/10 rounded-lg border border-white/10">
              {RAINBET_PROMO_CONDITIONS.map((row) => (
                <div
                  key={row.label}
                  className="grid gap-1 px-4 py-3 sm:grid-cols-[minmax(0,9rem)_1fr] sm:gap-4"
                >
                  <dt className="text-xs font-semibold uppercase tracking-wide text-primary">
                    {row.label}
                  </dt>
                  <dd className="text-sm leading-relaxed text-muted-foreground">{row.value}</dd>
                </div>
              ))}
            </dl>
          </section>
        ) : null}

        {review.slug === "rainbet" ? (
          <section aria-labelledby="rainbet-recompensas-heading">
            <h2
              id="rainbet-recompensas-heading"
              className="text-lg font-semibold text-foreground sm:text-xl"
            >
              Rewards y VIP
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {RAINBET_REWARDS_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl border border-border/60 bg-card p-4"
                >
                  <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {review.slug === "rainbet" ? (
          <section aria-labelledby="rainbet-pagos-retiros-heading">
            <h2
              id="rainbet-pagos-retiros-heading"
              className="text-lg font-semibold text-foreground sm:text-xl"
            >
              Pagos, retiros y verificación
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {RAINBET_PAYMENTS_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl border border-border/60 bg-card p-4"
                >
                  <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {review.slug === "rainbet" ? (
          <section aria-labelledby="rainbet-producto-heading">
            <h2
              id="rainbet-producto-heading"
              className="text-lg font-semibold text-foreground sm:text-xl"
            >
              Casino, sportsbook y Originals
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {RAINBET_PRODUCT_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl border border-border/60 bg-card p-4"
                >
                  <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {review.slug === "rainbet" ? (
          <section
            aria-labelledby="rainbet-posicion-editorial-heading"
            className="rounded-xl border border-border/60 bg-card p-4 sm:p-5"
          >
            <h2
              id="rainbet-posicion-editorial-heading"
              className="text-lg font-semibold text-foreground sm:text-xl"
            >
              Por qué aparece debajo de BetFury, 500 Casino y Gamdom
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              JugadaMax muestra Rainbet como alternativa crypto sólida para comparar, pero BetFury,
              500 Casino y Gamdom tienen mayor prioridad editorial en el ranking actual. La posición
              puede cambiar si mejoran términos, tracking, ofertas o confirmación de partner.
            </p>
          </section>
        ) : null}

        {review.slug === "1xbet" ? (
          <section
            aria-labelledby="onexbet-resumen-rapido-heading"
            className="rounded-xl border border-border/60 bg-card p-4 sm:p-5"
          >
            <h2
              id="onexbet-resumen-rapido-heading"
              className="text-lg font-semibold text-foreground"
            >
              Resumen rápido de 1xBet
            </h2>
            <dl className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-white/10 bg-[#111417] p-3">
                <dt className="text-xs font-semibold uppercase tracking-wide text-primary">Tipo</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Casino online + sportsbook en una misma cuenta
                </dd>
              </div>
              <div className="rounded-lg border border-white/10 bg-[#111417] p-3">
                <dt className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Oferta casino
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Hasta 40,000 MXN + 150 giros gratis según términos oficiales
                </dd>
              </div>
              <div className="rounded-lg border border-white/10 bg-[#111417] p-3">
                <dt className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Código promocional
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {ONE_XBET_PROMO_CODE}
                </dd>
              </div>
              <div className="rounded-lg border border-white/10 bg-[#111417] p-3">
                <dt className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Revisar
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Wagering, depósitos elegibles, juegos, KYC y jurisdicción
                </dd>
              </div>
            </dl>
          </section>
        ) : null}

        {review.slug === "1xbet" ? (
          <section
            aria-labelledby="onexbet-paquete-casino-heading"
            className="rounded-xl border border-border/60 bg-card p-4 sm:p-5"
          >
            <h2
              id="onexbet-paquete-casino-heading"
              className="text-lg font-semibold text-foreground sm:text-xl"
            >
              Paquete de bienvenida para casino
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              En el registro para México, 1xBet muestra un paquete de bienvenida con titular{" "}
              <strong className="font-semibold text-foreground">
                hasta 40,000 MXN + 150 giros gratis
              </strong>
              . El banner se refiere a depósitos y promociones para nuevos usuarios elegibles.
            </p>
            <dl className="mt-4 grid gap-2 sm:grid-cols-2">
              {ONEXBET_CASINO_PACKAGE.map((row) => (
                <div
                  key={row.label}
                  className="rounded-lg border border-white/10 bg-[#111417] px-3 py-2.5"
                >
                  <dt className="text-xs font-semibold uppercase tracking-wide text-primary">
                    {row.label}
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{row.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              “Hasta” indica un máximo, no una acreditación garantizada en un solo depósito.
              JugadaMax no inventa porcentajes ni número de depósitos: confirma la promoción vigente
              en 1xBet antes de depositar.
            </p>
          </section>
        ) : null}

        {review.slug === "1xbet" ? (
          <section
            aria-labelledby="onexbet-bono-apuestas-heading"
            className="rounded-xl border border-border/60 bg-card p-4 sm:p-5"
          >
            <h2
              id="onexbet-bono-apuestas-heading"
              className="text-lg font-semibold text-foreground sm:text-xl"
            >
              Bono para apuestas
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              El paquete de casino con giros gratis no debe confundirse con el bono deportivo.
              Para apuestas, 1xBet puede mostrar un{" "}
              <strong className="font-semibold text-foreground">
                bono de primer depósito según términos vigentes
              </strong>
              , con reglas de rollover, cuotas mínimas y vigencia propias del sportsbook.
            </p>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              Revisa siempre la sección de promociones deportivas en el operador. JugadaMax no
              mezcla wagering de casino con reglas de apuestas ni garantiza montos deportivos sin
              confirmación oficial.
            </p>
          </section>
        ) : null}

        {review.slug === "1xbet" ? (
          <section
            aria-labelledby="onexbet-registro-heading"
            className="rounded-xl border border-border/60 bg-card p-4 sm:p-5"
          >
            <h2
              id="onexbet-registro-heading"
              className="text-lg font-semibold text-foreground sm:text-xl"
            >
              Cómo registrarse
            </h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
              {ONEXBET_REGISTRATION_STEPS.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <div className="mt-4">
              <a
                href={ONE_XBET_AFFILIATE_URL}
                target="_blank"
                rel="sponsored nofollow noopener noreferrer"
                className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
              >
                Ir a 1xBet con enlace de JugadaMax
              </a>
            </div>
          </section>
        ) : null}

        {review.slug === "1xbet" ? (
          <section aria-labelledby="onexbet-casino-heading">
            <h2
              id="onexbet-casino-heading"
              className="text-lg font-semibold text-foreground sm:text-xl"
            >
              Casino online
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {ONEXBET_CASINO_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl border border-border/60 bg-card p-4"
                >
                  <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {review.slug === "1xbet" ? (
          <section aria-labelledby="onexbet-apuestas-heading">
            <h2
              id="onexbet-apuestas-heading"
              className="text-lg font-semibold text-foreground sm:text-xl"
            >
              Apuestas deportivas
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {ONEXBET_SPORTS_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl border border-border/60 bg-card p-4"
                >
                  <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {review.slug === "1xbet" ? (
          <section aria-labelledby="onexbet-pagos-retiros-heading">
            <h2
              id="onexbet-pagos-retiros-heading"
              className="text-lg font-semibold text-foreground sm:text-xl"
            >
              Pagos, retiros y verificación
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {ONEXBET_PAYMENTS_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl border border-border/60 bg-card p-4"
                >
                  <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {review.slug === "melbet" ? (
          <section
            aria-labelledby="melbet-resumen-rapido-heading"
            className="rounded-xl border border-border/60 bg-card p-4 sm:p-5"
          >
            <h2
              id="melbet-resumen-rapido-heading"
              className="text-lg font-semibold text-foreground"
            >
              Resumen rápido
            </h2>
            <dl className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-white/10 bg-[#111417] p-3">
                <dt className="text-xs font-semibold uppercase tracking-wide text-primary">Tipo</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Sportsbook + casino en una misma cuenta
                </dd>
              </div>
              <div className="rounded-lg border border-white/10 bg-[#111417] p-3">
                <dt className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Bono deportivo
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Hasta MX$17,500 en 4 depósitos según términos oficiales
                </dd>
              </div>
              <div className="rounded-lg border border-white/10 bg-[#111417] p-3">
                <dt className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Código promocional
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {MELBET_PROMO_CODE}
                </dd>
              </div>
              <div className="rounded-lg border border-white/10 bg-[#111417] p-3">
                <dt className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Revisar
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Rollover, cuotas, vigencia, KYC y mercados elegibles
                </dd>
              </div>
            </dl>
          </section>
        ) : null}

        {review.slug === "melbet" ? (
          <section
            aria-labelledby="melbet-bono-depositos-heading"
            className="rounded-xl border border-border/60 bg-card p-4 sm:p-5"
          >
            <h2
              id="melbet-bono-depositos-heading"
              className="text-lg font-semibold text-foreground sm:text-xl"
            >
              Bono deportivo por depósitos
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Paquete deportivo escalonado para nuevos usuarios elegibles. “Hasta” indica un máximo
              repartido en cuatro tramos, sujeto a términos oficiales del operador.
            </p>
            <dl className="mt-4 grid gap-2 sm:grid-cols-2">
              {MELBET_DEPOSIT_STAGES.map((row) => (
                <div
                  key={row.label}
                  className="rounded-lg border border-white/10 bg-[#111417] px-3 py-2.5"
                >
                  <dt className="text-xs font-semibold uppercase tracking-wide text-primary">
                    {row.label}
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{row.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              El primer depósito elegible debe realizarse dentro de los 15 días posteriores al
              registro. Los depósitos segundo, tercero y cuarto deben seguir el timing del operador
              tras cumplir el wagering del bono anterior. Confirma siempre la promoción vigente en
              Melbet.
            </p>
          </section>
        ) : null}

        {review.slug === "melbet" ? (
          <section
            aria-labelledby="melbet-registro-heading"
            className="rounded-xl border border-border/60 bg-card p-4 sm:p-5"
          >
            <h2
              id="melbet-registro-heading"
              className="text-lg font-semibold text-foreground sm:text-xl"
            >
              Cómo solicitar el bono
            </h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
              {MELBET_REGISTRATION_STEPS.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <div className="mt-4 space-y-3">
              <a
                href={MELBET_AFFILIATE_URL}
                target="_blank"
                rel="sponsored nofollow noopener noreferrer"
                className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
              >
                Ir a Melbet con enlace de JugadaMax
              </a>
              <p className="text-xs leading-relaxed text-muted-foreground">
                También puedes comparar operadores en la{" "}
                <a
                  href="/casinos-fiat"
                  className="font-medium text-primary underline underline-offset-2 hover:text-[var(--jm-gold-strong)]"
                >
                  sección de casinos fiat
                </a>{" "}
                de JugadaMax.
              </p>
            </div>
          </section>
        ) : null}

        {review.slug === "melbet" ? (
          <section aria-labelledby="melbet-casino-heading">
            <h2
              id="melbet-casino-heading"
              className="text-lg font-semibold text-foreground sm:text-xl"
            >
              Casino online
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {MELBET_CASINO_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl border border-border/60 bg-card p-4"
                >
                  <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {review.slug === "melbet" ? (
          <section aria-labelledby="melbet-apuestas-heading">
            <h2
              id="melbet-apuestas-heading"
              className="text-lg font-semibold text-foreground sm:text-xl"
            >
              Sportsbook
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {MELBET_SPORTS_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl border border-border/60 bg-card p-4"
                >
                  <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {review.slug === "melbet" ? (
          <section aria-labelledby="melbet-pagos-retiros-heading">
            <h2
              id="melbet-pagos-retiros-heading"
              className="text-lg font-semibold text-foreground sm:text-xl"
            >
              Pagos, retiros y verificación
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {MELBET_PAYMENTS_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl border border-border/60 bg-card p-4"
                >
                  <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {review.slug === "mellstroy" ? (
          <section
            aria-labelledby="mellstroy-resumen-rapido-heading"
            className="rounded-xl border border-border/60 bg-card p-4 sm:p-5"
          >
            <h2
              id="mellstroy-resumen-rapido-heading"
              className="text-lg font-semibold text-foreground"
            >
              Resumen rápido de Mellstroy
            </h2>
            <dl className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-white/10 bg-[#111417] p-3">
                <dt className="text-xs font-semibold uppercase tracking-wide text-primary">Tipo</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Casino crypto con sportsbook adicional
                </dd>
              </div>
              <div className="rounded-lg border border-white/10 bg-[#111417] p-3">
                <dt className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Oferta visible
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Hasta 660% + 400 FS según promoción vigente
                </dd>
              </div>
              <div className="rounded-lg border border-white/10 bg-[#111417] p-3">
                <dt className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Método visible
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">USDT</dd>
              </div>
              <div className="rounded-lg border border-white/10 bg-[#111417] p-3">
                <dt className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Revisar
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Bonos, wagering, licencia, KYC y disponibilidad
                </dd>
              </div>
            </dl>
          </section>
        ) : null}

        {review.slug === "mellstroy" ? (
          <section
            aria-labelledby="mellstroy-bono-heading"
            className="rounded-xl border border-border/60 bg-card p-4 sm:p-5"
          >
            <h2
              id="mellstroy-bono-heading"
              className="text-lg font-semibold text-foreground sm:text-xl"
            >
              Bono de bienvenida
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Comparación basada en creatividades suministradas. Confirma siempre la oferta activa
              durante el registro.
            </p>
            <dl className="mt-4 divide-y divide-white/10 rounded-lg border border-white/10">
              {MELLSTROY_WELCOME_COMPARISON.map((row) => (
                <div
                  key={row.label}
                  className="grid gap-1 px-4 py-3 sm:grid-cols-[minmax(0,11rem)_1fr] sm:gap-4"
                >
                  <dt className="text-xs font-semibold uppercase tracking-wide text-primary">
                    {row.label}
                  </dt>
                  <dd className="text-sm leading-relaxed text-muted-foreground">{row.value}</dd>
                </div>
              ))}
            </dl>
          </section>
        ) : null}

        {review.slug === "mellstroy" ? (
          <section aria-labelledby="mellstroy-promociones-heading">
            <h2
              id="mellstroy-promociones-heading"
              className="text-lg font-semibold text-foreground sm:text-xl"
            >
              Promociones visibles
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {MELLSTROY_PROMO_CARDS.map((card) => (
                <div key={card.title} className="rounded-xl border border-border/60 bg-card p-4">
                  <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {review.slug === "mellstroy" ? (
          <section aria-labelledby="mellstroy-producto-heading">
            <h2
              id="mellstroy-producto-heading"
              className="text-lg font-semibold text-foreground sm:text-xl"
            >
              Casino y producto
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {MELLSTROY_PRODUCT_CARDS.map((card) => (
                <div key={card.title} className="rounded-xl border border-border/60 bg-card p-4">
                  <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {review.slug === "mellstroy" ? (
          <section aria-labelledby="mellstroy-pagos-heading">
            <h2
              id="mellstroy-pagos-heading"
              className="text-lg font-semibold text-foreground sm:text-xl"
            >
              Pagos, retiros y verificación
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {MELLSTROY_PAYMENTS_CARDS.map((card) => (
                <div key={card.title} className="rounded-xl border border-border/60 bg-card p-4">
                  <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {review.slug === "mellstroy" ? (
          <section
            aria-labelledby="mellstroy-posicion-editorial-heading"
            className="rounded-xl border border-border/60 bg-card p-4 sm:p-5"
          >
            <h2
              id="mellstroy-posicion-editorial-heading"
              className="text-lg font-semibold text-foreground sm:text-xl"
            >
              Posición editorial
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Mellstroy tiene un enlace de afiliado activo en JugadaMax, pero se mantiene por debajo
              de BetFury, 500 Casino, Gamdom, Rainbet, Roobet y Stake en el ranking crypto. La
              posición puede cambiar si mejoran términos, tracking, disponibilidad GEO y
              transparencia del operador. La relación comercial no determina por sí sola la
              calificación editorial.
            </p>
          </section>
        ) : null}

        {review.slug === "gamdom" ? (
          <section
            aria-labelledby="gamdom-resumen-rapido-heading"
            className="rounded-xl border border-border/60 bg-card p-4 sm:p-5"
          >
            <h2
              id="gamdom-resumen-rapido-heading"
              className="text-lg font-semibold text-foreground"
            >
              Resumen rápido de Gamdom
            </h2>
            <dl className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-white/10 bg-[#111417] p-3">
                <dt className="text-xs font-semibold uppercase tracking-wide text-primary">Tipo</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Casino crypto con sportsbook, Originals y Rewards
                </dd>
              </div>
              <div className="rounded-lg border border-white/10 bg-[#111417] p-3">
                <dt className="text-xs font-semibold uppercase tracking-wide text-primary">Welcome</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  15% rakeback por 7 días según elegibilidad y términos oficiales
                </dd>
              </div>
              <div className="rounded-lg border border-white/10 bg-[#111417] p-3">
                <dt className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Ideal para
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Usuarios que buscan casino crypto, sportsbook y recompensas activas
                </dd>
              </div>
              <div className="rounded-lg border border-white/10 bg-[#111417] p-3">
                <dt className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Revisar
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Activación desde Rewards, pagos, KYC, retiros y jurisdicción
                </dd>
              </div>
            </dl>
          </section>
        ) : null}

        {review.slug === "gamdom" ? (
          <section aria-labelledby="gamdom-producto-heading">
            <h2
              id="gamdom-producto-heading"
              className="text-lg font-semibold text-foreground sm:text-xl"
            >
              Casino, sportsbook y Originals
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {GAMDOM_PRODUCT_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl border border-border/60 bg-card p-4"
                >
                  <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {review.slug === "gamdom" ? (
          <section aria-labelledby="gamdom-rewards-heading">
            <h2
              id="gamdom-rewards-heading"
              className="text-lg font-semibold text-foreground sm:text-xl"
            >
              Rewards y welcome promotion
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {GAMDOM_REWARDS_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl border border-border/60 bg-card p-4"
                >
                  <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {review.slug === "gamdom" ? (
          <section aria-labelledby="gamdom-pagos-retiros-heading">
            <h2
              id="gamdom-pagos-retiros-heading"
              className="text-lg font-semibold text-foreground sm:text-xl"
            >
              Pagos, retiros y KYC
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {GAMDOM_PAYMENTS_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl border border-border/60 bg-card p-4"
                >
                  <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        <VerdictBox verdict={review.verdict} rating={review.rating} />

        <section aria-label="Puntos a favor y en contra">
          <h2 className="mb-3 text-xl font-semibold text-foreground">Pros y contras</h2>
          <ProsCons pros={review.pros} cons={review.cons} />
        </section>

        {review.slug === "1xbet" ? (
          <ReviewProse as="section" aria-label="Análisis" className="space-y-6">
            <h2 className="text-xl font-semibold text-foreground">Análisis</h2>
            {ONEXBET_ANALYSIS_SECTIONS.map((section) => (
              <div key={section.title} className="space-y-3">
                <h3 className="text-base font-semibold text-foreground sm:text-lg">
                  {section.title}
                </h3>
                <div className="space-y-3">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 48)}
                      className="text-sm leading-relaxed text-muted-foreground sm:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </ReviewProse>
        ) : review.slug === "melbet" ? (
          <ReviewProse as="section" aria-label="Análisis" className="space-y-6">
            <h2 className="text-xl font-semibold text-foreground">Análisis</h2>
            {MELBET_ANALYSIS_SECTIONS.map((section) => (
              <div key={section.title} className="space-y-3">
                <h3 className="text-base font-semibold text-foreground sm:text-lg">
                  {section.title}
                </h3>
                <div className="space-y-3">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 48)}
                      className="text-sm leading-relaxed text-muted-foreground sm:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </ReviewProse>
        ) : review.slug === "mellstroy" ? (
          <ReviewProse as="section" aria-label="Análisis" className="space-y-6">
            <h2 className="text-xl font-semibold text-foreground">Análisis</h2>
            {MELLSTROY_ANALYSIS_SECTIONS.map((section) => (
              <div key={section.title} className="space-y-3">
                <h3 className="text-base font-semibold text-foreground sm:text-lg">
                  {section.title}
                </h3>
                <div className="space-y-3">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 48)}
                      className="text-sm leading-relaxed text-muted-foreground sm:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </ReviewProse>
        ) : (
          <ReviewProse as="section" aria-label="Análisis" className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">Análisis</h2>
            <div className="space-y-4">
              {review.body
                .split(/\n\s*\n/)
                .filter((paragraph) => paragraph.trim().length > 0)
                .map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-sm leading-relaxed text-muted-foreground sm:text-base"
                  >
                    {paragraph.trim()}
                  </p>
                ))}
            </div>
          </ReviewProse>
        )}

        {review.slug === "betsson" ? (
          <section
            aria-labelledby="betsson-post-analisis-cta-heading"
            className="rounded-xl border border-primary/25 bg-gradient-to-br from-primary/8 via-card to-[#0A1931] p-4 sm:p-5"
          >
            <h2
              id="betsson-post-analisis-cta-heading"
              className="text-lg font-semibold text-foreground"
            >
              Revisar promoción actual de Betsson MX
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Antes de registrarte, confirma el bono vigente, requisitos de apuesta, métodos de
              pago y verificación directamente en Betsson MX.
            </p>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <a
                href={BETSSON_MX_CASINO_WELCOME_URL}
                target="_blank"
                rel={AFFILIATE_REL}
                className={cn(
                  "inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold",
                  "bg-primary text-primary-foreground transition-colors hover:bg-[var(--jm-gold-strong)]",
                  focusRing,
                )}
              >
                Ver bono Betsson
              </a>
              <a
                href={BETSSON_MX_HOME_URL}
                target="_blank"
                rel={AFFILIATE_REL}
                className={cn(
                  "inline-flex min-h-11 items-center justify-center rounded-md border border-primary/40 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/10",
                  focusRing,
                )}
              >
                Entrar a Betsson MX
              </a>
            </div>
          </section>
        ) : null}

        {review.slug === "betfury" ? (
          <section
            aria-labelledby="betfury-post-analisis-cta-heading"
            className="rounded-xl border border-fuchsia-500/20 bg-gradient-to-br from-fuchsia-500/8 via-card to-[#0A1931] p-4 sm:p-5"
          >
            <h2
              id="betfury-post-analisis-cta-heading"
              className="text-lg font-semibold text-foreground"
            >
              Revisar bonos actuales de BetFury
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Antes de registrarte, confirma Bonus Cabinet, código, free spins, requisitos de
              apuesta, métodos de pago y verificación directamente en BetFury.
            </p>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <a
                href={BETFURY_AFFILIATE_URL}
                target="_blank"
                rel={AFFILIATE_REL}
                className={cn(
                  "inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold",
                  "bg-primary text-primary-foreground transition-colors hover:bg-[var(--jm-gold-strong)]",
                  focusRing,
                )}
              >
                Ver bonos BetFury
              </a>
              <a
                href="/casinos-crypto"
                className={cn(
                  "inline-flex min-h-11 items-center justify-center rounded-md border border-primary/40 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/10",
                  focusRing,
                )}
              >
                Comparar casinos crypto
              </a>
            </div>
          </section>
        ) : null}

        {review.slug === "500-casino" ? (
          <section
            aria-labelledby="500-post-analisis-cta-heading"
            className="rounded-xl border border-pink-500/20 bg-gradient-to-br from-pink-500/8 via-card to-[#0A1931] p-4 sm:p-5"
          >
            <h2
              id="500-post-analisis-cta-heading"
              className="text-lg font-semibold text-foreground"
            >
              Revisar 500 Casino
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Antes de registrarte, confirma promociones vigentes, métodos de pago, verificación y
              reglas de retiro directamente en 500 Casino.
            </p>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <a
                href={FIVEHUNDRED_CASINO_GLOBAL_AFFILIATE_URL}
                target="_blank"
                rel={AFFILIATE_REL}
                className={cn(
                  "inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold",
                  "bg-primary text-primary-foreground transition-colors hover:bg-[var(--jm-gold-strong)]",
                  focusRing,
                )}
              >
                Visitar 500 Casino
              </a>
              <a
                href="/casinos-crypto"
                className={cn(
                  "inline-flex min-h-11 items-center justify-center rounded-md border border-primary/40 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/10",
                  focusRing,
                )}
              >
                Volver al ranking crypto
              </a>
            </div>
          </section>
        ) : null}

        {review.slug === "rainbet" ? (
          <section
            aria-labelledby="rainbet-post-analisis-cta-heading"
            className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 via-card to-[#0A1931] p-4 sm:p-5"
          >
            <h2
              id="rainbet-post-analisis-cta-heading"
              className="text-lg font-semibold text-foreground"
            >
              Revisar Rainbet
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Antes de registrarte, confirma promociones vigentes, rewards, métodos de pago,
              verificación y reglas de retiro directamente en Rainbet.
            </p>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <a
                href={RAINBET_REFERRAL_URL}
                target="_blank"
                rel={AFFILIATE_REL}
                className={cn(
                  "inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold",
                  "bg-primary text-primary-foreground transition-colors hover:bg-[var(--jm-gold-strong)]",
                  focusRing,
                )}
              >
                Visitar Rainbet
              </a>
              <a
                href="/casinos-crypto"
                className={cn(
                  "inline-flex min-h-11 items-center justify-center rounded-md border border-primary/40 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/10",
                  focusRing,
                )}
              >
                Volver al ranking crypto
              </a>
            </div>
          </section>
        ) : null}

        {review.slug === "gamdom" ? (
          <section
            aria-labelledby="gamdom-post-analisis-cta-heading"
            className="rounded-xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/8 via-card to-[#061019] p-4 sm:p-5"
          >
            <h2
              id="gamdom-post-analisis-cta-heading"
              className="text-lg font-semibold text-foreground"
            >
              Revisar Gamdom
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Antes de registrarte, confirma la welcome offer vigente, activación desde Rewards,
              pagos, verificación y reglas de retiro directamente en Gamdom.
            </p>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <a
                href={GAMDOM_GLOBAL_AFFILIATE_URL}
                target="_blank"
                rel={AFFILIATE_REL}
                className={cn(
                  "inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold",
                  "bg-[#00F58A] text-[#061019] transition-colors hover:bg-[#14E887]",
                  focusRing,
                )}
              >
                Visitar Gamdom
              </a>
              <a
                href="/casinos-crypto"
                className={cn(
                  "inline-flex min-h-11 items-center justify-center rounded-md border border-emerald-400/35 px-5 py-2.5 text-sm font-semibold text-emerald-200 transition-colors hover:bg-emerald-500/10",
                  focusRing,
                )}
              >
                Volver al ranking crypto
              </a>
            </div>
          </section>
        ) : null}

        {review.slug === "mellstroy" ? (
          <section
            aria-labelledby="mellstroy-post-analisis-cta-heading"
            className="rounded-xl border border-violet-500/20 bg-gradient-to-br from-violet-500/8 via-card to-[#1a0a24] p-4 sm:p-5"
          >
            <h2
              id="mellstroy-post-analisis-cta-heading"
              className="text-lg font-semibold text-foreground"
            >
              Revisar Mellstroy
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Antes de registrarte, confirma la promoción activa, porcentajes, free spins, pagos,
              verificación y reglas de retiro directamente en Mellstroy.
            </p>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <a
                href={MELLSTROY_GLOBAL_AFFILIATE_URL}
                target="_blank"
                rel={AFFILIATE_REL}
                className={cn(
                  "inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold",
                  "bg-primary text-primary-foreground transition-colors hover:bg-[var(--jm-gold-strong)]",
                  focusRing,
                )}
              >
                Ver oferta Mellstroy
              </a>
              <a
                href="/casinos-crypto"
                className={cn(
                  "inline-flex min-h-11 items-center justify-center rounded-md border border-primary/40 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/10",
                  focusRing,
                )}
              >
                Volver al ranking crypto
              </a>
            </div>
          </section>
        ) : null}

        {review.slug === "betsson" ? (
          <section aria-labelledby="betsson-faq-heading">
            <h2 id="betsson-faq-heading" className="text-lg font-semibold text-foreground sm:text-xl">
              Preguntas frecuentes sobre Betsson MX
            </h2>
            <div className="mt-4 divide-y divide-white/10 rounded-xl border border-border/60 bg-card">
              {BETSSON_FAQ.map((item) => (
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
        ) : null}

        {review.slug === "betfury" ? (
          <section aria-labelledby="betfury-faq-heading">
            <h2 id="betfury-faq-heading" className="text-lg font-semibold text-foreground sm:text-xl">
              Preguntas frecuentes sobre BetFury
            </h2>
            <div className="mt-4 divide-y divide-white/10 rounded-xl border border-border/60 bg-card">
              {BETFURY_FAQ.map((item) => (
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
        ) : null}

        {review.slug === "500-casino" ? (
          <section aria-labelledby="500-faq-heading">
            <h2 id="500-faq-heading" className="text-lg font-semibold text-foreground sm:text-xl">
              Preguntas frecuentes sobre 500 Casino
            </h2>
            <div className="mt-4 divide-y divide-white/10 rounded-xl border border-border/60 bg-card">
              {FIVEHUNDRED_FAQ.map((item) => (
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
        ) : null}

        {review.slug === "rainbet" ? (
          <section aria-labelledby="rainbet-faq-heading">
            <h2 id="rainbet-faq-heading" className="text-lg font-semibold text-foreground sm:text-xl">
              Preguntas frecuentes sobre Rainbet
            </h2>
            <div className="mt-4 divide-y divide-white/10 rounded-xl border border-border/60 bg-card">
              {RAINBET_FAQ.map((item) => (
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
        ) : null}

        {review.slug === "gamdom" ? (
          <section aria-labelledby="gamdom-faq-heading">
            <h2 id="gamdom-faq-heading" className="text-lg font-semibold text-foreground sm:text-xl">
              Preguntas frecuentes sobre Gamdom
            </h2>
            <div className="mt-4 divide-y divide-white/10 rounded-xl border border-border/60 bg-card">
              {GAMDOM_FAQ.map((item) => (
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
        ) : null}

        {review.slug === "1xbet" ? (
          <section aria-labelledby="onexbet-faq-heading">
            <h2 id="onexbet-faq-heading" className="text-lg font-semibold text-foreground sm:text-xl">
              Preguntas frecuentes sobre 1xBet
            </h2>
            <div className="mt-4 divide-y divide-white/10 rounded-xl border border-border/60 bg-card">
              {ONEXBET_FAQ.map((item) => (
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
        ) : null}

        {review.slug === "melbet" ? (
          <section aria-labelledby="melbet-faq-heading">
            <h2 id="melbet-faq-heading" className="text-lg font-semibold text-foreground sm:text-xl">
              Preguntas frecuentes sobre Melbet
            </h2>
            <div className="mt-4 divide-y divide-white/10 rounded-xl border border-border/60 bg-card">
              {MELBET_FAQ.map((item) => (
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
        ) : null}

        {review.slug === "mellstroy" ? (
          <section aria-labelledby="mellstroy-faq-heading">
            <h2 id="mellstroy-faq-heading" className="text-lg font-semibold text-foreground sm:text-xl">
              Preguntas frecuentes sobre Mellstroy
            </h2>
            <div className="mt-4 divide-y divide-white/10 rounded-xl border border-border/60 bg-card">
              {MELLSTROY_FAQ.map((item) => (
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
        ) : null}

        {review.relatedLinks &&
        isOperatorCtaAllowed(casino.id) &&
        review.relatedLinks.length > 0 ? (
          <section
            aria-label="Enlaces relacionados"
            className="rounded-lg border border-border/60 bg-card p-4 sm:p-5"
          >
            <h2 className="text-lg font-semibold text-foreground">Enlaces relacionados</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Recursos externos relacionados con {casino.name} y su ecosistema. JugadaMax recomienda
              revisar siempre términos, disponibilidad regional y políticas del operador antes de
              registrarte.
            </p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {review.relatedLinks.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="flex min-h-11 items-start gap-3 rounded-xl border border-white/10 bg-[#111417] p-3 transition-colors hover:border-primary/30"
                >
                  <RelatedLinkBadge kind={link.kind} label={link.label} />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold leading-snug text-foreground">{link.label}</p>
                    {link.subtitle ? (
                      <p className="mt-0.5 text-xs text-muted-foreground">{link.subtitle}</p>
                    ) : null}
                  </div>
                </a>
              ))}
            </div>
          </section>
        ) : null}

        {review.slug === "stake" ? <StakeHighRollerSection /> : null}

        {headlineBonus &&
        review.slug !== "betsson" &&
        review.slug !== "betfury" &&
        review.slug !== "500-casino" &&
        review.slug !== "rainbet" &&
        review.slug !== "gamdom" &&
        review.slug !== "1xbet" &&
        review.slug !== "melbet" &&
        review.slug !== "mellstroy" ? (
          <section aria-label="Bono" className="rounded-lg border border-border/60 bg-card p-4">
            <h2 className="mb-1 text-lg font-semibold text-foreground">Bono</h2>
            <p className="text-sm text-muted-foreground">{headlineBonus}</p>
          </section>
        ) : null}

        <section
          aria-label="Pagos y licencia"
          className="grid gap-4 sm:grid-cols-2"
        >
          <div className="rounded-lg border border-border/60 bg-card p-4">
            <h2 className="mb-2 text-lg font-semibold text-foreground">Pagos</h2>
            <PaymentBadges payments={casino.payments} />
            {review.paymentsSummary ? (
              <p className="mt-2 text-sm text-muted-foreground">{review.paymentsSummary}</p>
            ) : null}
          </div>
          <div className="rounded-lg border border-border/60 bg-card p-4">
            <h2 className="mb-2 text-lg font-semibold text-foreground">Licencia y confianza</h2>
            <LicenseInfo licensing={casino.licensing} />
            {trustNote ? (
              <p className="mt-2 text-sm text-muted-foreground">{trustNote}</p>
            ) : null}
          </div>
        </section>

        {outboundLink &&
        review.slug !== "betsson" &&
        review.slug !== "betfury" &&
        review.slug !== "500-casino" &&
        review.slug !== "rainbet" &&
        review.slug !== "gamdom" &&
        review.slug !== "1xbet" &&
        review.slug !== "melbet" &&
        review.slug !== "mellstroy" ? (
          <div className="flex flex-wrap gap-3 border-t border-border/60 pt-6">
            <OperatorCta link={outboundLink} />
          </div>
        ) : null}
      </article>
    </Container>
    {review.slug === "betsson" ? (
      <MobileStickyOfferCta
        showAfterId="review-primary-offer"
        compactPrimaryLabel="Ver bono"
        compactSecondaryLabel="Entrar"
        primaryLabel="Ver bono Betsson"
        primaryHref={BETSSON_MX_CASINO_WELCOME_URL}
        secondaryLabel="Entrar a Betsson MX"
        secondaryHref={BETSSON_MX_HOME_URL}
      />
    ) : null}
    {review.slug === "betfury" ? (
      <MobileStickyOfferCta
        showAfterId="review-primary-offer"
        compactPrimaryLabel="Ver bonos"
        compactSecondaryLabel="Comparar"
        primaryLabel="Ver bonos BetFury"
        primaryHref={BETFURY_AFFILIATE_URL}
        secondaryLabel="Comparar casinos crypto"
        secondaryHref="/casinos-crypto"
      />
    ) : null}
    {review.slug === "500-casino" ? (
      <MobileStickyOfferCta
        showAfterId="review-primary-offer"
        compactPrimaryLabel="Visitar"
        compactSecondaryLabel="Comparar"
        primaryLabel="Visitar 500 Casino"
        primaryHref={FIVEHUNDRED_CASINO_GLOBAL_AFFILIATE_URL}
        secondaryLabel="Ranking crypto"
        secondaryHref="/casinos-crypto"
      />
    ) : null}
    {review.slug === "rainbet" ? (
      <MobileStickyOfferCta
        showAfterId="review-primary-offer"
        compactPrimaryLabel="Visitar"
        compactSecondaryLabel="Comparar"
        primaryLabel="Visitar Rainbet"
        primaryHref={RAINBET_REFERRAL_URL}
        secondaryLabel="Ranking crypto"
        secondaryHref="/casinos-crypto"
      />
    ) : null}
    {review.slug === "gamdom" ? (
      <MobileStickyOfferCta
        showAfterId="review-primary-offer"
        compactPrimaryLabel="Visitar"
        compactSecondaryLabel="Comparar"
        primaryLabel="Visitar Gamdom"
        primaryHref={GAMDOM_GLOBAL_AFFILIATE_URL}
        secondaryLabel="Ranking crypto"
        secondaryHref="/casinos-crypto"
      />
    ) : null}
    {review.slug === "1xbet" ? (
      <MobileStickyOfferCta
        showAfterId="review-primary-offer"
        compactPrimaryLabel="Ver oferta"
        compactSecondaryLabel="Apuestas"
        primaryLabel="Ver paquete 1xBet"
        primaryHref={ONE_XBET_AFFILIATE_URL}
        secondaryLabel="Ver apuestas deportivas"
        secondaryHref="/apuestas"
      />
    ) : null}
    {review.slug === "melbet" ? (
      <MobileStickyOfferCta
        showAfterId="review-primary-offer"
        compactPrimaryLabel="Ver bono"
        compactSecondaryLabel="Apuestas"
        primaryLabel="Ver bono Melbet"
        primaryHref={MELBET_AFFILIATE_URL}
        secondaryLabel="Ver apuestas deportivas"
        secondaryHref="/apuestas"
      />
    ) : null}
    {review.slug === "mellstroy" ? (
      <MobileStickyOfferCta
        showAfterId="review-primary-offer"
        compactPrimaryLabel="Ver oferta"
        compactSecondaryLabel="Comparar"
        primaryLabel="Ver oferta Mellstroy"
        primaryHref={MELLSTROY_GLOBAL_AFFILIATE_URL}
        secondaryLabel="Comparar casinos crypto"
        secondaryHref="/casinos-crypto"
      />
    ) : null}
    </>
  );
}

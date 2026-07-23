/**
 * Partners / Media Kit V2 — bilingual copy and static structure.
 * Contact and social URLs are imported from existing central sources — not redefined.
 */

import {
  ARTURS_STOLIKS_LINKEDIN_URL,
  JUGADAMAX_COMPANY_LINKEDIN_URL,
} from "@/lib/site";
import { OFFICIAL_SOCIAL_LINKS } from "@/components/social/social-links-data";

export type PartnersLocale = "es" | "en";

export type ChannelStatus = "active" | "launching" | "building";

function socialUrl(kind: string): string {
  const item = OFFICIAL_SOCIAL_LINKS.find((link) => link.kind === kind);
  if (!item) {
    throw new Error(`[partners] missing official social link: ${kind}`);
  }
  return item.url;
}

function socialLabel(kind: string): string {
  const item = OFFICIAL_SOCIAL_LINKS.find((link) => link.kind === kind);
  if (!item) {
    throw new Error(`[partners] missing official social link: ${kind}`);
  }
  return item.label;
}

export const PARTNERS_CONTACT = {
  emailDisplay: socialUrl("email").replace(/^mailto:/, ""),
  emailHref: socialUrl("email"),
  telegramHref: socialUrl("telegram"),
  telegramHandle: "@jugadamax",
  linkedInHref: socialUrl("linkedin"),
  linkedInLabel: socialLabel("linkedin"),
  founderLinkedInHref: ARTURS_STOLIKS_LINKEDIN_URL,
  companyLinkedInHref: JUGADAMAX_COMPANY_LINKEDIN_URL,
} as const;

export type PartnersCopy = {
  heroEyebrow: string;
  heroTitle: string;
  heroBody: string;
  heroPrimaryCta: string;
  heroSecondaryCta: string;
  heroPrimaryHref: string;
  heroSecondaryHref: string;
  contactSectionId: string;
  heroAsideTitle: string;
  heroAsideItems: readonly string[];
  trustBadge: string;
  trustBody: string;
  snapshotTitle: string;
  snapshotBody: string;
  snapshotReviews: string;
  snapshotGuides: string;
  snapshotNews: string;
  snapshotLocales: string;
  snapshotNote: string;
  formatsTitle: string;
  formatsBody: string;
  formats: readonly { title: string; body: string }[];
  audienceTitle: string;
  audienceBody: string;
  audiences: readonly { title: string; body: string }[];
  channelsTitle: string;
  channelsBody: string;
  channels: readonly {
    label: string;
    detail: string;
    status: ChannelStatus;
    href?: string;
  }[];
  statusActive: string;
  statusLaunching: string;
  statusBuilding: string;
  coverageCta: string;
  contactEmailAction: string;
  contactTelegramAction: string;
  contactLinkedInAction: string;
  contactPageAction: string;
  collabTitle: string;
  collabBody: string;
  collab: readonly { title: string; body: string }[];
  requirementsTitle: string;
  requirementsBody: string;
  requirements: readonly string[];
  standardsTitle: string;
  standardsBody: string;
  editorialStandards: readonly string[];
  trafficStandards: readonly string[];
  editorialHeading: string;
  trafficHeading: string;
  coverageTitle: string;
  coverageBody: string;
  identityTitle: string;
  identityBody: string;
  contactTitle: string;
  contactBody: string;
  contactEmailLabel: string;
  contactTelegramLabel: string;
  contactPageCta: string;
  contactPageHref: string;
  methodologyLabel: string;
  methodologyHref: string;
  disclosureLabel: string;
  disclosureHref: string;
  profileCta: string;
  linkedInCta: string;
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  homeHref: string;
};

export const PARTNERS_COPY: Record<PartnersLocale, PartnersCopy> = {
  es: {
    heroEyebrow: "Media Kit · B2B · Editorial independiente",
    heroTitle: "JugadaMax Media Kit para operadores y socios de iGaming",
    heroBody:
      "Información clara para managers, operadores y socios: qué publicamos, qué mercados cubrimos, qué canales existen, qué formatos de colaboración podemos discutir y qué estándares editoriales aplicamos en México y LATAM.",
    heroPrimaryCta: "Contactar",
    heroSecondaryCta: "Ver cobertura",
    heroPrimaryHref: "#contacto-socios",
    heroSecondaryHref: "#ejemplos-cobertura",
    contactSectionId: "contacto-socios",
    heroAsideTitle: "Para quién es esta página",
    heroAsideItems: [
      "Managers de afiliados",
      "Operadores de casino y apuestas",
      "Proveedores de pago",
      "Medios y RG",
    ],
    trustBadge: "Independencia editorial",
    trustBody:
      "JugadaMax no opera casinos ni procesa apuestas, depósitos o retiros. Una propuesta comercial no garantiza cobertura positiva. Evaluamos cada solicitud de forma individual.",
    snapshotTitle: "Instantánea del proyecto",
    snapshotBody:
      "Conteos de la biblioteca editorial calculados desde el contenido central. No son métricas de audiencia ni de rendimiento.",
    snapshotReviews: "reseñas publicadas",
    snapshotGuides: "guías",
    snapshotNews: "publicaciones",
    snapshotLocales: "idiomas",
    snapshotNote:
      "Los números reflejan el catálogo editorial actual, no usuarios, conversiones ni ingresos.",
    formatsTitle: "Qué publica JugadaMax",
    formatsBody:
      "Formatos editoriales disponibles en el sitio. No prometemos volumen de campañas ni resultados comerciales.",
    formats: [
      {
        title: "Reseñas de operadores",
        body: "Evaluaciones con pros, contras, pagos, confianza y calificación editorial atribuida.",
      },
      {
        title: "Guías educativas",
        body: "Contenido evergreen sobre crypto, pagos, KYC, seguridad y comparación de operadores.",
      },
      {
        title: "Noticias y análisis",
        body: "Actualidad, regulación, cambios de bonos y comentario editorial con fuentes cuando aplican.",
      },
      {
        title: "Rankings y verticales",
        body: "Páginas de casinos crypto, fiat, sin KYC, apuestas y directorio de bonos activos.",
      },
      {
        title: "Juego responsable",
        body: "Avisos +18, divulgación de afiliados y recursos de juego responsable en páginas relevantes.",
      },
      {
        title: "Cobertura EN / global",
        body: "Selección de páginas en inglés bajo /en para managers y lectores internacionales.",
      },
    ],
    audienceTitle: "Audiencia y mercados",
    audienceBody:
      "Posicionamiento editorial. No publicamos demografía inventada ni volúmenes de tráfico.",
    audiences: [
      {
        title: "México primero",
        body: "Contenido en español (es-MX) orientado a jugadores adultos en México.",
      },
      {
        title: "LATAM hispanohablante",
        body: "Expansión editorial hacia lectores de habla hispana en la región, con matices locales.",
      },
      {
        title: "Audiencia EN / global",
        body: "Páginas en inglés para operadores y lectores internacionales interesados en crypto y casinos online.",
      },
      {
        title: "Solo +18",
        body: "Todo el contenido está pensado para mayores de edad. No dirigimos mensajes a menores.",
      },
    ],
    channelsTitle: "Canales de distribución",
    channelsBody:
      "Canales oficiales existentes. Distinguimos presencia activa de canales en construcción. Sin cifras de seguidores inventadas.",
    channels: [
      {
        label: "Sitio / SEO",
        detail: "Guías, reseñas, noticias y verticales en jugadamax.com",
        status: "active",
        href: "/",
      },
      {
        label: "Email editorial",
        detail: "Contacto B2B y correcciones",
        status: "active",
        href: socialUrl("email"),
      },
      {
        label: "Telegram",
        detail: "Canal oficial de novedades",
        status: "launching",
        href: socialUrl("telegram"),
      },
      {
        label: "LinkedIn",
        detail: "Identidad de empresa y distribución B2B",
        status: "launching",
        href: socialUrl("linkedin"),
      },
      {
        label: "TikTok",
        detail: "Contenido social en formato corto",
        status: "building",
        href: socialUrl("tiktok"),
      },
      {
        label: "Instagram",
        detail: "Actualizaciones visuales",
        status: "building",
        href: socialUrl("instagram"),
      },
      {
        label: "YouTube",
        detail: "Guías y explicaciones en video",
        status: "building",
        href: socialUrl("youtube"),
      },
    ],
    statusActive: "Activo",
    statusLaunching: "En lanzamiento",
    statusBuilding: "En desarrollo",
    coverageCta: "Ver ejemplo",
    contactEmailAction: "Enviar email",
    contactTelegramAction: "Abrir Telegram",
    contactLinkedInAction: "LinkedIn JugadaMax",
    contactPageAction: "Ir a contacto",
    collabTitle: "Formatos de colaboración",
    collabBody:
      "Podemos discutir estas vías. Ninguna solicitud implica aceptación automática ni cobertura favorable garantizada.",
    collab: [
      {
        title: "Afiliación y tracking",
        body: "Enlaces de afiliado con atributos sponsored/nofollow cuando corresponda, tras evaluación individual.",
      },
      {
        title: "Reseña editorial",
        body: "Análisis con pros y contras. El pago comercial no compra una calificación inventada.",
      },
      {
        title: "Guías y educación",
        body: "Contenido evergreen sobre pagos, crypto, KYC o producto, con atribución clara.",
      },
      {
        title: "Bonos y actualizaciones",
        body: "Cobertura de promociones verificables sin urgencia fabricada ni cifras inventadas.",
      },
      {
        title: "Campañas de juego responsable",
        body: "Colaboraciones +18 con organizaciones o mensajes de prevención, sin glamourizar el riesgo.",
      },
      {
        title: "Contenido para medios",
        body: "Briefings, citas editoriales o material de prensa alineado con nuestros estándares.",
      },
    ],
    requirementsTitle: "Qué debe aportar un socio",
    requirementsBody:
      "Para evaluar una propuesta con rigor, necesitamos información verificable. La lista no garantiza respuesta positiva.",
    requirements: [
      "Nombre del operador o marca y mercados objetivo (México / LATAM / global)",
      "URL oficial y materiales de producto actualizados",
      "Licencias o permisos informados por el operador (si existen)",
      "Métodos de pago relevantes y limitaciones geográficas",
      "Términos de bonos o promociones que se deseen comunicar",
      "Enlaces de afiliado o landings, si la conversación es comercial",
      "Contacto de manager y plazos realistas",
      "Cualquier restricción legal o de marca que debamos respetar",
    ],
    standardsTitle: "Independencia editorial y estándares de tráfico",
    standardsBody:
      "Estos criterios aplican a colaboraciones y a la distribución de contenido. No negociamos excepciones que rompan la integridad editorial.",
    editorialStandards: [
      "No operamos casinos ni procesamos apuestas o pagos",
      "No fabricamos reseñas, capturas de retiros ni testimonios",
      "No garantizamos ganancias, retiros ni resultados",
      "El pago comercial no garantiza cobertura positiva",
      "Divulgamos afiliación cuando hay enlaces comerciales",
      "Podemos rechazar propuestas incompatibles con nuestros estándares",
    ],
    trafficStandards: [
      "Solo audiencias mayores de 18 años",
      "Mensajes de juego responsable en páginas relevantes",
      "Sin bots, spam ni tráfico incentivado",
      "Sin targeting de jurisdicciones prohibidas",
      "Sin mensajes de VPN o evasión de restricciones",
      "Sin promesas engañosas de bonos o dinero fácil",
    ],
    editorialHeading: "Estándares editoriales",
    trafficHeading: "Estándares de tráfico",
    coverageTitle: "Ejemplos reales de cobertura",
    coverageBody:
      "Enlaces internos a contenido ya publicado. No son case studies con métricas de campaña.",
    identityTitle: "Identidad editorial",
    identityBody:
      "Fundador y equipo editorial con perfiles internos. LinkedIn es canal de identidad, no fuente factual de operadores.",
    contactTitle: "Contacto para propuestas",
    contactBody:
      "Escríbenos con el material de la lista anterior. Revisamos propuestas de forma editorial; no prometemos plazos de respuesta ni aceptación.",
    contactEmailLabel: "Email",
    contactTelegramLabel: "Telegram",
    contactPageCta: "Ir a contacto",
    contactPageHref: "/contacto",
    methodologyLabel: "Cómo evaluamos",
    methodologyHref: "/como-evaluamos",
    disclosureLabel: "Divulgación de afiliados",
    disclosureHref: "/divulgacion-afiliados",
    profileCta: "Ver perfil",
    linkedInCta: "LinkedIn",
    breadcrumbHome: "Inicio",
    breadcrumbCurrent: "Socios / Media Kit",
    homeHref: "/",
  },
  en: {
    heroEyebrow: "Media Kit · B2B · Independent editorial",
    heroTitle: "JugadaMax Media Kit for operators and iGaming partners",
    heroBody:
      "Clear information for affiliate managers, operators and partners: what we publish, which markets we cover, which channels exist, which collaboration formats we can discuss, and which editorial standards apply for Mexico, Spanish-speaking LATAM and selected English/global audiences.",
    heroPrimaryCta: "Contact us",
    heroSecondaryCta: "View our coverage",
    heroPrimaryHref: "#partner-contact",
    heroSecondaryHref: "#ejemplos-cobertura",
    contactSectionId: "partner-contact",
    heroAsideTitle: "Who this page is for",
    heroAsideItems: [
      "Affiliate managers",
      "Casino & sportsbook operators",
      "Payment providers",
      "Media & RG partners",
    ],
    trustBadge: "Editorial independence",
    trustBody:
      "JugadaMax does not operate casinos or process bets, deposits or withdrawals. A commercial proposal does not guarantee positive coverage. Every request is reviewed individually.",
    snapshotTitle: "Project snapshot",
    snapshotBody:
      "Editorial-library counts calculated from central content. These are not audience or performance metrics.",
    snapshotReviews: "published reviews",
    snapshotGuides: "guides",
    snapshotNews: "news posts",
    snapshotLocales: "languages",
    snapshotNote:
      "Figures reflect the current editorial catalogue only — not users, conversions or revenue.",
    formatsTitle: "What JugadaMax publishes",
    formatsBody:
      "Editorial formats available on the site. We do not promise campaign volume or commercial results.",
    formats: [
      {
        title: "Operator reviews",
        body: "Assessments with pros, cons, payments, trust notes and attributed editorial ratings.",
      },
      {
        title: "Educational guides",
        body: "Evergreen explainers on crypto, payments, KYC, safety and operator comparison.",
      },
      {
        title: "News and analysis",
        body: "Regulation, bonus changes and editorial commentary with sources when applicable.",
      },
      {
        title: "Rankings and verticals",
        body: "Crypto, fiat, no-KYC, sports betting and active-bonus directory pages.",
      },
      {
        title: "Responsible gambling",
        body: "18+ notices, affiliate disclosure and RG resources on relevant pages.",
      },
      {
        title: "English / global coverage",
        body: "Selected English pages under /en for international managers and readers.",
      },
    ],
    audienceTitle: "Audience and markets",
    audienceBody:
      "Editorial positioning only. We do not publish invented demographics or traffic volumes.",
    audiences: [
      {
        title: "Mexico first",
        body: "Spanish (es-MX) content for adult players researching operators in Mexico.",
      },
      {
        title: "Spanish-speaking LATAM",
        body: "Regional Spanish readers, with local caveats where conditions differ.",
      },
      {
        title: "English / global",
        body: "International pages for operators and readers interested in crypto and online casinos.",
      },
      {
        title: "18+ only",
        body: "All content is for adults. We do not target minors.",
      },
    ],
    channelsTitle: "Distribution channels",
    channelsBody:
      "Official channels that exist today. We separate active presence from channels still being built. No invented follower counts.",
    channels: [
      {
        label: "Website / SEO",
        detail: "Guides, reviews, news and verticals on jugadamax.com",
        status: "active",
        href: "/en",
      },
      {
        label: "Editorial email",
        detail: "B2B contact and corrections",
        status: "active",
        href: socialUrl("email"),
      },
      {
        label: "Telegram",
        detail: "Official updates channel",
        status: "launching",
        href: socialUrl("telegram"),
      },
      {
        label: "LinkedIn",
        detail: "Company identity and B2B distribution",
        status: "launching",
        href: socialUrl("linkedin"),
      },
      {
        label: "TikTok",
        detail: "Short-form social content",
        status: "building",
        href: socialUrl("tiktok"),
      },
      {
        label: "Instagram",
        detail: "Visual updates",
        status: "building",
        href: socialUrl("instagram"),
      },
      {
        label: "YouTube",
        detail: "Guides and video explainers",
        status: "building",
        href: socialUrl("youtube"),
      },
    ],
    statusActive: "Active",
    statusLaunching: "Launching",
    statusBuilding: "In development",
    coverageCta: "View example",
    contactEmailAction: "Send email",
    contactTelegramAction: "Open Telegram",
    contactLinkedInAction: "JugadaMax LinkedIn",
    contactPageAction: "Visit contact page",
    collabTitle: "Collaboration formats",
    collabBody:
      "We can discuss the formats below. No request implies automatic acceptance or favourable coverage.",
    collab: [
      {
        title: "Affiliate tracking",
        body: "Affiliate links with sponsored/nofollow attributes when applicable, after individual review.",
      },
      {
        title: "Editorial review",
        body: "Balanced analysis with pros and cons. Commercial payment does not buy a fabricated score.",
      },
      {
        title: "Guides and education",
        body: "Evergreen payment, crypto, KYC or product explainers with clear attribution.",
      },
      {
        title: "Bonus updates",
        body: "Coverage of verifiable promotions without fake urgency or invented figures.",
      },
      {
        title: "Responsible gambling campaigns",
        body: "18+ collaborations with prevention messaging — never glamorising risk.",
      },
      {
        title: "Media content",
        body: "Briefings, editorial quotes or press materials aligned with our standards.",
      },
    ],
    requirementsTitle: "What partners should provide",
    requirementsBody:
      "To review a proposal properly we need verifiable information. Providing it does not guarantee a positive reply.",
    requirements: [
      "Operator or brand name and target markets (Mexico / LATAM / global)",
      "Official URL and up-to-date product materials",
      "Licences or permits as stated by the operator (if any)",
      "Relevant payment methods and geo limitations",
      "Bonus or promotion terms you want communicated",
      "Affiliate links or landings for commercial discussions",
      "Manager contact and realistic timelines",
      "Any legal or brand restrictions we must respect",
    ],
    standardsTitle: "Editorial independence and traffic standards",
    standardsBody:
      "These criteria apply to collaborations and content distribution. We do not negotiate exceptions that break editorial integrity.",
    editorialStandards: [
      "We do not operate casinos or process bets or payments",
      "We do not fabricate reviews, payout screenshots or testimonials",
      "We do not guarantee winnings, withdrawals or outcomes",
      "Commercial payment does not guarantee positive coverage",
      "We disclose affiliation when commercial links are used",
      "We may decline proposals incompatible with our standards",
    ],
    trafficStandards: [
      "Adults 18+ only",
      "Responsible gambling messaging on relevant pages",
      "No bots, spam or incentivised traffic",
      "No targeting of prohibited jurisdictions",
      "No VPN or restriction-evasion messaging",
      "No misleading bonus or easy-money claims",
    ],
    editorialHeading: "Editorial standards",
    trafficHeading: "Traffic standards",
    coverageTitle: "Real coverage examples",
    coverageBody:
      "Internal links to published content. These are not campaign case studies with performance metrics.",
    identityTitle: "Editorial identity",
    identityBody:
      "Founder and editorial desk with internal profiles. LinkedIn is an identity channel, not a factual source for operators.",
    contactTitle: "Contact for proposals",
    contactBody:
      "Email us with the materials listed above. We review proposals editorially and do not promise response times or acceptance.",
    contactEmailLabel: "Email",
    contactTelegramLabel: "Telegram",
    contactPageCta: "Visit contact page",
    contactPageHref: "/en/contact",
    methodologyLabel: "How we review",
    methodologyHref: "/en/how-we-review",
    disclosureLabel: "Affiliate disclosure",
    disclosureHref: "/en/affiliate-disclosure",
    profileCta: "View profile",
    linkedInCta: "LinkedIn",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Partners / Media Kit",
    homeHref: "/en",
  },
};

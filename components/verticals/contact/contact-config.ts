/**
 * Contact Hub V2 — bilingual copy and static structure.
 * Contact and social URLs come from OFFICIAL_SOCIAL_LINKS / site constants — not redefined.
 */

import { OFFICIAL_SOCIAL_LINKS } from "@/components/social/social-links-data";

export type ContactLocale = "es" | "en";

export type ContactReasonId =
  | "corrections"
  | "sources"
  | "partnerships"
  | "press"
  | "general";

function socialUrl(kind: string): string {
  const item = OFFICIAL_SOCIAL_LINKS.find((link) => link.kind === kind);
  if (!item) {
    throw new Error(`[contact] missing official social link: ${kind}`);
  }
  return item.url;
}

function socialLabel(kind: string): string {
  const item = OFFICIAL_SOCIAL_LINKS.find((link) => link.kind === kind);
  if (!item) {
    throw new Error(`[contact] missing official social link: ${kind}`);
  }
  return item.label;
}

export const CONTACT_LINKS = {
  emailDisplay: socialUrl("email").replace(/^mailto:/, ""),
  emailHref: socialUrl("email"),
  telegramHref: socialUrl("telegram"),
  telegramHandle: "@jugadamax",
  linkedInHref: socialUrl("linkedin"),
  linkedInLabel: socialLabel("linkedin"),
  tiktokHref: socialUrl("tiktok"),
  youtubeHref: socialUrl("youtube"),
  instagramHref: socialUrl("instagram"),
} as const;

export type ContactCopy = {
  heroEyebrow: string;
  heroTitle: string;
  heroBody: string;
  heroPrimaryCta: string;
  heroSecondaryCta: string;
  heroPrimaryHref: string;
  heroSecondaryHref: string;
  heroAsideTitle: string;
  heroAsideItems: readonly string[];
  notSupportBadge: string;
  notSupportTitle: string;
  notSupportBody: string;
  notSupportItems: readonly string[];
  reasonsTitle: string;
  reasonsBody: string;
  reasons: readonly {
    id: ContactReasonId;
    title: string;
    body: string;
    audience: string;
    mailtoSubject: string;
  }[];
  includeTitle: string;
  includeBody: string;
  includeItems: readonly string[];
  channelsTitle: string;
  channelsBody: string;
  channelEmailTitle: string;
  channelEmailBody: string;
  channelTelegramTitle: string;
  channelTelegramBody: string;
  channelLinkedInTitle: string;
  channelLinkedInBody: string;
  channelEmailCta: string;
  channelTelegramCta: string;
  channelLinkedInCta: string;
  mediaKitTitle: string;
  mediaKitBody: string;
  mediaKitCta: string;
  mediaKitHref: string;
  socialTitle: string;
  socialBody: string;
  relatedTitle: string;
  relatedBody: string;
  related: readonly { label: string; href: string; detail: string }[];
  finalTitle: string;
  finalBody: string;
  finalEmailCta: string;
  finalTelegramCta: string;
  finalMediaKitCta: string;
  writeByReasonLabel: string;
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  homeHref: string;
  methodologyHref: string;
  disclosureHref: string;
  responsibleHref: string;
};

export const CONTACT_COPY: Record<ContactLocale, ContactCopy> = {
  es: {
    heroEyebrow: "Contacto editorial · JugadaMax",
    heroTitle: "Contacta al equipo editorial de JugadaMax",
    heroBody:
      "Usa esta página para correcciones, fuentes oficiales, consultas de socios, prensa o preguntas editoriales. JugadaMax es un medio de iGaming — no es atención al cliente de casinos.",
    heroPrimaryCta: "Escribir por email",
    heroSecondaryCta: "Ver Media Kit",
    heroPrimaryHref: "#canales-contacto",
    heroSecondaryHref: "/partners",
    heroAsideTitle: "Motivos habituales",
    heroAsideItems: [
      "Correcciones editoriales",
      "Fuentes oficiales",
      "Socios y operadores",
      "Prensa e industria",
    ],
    notSupportBadge: "Importante",
    notSupportTitle: "JugadaMax no es soporte de casinos",
    notSupportBody:
      "No operamos casinos, no aceptamos apuestas y no gestionamos cuentas de jugadores. No podemos desbloquear cuentas, emitir bonos, procesar depósitos/retiros ni garantizar respuesta de un operador.",
    notSupportItems: [
      "No investigamos retiros individuales",
      "No damos asesoría legal o financiera",
      "Para problemas de cuenta, contacta al operador directamente",
    ],
    reasonsTitle: "¿Por qué nos escribes?",
    reasonsBody:
      "Elige el motivo que mejor describe tu mensaje. Así priorizamos correcciones y solicitudes B2B con más claridad.",
    reasons: [
      {
        id: "corrections",
        title: "Corrección editorial",
        body: "Errores factuales en reseñas, guías, noticias, bonos o datos de operadores.",
        audience: "Lectores y lectores técnicos",
        mailtoSubject: "Corrección editorial — JugadaMax",
      },
      {
        id: "sources",
        title: "Fuente oficial",
        body: "Documentación, comunicados o enlaces oficiales que debamos revisar para actualizar contenido.",
        audience: "Operadores y fuentes verificables",
        mailtoSubject: "Fuente oficial — JugadaMax",
      },
      {
        id: "partnerships",
        title: "Socios y afiliados",
        body: "Managers de afiliados, operadores y proveedores de pago interesados en colaboración editorial.",
        audience: "B2B iGaming",
        mailtoSubject: "Consulta de socios — JugadaMax",
      },
      {
        id: "press",
        title: "Prensa e industria",
        body: "Consultas de medios, RG, analistas o contactos de industria sobre cobertura y citas.",
        audience: "Prensa y profesionales",
        mailtoSubject: "Prensa / industria — JugadaMax",
      },
      {
        id: "general",
        title: "Consulta editorial general",
        body: "Otras preguntas sobre contenido, metodología o el proyecto editorial.",
        audience: "Público general",
        mailtoSubject: "Consulta editorial — JugadaMax",
      },
    ],
    includeTitle: "Qué incluir en tu mensaje",
    includeBody:
      "Un mensaje claro acelera la revisión. No necesitamos datos sensibles de cuenta de jugador.",
    includeItems: [
      "URL exacta de la página o reseña involucrada",
      "Qué información está incorrecta o desactualizada",
      "Fuente oficial o evidencia verificable (si aplica)",
      "Tu rol (lector, manager, operador, prensa) y canal preferido de respuesta",
      "Para socios: vertical, mercado y tipo de colaboración que propones",
    ],
    channelsTitle: "Canales prioritarios",
    channelsBody:
      "Email es el canal principal para correcciones y propuestas. Telegram y LinkedIn son canales oficiales secundarios.",
    channelEmailTitle: "Email editorial",
    channelEmailBody:
      "Canal principal para correcciones, fuentes, socios, prensa y consultas editoriales.",
    channelTelegramTitle: "Telegram",
    channelTelegramBody:
      "Canal oficial de novedades. Úsalo para seguimiento breve, no para casos de soporte de jugador.",
    channelLinkedInTitle: "LinkedIn",
    channelLinkedInBody:
      "Identidad de empresa y contacto B2B. Ideal para managers y contactos de industria.",
    channelEmailCta: "Abrir email",
    channelTelegramCta: "Abrir Telegram",
    channelLinkedInCta: "Abrir LinkedIn",
    mediaKitTitle: "Media Kit para socios",
    mediaKitBody:
      "Si eres manager, operador o proveedor de pago, revisa primero el Media Kit: cobertura, formatos, mercados y estándares editoriales.",
    mediaKitCta: "Abrir Media Kit",
    mediaKitHref: "/partners",
    socialTitle: "Otros canales oficiales",
    socialBody:
      "Canales sociales para contenido y actualizaciones. No reemplazan el email editorial para correcciones o propuestas.",
    relatedTitle: "Páginas relacionadas",
    relatedBody:
      "Contexto editorial y de transparencia antes o después de escribirnos.",
    related: [
      {
        label: "Cómo evaluamos",
        href: "/como-evaluamos",
        detail: "Metodología editorial",
      },
      {
        label: "Divulgación de afiliados",
        href: "/divulgacion-afiliados",
        detail: "Transparencia comercial",
      },
      {
        label: "Juego responsable",
        href: "/juego-responsable",
        detail: "Recursos +18",
      },
      {
        label: "Media Kit / Partners",
        href: "/partners",
        detail: "Información para socios",
      },
    ],
    finalTitle: "Listo para escribir",
    finalBody:
      "Envía tu mensaje con el motivo claro y la URL involucrada. Revisamos de forma editorial; priorizamos correcciones factuales.",
    finalEmailCta: "Escribir a JugadaMax",
    finalTelegramCta: "Telegram oficial",
    finalMediaKitCta: "Media Kit",
    writeByReasonLabel: "Escribir sobre esto",
    breadcrumbHome: "Inicio",
    breadcrumbCurrent: "Contacto",
    homeHref: "/",
    methodologyHref: "/como-evaluamos",
    disclosureHref: "/divulgacion-afiliados",
    responsibleHref: "/juego-responsable",
  },
  en: {
    heroEyebrow: "Editorial contact · JugadaMax",
    heroTitle: "Contact the JugadaMax editorial team",
    heroBody:
      "Use this page for corrections, official sources, partnership inquiries, press, or general editorial questions. JugadaMax is iGaming media — not casino customer support.",
    heroPrimaryCta: "Email the team",
    heroSecondaryCta: "View Media Kit",
    heroPrimaryHref: "#contact-channels",
    heroSecondaryHref: "/en/partners",
    heroAsideTitle: "Common reasons",
    heroAsideItems: [
      "Editorial corrections",
      "Official sources",
      "Partners & operators",
      "Press & industry",
    ],
    notSupportBadge: "Important",
    notSupportTitle: "JugadaMax is not casino customer support",
    notSupportBody:
      "We do not operate casinos, accept bets, or manage player accounts. We cannot unlock accounts, issue bonuses, process deposits/withdrawals, or guarantee an operator response.",
    notSupportItems: [
      "We do not investigate individual withdrawal cases",
      "We do not provide legal or financial advice",
      "For account issues, contact the operator directly",
    ],
    reasonsTitle: "Why are you contacting us?",
    reasonsBody:
      "Pick the reason that best matches your message so we can prioritize corrections and B2B requests clearly.",
    reasons: [
      {
        id: "corrections",
        title: "Editorial correction",
        body: "Factual errors in reviews, guides, news, bonuses, or operator data.",
        audience: "Readers and technical readers",
        mailtoSubject: "Editorial correction — JugadaMax",
      },
      {
        id: "sources",
        title: "Official source",
        body: "Documentation, announcements, or official links we should review to update content.",
        audience: "Operators and verifiable sources",
        mailtoSubject: "Official source — JugadaMax",
      },
      {
        id: "partnerships",
        title: "Partners & affiliates",
        body: "Affiliate managers, operators, and payment providers interested in editorial collaboration.",
        audience: "B2B iGaming",
        mailtoSubject: "Partnership inquiry — JugadaMax",
      },
      {
        id: "press",
        title: "Press & industry",
        body: "Media, RG, analyst, or industry contacts about coverage and citations.",
        audience: "Press and professionals",
        mailtoSubject: "Press / industry — JugadaMax",
      },
      {
        id: "general",
        title: "General editorial inquiry",
        body: "Other questions about content, methodology, or the editorial project.",
        audience: "General audience",
        mailtoSubject: "Editorial inquiry — JugadaMax",
      },
    ],
    includeTitle: "What to include in your message",
    includeBody:
      "A clear message speeds review. We do not need sensitive player-account data.",
    includeItems: [
      "Exact URL of the page or review involved",
      "What information is wrong or outdated",
      "Official source or verifiable evidence (if relevant)",
      "Your role (reader, manager, operator, press) and preferred reply channel",
      "For partners: vertical, market, and collaboration type you propose",
    ],
    channelsTitle: "Priority channels",
    channelsBody:
      "Email is the primary channel for corrections and proposals. Telegram and LinkedIn are official secondary channels.",
    channelEmailTitle: "Editorial email",
    channelEmailBody:
      "Primary channel for corrections, sources, partners, press, and editorial inquiries.",
    channelTelegramTitle: "Telegram",
    channelTelegramBody:
      "Official updates channel. Use for brief follow-up — not player support cases.",
    channelLinkedInTitle: "LinkedIn",
    channelLinkedInBody:
      "Company identity and B2B contact. Best for managers and industry contacts.",
    channelEmailCta: "Open email",
    channelTelegramCta: "Open Telegram",
    channelLinkedInCta: "Open LinkedIn",
    mediaKitTitle: "Media Kit for partners",
    mediaKitBody:
      "If you are a manager, operator, or payment provider, start with the Media Kit: coverage, formats, markets, and editorial standards.",
    mediaKitCta: "Open Media Kit",
    mediaKitHref: "/en/partners",
    socialTitle: "Other official channels",
    socialBody:
      "Social channels for content and updates. They do not replace editorial email for corrections or proposals.",
    relatedTitle: "Related pages",
    relatedBody: "Editorial and transparency context before or after you write.",
    related: [
      {
        label: "How we review",
        href: "/en/how-we-review",
        detail: "Editorial methodology",
      },
      {
        label: "Affiliate disclosure",
        href: "/en/affiliate-disclosure",
        detail: "Commercial transparency",
      },
      {
        label: "Responsible gambling",
        href: "/en/responsible-gambling",
        detail: "18+ resources",
      },
      {
        label: "Media Kit / Partners",
        href: "/en/partners",
        detail: "Partner information",
      },
    ],
    finalTitle: "Ready to write",
    finalBody:
      "Send a clear reason and the relevant URL. We review editorially and prioritize factual corrections.",
    finalEmailCta: "Email JugadaMax",
    finalTelegramCta: "Official Telegram",
    finalMediaKitCta: "Media Kit",
    writeByReasonLabel: "Write about this",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Contact",
    homeHref: "/en",
    methodologyHref: "/en/how-we-review",
    disclosureHref: "/en/affiliate-disclosure",
    responsibleHref: "/en/responsible-gambling",
  },
};

export function contactMailto(subject: string): string {
  return `${CONTACT_LINKS.emailHref}?subject=${encodeURIComponent(subject)}`;
}

export function contactChannelsSectionId(locale: ContactLocale): string {
  return locale === "en" ? "contact-channels" : "canales-contacto";
}

/**
 * English About page copy and static editorial links.
 */

export const EN_ABOUT_FOCUS_PILLS = [
  "Crypto and fiat casinos",
  "Sports betting",
  "Digital payments",
  "Responsible gambling",
] as const;

export const EN_ABOUT_HERO_PANEL_ITEMS = [
  "Editorial comparison media",
  "Does not accept bets or deposits",
  "Identified authors",
  "Affiliate relationships disclosed",
] as const;

export const EN_ABOUT_PUBLISHING_AREAS = [
  {
    title: "Editorial reviews",
    body: "Author-attributed reviews with editorial scoring, payments, verification and pros/cons. These are not aggregated user scores.",
    href: "/en/reviews",
    label: "Browse reviews",
  },
  {
    title: "Rankings and comparisons",
    body: "Directories and comparison tables ordered by editorial criteria. Placement may be commercially influenced and is disclosed where it applies.",
    href: "/en/casinos-crypto",
    label: "Browse crypto casinos",
  },
  {
    title: "Guides",
    body: "Educational content on operators, payments, bonuses and risk. This is not legal or financial advice.",
    href: "/en/guides",
    label: "Browse guides",
  },
  {
    title: "News, analysis and opinion",
    body: "Editorial updates, analysis and commentary. We separate reported facts from opinion when it applies.",
    href: "/en/news",
    label: "Browse news",
  },
] as const;

export const EN_ABOUT_AUDIENCE_CARDS = [
  {
    title: "English and international readers",
    body: "English pages cover global or international products and topics. Availability always depends on jurisdiction and the operator’s own terms — we do not claim any operator is available everywhere.",
  },
  {
    title: "Mexico-facing coverage",
    body: "Some English pages also discuss Mexico-facing operators or products. When that applies, we label it clearly instead of presenting those offers as universal global availability.",
  },
] as const;

export const EN_ABOUT_PROCESS_STEPS = [
  {
    heading: "Sources and operator information",
    body: "We review published operator information and external sources when they apply. We do not invent licences, bonus amounts or withdrawal timelines.",
  },
  {
    heading: "Facts versus editorial opinion",
    body: "We separate attributable facts from JugadaMax editorial judgement. Author commentary is labelled when it appears.",
  },
  {
    heading: "Editorial ratings and comparisons",
    body: "Ratings are editorial opinions from the JugadaMax team — not user-vote averages or AggregateRating scores. Rankings are not neutral facts.",
  },
  {
    heading: "Publication dates, updates and corrections",
    body: "Dates come from the editorial record. We do not change them merely to appear recent. We correct content when supportable information becomes available.",
  },
] as const;

export const EN_ABOUT_BOUNDARIES = [
  {
    title: "Does not operate casinos or sportsbooks",
    body: "JugadaMax is editorial media. We are not a gambling operator and we do not intermediate bets.",
  },
  {
    title: "Does not accept bets, deposits or withdrawals",
    body: "We do not take player funds or process gambling payments. Any deposit happens only on third-party sites.",
  },
  {
    title: "Does not guarantee availability or conditions",
    body: "We do not guarantee licences, bonuses, KYC approval, withdrawal times or that an operator is available in your country.",
  },
  {
    title: "Does not provide legal or financial advice",
    body: "We publish editorial information. Confirm terms, risks and obligations with the operator and with qualified advisers when needed.",
  },
] as const;

export const EN_ABOUT_FAQ_ITEMS = [
  {
    q: "What is JugadaMax?",
    a: "JugadaMax is an independent editorial comparison and media site covering crypto casinos, fiat casinos and sports betting. Spanish coverage is Mexico-first; English pages serve international readers.",
  },
  {
    q: "Is JugadaMax a casino or sportsbook?",
    a: "No. We do not operate casinos or sportsbooks and we do not accept bets, deposits or withdrawals. We compare and comment on third-party operators.",
  },
  {
    q: "How does JugadaMax make money?",
    a: "We may receive a commission when a reader uses certain commercial links. That does not add a direct extra cost to the reader. Commercial relationships may influence which operators receive visibility or placement, and we disclose that.",
  },
  {
    q: "Are the ratings user votes?",
    a: "No. Ratings are editorial opinions from the JugadaMax team — not aggregated user scores and not AggregateRating schema.",
  },
  {
    q: "Is every operator available in every country?",
    a: "No. Availability depends on jurisdiction, operator terms and local restrictions. Always verify on the official operator site.",
  },
  {
    q: "How can I request a correction?",
    a: "Use the contact page to report outdated information, broken links, incorrect operator details or factual errors. We review corrections when supportable evidence is available.",
  },
] as const;

export const EN_ABOUT_RELATED_ROUTES = [
  { href: "/en/reviews", label: "Reviews" },
  { href: "/en/guides", label: "Guides" },
  { href: "/en/news", label: "News" },
  { href: "/en/bonuses", label: "Bonuses" },
  { href: "/en/betting", label: "Sports betting" },
  { href: "/en/how-we-review", label: "How we review" },
  { href: "/en/responsible-gambling", label: "Responsible gambling" },
  { href: "/en/contact", label: "Contact" },
] as const;

export const EN_ABOUT_AUTHOR_ORDER = ["arturs-stoliks", "redaccion-jugadamax"] as const;

/** English display for About author cards — bios adapted from central author records. */
export const EN_ABOUT_AUTHOR_DISPLAY = {
  "arturs-stoliks": {
    displayName: "Arturs Stoliks",
    role: "Founder and editor of JugadaMax",
    kindLabel: "Author",
    bio: "Arturs Stoliks coordinates JugadaMax as an independent editorial project on online casinos, sports betting and digital payments. The focus is clear guides, cautious reviews and responsible content for adults 18+.",
    profileHref: "/en/about",
    profileCta: "About JugadaMax",
  },
  "redaccion-jugadamax": {
    displayName: "JugadaMax Editorial",
    role: "Editorial team",
    kindLabel: "Editorial team",
    bio: "The JugadaMax editorial team evaluates operators with a published methodology, prioritising clarity, payments, licensing information and user experience.",
    profileHref: "/en/about",
    profileCta: "About the team",
  },
} as const;

/**
 * English methodology page copy and static editorial links.
 */

export const EN_METHOD_FOCUS_PILLS = [
  "Crypto casinos",
  "Fiat & multi-currency",
  "Sportsbooks",
  "Safety and payments",
] as const;

export const EN_METHOD_HERO_PANEL_ITEMS = [
  "Safety and licensing",
  "Payments and withdrawals",
  "Bonuses and terms",
  "Experience and KYC",
] as const;

export const EN_METHOD_PRINCIPLES = [
  {
    title: "Editorial opinion, not user votes",
    body: "Ratings are attributed opinions from the JugadaMax team. They are not user-vote averages, AggregateRating markup or fabricated player reviews.",
  },
  {
    title: "Product and GEO clearly defined",
    body: "The same operator may be assessed in different contexts (crypto, fiat, sportsbooks or market). We define the product and geographic scope when it applies.",
  },
  {
    title: "Identifiable sources",
    body: "We prioritise official pages, published terms and recognisable external sources. Without supportable evidence, we use cautious language or omit the claim.",
  },
  {
    title: "Limits and uncertainties explained",
    body: "We do not guarantee payments, withdrawals, licences or availability. We explain limits, risks and what we do not continuously verify.",
  },
] as const;

export const EN_METHOD_CRITERIA = [
  {
    title: "Safety, ownership and stated licensing",
    body: "We review licensing, ownership and transparency information published by the operator. When we cannot independently corroborate a claim, we say so cautiously.",
  },
  {
    title: "Payments, withdrawals and fees",
    body: "We look at methods, limits, fees and processing information described in official sources. We do not invent withdrawal times or promise liquidity.",
  },
  {
    title: "Product, catalogue and user experience",
    body: "We assess usability, game or market coverage, mobile access and support channels based on editorial observation of the published product.",
  },
  {
    title: "Bonuses, wagering and terms",
    body: "We evaluate clarity of terms, wagering requirements and restrictions. We do not fabricate amounts, urgency or guaranteed promotional value.",
  },
  {
    title: "KYC, account, jurisdiction and availability",
    body: "We consider account verification, geographic restrictions and stated availability. No operator is available in every country.",
  },
  {
    title: "Responsible gambling and transparency",
    body: "We review whether the operator publishes age limits, control tools and responsible-play messaging, and whether terms are communicated clearly.",
  },
] as const;

export const EN_METHOD_PROCESS_STEPS = [
  {
    heading: "Define the product and market",
    body: "We identify whether the review covers a crypto casino, fiat or multi-currency casino, sportsbook or another product, and the relevant market context.",
  },
  {
    heading: "Review official pages and terms",
    body: "We consult the operator site, bonus rules, payment information and responsible-gambling pages when they are available.",
  },
  {
    heading: "Cross-check external context when relevant",
    body: "We may use recognisable external publications for context without adopting their scores as JugadaMax ratings.",
  },
  {
    heading: "Assess strengths, limits and risks",
    body: "We separate observable strengths from risks, information gaps and conditions readers must confirm themselves.",
  },
  {
    heading: "Publish with author, date and sources",
    body: "Reviews carry attribution (author or editorial team), dates from the editorial record and references when they apply.",
  },
  {
    heading: "Update when verifiable information exists",
    body: "We correct or label changes when reliable evidence is available. We do not claim continuous daily verification of every operator.",
  },
] as const;

export const EN_METHOD_SOURCES = [
  {
    title: "Official product pages",
    body: "Operator website, product descriptions and public official communications.",
  },
  {
    title: "Terms, bonuses and responsible gambling",
    body: "Published conditions, promotional rules and operator responsible-gambling pages.",
  },
  {
    title: "Stated ownership and licensing",
    body: "Ownership and licence information declared by the operator. This is not an independent JugadaMax audit.",
  },
  {
    title: "Partner campaign materials",
    body: "Campaign creatives or data supplied by partners, labelled as such when used.",
  },
  {
    title: "Recognisable external publications",
    body: "External media or assessment sites when they add useful context. Their ratings are not JugadaMax ratings.",
  },
  {
    title: "JugadaMax editorial observation",
    body: "Team judgement on clarity, usability, risk and consistency of published information.",
  },
] as const;

export const EN_METHOD_FAQ_ITEMS = [
  {
    q: "Are ratings based on user votes?",
    a: "No. They are editorial opinions from the JugadaMax team, attributed to an author or the editorial desk. We do not publish AggregateRating markup or fabricated user reviews.",
  },
  {
    q: "Is there a published mathematical scoring formula?",
    a: "No. We do not convert criteria into a published weighted formula. Scores are qualitative editorial judgements based on product, GEO and intended audience.",
  },
  {
    q: "Do affiliate operators receive higher ratings?",
    a: "Not automatically. Affiliation may influence which commercial campaigns are available or how operators are surfaced, but it does not guarantee a positive score. Featured placement and rating are separate decisions.",
  },
  {
    q: "Does JugadaMax independently verify every licence?",
    a: "We do not claim independent verification of every licence. We review information published by the operator and, when support is insufficient, we use cautious language or omit the claim.",
  },
  {
    q: "Why can an operator’s assessment vary by market?",
    a: "Because product scope, payment methods, jurisdiction and intended audience can change the context. An assessment for one market is not automatically valid everywhere.",
  },
  {
    q: "How often are reviews updated?",
    a: "We update when verifiable information or necessary corrections appear. We do not promise daily review of every operator. Published dates come from the editorial record.",
  },
  {
    q: "How can I request a correction?",
    a: "Use the contact page to report outdated details, broken links or factual errors. We review corrections when supportable evidence is available.",
  },
] as const;

export const EN_METHOD_RELATED_ROUTES = [
  { href: "/en/reviews", label: "Reviews" },
  { href: "/en/casinos-crypto", label: "Crypto casinos" },
  { href: "/en/casinos-fiat", label: "Fiat casinos" },
  { href: "/en/betting", label: "Sports betting" },
  { href: "/en/bonuses", label: "Bonuses" },
  { href: "/en/guides", label: "Guides" },
  { href: "/en/affiliate-disclosure", label: "Affiliate disclosure" },
  { href: "/en/responsible-gambling", label: "Responsible gambling" },
  { href: "/en/about", label: "About" },
  { href: "/en/contact", label: "Contact" },
] as const;

export const EN_METHOD_AUTHOR_ORDER = ["arturs-stoliks", "redaccion-jugadamax"] as const;

export const EN_METHOD_AUTHOR_DISPLAY = {
  "arturs-stoliks": {
    displayName: "Arturs Stoliks",
    role: "Founder and editor",
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

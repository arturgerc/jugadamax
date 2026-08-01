/**
 * Static English Reviews Hub V2 labels and copy.
 * Does not invent ratings, review counts, or operator facts.
 */

/** Default visible remaining reviews (after excluding highlights). */
export const EN_REVIEW_HUB_DEFAULT_VISIBLE = 6;

export const EN_NO_KYC_OPERATOR_IDS = [
  "cryptocasino",
  "ethcasino",
  "ltccasino",
] as const;

/**
 * Editorial highlighted selection — not a ranking.
 * Primary (3 larger) then secondary (4 compact), exact order.
 */
export const EN_REVIEW_HUB_HIGHLIGHT_PRIMARY_IDS = [
  "stake",
  "betsson",
  "xonbet",
] as const;

export const EN_REVIEW_HUB_HIGHLIGHT_SECONDARY_IDS = [
  "slotoro",
  "sportsbetio",
  "bcgame",
  "1xbet",
] as const;

export const EN_REVIEW_HUB_HIGHLIGHT_IDS = [
  ...EN_REVIEW_HUB_HIGHLIGHT_PRIMARY_IDS,
  ...EN_REVIEW_HUB_HIGHLIGHT_SECONDARY_IDS,
] as const;

export type EnReviewHubCategory =
  | "all"
  | "crypto"
  | "fiat"
  | "no-kyc"
  | "sportsbooks";

export type EnReviewHubSort = "newest" | "highest" | "name";

export const EN_REVIEW_HUB_CATEGORIES: readonly {
  id: Exclude<EnReviewHubCategory, "all">;
  label: string;
  description: string;
  href: string;
  accent: string;
  shell: string;
}[] = [
  {
    id: "crypto",
    label: "Crypto casinos",
    description: "Operators focused on cryptocurrencies and wallets.",
    href: "/en/reviews?category=crypto#directory",
    accent: "border-cyan-400/35 bg-cyan-500/10 text-cyan-200",
    shell: "border-cyan-500/20 bg-gradient-to-b from-[#0d1824]/80 to-[#111417]/40",
  },
  {
    id: "fiat",
    label: "Fiat & multi-currency",
    description: "Operators with fiat and multi-currency payment framing.",
    href: "/en/reviews?category=fiat#directory",
    accent: "border-primary/35 bg-primary/10 text-primary",
    shell: "border-primary/20 bg-gradient-to-b from-[#1a160f]/70 to-[#111417]/40",
  },
  {
    id: "no-kyc",
    label: "No-KYC & privacy",
    description: "Registration described without traditional document verification.",
    href: "/en/reviews?category=no-kyc#directory",
    accent: "border-rose-400/35 bg-rose-500/10 text-rose-200",
    shell: "border-rose-500/20 bg-gradient-to-b from-[#1a0f12]/75 to-[#111417]/40",
  },
  {
    id: "sportsbooks",
    label: "Sportsbooks",
    description: "Sportsbooks and mixed operators with sports betting.",
    href: "/en/reviews?category=sportsbooks#directory",
    accent: "border-emerald-400/35 bg-emerald-500/10 text-emerald-200",
    shell: "border-emerald-500/20 bg-gradient-to-b from-[#0f1a16]/75 to-[#111417]/40",
  },
] as const;

export const EN_REVIEW_HUB_SORT_OPTIONS: readonly {
  id: EnReviewHubSort;
  label: string;
}[] = [
  { id: "newest", label: "Newest" },
  { id: "highest", label: "Highest rated" },
  { id: "name", label: "A–Z" },
] as const;

export const EN_REVIEW_HUB_FILTER_OPTIONS: readonly {
  id: EnReviewHubCategory;
  label: string;
}[] = [
  { id: "all", label: "All" },
  { id: "crypto", label: "Crypto" },
  { id: "fiat", label: "Fiat & multi-currency" },
  { id: "no-kyc", label: "No-KYC" },
  { id: "sportsbooks", label: "Sportsbooks" },
] as const;

export const EN_REVIEW_METHODOLOGY_CRITERIA = [
  {
    heading: "Safety and trust",
    body: "We review reported licensing, public operator policies, risk signals and responsible-gambling information without inventing verification.",
  },
  {
    heading: "Payments and withdrawals",
    body: "We compare published payment methods, reported processing information and practical friction relevant to the intended audience.",
  },
  {
    heading: "Bonuses and terms",
    body: "We review visible requirements, restrictions, wagering conditions and frequently changing promotional terms.",
  },
  {
    heading: "Experience and availability",
    body: "We assess product clarity, reported verification requirements, regional access and whether the operator fits the stated editorial profile.",
  },
] as const;

export const EN_REVIEW_FAQ_ITEMS = [
  {
    q: "Are the ratings user votes?",
    a: "No. Each score is a JugadaMax editorial opinion attributed to the review author or editorial team. It is not an AggregateRating and not an average of player reviews.",
  },
  {
    q: "Why are some reviews labelled official reference, editorial reference or partner pending?",
    a: "Those labels reflect the operator’s public status on JugadaMax. BC.Game is labelled as an editorial reference. We do not invent verification states or popularity claims.",
  },
  {
    q: "Are publication dates changed merely to make reviews appear recent?",
    a: "No. We show real publishedAt and updatedAt values from the editorial register. If there is no update, we use the publication date.",
  },
  {
    q: "Can I register from this directory?",
    a: "No. This reviews directory only links to internal review pages. Affiliate or registration CTAs live on individual review pages or commercial ranking surfaces, with disclosure.",
  },
  {
    q: "Are featured reviews a ranking?",
    a: "No. They are an editorial selection for different reader profiles. The order does not imply positions 1–7 or fabricated popularity.",
  },
] as const;

export const EN_REVIEW_RELATED_ROUTES = [
  { href: "/en/casinos-crypto", label: "Crypto casinos" },
  { href: "/en/casinos-fiat", label: "Fiat casinos" },
  { href: "/en/casinos-no-kyc", label: "No-KYC casinos" },
  { href: "/en/betting", label: "Sports betting" },
  { href: "/en/bonuses", label: "Bonuses" },
  { href: "/en/guides", label: "Guides" },
  { href: "/en/how-we-review", label: "How we review" },
  { href: "/en/responsible-gambling", label: "Responsible gambling" },
] as const;

/** English display overrides for hub author cards. */
export const EN_REVIEW_AUTHOR_DISPLAY = {
  "redaccion-jugadamax": {
    displayName: "JugadaMax Editorial",
    role: "Editorial team",
    bio: "The JugadaMax editorial team evaluates operators with a published methodology, prioritising clarity, payments, licensing information and user experience.",
    profileHref: "/en/about",
    profileCta: "About the team",
    kindLabel: "Editorial team",
  },
  "arturs-stoliks": {
    displayName: "Arturs Stoliks",
    role: "Founder and editor of JugadaMax",
    bio: "Arturs Stoliks coordinates JugadaMax as an independent editorial project on online casinos, sports betting and digital payments. The focus is clear guides, cautious reviews and responsible content for adults 18+.",
    profileHref: "/en/about",
    profileCta: "View profile",
    kindLabel: "Author",
  },
} as const;

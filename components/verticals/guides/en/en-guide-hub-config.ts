/**
 * English `/en/guides` hub configuration.
 * Only one real English guide exists — supporting cards use real rankings,
 * reviews and educational routes with honest content-type labels.
 * Do not invent guide slugs or translate Spanish Mexico inventory blindly.
 */

export type EnGuideHubCategory =
  | "essential"
  | "crypto-payments"
  | "privacy-safety"
  | "operator-research";

export type EnGuideHubResourceKind = "guide" | "ranking" | "review" | "education";

export type EnGuideHubResource = {
  id: string;
  kind: EnGuideHubResourceKind;
  category: EnGuideHubCategory;
  title: string;
  summary: string;
  href: string;
  featured?: boolean;
  treatment?: "feature" | "standard" | "wide";
  /** Resolve real guide article when kind === "guide". */
  guideSlug?: string;
  /** Operator research fallback visual when kind === "review". */
  operatorId?: string;
  /**
   * Optional editorial cover for ranking/education cards.
   * Reuses language-neutral assets already shipped under /public/guides.
   */
  coverImage?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export const EN_GUIDE_HUB_RESOURCES: readonly EnGuideHubResource[] = [
  {
    id: "en-guide-best-crypto",
    kind: "guide",
    category: "essential",
    featured: true,
    treatment: "feature",
    guideSlug: "best-crypto-casinos",
    title: "Best Crypto Casinos — What to Check Before You Register",
    summary:
      "An editorial checklist for evaluating crypto casinos: jurisdiction, licensing, payments, bonus terms and responsible gambling.",
    href: "/en/guides/best-crypto-casinos",
  },
  {
    id: "en-ranking-crypto",
    kind: "ranking",
    category: "crypto-payments",
    treatment: "standard",
    title: "Crypto casinos ranking",
    summary:
      "Compare selected crypto-first operators, payment framing and editorial notes for English/global readers.",
    href: "/en/casinos-crypto",
    coverImage: {
      src: "/guides/casinos-con-usdt-mexico.png",
      alt: "Editorial illustration for crypto casino payments and USDT comparison",
      width: 1086,
      height: 1448,
    },
  },
  {
    id: "en-guide-bitcoin",
    kind: "guide",
    category: "crypto-payments",
    treatment: "standard",
    guideSlug: "bitcoin-casinos-in-mexico",
    title: "Bitcoin Casinos in Mexico: How They Work, Advantages and What to Check",
    summary:
      "Editorial guide to how Bitcoin casinos work, what to check before depositing with BTC, and how wallets, fees and volatility matter.",
    href: "/en/guides/bitcoin-casinos-in-mexico",
  },
  {
    id: "en-ranking-nokyc",
    kind: "ranking",
    category: "privacy-safety",
    treatment: "wide",
    title: "No-KYC and anonymous-leaning casinos",
    summary:
      "What limited verification means in practice, when checks can still appear, and which operators we cover on the English no-KYC page.",
    href: "/en/casinos-no-kyc",
    coverImage: {
      src: "/guides/casinos-no-kyc-mexico.svg",
      alt: "Editorial illustration for no-KYC privacy, wallets and responsible gambling notes",
      width: 1200,
      height: 630,
    },
  },
  {
    id: "en-review-stake",
    kind: "review",
    category: "operator-research",
    treatment: "standard",
    operatorId: "stake",
    title: "Stake review",
    summary:
      "Editorial research on Stake for English/global readers: product mix, payments framing, availability notes and risk caveats.",
    href: "/en/reviews/stake",
  },
  {
    id: "en-review-bcgame",
    kind: "review",
    category: "operator-research",
    treatment: "standard",
    operatorId: "bcgame",
    title: "BC.Game review",
    summary:
      "Editorial research on BC.Game: crypto-native product notes, verification expectations and jurisdiction limits.",
    href: "/en/reviews/bcgame",
  },
  {
    id: "en-review-xonbet",
    kind: "review",
    category: "operator-research",
    treatment: "standard",
    operatorId: "xonbet",
    title: "XON.BET review",
    summary:
      "English-only operator research covering multi-currency framing, welcome structure notes and account caveats.",
    href: "/en/reviews/xonbet",
  },
] as const;

export const EN_GUIDE_CATEGORY_META: Record<
  EnGuideHubCategory,
  { label: string; accent: string; fallback: string }
> = {
  essential: {
    label: "Essential guide",
    accent: "border-primary/30 text-primary",
    fallback:
      "bg-gradient-to-br from-[#1a160f] via-[#121820] to-[#0A1931] border-primary/25",
  },
  "crypto-payments": {
    label: "Crypto & payments",
    accent: "border-cyan-400/30 text-cyan-200",
    fallback:
      "bg-gradient-to-br from-[#0d1824] via-[#101820] to-[#0A1931] border-cyan-500/20",
  },
  "privacy-safety": {
    label: "Privacy & safety",
    accent: "border-violet-400/30 text-violet-200",
    fallback:
      "bg-gradient-to-br from-[#15101c] via-[#121820] to-[#0A1931] border-violet-500/20",
  },
  "operator-research": {
    label: "Operator research",
    accent: "border-sky-400/30 text-sky-200",
    fallback:
      "bg-gradient-to-br from-[#101820] via-[#111417] to-[#0A1931] border-sky-500/20",
  },
};

export const EN_GUIDE_KIND_LABELS: Record<EnGuideHubResourceKind, string> = {
  guide: "Guide",
  ranking: "Ranking",
  review: "Review",
  education: "Education",
};

export const EN_GUIDE_LEARNING_PATHS = [
  {
    title: "I want to choose a crypto casino",
    description:
      "Start with the editorial checklist: security signals, payments, licensing notes and terms before you register.",
    href: "/en/guides/best-crypto-casinos",
    accent: "border-primary/25 hover:border-primary/45",
  },
  {
    title: "I want to understand crypto payments",
    description:
      "Use the crypto casinos ranking to compare payment framing, tokens and operator notes for global readers.",
    href: "/en/casinos-crypto",
    accent: "border-cyan-500/25 hover:border-cyan-400/45",
  },
  {
    title: "I want to review privacy and operators",
    description:
      "Read the no-KYC page and operator reviews to understand verification limits and research signals.",
    href: "/en/casinos-no-kyc",
    accent: "border-violet-500/25 hover:border-violet-400/45",
  },
] as const;

/** English display overrides — do not surface Spanish author bios on /en/guides. */
export const EN_GUIDE_AUTHOR_DISPLAY = {
  "arturs-stoliks": {
    displayName: "Arturs Stoliks",
    role: "Founder and editor of JugadaMax",
    bio: "Arturs Stoliks coordinates JugadaMax as an independent editorial project on online casinos, sports betting and digital payments. The focus is clear guides, cautious reviews and responsible content for adults 18+.",
    specialties: [
      "Online casinos",
      "Crypto payments",
      "Sports betting",
      "Responsible gambling",
      "Global & Mexico-facing coverage",
    ],
    profileHref: "/en/about",
    profileCta: "About JugadaMax",
    kindLabel: "Author",
  },
  "redaccion-jugadamax": {
    displayName: "JugadaMax Editorial",
    role: "Editorial team",
    bio: "The JugadaMax editorial team evaluates operators with a published methodology, prioritising clarity, payments, licensing information and user experience.",
    specialties: [
      "Crypto casinos",
      "Fiat casinos",
      "Bonuses and terms",
      "Responsible gambling",
    ],
    profileHref: "/en/about",
    profileCta: "About the team",
    kindLabel: "Editorial team",
  },
} as const;

export const EN_GUIDE_RELATED_LINKS = [
  { href: "/en/casinos-crypto", label: "Crypto casinos" },
  { href: "/en/casinos-fiat", label: "Fiat casinos" },
  { href: "/en/bonuses", label: "Bonuses" },
  { href: "/en/reviews", label: "Reviews" },
  { href: "/en/news", label: "News" },
  { href: "/en/how-we-review", label: "How we review" },
  { href: "/en/responsible-gambling", label: "Responsible gambling" },
] as const;

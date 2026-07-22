export type GuideHubCategory =
  | "essential"
  | "crypto-payments"
  | "privacy-safety"
  | "international-operators";

export type GuideHubEntry = {
  slug: string;
  category: GuideHubCategory;
  featured?: boolean;
  treatment?: "feature" | "standard" | "wide";
  /** Optional casino id for operator-research fallback visuals. */
  operatorId?: string;
};

/** Curated Guide Hub layout — titles/summaries resolve from central article data. */
export const GUIDE_HUB_ENTRIES: readonly GuideHubEntry[] = [
  {
    slug: "como-elegir-casino-crypto-mexico",
    category: "essential",
    featured: true,
    treatment: "feature",
  },
  {
    slug: "casinos-con-usdt-mexico",
    category: "crypto-payments",
    treatment: "standard",
  },
  {
    slug: "casinos-con-bitcoin-mexico",
    category: "crypto-payments",
    treatment: "standard",
  },
  {
    slug: "casinos-no-kyc-mexico",
    category: "privacy-safety",
    treatment: "wide",
  },
  {
    slug: "roobet-mexico-crypto",
    category: "international-operators",
    treatment: "standard",
    operatorId: "roobet",
  },
  {
    slug: "gamdom-mexico-crypto",
    category: "international-operators",
    treatment: "standard",
    operatorId: "gamdom",
  },
  {
    slug: "500-casino-mexico",
    category: "international-operators",
    treatment: "standard",
    operatorId: "500-casino",
  },
] as const;

export const GUIDE_CATEGORY_META: Record<
  GuideHubCategory,
  { label: string; accent: string; fallback: string }
> = {
  essential: {
    label: "Guía esencial",
    accent: "border-primary/30 text-primary",
    fallback:
      "bg-gradient-to-br from-[#1a160f] via-[#121820] to-[#0A1931] border-primary/25",
  },
  "crypto-payments": {
    label: "Crypto y pagos",
    accent: "border-cyan-400/30 text-cyan-200",
    fallback:
      "bg-gradient-to-br from-[#0d1824] via-[#101820] to-[#0A1931] border-cyan-500/20",
  },
  "privacy-safety": {
    label: "Privacidad y seguridad",
    accent: "border-violet-400/30 text-violet-200",
    fallback:
      "bg-gradient-to-br from-[#15101c] via-[#121820] to-[#0A1931] border-violet-500/20",
  },
  "international-operators": {
    label: "Operadores internacionales",
    accent: "border-sky-400/30 text-sky-200",
    fallback:
      "bg-gradient-to-br from-[#101820] via-[#111417] to-[#0A1931] border-sky-500/20",
  },
};

export const GUIDE_LEARNING_PATHS = [
  {
    title: "Quiero elegir un casino crypto",
    description:
      "Empieza por seguridad, pagos, licencias informadas y condiciones antes de registrarte.",
    href: "/guias/como-elegir-casino-crypto-mexico",
    anchor: "#guia-esencial",
    accent: "border-primary/25 hover:border-primary/45",
  },
  {
    title: "Quiero entender pagos crypto",
    description:
      "Compara USDT, Bitcoin, redes, wallets, comisiones y riesgos operativos.",
    href: "/guias/casinos-con-usdt-mexico",
    anchor: "#crypto-y-pagos",
    accent: "border-cyan-500/25 hover:border-cyan-400/45",
  },
  {
    title: "Quiero revisar privacidad y operadores",
    description:
      "Entiende no-KYC, posibles verificaciones y cómo investigar operadores internacionales.",
    href: "/guias/casinos-no-kyc-mexico",
    anchor: "#privacidad-y-seguridad",
    accent: "border-violet-500/25 hover:border-violet-400/45",
  },
] as const;

import { cn } from "@/lib/utils";
import type { BonusDirectoryGroup } from "@/types/content";

/** Shared surface / accent tokens for Bonus Page V2 visual polish. */
export const BONUS_SURFACES = {
  sectionShell:
    "relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#121820] via-[#0f1622] to-[#0A1931]",
  commercialShell:
    "relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-b from-[#16140f] via-[#121820] to-[#0A1931] shadow-[0_0_48px_-28px_rgba(255,184,0,0.35)]",
  editorialShell:
    "relative overflow-hidden rounded-2xl border border-sky-500/15 bg-gradient-to-b from-[#101820] via-[#0e1620] to-[#0A1931]",
  tableShell:
    "overflow-hidden rounded-2xl border border-white/10 bg-[#111417]/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]",
  dataCell:
    "rounded-md border border-white/8 bg-[#0A1931]/55 px-2 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]",
  promoChip:
    "inline-flex max-w-full items-center rounded-md border border-white/12 bg-[#0A1931]/70 px-2 py-0.5 font-mono text-[0.7rem] font-semibold tracking-wide text-foreground whitespace-nowrap",
  cardHover:
    "transition-[border-color,box-shadow,transform] duration-150 hover:-translate-y-px hover:border-white/20 hover:shadow-[0_8px_28px_-18px_rgba(0,0,0,0.55)]",
  goldCta:
    "inline-flex min-h-12 items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors duration-150 hover:bg-[var(--jm-gold-strong)]",
  goldCtaCompact:
    "inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-3 text-xs font-semibold text-primary-foreground transition-colors duration-150 hover:bg-[var(--jm-gold-strong)]",
} as const;

export type FeaturedThemeKey = "betsson" | "betfury" | "bitcasino";

const FEATURED_THEMES: Record<
  FeaturedThemeKey,
  { card: string; badge: string; accentBar: string; glow: string }
> = {
  betsson: {
    card: "border-amber-500/30 bg-gradient-to-b from-[#1a160f] via-[#141820] to-[#0A1931]",
    badge: "border-amber-400/40 bg-amber-500/12 text-amber-200",
    accentBar: "from-amber-400/80 via-primary/70 to-transparent",
    glow: "bg-[radial-gradient(ellipse_at_top_right,rgba(255,184,0,0.16),transparent_58%)]",
  },
  betfury: {
    card: "border-fuchsia-500/25 bg-gradient-to-b from-[#1a1020] via-[#141820] to-[#0A1931]",
    badge: "border-fuchsia-400/35 bg-fuchsia-500/12 text-fuchsia-200",
    accentBar: "from-fuchsia-400/70 via-violet-400/50 to-transparent",
    glow: "bg-[radial-gradient(ellipse_at_top_right,rgba(217,70,239,0.14),transparent_58%)]",
  },
  bitcasino: {
    card: "border-violet-500/28 bg-gradient-to-b from-[#16101f] via-[#141820] to-[#0A1931]",
    badge: "border-violet-400/35 bg-violet-500/12 text-violet-200",
    accentBar: "from-violet-400/70 via-orange-400/40 to-transparent",
    glow: "bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.14),transparent_58%)]",
  },
};

export function featuredThemeForOperator(operatorId: string) {
  if (operatorId === "betsson") return FEATURED_THEMES.betsson;
  if (operatorId === "betfury") return FEATURED_THEMES.betfury;
  if (operatorId === "bitcasino") return FEATURED_THEMES.bitcasino;
  return FEATURED_THEMES.betsson;
}

export const DIRECTORY_SECTION_THEMES: Record<
  BonusDirectoryGroup,
  { shell: string; eyebrow: string; accent: string; cardBorder: string }
> = {
  "casino-mx": {
    shell:
      "rounded-2xl border border-amber-500/15 bg-gradient-to-b from-[#16140f]/90 via-[#121820]/80 to-[#0A1931]/60 p-3.5 sm:p-5",
    eyebrow: "text-amber-300/90",
    accent: "border-amber-400/25",
    cardBorder: "border-amber-500/20 hover:border-amber-400/40",
  },
  "crypto-rewards": {
    shell:
      "rounded-2xl border border-violet-500/15 bg-gradient-to-b from-[#14101c]/90 via-[#121820]/80 to-[#0A1931]/60 p-3.5 sm:p-5",
    eyebrow: "text-violet-300/90",
    accent: "border-violet-400/25",
    cardBorder: "border-violet-500/20 hover:border-violet-400/40",
  },
  "sports-mixed": {
    shell:
      "rounded-2xl border border-emerald-500/15 bg-gradient-to-b from-[#0f1714]/90 via-[#121820]/80 to-[#0A1931]/60 p-3.5 sm:p-5",
    eyebrow: "text-emerald-300/90",
    accent: "border-emerald-400/25",
    cardBorder: "border-emerald-500/20 hover:border-emerald-400/35",
  },
};

const OPERATOR_CARD_ACCENTS: Record<string, string> = {
  "1xbet": "shadow-[inset_0_1px_0_rgba(34,211,238,0.08)]",
  awintura: "shadow-[inset_0_1px_0_rgba(212,154,0,0.1)]",
  gamdom: "shadow-[inset_0_1px_0_rgba(52,211,153,0.12)]",
  mellstroy: "shadow-[inset_0_1px_0_rgba(167,139,250,0.12)]",
  vodkabet: "shadow-[inset_0_1px_0_rgba(96,165,250,0.12)]",
  melbet: "shadow-[inset_0_1px_0_rgba(250,204,21,0.1)]",
  mostbet: "shadow-[inset_0_1px_0_rgba(52,165,255,0.12)]",
  sportsbetio: "shadow-[inset_0_1px_0_rgba(52,211,153,0.12)]",
};

export function directoryOperatorAccent(operatorId: string): string {
  return OPERATOR_CARD_ACCENTS[operatorId] ?? "";
}

export const NAV_LINK_ACCENTS: Record<string, string> = {
  "#promociones-destacadas":
    "hover:border-primary/50 hover:bg-primary/10 hover:text-primary",
  "#comparativa-bonos":
    "hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-200",
  "#bonos-casino-mx":
    "hover:border-amber-400/40 hover:bg-amber-500/10 hover:text-amber-200",
  "#bonos-crypto-rewards":
    "hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-violet-200",
  "#bonos-sports-mixed":
    "hover:border-emerald-400/40 hover:bg-emerald-500/10 hover:text-emerald-200",
  "#hub-bonos":
    "hover:border-sky-400/40 hover:bg-sky-500/10 hover:text-sky-200",
  "#terminos-bonos":
    "hover:border-white/25 hover:bg-white/[0.04] hover:text-foreground",
};

export function sectionHeadingClassName(className?: string) {
  return cn(
    "text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]",
    className,
  );
}

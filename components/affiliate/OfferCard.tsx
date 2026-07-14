import type { ImageRef } from "@/types/content";
import Link from "next/link";
import { OperatorLogo } from "@/components/brand/OperatorLogo";
import { cn, focusRing } from "@/lib/utils";

export type OfferCardVisualVariant = "mexico" | "crypto" | "fiat" | "sportsbook" | "dark";

export type OfferCardVisual = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  chips?: string[];
  variant?: "betsson" | "betfury" | "fivehundred" | "rainbet" | "onexbet" | "melbet" | "mellstroy" | "gamdom" | "xonbet" | "vodkabet" | "awintura" | "slotoro" | "roobet" | "mostbet" | "sportsbetio" | "bitcasino" | "mexico" | "crypto" | "dark";
  compact?: boolean;
};

export type OfferCardEmphasis = "standard" | "comparison-primary" | "comparison-secondary";

export type OfferCardHeadingLevel = "h2" | "h3";

export type OfferCardProps = {
  operatorName: string;
  operatorId: string;
  badge?: string;
  headline: string;
  subheadline?: string;
  offerText: string;
  promoCode?: string;
  paymentBadges: string[];
  featureBullets: string[];
  primaryCtaLabel: string;
  primaryCtaHref: string;
  /** Defaults to affiliate semantics; set false for an official non-affiliate destination. */
  primaryCtaIsAffiliate?: boolean;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  tertiaryCtaLabel?: string;
  tertiaryCtaHref?: string;
  /** Optional override for the category badge pill (e.g. emerald sportsbook accent). */
  badgeClassName?: string;
  termsNote: string;
  responsibleNote: string;
  visual?: OfferCardVisual;
  visualVariant?: OfferCardVisualVariant;
  mobileMaxBullets?: number;
  emphasis?: OfferCardEmphasis;
  headingLevel?: OfferCardHeadingLevel;
  logo?: ImageRef;
  className?: string;
  /** Tighter layout for side-by-side comparison grids (homepage / crypto ranking). */
  compactComparison?: boolean;
  /** Stretch to grid row height from md up; pins disclaimer to the bottom of the body column. */
  fillHeight?: boolean;
};

const AFFILIATE_REL = "sponsored nofollow noopener noreferrer";
const OFFICIAL_REL = "nofollow noopener noreferrer";

function isExternalHref(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://");
}

const variantShell: Record<OfferCardVisualVariant, string> = {
  mexico:
    "border-primary/30 bg-gradient-to-br from-[#16233f] via-[#111417] to-[#0A1931] shadow-[0_4px_24px_-4px_rgba(0,0,0,0.45)]",
  fiat: "border-primary/25 bg-gradient-to-br from-primary/8 via-[#111417] to-[#0A1931]",
  sportsbook:
    "border-emerald-500/25 bg-gradient-to-br from-emerald-500/8 via-[#111417] to-[#0A1931]",
  crypto:
    "border-primary/20 bg-gradient-to-br from-[#16233f] via-[#111417] to-[#0A1931] ring-1 ring-primary/10",
  dark: "border-white/10 bg-card",
};

const variantGlow: Record<OfferCardVisualVariant, string> = {
  mexico:
    "bg-[radial-gradient(ellipse_at_top_right,rgba(255,184,0,0.12),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(0,168,107,0.08),transparent_45%),radial-gradient(ellipse_at_top_left,rgba(196,30,58,0.06),transparent_40%)]",
  fiat: "bg-[radial-gradient(ellipse_at_top_right,rgba(255,184,0,0.1),transparent_55%)]",
  sportsbook:
    "bg-[radial-gradient(ellipse_at_top_right,rgba(0,168,107,0.12),transparent_55%)]",
  crypto: "bg-[radial-gradient(ellipse_at_top_right,rgba(255,184,0,0.08),transparent_55%)]",
  dark: "bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.04),transparent_55%)]",
};

const variantBadge: Record<OfferCardVisualVariant, string> = {
  mexico: "border-primary/30 bg-primary/10 text-primary",
  fiat: "border-primary/25 bg-primary/10 text-primary",
  sportsbook: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
  crypto: "border-primary/25 bg-primary/10 text-primary",
  dark: "border-white/15 bg-white/5 text-muted-foreground",
};

const visualPanelShell: Record<NonNullable<OfferCardVisual["variant"]>, string> = {
  betsson:
    "border-orange-500/25 bg-gradient-to-br from-[#0A1931] via-[#111a2e] to-[#0d1424] shadow-[inset_0_1px_0_rgba(255,184,0,0.12)]",
  betfury:
    "border-fuchsia-500/25 bg-gradient-to-br from-[#0A0A12] via-[#111127] to-[#0A1931] shadow-[inset_0_1px_0_rgba(236,72,153,0.12)]",
  fivehundred:
    "border-pink-500/20 bg-gradient-to-br from-[#120818] via-[#16121f] to-[#0A1931] shadow-[inset_0_1px_0_rgba(236,72,153,0.08)]",
  rainbet:
    "border-emerald-500/20 bg-gradient-to-br from-[#020617] via-[#071422] to-[#041018] shadow-[inset_0_1px_0_rgba(34,211,238,0.1)]",
  onexbet:
    "border-sky-500/25 bg-gradient-to-br from-[#050d1f] via-[#0a1931] to-[#061018] shadow-[inset_0_1px_0_rgba(56,189,248,0.12)]",
  melbet:
    "border-[#FFB800]/25 bg-gradient-to-br from-[#0c0c0e] via-[#141414] to-[#0a0a0c] shadow-[inset_0_1px_0_rgba(255,184,0,0.14)]",
  mellstroy:
    "border-violet-500/25 bg-gradient-to-br from-[#1a0a24] via-[#120818] to-[#0d0614] shadow-[inset_0_1px_0_rgba(139,92,246,0.12)]",
  gamdom:
    "border-emerald-400/25 bg-gradient-to-br from-[#061019] via-[#07131d] to-[#091722] shadow-[inset_0_1px_0_rgba(0,245,138,0.12)]",
  xonbet:
    "border-cyan-400/25 bg-gradient-to-br from-[#070B1C] via-[#11133A] to-[#070B1C] shadow-[inset_0_1px_0_rgba(0,217,255,0.12)]",
  vodkabet:
    "border-blue-500/25 bg-gradient-to-br from-[#071225] via-[#091733] to-[#101B3D] shadow-[inset_0_1px_0_rgba(59,130,246,0.12)]",
  awintura:
    "border-[#D49A00]/25 bg-gradient-to-br from-[#090704] via-[#120D05] to-[#272011] shadow-[inset_0_1px_0_rgba(212,154,0,0.12)]",
  slotoro:
    "border-fuchsia-500/25 bg-gradient-to-br from-[#080014] via-[#130020] to-[#22002F] shadow-[inset_0_1px_0_rgba(217,0,215,0.12)]",
  roobet:
    "border-violet-500/25 bg-gradient-to-br from-[#070817] via-[#151438] to-[#211C50] shadow-[inset_0_1px_0_rgba(109,40,217,0.12)]",
  mostbet:
    "border-[#0A5A9C]/25 bg-gradient-to-br from-[#031A36] via-[#052B52] to-[#074477] shadow-[inset_0_1px_0_rgba(52,165,255,0.12)]",
  sportsbetio:
    "border-[#36B958]/25 bg-gradient-to-br from-[#11161C] via-[#171E25] to-[#202932] shadow-[inset_0_1px_0_rgba(54,185,88,0.12)]",
  bitcasino:
    "border-[#6519A8]/25 bg-gradient-to-br from-[#12051F] via-[#210936] to-[#35105A] shadow-[inset_0_1px_0_rgba(123,34,211,0.12)]",
  mexico:
    "border-primary/30 bg-gradient-to-br from-[#16233f] via-[#111417] to-[#0A1931]",
  crypto:
    "border-primary/20 bg-gradient-to-br from-[#16233f] via-[#111417] to-[#0A1931]",
  dark: "border-white/10 bg-gradient-to-br from-[#16233f] to-[#0A1931]",
};

const visualPanelGlow: Record<NonNullable<OfferCardVisual["variant"]>, string> = {
  betsson:
    "bg-[radial-gradient(ellipse_at_top_right,rgba(255,107,0,0.22),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(147,51,234,0.14),transparent_50%)]",
  betfury:
    "bg-[radial-gradient(ellipse_at_top_right,rgba(236,72,153,0.22),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.16),transparent_50%),radial-gradient(ellipse_at_center,rgba(239,68,68,0.08),transparent_60%)]",
  fivehundred:
    "bg-[radial-gradient(ellipse_at_top_right,rgba(236,72,153,0.18),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(127,29,29,0.12),transparent_50%)]",
  rainbet:
    "bg-[radial-gradient(ellipse_at_30%_20%,rgba(52,211,153,0.16),transparent_50%),radial-gradient(ellipse_at_80%_80%,rgba(34,211,238,0.12),transparent_45%),radial-gradient(circle_at_50%_100%,rgba(16,185,129,0.08),transparent_55%)]",
  onexbet:
    "bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.2),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(37,99,235,0.16),transparent_50%),radial-gradient(ellipse_at_20%_80%,rgba(34,197,94,0.08),transparent_45%)]",
  melbet:
    "bg-[radial-gradient(ellipse_at_top_right,rgba(255,184,0,0.18),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.04),transparent_50%),radial-gradient(ellipse_at_15%_85%,rgba(60,60,60,0.12),transparent_45%)]",
  mellstroy:
    "bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.2),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(37,99,235,0.12),transparent_50%),radial-gradient(ellipse_at_70%_30%,rgba(217,70,239,0.08),transparent_45%)]",
  gamdom:
    "bg-[radial-gradient(ellipse_at_top_right,rgba(0,245,138,0.18),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(32,217,176,0.12),transparent_50%),radial-gradient(ellipse_at_60%_80%,rgba(166,255,77,0.06),transparent_45%)]",
  xonbet:
    "bg-[radial-gradient(ellipse_at_top_right,rgba(0,217,255,0.16),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(255,42,154,0.1),transparent_50%),radial-gradient(ellipse_at_70%_30%,rgba(51,21,104,0.12),transparent_45%)]",
  vodkabet:
    "bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.16),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(139,92,246,0.12),transparent_50%),radial-gradient(ellipse_at_60%_80%,rgba(56,189,248,0.08),transparent_45%)]",
  awintura:
    "bg-[radial-gradient(ellipse_at_top_right,rgba(212,154,0,0.16),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(83,122,40,0.12),transparent_50%),radial-gradient(ellipse_at_70%_30%,rgba(58,46,18,0.14),transparent_45%)]",
  slotoro:
    "bg-[radial-gradient(ellipse_at_top_right,rgba(217,0,215,0.16),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(244,255,0,0.08),transparent_50%),radial-gradient(ellipse_at_70%_30%,rgba(59,0,81,0.14),transparent_45%)]",
  roobet:
    "bg-[radial-gradient(ellipse_at_top_right,rgba(109,40,217,0.18),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(139,92,246,0.12),transparent_50%),radial-gradient(ellipse_at_60%_80%,rgba(183,255,0,0.06),transparent_45%)]",
  mostbet:
    "bg-[radial-gradient(ellipse_at_top_right,rgba(52,165,255,0.16),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(255,107,0,0.1),transparent_50%),radial-gradient(ellipse_at_70%_30%,rgba(150,219,0,0.06),transparent_45%)]",
  sportsbetio:
    "bg-[radial-gradient(ellipse_at_top_right,rgba(54,185,88,0.16),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(69,208,103,0.1),transparent_50%),radial-gradient(ellipse_at_70%_30%,rgba(101,231,130,0.06),transparent_45%)]",
  bitcasino:
    "bg-[radial-gradient(ellipse_at_top_right,rgba(123,34,211,0.16),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(255,90,0,0.1),transparent_50%),radial-gradient(ellipse_at_70%_30%,rgba(255,204,77,0.06),transparent_45%)]",
  mexico:
    "bg-[radial-gradient(ellipse_at_top_right,rgba(255,184,0,0.14),transparent_55%)]",
  crypto:
    "bg-[radial-gradient(ellipse_at_top_right,rgba(255,184,0,0.1),transparent_55%)]",
  dark: "bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.05),transparent_55%)]",
};

const emphasisShell: Record<OfferCardEmphasis, string> = {
  standard: "",
  "comparison-primary":
    "border-pink-500/30 ring-1 ring-pink-500/10 shadow-[0_4px_24px_-10px_rgba(236,72,153,0.18)]",
  "comparison-secondary": "border-white/8 bg-[#111417]/95 shadow-none ring-0",
};

const emphasisGlow: Record<OfferCardEmphasis, string | null> = {
  standard: null,
  "comparison-primary":
    "bg-[radial-gradient(ellipse_at_top_right,rgba(236,72,153,0.12),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(127,29,29,0.06),transparent_50%)]",
  "comparison-secondary": "",
};

const emphasisBadge: Partial<Record<OfferCardEmphasis, string>> = {
  "comparison-primary": "border-pink-500/30 bg-pink-500/10 text-pink-200",
  "comparison-secondary": "border-white/12 bg-white/5 text-muted-foreground",
};

const onexbetCardShell =
  "border-sky-500/25 bg-gradient-to-br from-[#050d1f] via-[#0A1931]/95 to-[#061018] ring-1 ring-cyan-400/10 shadow-[0_4px_28px_-12px_rgba(56,189,248,0.22)]";

const onexbetCardGlow =
  "bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.12),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(37,99,235,0.08),transparent_50%)]";

const onexbetBadge = "border-sky-400/30 bg-sky-500/10 text-sky-200";

const melbetCardShell =
  "border-[#FFB800]/25 bg-gradient-to-br from-[#0c0c0e] via-[#111417]/95 to-[#0a0a0c] ring-1 ring-[#FFB800]/10 shadow-[0_4px_28px_-12px_rgba(255,184,0,0.2)]";

const melbetCardGlow =
  "bg-[radial-gradient(ellipse_at_top_right,rgba(255,184,0,0.1),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.03),transparent_50%)]";

const melbetBadge = "border-[#FFB800]/35 bg-[#FFB800]/10 text-[#FFC300]";

const mellstroyCardShell =
  "border-violet-500/25 bg-gradient-to-br from-[#1a0a24] via-[#120818]/95 to-[#0d0614] ring-1 ring-violet-500/10 shadow-[0_4px_28px_-12px_rgba(139,92,246,0.22)]";

const mellstroyCardGlow =
  "bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.14),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(37,99,235,0.08),transparent_50%),radial-gradient(ellipse_at_60%_40%,rgba(217,70,239,0.06),transparent_45%)]";

const mellstroyBadge = "border-violet-400/30 bg-violet-500/10 text-violet-200";

const rainbetCardShell =
  "border-emerald-500/20 bg-gradient-to-br from-[#020617] via-[#071422] to-[#041018] ring-1 ring-cyan-400/10 shadow-[0_4px_28px_-12px_rgba(34,211,238,0.18)]";

const rainbetCardGlow =
  "bg-[radial-gradient(ellipse_at_top_right,rgba(52,211,153,0.1),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(34,211,238,0.06),transparent_50%)]";

const rainbetBadge = "border-emerald-500/30 bg-emerald-500/10 text-emerald-300";

const gamdomCardShell =
  "border-emerald-400/25 bg-gradient-to-br from-[#061019] via-[#07131d]/95 to-[#091722] ring-1 ring-emerald-500/10 shadow-[0_4px_28px_-12px_rgba(0,245,138,0.18)]";

const gamdomCardGlow =
  "bg-[radial-gradient(ellipse_at_top_right,rgba(0,245,138,0.12),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(32,217,176,0.08),transparent_50%)]";

const gamdomBadge = "border-emerald-400/30 bg-emerald-500/10 text-emerald-200";

const gamdomPrimaryCta =
  "bg-[#00F58A] text-[#061019] transition-colors hover:bg-[#14E887] focus-visible:ring-emerald-400/50";

const gamdomSecondaryCta =
  "border-emerald-400/35 text-emerald-200 transition-colors hover:bg-emerald-500/10";

const xonbetCardShell =
  "border-cyan-400/25 bg-gradient-to-br from-[#070B1C] via-[#11133A]/95 to-[#070B1C] ring-1 ring-cyan-400/10 shadow-[0_4px_28px_-12px_rgba(0,217,255,0.18)]";

const xonbetCardGlow =
  "bg-[radial-gradient(ellipse_at_top_right,rgba(0,217,255,0.1),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(255,42,154,0.06),transparent_50%)]";

const xonbetBadge = "border-cyan-400/30 bg-cyan-500/10 text-cyan-200";

const xonbetPrimaryCta =
  "bg-[#FF2A9A] text-white transition-colors hover:bg-[#FF3CAC] focus-visible:ring-pink-400/50";

const xonbetSecondaryCta =
  "border-cyan-400/35 text-cyan-200 transition-colors hover:bg-cyan-500/10";

const vodkabetCardShell =
  "border-blue-500/25 bg-gradient-to-br from-[#071225] via-[#091733]/95 to-[#101B3D] ring-1 ring-violet-500/10 shadow-[0_4px_28px_-12px_rgba(59,130,246,0.18)]";

const vodkabetCardGlow =
  "bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.12),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(139,92,246,0.1),transparent_50%)]";

const vodkabetBadge = "border-violet-400/30 bg-violet-500/10 text-violet-200";

const vodkabetPrimaryCta =
  "bg-[#2563EB] text-white transition-colors hover:bg-[#3B82F6] focus-visible:ring-blue-400/50";

const vodkabetSecondaryCta =
  "border-violet-400/35 text-violet-200 transition-colors hover:bg-violet-500/10";

const awinturaCardShell =
  "border-[#D49A00]/25 bg-gradient-to-br from-[#090704] via-[#120D05]/95 to-[#272011] ring-1 ring-[#537A28]/10 shadow-[0_4px_28px_-12px_rgba(212,154,0,0.2)]";

const awinturaCardGlow =
  "bg-[radial-gradient(ellipse_at_top_right,rgba(242,182,0,0.12),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(83,122,40,0.08),transparent_50%)]";

const awinturaBadge = "border-[#D49A00]/30 bg-[#D49A00]/10 text-[#FFD54A]";

const awinturaPrimaryCta =
  "bg-[#FFD54A] text-[#090704] transition-colors hover:bg-[#F2B600] focus-visible:ring-yellow-300/50";

const awinturaSecondaryCta =
  "border-[#537A28]/40 text-[#6FA536] transition-colors hover:bg-[#537A28]/10";

const slotoroCardShell =
  "border-fuchsia-500/25 bg-gradient-to-br from-[#080014] via-[#130020]/95 to-[#22002F] ring-1 ring-fuchsia-500/10 shadow-[0_4px_28px_-12px_rgba(217,0,215,0.2)]";

const slotoroCardGlow =
  "bg-[radial-gradient(ellipse_at_top_right,rgba(240,43,203,0.12),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(244,255,0,0.06),transparent_50%)]";

const slotoroBadge = "border-fuchsia-400/30 bg-fuchsia-500/10 text-fuchsia-200";

const slotoroPrimaryCta =
  "bg-[#F4FF00] text-[#080014] transition-colors hover:bg-[#FFE600] focus-visible:ring-yellow-300/50";

const slotoroSecondaryCta =
  "border-fuchsia-400/35 text-fuchsia-200 transition-colors hover:bg-fuchsia-500/10";

const roobetCardShell =
  "border-violet-500/25 bg-gradient-to-br from-[#070817] via-[#0B0B22]/95 to-[#211C50] ring-1 ring-violet-500/10 shadow-[0_4px_28px_-12px_rgba(109,40,217,0.22)]";

const roobetCardGlow =
  "bg-[radial-gradient(ellipse_at_top_right,rgba(109,40,217,0.14),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(139,92,246,0.1),transparent_50%)]";

const roobetBadge = "border-violet-400/30 bg-violet-500/10 text-violet-200";

const roobetPrimaryCta =
  "bg-[#8B5CF6] text-white transition-colors hover:bg-[#A78BFA] focus-visible:ring-violet-400/50";

const roobetSecondaryCta =
  "border-violet-400/35 text-violet-200 transition-colors hover:bg-violet-500/10";

const mostbetCardShell =
  "border-[#0A5A9C]/25 bg-gradient-to-br from-[#031A36] via-[#052B52]/95 to-[#074477] ring-1 ring-[#34A5FF]/10 shadow-[0_4px_28px_-12px_rgba(10,90,156,0.22)]";

const mostbetCardGlow =
  "bg-[radial-gradient(ellipse_at_top_right,rgba(52,165,255,0.12),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(255,107,0,0.08),transparent_50%)]";

const mostbetBadge = "border-[#34A5FF]/30 bg-[#0A5A9C]/20 text-[#EAF4FF]";

const mostbetPrimaryCta =
  "bg-[#FF6B00] text-white transition-colors hover:bg-[#FF861A] focus-visible:ring-orange-400/50";

const mostbetSecondaryCta =
  "border-[#96DB00]/40 text-[#96DB00] transition-colors hover:bg-[#78C800]/10";

const sportsbetioCardShell =
  "border-[#36B958]/25 bg-gradient-to-br from-[#11161C] via-[#171E25]/95 to-[#202932] ring-1 ring-[#36B958]/10 shadow-[0_4px_28px_-12px_rgba(54,185,88,0.22)]";

const sportsbetioCardGlow =
  "bg-[radial-gradient(ellipse_at_top_right,rgba(54,185,88,0.14),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(69,208,103,0.1),transparent_50%)]";

const sportsbetioBadge = "border-[#36B958]/30 bg-[#36B958]/10 text-[#65E782]";

const sportsbetioPrimaryCta =
  "bg-[#45D067] text-[#11161C] transition-colors hover:bg-[#65E782] focus-visible:ring-emerald-400/50";

const sportsbetioSecondaryCta =
  "border-[#36B958]/40 text-[#65E782] transition-colors hover:bg-[#36B958]/10";

const bitcasinoCardShell =
  "border-[#6519A8]/25 bg-gradient-to-br from-[#12051F] via-[#210936]/95 to-[#35105A] ring-1 ring-[#7B22D3]/10 shadow-[0_4px_28px_-12px_rgba(123,34,211,0.22)]";

const bitcasinoCardGlow =
  "bg-[radial-gradient(ellipse_at_top_right,rgba(123,34,211,0.14),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(255,90,0,0.1),transparent_50%)]";

const bitcasinoBadge = "border-[#7B22D3]/30 bg-[#6519A8]/20 text-[#F5F1FA]";

const bitcasinoPrimaryCta =
  "bg-[#FF5A00] text-white transition-colors hover:bg-[#FF7417] focus-visible:ring-orange-400/50";

const bitcasinoSecondaryCta =
  "border-[#7B22D3]/40 text-[#F5F1FA] transition-colors hover:bg-[#6519A8]/20";

function OfferVisualPanel({ visual }: { visual: OfferCardVisual }) {
  const panelVariant = visual.variant ?? "dark";
  const compact = visual.compact === true;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border",
        compact ? "p-2.5" : "p-2 max-md:p-2.5 md:p-3 lg:p-4",
        panelVariant === "fivehundred" && compact && "p-3",
        panelVariant === "rainbet" && compact && "p-3",
        panelVariant === "gamdom" && compact && "p-3",
        panelVariant === "xonbet" && compact && "p-3",
        panelVariant === "vodkabet" && compact && "p-3",
        panelVariant === "awintura" && compact && "p-3",
        panelVariant === "slotoro" && compact && "p-3",
        panelVariant === "roobet" && compact && "p-3",
        panelVariant === "mostbet" && compact && "p-3",
        panelVariant === "sportsbetio" && compact && "p-3",
        panelVariant === "bitcasino" && compact && "p-3",
        visualPanelShell[panelVariant],
      )}
    >
      <div className={cn("pointer-events-none absolute inset-0", visualPanelGlow[panelVariant])} />

      {panelVariant === "betsson" ? (
        <>
          <div className="pointer-events-none absolute -right-2 -top-2 h-10 w-10 rounded-full border border-orange-400/20 bg-orange-500/10 md:-right-3 md:-top-3 md:h-14 md:w-14" />
          <div className="pointer-events-none absolute -bottom-3 -left-1 h-7 w-7 rounded-full border border-purple-400/15 bg-purple-500/8 md:-bottom-4 md:-left-2 md:h-10 md:w-10" />
          <div className="pointer-events-none absolute bottom-4 right-6 h-4 w-4 rounded-full bg-gradient-to-br from-[#FFB800] to-[#FF6B00] opacity-70 shadow-[0_0_12px_rgba(255,107,0,0.35)] md:bottom-6 md:right-8 md:h-5 md:w-5" />
          {!compact ? (
            <div className="pointer-events-none absolute right-10 top-4 hidden h-3 w-3 rounded-full bg-[#FFB800]/50 md:block" />
          ) : null}
        </>
      ) : null}

      {panelVariant === "betfury" ? (
        <>
          <div className="pointer-events-none absolute -right-2 -top-2 h-9 w-9 rounded-full border border-fuchsia-400/25 bg-fuchsia-500/10 md:h-12 md:w-12" />
          <div className="pointer-events-none absolute -bottom-3 -left-2 h-6 w-6 rounded-full border border-blue-400/20 bg-blue-500/10 md:h-8 md:w-8" />
          <div className="pointer-events-none absolute bottom-5 right-7 h-4 w-4 rounded-full bg-gradient-to-br from-[#EC4899] to-[#EF4444] opacity-80 shadow-[0_0_10px_rgba(236,72,153,0.35)] md:h-5 md:w-5" />
          <div className="pointer-events-none absolute right-12 top-5 hidden h-3 w-3 rotate-45 border border-blue-400/30 bg-blue-500/15 md:block" />
        </>
      ) : null}

      {panelVariant === "fivehundred" ? (
        <>
          <div className="pointer-events-none absolute -right-2 -top-2 h-8 w-8 rounded-full border border-pink-400/20 bg-pink-500/10 md:h-10 md:w-10" />
          <div className="pointer-events-none absolute -bottom-2 -left-1 h-5 w-5 rounded-full border border-red-500/15 bg-red-500/8 md:h-7 md:w-7" />
          <div className="pointer-events-none absolute bottom-4 right-6 h-3.5 w-3.5 rounded-full bg-gradient-to-br from-[#EC4899] to-[#BE123C] opacity-75 shadow-[0_0_8px_rgba(236,72,153,0.3)] md:h-4 md:w-4" />
        </>
      ) : null}

      {panelVariant === "onexbet" ? (
        <>
          <div className="pointer-events-none absolute -right-1 top-0 h-12 w-16 skew-x-[-12deg] border-l border-sky-400/15 bg-sky-500/5 md:h-14 md:w-20" />
          <div className="pointer-events-none absolute bottom-2 left-2 h-5 w-5 rounded-full border border-cyan-400/25 bg-cyan-500/10 md:h-6 md:w-6" />
          <div className="pointer-events-none absolute bottom-5 right-5 h-3 w-3 rounded-full bg-sky-400/60 shadow-[0_0_8px_rgba(56,189,248,0.35)] md:bottom-6 md:right-7" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-3 top-3 grid grid-cols-3 gap-0.5 opacity-40"
          >
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <span key={i} className="h-1 w-1 rounded-sm bg-sky-300/70" />
            ))}
          </div>
        </>
      ) : null}

      {panelVariant === "melbet" ? (
        <>
          <div className="pointer-events-none absolute -right-1 top-0 h-full w-8 skew-x-[-14deg] border-l border-[#FFB800]/20 bg-[#FFB800]/5 md:w-10" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-2 top-2 grid grid-cols-4 gap-px opacity-30 md:left-3 md:top-3"
          >
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <span key={i} className="h-0.5 w-2 rounded-full bg-white/40" />
            ))}
          </div>
          <div className="pointer-events-none absolute bottom-2.5 left-2.5 h-4 w-4 rounded-full border border-[#FFB800]/30 bg-[#FFB800]/10 md:bottom-3 md:left-3 md:h-5 md:w-5" />
          <div className="pointer-events-none absolute bottom-4 left-4 h-2.5 w-2.5 rounded-full border border-white/15 bg-white/5 md:bottom-5 md:left-5" />
          <div className="pointer-events-none absolute bottom-5 right-6 h-2 w-2 rotate-45 rounded-sm bg-[#FFB800]/70 shadow-[0_0_8px_rgba(255,184,0,0.35)] md:bottom-6 md:right-8" />
        </>
      ) : null}

      {panelVariant === "mellstroy" ? (
        <>
          <div className="pointer-events-none absolute -right-1 top-1 h-10 w-8 skew-x-[-16deg] border-l border-violet-400/25 bg-violet-500/8 md:h-12 md:w-10" />
          <div className="pointer-events-none absolute bottom-3 left-3 h-5 w-5 rounded-full border border-violet-400/30 bg-violet-500/10 md:bottom-4 md:left-4 md:h-6 md:w-6">
            <span className="absolute inset-[3px] rounded-full border border-blue-400/20" />
          </div>
          <div className="pointer-events-none absolute bottom-5 right-5 h-2 w-2 rotate-45 rounded-sm border border-fuchsia-400/40 bg-fuchsia-500/20 md:bottom-6 md:right-7" />
          <div className="pointer-events-none absolute right-8 top-4 h-1.5 w-1.5 rotate-45 rounded-sm bg-blue-400/50 md:right-10 md:top-5" />
          <div className="pointer-events-none absolute left-1/2 top-1 h-px w-12 -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-400/40 to-transparent md:w-16" />
        </>
      ) : null}

      {panelVariant === "xonbet" ? (
        <>
          <div className="pointer-events-none absolute right-3 top-3 h-5 w-5 rotate-45 border border-cyan-400/30 bg-cyan-500/10 md:right-3.5 md:top-3.5 md:h-6 md:w-6" />
          <div className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 rounded-sm border border-pink-400/35 bg-pink-500/10 md:bottom-3.5 md:left-3.5 md:h-5 md:w-5" />
          <div className="pointer-events-none absolute bottom-5 right-6 h-2 w-2 rounded-full bg-cyan-300/60 shadow-[0_0_8px_rgba(0,217,255,0.35)] md:bottom-6 md:right-8" />
          <div className="pointer-events-none absolute left-1/2 top-2 h-px w-10 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent md:w-14" />
        </>
      ) : null}

      {panelVariant === "vodkabet" ? (
        <>
          <div className="pointer-events-none absolute right-4 top-3 h-8 w-3 rounded-b-md border border-blue-400/30 bg-gradient-to-b from-violet-500/15 to-blue-500/10 md:right-5 md:top-3.5 md:h-9 md:w-3.5" />
          <div className="pointer-events-none absolute right-[1.35rem] top-2 h-1.5 w-1.5 rounded-full bg-cyan-300/50 md:right-[1.6rem] md:top-2.5" />
          <div className="pointer-events-none absolute right-5 top-1 h-1 w-1 rounded-full bg-violet-300/40 md:right-6" />
          <div className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 rounded-full border border-blue-400/35 bg-blue-500/15 shadow-[0_0_8px_rgba(56,189,248,0.25)] md:bottom-3.5 md:left-3.5 md:h-5 md:w-5" />
          <div className="pointer-events-none absolute bottom-6 right-6 h-2.5 w-2.5 rotate-45 rounded-sm border border-violet-400/40 bg-violet-500/15 md:bottom-7 md:right-8" />
          <div className="pointer-events-none absolute left-1/2 top-2 h-px w-10 -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-400/35 to-transparent md:w-14" />
        </>
      ) : null}

      {panelVariant === "awintura" ? (
        <>
          <div className="pointer-events-none absolute right-3 top-3 h-5 w-5 md:right-3.5 md:top-3.5 md:h-6 md:w-6">
            <span className="absolute inset-x-1 top-0 h-1 rounded-sm bg-[#FFD54A]/50" />
            <span className="absolute inset-x-0.5 top-1 h-2 rounded-t-sm border border-[#D49A00]/40 bg-[#D49A00]/15" />
            <span className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#FFD54A]/60" />
          </div>
          <div className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 rounded-full border border-[#FFD54A]/40 bg-[#FFD54A]/15 shadow-[0_0_8px_rgba(255,213,74,0.25)] md:bottom-3.5 md:left-3.5 md:h-5 md:w-5" />
          <div className="pointer-events-none absolute bottom-6 right-6 h-2 w-2 rotate-45 border border-[#537A28]/40 bg-[#537A28]/25 md:bottom-7 md:right-8 md:h-2.5 md:w-2.5" />
          <div className="pointer-events-none absolute left-1/2 top-2 h-px w-10 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#D49A00]/35 to-transparent md:w-14" />
          <div className="pointer-events-none absolute right-10 top-5 hidden h-2 w-2 rotate-12 rounded-sm border border-[#6FA536]/35 bg-[#537A28]/20 md:block" />
        </>
      ) : null}

      {panelVariant === "slotoro" ? (
        <>
          <div className="pointer-events-none absolute right-3 top-3 h-7 w-7 rounded-full border-2 border-[#F4FF00]/35 md:right-3.5 md:top-3.5 md:h-8 md:w-8">
            <span className="absolute inset-[3px] rounded-full border border-fuchsia-400/25" />
            <span className="absolute left-1/2 top-0 h-1.5 w-0.5 -translate-x-1/2 bg-[#F4FF00]/60" />
            <span className="absolute bottom-0 left-1/2 h-1.5 w-0.5 -translate-x-1/2 bg-[#F4FF00]/50" />
            <span className="absolute left-0 top-1/2 h-0.5 w-1.5 -translate-y-1/2 bg-[#F4FF00]/50" />
            <span className="absolute right-0 top-1/2 h-0.5 w-1.5 -translate-y-1/2 bg-[#F4FF00]/50" />
          </div>
          <div className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 rounded-full border border-[#FFE600]/40 bg-[#FFE600]/15 shadow-[0_0_8px_rgba(244,255,0,0.25)] md:bottom-3.5 md:left-3.5 md:h-5 md:w-5" />
          <div className="pointer-events-none absolute bottom-6 right-6 h-2 w-2 rotate-45 border border-fuchsia-400/40 bg-fuchsia-500/20 md:bottom-7 md:right-8 md:h-2.5 md:w-2.5" />
          <div className="pointer-events-none absolute left-1/2 top-2 h-px w-10 -translate-x-1/2 bg-gradient-to-r from-transparent via-fuchsia-400/35 to-transparent md:w-14" />
          <div className="pointer-events-none absolute right-10 top-5 hidden h-1 w-3 rounded-full bg-gradient-to-r from-[#D900D7]/50 to-[#F4FF00]/40 md:block" />
        </>
      ) : null}

      {panelVariant === "gamdom" ? (
        <>
          <div className="pointer-events-none absolute left-[55%] top-[45%] h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/10 blur-2xl md:h-20 md:w-20" />
          <div className="pointer-events-none absolute right-3 top-3 h-5 w-5 rounded-full border-2 border-emerald-400/35 md:right-3.5 md:top-3.5 md:h-6 md:w-6">
            <span className="absolute inset-[3px] rounded-full border border-[#20D9B0]/30" />
          </div>
          <div className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 rounded-full border border-[#00F58A]/40 bg-emerald-500/15 shadow-[0_0_10px_rgba(0,245,138,0.28)] md:bottom-3.5 md:left-3.5 md:h-5 md:w-5" />
          <div className="pointer-events-none absolute bottom-5 right-6 h-2 w-2 rotate-45 rounded-sm bg-gradient-to-br from-[#00F58A]/70 to-[#20D9B0]/50 shadow-[0_0_8px_rgba(32,217,176,0.35)] md:bottom-6 md:right-8 md:h-2.5 md:w-2.5" />
          <div className="pointer-events-none absolute right-10 top-5 hidden h-1.5 w-1.5 rounded-full bg-[#A6FF4D]/60 md:block" />
        </>
      ) : null}

      {panelVariant === "roobet" ? (
        <>
          <div className="pointer-events-none absolute left-[55%] top-[45%] h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-2xl md:h-20 md:w-20" />
          <div className="pointer-events-none absolute right-3 top-3 h-5 w-5 md:right-3.5 md:top-3.5 md:h-6 md:w-6">
            <span className="absolute inset-x-1 top-0 h-1 rounded-sm bg-[#A78BFA]/50" />
            <span className="absolute inset-x-0.5 top-1 h-2 rounded-t-sm border border-violet-400/35 bg-violet-500/15" />
            <span className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#B7FF00]/60" />
          </div>
          <div className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 rounded-full border border-[#54D900]/40 bg-[#B7FF00]/15 shadow-[0_0_8px_rgba(183,255,0,0.25)] md:bottom-3.5 md:left-3.5 md:h-5 md:w-5" />
          <div className="pointer-events-none absolute bottom-6 right-6 h-3 w-3 rounded-full border border-violet-400/35 bg-violet-500/15 md:bottom-7 md:right-8" />
          <div className="pointer-events-none absolute left-1/2 top-2 h-px w-10 -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-400/35 to-transparent md:w-14" />
          <div className="pointer-events-none absolute right-10 top-5 hidden h-2 w-2 rotate-45 border border-[#54D900]/35 bg-[#B7FF00]/20 md:block" />
        </>
      ) : null}

      {panelVariant === "mostbet" ? (
        <>
          <div className="pointer-events-none absolute left-[55%] top-[45%] h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#34A5FF]/10 blur-2xl md:h-20 md:w-20" />
          <div className="pointer-events-none absolute right-3 top-3 h-5 w-5 rounded-full border-2 border-[#34A5FF]/35 md:right-3.5 md:top-3.5 md:h-6 md:w-6" />
          <div className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 rounded-full border border-[#96DB00]/40 bg-[#78C800]/15 shadow-[0_0_8px_rgba(150,219,0,0.25)] md:bottom-3.5 md:left-3.5 md:h-5 md:w-5" />
          <div className="pointer-events-none absolute bottom-5 right-6 h-2.5 w-2.5 rotate-45 rounded-sm bg-gradient-to-br from-[#FF6B00]/70 to-[#FF861A]/50 md:bottom-6 md:right-8" />
          <div className="pointer-events-none absolute left-1/2 top-2 h-px w-10 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#34A5FF]/35 to-transparent md:w-14" />
          <div className="pointer-events-none absolute right-10 top-5 hidden h-1.5 w-3 rounded-full bg-[#FF6B00]/50 md:block" />
        </>
      ) : null}

      {panelVariant === "sportsbetio" ? (
        <>
          <div className="pointer-events-none absolute left-[55%] top-[45%] h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#36B958]/10 blur-2xl md:h-20 md:w-20" />
          <div className="pointer-events-none absolute right-3 top-3 h-5 w-5 md:right-3.5 md:top-3.5 md:h-6 md:w-6">
            <span className="absolute inset-x-1 top-0 h-1 rounded-sm bg-[#65E782]/50" />
            <span className="absolute inset-x-0.5 top-1 h-2 rounded-t-sm border border-[#36B958]/35 bg-[#36B958]/15" />
          </div>
          <div className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 rounded-full border border-[#45D067]/40 bg-[#36B958]/15 shadow-[0_0_8px_rgba(69,208,103,0.25)] md:bottom-3.5 md:left-3.5 md:h-5 md:w-5" />
          <div className="pointer-events-none absolute bottom-5 right-6 h-2.5 w-2.5 rotate-45 rounded-sm bg-[#45D067]/60 md:bottom-6 md:right-8" />
          <div className="pointer-events-none absolute left-1/2 top-2 h-px w-10 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#36B958]/35 to-transparent md:w-14" />
        </>
      ) : null}

      {panelVariant === "bitcasino" ? (
        <>
          <div className="pointer-events-none absolute left-[55%] top-[45%] h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7B22D3]/10 blur-2xl md:h-20 md:w-20" />
          <div className="pointer-events-none absolute right-3 top-3 h-4 w-4 rounded-full border-2 border-[#FFCC4D]/40 bg-[#FFCC4D]/15 md:right-3.5 md:top-3.5 md:h-5 md:w-5" />
          <div className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 rotate-45 rounded-sm border border-[#6519A8]/40 bg-[#7B22D3]/20 md:bottom-3.5 md:left-3.5 md:h-4 md:w-4" />
          <div className="pointer-events-none absolute bottom-5 right-6 h-2.5 w-2.5 rounded-full bg-[#FF5A00]/60 md:bottom-6 md:right-8" />
          <div className="pointer-events-none absolute left-1/2 top-2 h-px w-10 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#7B22D3]/35 to-transparent md:w-14" />
        </>
      ) : null}

      {panelVariant === "rainbet" ? (
        <>
          {/* Reward glow halo */}
          <div className="pointer-events-none absolute left-[58%] top-[42%] h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/10 blur-2xl md:h-24 md:w-24" />
          {/* Chain links — interlocking rings */}
          <div className="pointer-events-none absolute right-2.5 top-2.5 h-[1.125rem] w-[1.125rem] rounded-full border-2 border-cyan-400/35 md:right-3.5 md:top-3.5 md:h-5 md:w-5" />
          <div className="pointer-events-none absolute right-[1.1rem] top-[1.1rem] h-3.5 w-3.5 rounded-full border-2 border-emerald-400/40 md:right-[1.35rem] md:top-[1.35rem] md:h-4 md:w-4" />
          {/* Coin stack */}
          <div className="pointer-events-none absolute bottom-2.5 left-2.5 h-4 w-4 rounded-full border border-emerald-400/45 bg-emerald-500/15 shadow-[0_0_10px_rgba(52,211,153,0.28)] md:bottom-3.5 md:left-3.5 md:h-5 md:w-5">
            <span className="absolute inset-[3px] rounded-full border border-cyan-300/25" />
          </div>
          <div className="pointer-events-none absolute bottom-3.5 left-4 h-3 w-3 rounded-full border border-cyan-400/30 bg-cyan-500/10 md:bottom-4 md:left-5 md:h-3.5 md:w-3.5" />
          {/* Crypto drop accents */}
          <div className="pointer-events-none absolute bottom-5 right-6 h-2 w-2 rotate-45 rounded-sm bg-gradient-to-br from-emerald-400/70 to-cyan-400/50 shadow-[0_0_8px_rgba(34,211,238,0.35)] md:bottom-6 md:right-8 md:h-2.5 md:w-2.5" />
          <div className="pointer-events-none absolute bottom-7 right-9 h-1.5 w-1.5 rounded-full bg-cyan-300/50 blur-[0.5px] md:bottom-8 md:right-11" />
          {/* VIP tier ticks */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-1.5 left-1/2 flex -translate-x-1/2 gap-0.5 opacity-50"
          >
            <span className="h-0.5 w-2 rounded-full bg-emerald-400/60" />
            <span className="h-0.5 w-3 rounded-full bg-emerald-400/80" />
            <span className="h-0.5 w-4 rounded-full bg-cyan-400/70" />
            <span className="h-0.5 w-2.5 rounded-full bg-emerald-300/50" />
          </div>
        </>
      ) : null}

      <div className={cn("relative", compact ? "space-y-1.5" : "space-y-1 md:space-y-2")}>
        {visual.eyebrow ? (
          <p
            className={cn(
              "font-semibold uppercase tracking-wide",
              compact ? "text-[0.6rem]" : "text-[0.6rem] md:text-[0.65rem]",
              panelVariant === "betsson" && "text-orange-300/90",
              panelVariant === "betfury" && "text-fuchsia-300/90",
              panelVariant === "fivehundred" && "text-pink-300/90",
              panelVariant === "rainbet" && "text-cyan-300/85",
              panelVariant === "onexbet" && "text-sky-300/90",
              panelVariant === "melbet" && "text-[#FFC300]/90",
              panelVariant === "mellstroy" && "text-violet-300/90",
              panelVariant === "gamdom" && "text-emerald-300/90",
              panelVariant === "xonbet" && "text-cyan-300/90",
              panelVariant === "vodkabet" && "text-violet-300/90",
              panelVariant === "awintura" && "text-[#FFD54A]/90",
              panelVariant === "slotoro" && "text-fuchsia-300/90",
              panelVariant === "roobet" && "text-violet-300/90",
              panelVariant === "mostbet" && "text-[#34A5FF]/90",
              panelVariant === "sportsbetio" && "text-[#65E782]/90",
              panelVariant === "bitcasino" && "text-[#FF7417]/90",
              panelVariant !== "betsson" &&
                panelVariant !== "betfury" &&
                panelVariant !== "fivehundred" &&
                panelVariant !== "rainbet" &&
                panelVariant !== "onexbet" &&
                panelVariant !== "melbet" &&
                panelVariant !== "mellstroy" &&
                panelVariant !== "gamdom" &&
                panelVariant !== "xonbet" &&
                panelVariant !== "vodkabet" &&
                panelVariant !== "awintura" &&
                panelVariant !== "slotoro" &&
                panelVariant !== "roobet" &&
                panelVariant !== "mostbet" &&
                panelVariant !== "sportsbetio" &&
                panelVariant !== "bitcasino" &&
                "text-muted-foreground",
            )}
          >
            {visual.eyebrow}
          </p>
        ) : null}
        <p
          className={cn(
            "font-extrabold leading-tight tracking-tight text-[#F5F5F0]",
            compact ? "text-base" : "text-base md:text-lg lg:text-xl",
            panelVariant === "betsson" &&
              "bg-gradient-to-r from-[#FFB800] via-[#FFC300] to-[#FF8C00] bg-clip-text text-transparent",
            panelVariant === "betfury" &&
              "bg-gradient-to-r from-[#F472B6] via-[#EF4444] to-[#60A5FA] bg-clip-text text-transparent",
            panelVariant === "fivehundred" &&
              "bg-gradient-to-r from-[#F472B6] via-[#E11D48] to-[#FB7185] bg-clip-text text-transparent",
            panelVariant === "rainbet" &&
              "bg-gradient-to-r from-[#6EE7B7] via-[#34D399] to-[#22D3EE] bg-clip-text text-transparent",
            panelVariant === "onexbet" &&
              "bg-gradient-to-r from-[#7DD3FC] via-[#38BDF8] to-[#2563EB] bg-clip-text text-transparent",
            panelVariant === "melbet" &&
              "bg-gradient-to-r from-[#FFB800] via-[#FFC300] to-[#FFE066] bg-clip-text text-transparent",
            panelVariant === "mellstroy" &&
              "bg-gradient-to-r from-[#C4B5FD] via-[#A78BFA] to-[#60A5FA] bg-clip-text text-transparent",
            panelVariant === "gamdom" &&
              "bg-gradient-to-r from-[#00F58A] via-[#14E887] to-[#A6FF4D] bg-clip-text text-transparent",
            panelVariant === "xonbet" &&
              "bg-gradient-to-r from-[#23E6FF] via-[#00D9FF] to-[#FF2A9A] bg-clip-text text-transparent",
            panelVariant === "vodkabet" &&
              "bg-gradient-to-r from-[#60A5FA] via-[#8B5CF6] to-[#A78BFA] bg-clip-text text-transparent",
            panelVariant === "awintura" &&
              "bg-gradient-to-r from-[#FFD54A] via-[#F2B600] to-[#6FA536] bg-clip-text text-transparent",
            panelVariant === "slotoro" &&
              "bg-gradient-to-r from-[#F4FF00] via-[#FFE600] to-[#F02BCB] bg-clip-text text-transparent",
            panelVariant === "roobet" &&
              "bg-gradient-to-r from-[#A78BFA] via-[#8B5CF6] to-[#B7FF00] bg-clip-text text-transparent",
            panelVariant === "mostbet" &&
              "bg-gradient-to-r from-[#FF861A] via-[#FF6B00] to-[#96DB00] bg-clip-text text-transparent",
            panelVariant === "sportsbetio" &&
              "bg-gradient-to-r from-[#65E782] via-[#45D067] to-[#36B958] bg-clip-text text-transparent",
            panelVariant === "bitcasino" &&
              "bg-gradient-to-r from-[#FF7417] via-[#8F2BFF] to-[#FFCC4D] bg-clip-text text-transparent",
          )}
        >
          {visual.title}
        </p>
        {visual.subtitle ? (
          <p
            className={cn(
              "text-muted-foreground",
              compact ? "text-[0.7rem]" : "text-[0.7rem] md:text-xs",
            )}
          >
            {visual.subtitle}
          </p>
        ) : null}
        {visual.chips && visual.chips.length > 0 ? (
          <ul className="flex flex-wrap gap-1">
            {visual.chips.map((chip) => (
              <li
                key={chip}
                className={cn(
                  "rounded border font-medium",
                  compact ? "px-1.5 py-0.5 text-[0.6rem]" : "px-1.5 py-0.5 text-[0.6rem] md:px-2 md:text-[0.65rem]",
                  panelVariant === "betsson"
                    ? "border-orange-500/25 bg-orange-500/10 text-orange-200/90"
                    : panelVariant === "betfury"
                      ? "border-fuchsia-500/25 bg-fuchsia-500/10 text-fuchsia-200/90"
                      : panelVariant === "fivehundred"
                        ? "border-pink-500/25 bg-pink-500/10 text-pink-200/90"
                        : panelVariant === "rainbet"
                          ? "border-cyan-500/20 bg-emerald-500/8 text-cyan-100/90"
                          : panelVariant === "onexbet"
                            ? "border-sky-400/25 bg-sky-500/10 text-sky-100/90"
                            : panelVariant === "melbet"
                              ? "border-[#FFB800]/30 bg-[#FFB800]/10 text-[#FFE066]/90"
                              : panelVariant === "mellstroy"
                                ? "border-violet-500/25 bg-violet-500/10 text-violet-100/90"
                                : panelVariant === "gamdom"
                                  ? "border-emerald-400/25 bg-emerald-500/10 text-emerald-100/90"
                                  : panelVariant === "xonbet"
                                    ? "border-cyan-400/25 bg-cyan-500/10 text-cyan-100/90"
                                    : panelVariant === "vodkabet"
                                      ? "border-violet-500/25 bg-violet-500/10 text-violet-100/90"
                                      : panelVariant === "awintura"
                                        ? "border-[#D49A00]/25 bg-[#D49A00]/10 text-[#FFD54A]/90"
                                        : panelVariant === "slotoro"
                                          ? "border-fuchsia-500/25 bg-fuchsia-500/10 text-fuchsia-100/90"
                                          : panelVariant === "roobet"
                                            ? "border-[#54D900]/25 bg-violet-500/10 text-violet-100/90"
                                            : panelVariant === "mostbet"
                                              ? "border-[#96DB00]/25 bg-[#0A5A9C]/15 text-[#EAF4FF]/90"
                                              : panelVariant === "sportsbetio"
                                                ? "border-[#36B958]/25 bg-[#36B958]/10 text-[#DCE5EC]/90"
                                                : panelVariant === "bitcasino"
                                                  ? "border-[#7B22D3]/25 bg-[#6519A8]/15 text-[#F5F1FA]/90"
                                      : "border-white/15 bg-white/5 text-muted-foreground",
                )}
              >
                {chip}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

type OfferCardCtasProps = {
  primaryCtaLabel: string;
  primaryCtaHref: string;
  primaryCtaIsAffiliate: boolean;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  tertiaryCtaLabel?: string;
  tertiaryCtaHref?: string;
  primaryButtonClassName?: string;
  secondaryButtonClassName?: string;
};

const tertiaryCtaClassName =
  "inline-flex min-h-11 w-full items-center justify-center rounded-md border border-white/10 bg-transparent px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:border-white/20 hover:bg-white/5 hover:text-foreground";

function OfferCardCtas({
  primaryCtaLabel,
  primaryCtaHref,
  primaryCtaIsAffiliate,
  secondaryCtaLabel,
  secondaryCtaHref,
  tertiaryCtaLabel,
  tertiaryCtaHref,
  primaryButtonClassName,
  secondaryButtonClassName,
}: OfferCardCtasProps) {
  return (
    <>
      <a
        href={primaryCtaHref}
        target="_blank"
        rel={primaryCtaIsAffiliate ? AFFILIATE_REL : OFFICIAL_REL}
        className={cn(
          "inline-flex min-h-11 w-full items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold",
          primaryButtonClassName ??
            "bg-primary text-primary-foreground transition-colors hover:bg-[var(--jm-gold-strong)]",
          focusRing,
        )}
      >
        {primaryCtaLabel}
      </a>
      {secondaryCtaLabel && secondaryCtaHref ? (
        isExternalHref(secondaryCtaHref) ? (
          <a
            href={secondaryCtaHref}
            target="_blank"
            rel={AFFILIATE_REL}
            className={cn(
              "inline-flex min-h-11 w-full items-center justify-center rounded-md border px-5 py-2.5 text-sm font-semibold",
              secondaryButtonClassName ??
                "border-primary/40 text-primary transition-colors hover:bg-primary/10",
              focusRing,
            )}
          >
            {secondaryCtaLabel}
          </a>
        ) : (
          <Link
            href={secondaryCtaHref}
            className={cn(
              "inline-flex min-h-11 w-full items-center justify-center rounded-md border px-5 py-2.5 text-sm font-semibold",
              secondaryButtonClassName ??
                "border-primary/40 text-primary transition-colors hover:bg-primary/10",
              focusRing,
            )}
          >
            {secondaryCtaLabel}
          </Link>
        )
      ) : null}
      {tertiaryCtaLabel && tertiaryCtaHref ? (
        isExternalHref(tertiaryCtaHref) ? (
          <a
            href={tertiaryCtaHref}
            target="_blank"
            rel={AFFILIATE_REL}
            className={cn(tertiaryCtaClassName, focusRing)}
          >
            {tertiaryCtaLabel}
          </a>
        ) : (
          <Link href={tertiaryCtaHref} className={cn(tertiaryCtaClassName, focusRing)}>
            {tertiaryCtaLabel}
          </Link>
        )
      ) : null}
    </>
  );
}

/**
 * Premium affiliate offer card for approved Mexico/LATAM partners.
 * CSS gradients only — no external imagery required beyond optional operator logo.
 */
export function OfferCard({
  operatorName,
  operatorId,
  badge,
  headline,
  subheadline,
  offerText,
  promoCode,
  paymentBadges,
  featureBullets,
  primaryCtaLabel,
  primaryCtaHref,
  primaryCtaIsAffiliate = true,
  secondaryCtaLabel,
  secondaryCtaHref,
  tertiaryCtaLabel,
  tertiaryCtaHref,
  badgeClassName,
  termsNote,
  responsibleNote,
  visual,
  visualVariant = "dark",
  mobileMaxBullets,
  emphasis = "standard",
  headingLevel = "h3",
  logo,
  className,
  compactComparison = false,
  fillHeight = false,
}: OfferCardProps) {
  const isRainbetBranded = operatorId === "rainbet" || visual?.variant === "rainbet";
  const isOnexbetBranded = operatorId === "1xbet" || visual?.variant === "onexbet";
  const isMelbetBranded = operatorId === "melbet" || visual?.variant === "melbet";
  const isMellstroyBranded = operatorId === "mellstroy" || visual?.variant === "mellstroy";
  const isGamdomBranded = operatorId === "gamdom" || visual?.variant === "gamdom";
  const isXonbetBranded = operatorId === "xonbet" || visual?.variant === "xonbet";
  const isVodkabetBranded = operatorId === "vodkabet" || visual?.variant === "vodkabet";
  const isAwinturaBranded = operatorId === "awintura" || visual?.variant === "awintura";
  const isSlotoroBranded = operatorId === "slotoro" || visual?.variant === "slotoro";
  const isRoobetBranded = operatorId === "roobet" || visual?.variant === "roobet";
  const isMostbetBranded = operatorId === "mostbet" || visual?.variant === "mostbet";
  const isSportsbetioBranded = operatorId === "sportsbetio" || visual?.variant === "sportsbetio";
  const isBitcasinoBranded = operatorId === "bitcasino" || visual?.variant === "bitcasino";
  const variant =
    visualVariant === "crypto" &&
    emphasis === "comparison-secondary" &&
    !isRainbetBranded &&
    !isOnexbetBranded &&
    !isMelbetBranded &&
    !isMellstroyBranded &&
    !isGamdomBranded &&
    !isXonbetBranded &&
    !isVodkabetBranded &&
    !isAwinturaBranded &&
    !isSlotoroBranded &&
    !isRoobetBranded &&
    !isMostbetBranded &&
    !isSportsbetioBranded &&
    !isBitcasinoBranded
      ? "dark"
      : visualVariant;
  const showInlineOfferText = !visual;
  const hidePaymentBadgesOnMobile = Boolean(visual?.chips && visual.chips.length > 0);
  const emphasisOverlay = isRainbetBranded
    ? rainbetCardGlow
    : isOnexbetBranded
      ? onexbetCardGlow
      : isMelbetBranded
        ? melbetCardGlow
        : isMellstroyBranded
          ? mellstroyCardGlow
          : isGamdomBranded
            ? gamdomCardGlow
            : isXonbetBranded
              ? xonbetCardGlow
              : isVodkabetBranded
                ? vodkabetCardGlow
                : isAwinturaBranded
                  ? awinturaCardGlow
                  : isSlotoroBranded
                    ? slotoroCardGlow
                    : isRoobetBranded
                      ? roobetCardGlow
                      : isMostbetBranded
                        ? mostbetCardGlow
                        : isSportsbetioBranded
                          ? sportsbetioCardGlow
                          : isBitcasinoBranded
                            ? bitcasinoCardGlow
              : emphasisGlow[emphasis];
  const showVariantGlow =
    emphasis === "standard" &&
    !isRainbetBranded &&
    !isOnexbetBranded &&
    !isMelbetBranded &&
    !isMellstroyBranded &&
    !isGamdomBranded &&
    !isXonbetBranded &&
    !isVodkabetBranded &&
    !isAwinturaBranded &&
    !isSlotoroBranded &&
    !isRoobetBranded &&
    !isMostbetBranded &&
    !isSportsbetioBranded &&
    !isBitcasinoBranded;
  const brandedCtaProps = isGamdomBranded
    ? { primaryButtonClassName: gamdomPrimaryCta, secondaryButtonClassName: gamdomSecondaryCta }
    : isXonbetBranded
      ? { primaryButtonClassName: xonbetPrimaryCta, secondaryButtonClassName: xonbetSecondaryCta }
      : isVodkabetBranded
        ? { primaryButtonClassName: vodkabetPrimaryCta, secondaryButtonClassName: vodkabetSecondaryCta }
        : isAwinturaBranded
          ? { primaryButtonClassName: awinturaPrimaryCta, secondaryButtonClassName: awinturaSecondaryCta }
          : isSlotoroBranded
            ? { primaryButtonClassName: slotoroPrimaryCta, secondaryButtonClassName: slotoroSecondaryCta }
            : isRoobetBranded
              ? { primaryButtonClassName: roobetPrimaryCta, secondaryButtonClassName: roobetSecondaryCta }
              : isMostbetBranded
                ? { primaryButtonClassName: mostbetPrimaryCta, secondaryButtonClassName: mostbetSecondaryCta }
                : isSportsbetioBranded
                  ? {
                      primaryButtonClassName: sportsbetioPrimaryCta,
                      secondaryButtonClassName: sportsbetioSecondaryCta,
                    }
                  : isBitcasinoBranded
                    ? {
                        primaryButtonClassName: bitcasinoPrimaryCta,
                        secondaryButtonClassName: bitcasinoSecondaryCta,
                      }
      : {};
  const Heading = headingLevel;

  return (
    <article
      className={cn(
        "relative overflow-hidden rounded-2xl border p-3 sm:p-5 lg:p-6",
        fillHeight && "md:flex md:h-full md:flex-col",
        emphasis === "comparison-secondary" &&
          !isRainbetBranded &&
          !isGamdomBranded &&
          !isXonbetBranded &&
          !isVodkabetBranded &&
          !isAwinturaBranded &&
          !isSlotoroBranded &&
          !isRoobetBranded &&
          !isMostbetBranded &&
          !isSportsbetioBranded &&
          !isBitcasinoBranded &&
          "sm:p-4",
        isRainbetBranded
          ? rainbetCardShell
          : isOnexbetBranded
            ? onexbetCardShell
            : isMelbetBranded
              ? melbetCardShell
              : isMellstroyBranded
                ? mellstroyCardShell
                : isGamdomBranded
                  ? gamdomCardShell
                  : isXonbetBranded
                    ? xonbetCardShell
                    : isVodkabetBranded
                      ? vodkabetCardShell
                      : isAwinturaBranded
                        ? awinturaCardShell
                        : isSlotoroBranded
                          ? slotoroCardShell
                          : isRoobetBranded
                            ? roobetCardShell
                            : isMostbetBranded
                              ? mostbetCardShell
                              : isSportsbetioBranded
                                ? sportsbetioCardShell
                                : isBitcasinoBranded
                                  ? bitcasinoCardShell
                              : variantShell[variant],
        !isRainbetBranded &&
          !isOnexbetBranded &&
          !isMelbetBranded &&
          !isMellstroyBranded &&
          !isGamdomBranded &&
          !isXonbetBranded &&
          !isVodkabetBranded &&
          !isAwinturaBranded &&
          !isSlotoroBranded &&
          !isRoobetBranded &&
          !isMostbetBranded &&
          !isSportsbetioBranded &&
          !isBitcasinoBranded &&
          emphasisShell[emphasis],
        className,
      )}
      aria-label={`${primaryCtaIsAffiliate ? "Oferta de" : "Información de"} ${operatorName}`}
    >
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0",
          showVariantGlow && variantGlow[variant],
          emphasisOverlay,
        )}
      />

      <div
        className={cn(
          "relative flex flex-col gap-3 lg:flex-row lg:justify-between",
          fillHeight && "md:h-full md:min-h-0 md:flex-1 lg:items-stretch",
          compactComparison ? "lg:items-start lg:gap-3" : "lg:items-stretch lg:gap-5",
        )}
      >
        <div
          className={cn(
            "min-w-0 flex-1",
            fillHeight && "md:flex md:min-h-0 md:flex-1 md:flex-col",
            compactComparison ? "space-y-2 sm:space-y-2.5" : "space-y-2.5 sm:space-y-3 lg:space-y-4",
          )}
        >
          <div className="flex flex-wrap items-start gap-2.5 sm:gap-3">
            <OperatorLogo name={operatorName} logo={logo} operatorId={operatorId} />
            <div className="min-w-0 flex-1 space-y-1">
              {badge ? (
                <span
                  className={cn(
                    "inline-flex items-center rounded-full border px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide",
                    badgeClassName ??
                      (isRainbetBranded
                        ? rainbetBadge
                        : isOnexbetBranded
                          ? onexbetBadge
                          : isMelbetBranded
                            ? melbetBadge
                            : isMellstroyBranded
                              ? mellstroyBadge
                              : isGamdomBranded
                                ? gamdomBadge
                                : isXonbetBranded
                                  ? xonbetBadge
                                  : isVodkabetBranded
                                    ? vodkabetBadge
                                    : isAwinturaBranded
                                      ? awinturaBadge
                                      : isSlotoroBranded
                                        ? slotoroBadge
                                        : isRoobetBranded
                                          ? roobetBadge
                                          : isMostbetBranded
                                            ? mostbetBadge
                                            : isSportsbetioBranded
                                              ? sportsbetioBadge
                                              : isBitcasinoBranded
                                                ? bitcasinoBadge
                                  : (emphasisBadge[emphasis] ?? variantBadge[variant])),
                  )}
                >
                  {badge}
                </span>
              ) : null}
              <Heading className="text-base font-bold tracking-tight text-foreground sm:text-lg lg:text-xl">
                {headline}
              </Heading>
              {subheadline ? (
                <p className="text-xs font-medium leading-snug text-muted-foreground sm:text-sm">
                  {subheadline}
                </p>
              ) : null}
            </div>
          </div>

          <div className="flex flex-col gap-2 lg:hidden">
            <OfferCardCtas
              primaryCtaLabel={primaryCtaLabel}
              primaryCtaHref={primaryCtaHref}
              primaryCtaIsAffiliate={primaryCtaIsAffiliate}
              secondaryCtaLabel={secondaryCtaLabel}
              secondaryCtaHref={secondaryCtaHref}
              tertiaryCtaLabel={tertiaryCtaLabel}
              tertiaryCtaHref={tertiaryCtaHref}
              {...brandedCtaProps}
            />
            {visual ? <OfferVisualPanel visual={visual} /> : null}
          </div>

          {showInlineOfferText ? (
            <p
              className={cn(
                "rounded-lg border px-3 py-2 text-sm font-extrabold tracking-tight text-foreground sm:py-2.5 sm:text-base lg:text-lg",
                variant === "mexico" || variant === "fiat"
                  ? "border-primary/30 bg-primary/8 text-primary"
                  : variant === "sportsbook"
                    ? "border-emerald-500/25 bg-emerald-500/8 text-emerald-300"
                    : "border-white/10 bg-[#16233f]/60",
              )}
            >
              {offerText}
            </p>
          ) : null}

          {promoCode ? (
            <p className="text-[0.7rem] leading-snug text-muted-foreground sm:text-xs">
              Código promocional:{" "}
              <span className="font-mono font-semibold text-foreground">{promoCode}</span>
            </p>
          ) : null}

          {paymentBadges.length > 0 ? (
            <ul
              className={cn(
                "flex flex-wrap gap-1.5",
                hidePaymentBadgesOnMobile && "max-md:hidden",
              )}
              aria-label="Métodos de pago o mercados"
            >
              {paymentBadges.map((label) => (
                <li
                  key={label}
                  className="inline-flex items-center rounded-md border border-border/60 bg-[#16233f]/80 px-2 py-0.5 text-[0.7rem] font-medium text-muted-foreground sm:px-2.5 sm:py-1 sm:text-xs"
                >
                  {label}
                </li>
              ))}
            </ul>
          ) : null}

          {featureBullets.length > 0 ? (
            <ul
              className={cn(
                "grid gap-1.5",
                compactComparison ? "grid-cols-1" : "md:grid-cols-2 md:gap-2",
              )}
            >
              {featureBullets.map((bullet, index) => (
                <li
                  key={bullet}
                  className={cn(
                    "flex gap-2 text-xs leading-snug text-muted-foreground sm:text-sm",
                    mobileMaxBullets != null &&
                      index >= mobileMaxBullets &&
                      "max-md:hidden",
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "mt-0.5 shrink-0",
                      isGamdomBranded
                        ? "text-[#00F58A]"
                        : isXonbetBranded
                          ? "text-cyan-400"
                          : isVodkabetBranded
                            ? "text-violet-400"
                          : isMostbetBranded
                            ? "text-[#96DB00]"
                            : isSportsbetioBranded
                              ? "text-[#65E782]"
                              : isBitcasinoBranded
                                ? "text-[#FF7417]"
                          : isRainbetBranded
                          ? "text-emerald-400"
                          : isOnexbetBranded
                            ? "text-sky-400"
                            : "text-primary",
                    )}
                  >
                    ✓
                  </span>
                  {bullet}
                </li>
              ))}
            </ul>
          ) : null}

          <div
            className={cn(
              "space-y-1.5 border-t border-white/10",
              fillHeight && "md:mt-auto",
              compactComparison ? "pt-1.5 sm:pt-2" : "pt-2 sm:space-y-2 sm:pt-2.5 md:pt-3",
            )}
          >
            <p
              className={cn(
                "leading-relaxed text-muted-foreground",
                compactComparison ? "text-[0.65rem] sm:text-[0.7rem]" : "text-[0.7rem] sm:text-xs",
              )}
            >
              {termsNote}
            </p>
            <p className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/8 px-2 py-0.5 text-[0.7rem] font-medium text-emerald-400 sm:px-2.5 sm:py-1 sm:text-xs">
              {responsibleNote}
            </p>
          </div>
        </div>

        <div
          className={cn(
            "hidden shrink-0 flex-col gap-2 lg:flex",
            fillHeight && "lg:h-full lg:justify-between",
            compactComparison
              ? cn("lg:w-44 xl:w-48", !fillHeight && "lg:justify-start")
              : cn("lg:w-60", !fillHeight && "lg:justify-center"),
          )}
        >
          {visual ? <OfferVisualPanel visual={visual} /> : null}
          <OfferCardCtas
            primaryCtaLabel={primaryCtaLabel}
            primaryCtaHref={primaryCtaHref}
            primaryCtaIsAffiliate={primaryCtaIsAffiliate}
            secondaryCtaLabel={secondaryCtaLabel}
            secondaryCtaHref={secondaryCtaHref}
            tertiaryCtaLabel={tertiaryCtaLabel}
            tertiaryCtaHref={tertiaryCtaHref}
            {...brandedCtaProps}
          />
        </div>
      </div>
    </article>
  );
}

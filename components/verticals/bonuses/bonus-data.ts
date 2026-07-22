import {
  BONUS_FEATURED,
  BONUS_PAGE_CTAS,
  BONUS_STATUS_LABELS,
  type BonusPageCtaConfig,
} from "@/components/verticals/bonuses/bonus-page-config";
import {
  getBonusById,
  getBonosDirectoryBonuses,
  getCasinoById,
  getReviewForCasino,
} from "@/lib/content";
import type { Bonus, BonusDirectoryGroup, ImageRef } from "@/types/content";

export type ResolvedBonusRow = {
  bonus: Bonus;
  casinoId: string;
  operatorName: string;
  logo?: ImageRef;
  reviewHref?: string;
  offerText: string;
  productLabel: string;
  minDeposit: string;
  wagering: string;
  validity: string;
  statusLabel: string;
  cta: BonusPageCtaConfig;
};

function unknownField(value?: string): string {
  const trimmed = value?.trim();
  return trimmed && trimmed.length > 0 ? trimmed : "No publicado";
}

export function resolveBonusRow(bonusId: string): ResolvedBonusRow | null {
  const bonus = getBonusById(bonusId);
  if (!bonus || !bonus.active) return null;

  const casino = getCasinoById(bonus.casinoId);
  if (!casino) return null;

  const cta = BONUS_PAGE_CTAS[bonusId];
  if (!cta) return null;

  const review = getReviewForCasino(bonus.casinoId);

  return {
    bonus,
    casinoId: casino.id,
    operatorName: casino.name,
    logo: casino.logo,
    reviewHref: review?.slug ? `/reviews/${review.slug}` : undefined,
    offerText: bonus.offerLabel?.trim() || bonus.title,
    productLabel: bonus.productLabel?.trim() || "Promoción",
    minDeposit: unknownField(bonus.minDeposit),
    wagering: unknownField(bonus.wagering),
    validity: bonus.validUntil
      ? `Hasta ${bonus.validUntil}`
      : "Vigencia no publicada",
    statusLabel: BONUS_STATUS_LABELS[bonus.status ?? ""] ?? "Revisión editorial",
    cta,
  };
}

export function resolveFeaturedBonuses(): ResolvedBonusRow[] {
  return BONUS_FEATURED.flatMap((entry) => {
    const row = resolveBonusRow(entry.bonusId);
    return row ? [row] : [];
  });
}

export function resolveDirectoryGroup(
  group: BonusDirectoryGroup,
): ResolvedBonusRow[] {
  const featuredIds = new Set(BONUS_FEATURED.map((f) => f.bonusId));
  return getBonosDirectoryBonuses()
    .filter((b) => b.directoryGroup === group && !featuredIds.has(b.id))
    .flatMap((b) => {
      const row = resolveBonusRow(b.id);
      return row ? [row] : [];
    })
    .sort((a, b) => a.operatorName.localeCompare(b.operatorName, "es"));
}

export function resolveComparisonRows(): ResolvedBonusRow[] {
  const featuredIds = new Set(BONUS_FEATURED.map((f) => f.bonusId));
  const featured = resolveFeaturedBonuses();
  const rest = getBonosDirectoryBonuses()
    .filter((b) => !featuredIds.has(b.id))
    .flatMap((b) => {
      const row = resolveBonusRow(b.id);
      return row ? [row] : [];
    })
    .sort((a, b) => a.operatorName.localeCompare(b.operatorName, "es"));

  return [...featured, ...rest];
}

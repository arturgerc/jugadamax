import { OperatorLogo } from "@/components/brand/OperatorLogo";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import type { CryptoPromoTheme } from "@/components/verticals/crypto/crypto-page-config";
import type { ImageRef } from "@/types/content";
import { cn } from "@/lib/utils";

const THEMES: Record<CryptoPromoTheme, string> = {
  betfury:
    "border-orange-500/25 bg-gradient-to-br from-[#1a1208]/80 via-card/80 to-[#0A1931]",
  vodkabet:
    "border-blue-500/25 bg-gradient-to-br from-[#071225]/80 via-card/80 to-[#0A1931]",
  mellstroy:
    "border-fuchsia-500/25 bg-gradient-to-br from-[#1a0818]/80 via-card/80 to-[#0A1931]",
};

export type CryptoPromotionCardProps = {
  operatorId: string;
  name: string;
  offerTitle: string;
  promoCode: string;
  chips: readonly string[];
  termsLine: string;
  ctaLabel: string;
  ctaHref: string;
  reviewHref: string;
  theme: CryptoPromoTheme;
  position: number;
  logo?: ImageRef;
};

export function CryptoPromotionCard({
  operatorId,
  name,
  offerTitle,
  promoCode,
  chips,
  termsLine,
  ctaLabel,
  ctaHref,
  reviewHref,
  theme,
  position,
  logo,
}: CryptoPromotionCardProps) {
  return (
    <article className={cn("flex h-full min-w-0 flex-col rounded-xl border p-4 sm:p-5", THEMES[theme])}>
      <div className="flex items-center gap-3">
        <OperatorLogo logo={logo} name={name} operatorId={operatorId} />
        <h3 className="text-base font-semibold text-foreground">{name}</h3>
      </div>

      <p className="mt-3 text-sm font-medium leading-snug text-foreground">{offerTitle}</p>

      <p className="mt-2 truncate rounded-md border border-white/10 bg-[#0A1931]/50 px-2.5 py-1.5 text-xs font-mono text-muted-foreground">
        Código: <span className="font-semibold text-foreground">{promoCode}</span>
      </p>

      <ul className="mt-3 flex flex-wrap gap-1.5">
        {chips.slice(0, 3).map((chip) => (
          <li
            key={chip}
            className="rounded-full border border-white/10 bg-[#0A1931]/50 px-2.5 py-0.5 text-[0.65rem] font-medium text-muted-foreground"
          >
            {chip}
          </li>
        ))}
      </ul>

      <p className="mt-3 line-clamp-2 text-[0.7rem] leading-snug text-muted-foreground">
        {termsLine}
      </p>

      <div className="mt-auto flex flex-col gap-2 pt-4">
        <TrackedLink
          href={ctaHref}
          external
          event="crypto_page_affiliate_click"
          section="promociones-crypto"
          position={position}
          operator={operatorId}
          ctaType="primary"
          className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[var(--jm-gold-strong)]"
        >
          {ctaLabel}
        </TrackedLink>
        <TrackedLink
          href={reviewHref}
          event="crypto_page_review_click"
          section="promociones-crypto"
          position={position}
          operator={operatorId}
          destination={reviewHref}
          className="inline-flex min-h-11 w-full items-center justify-center text-sm font-medium text-muted-foreground underline-offset-2 hover:text-foreground hover:underline"
        >
          Leer reseña
        </TrackedLink>
      </div>
    </article>
  );
}

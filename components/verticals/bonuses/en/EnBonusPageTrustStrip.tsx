import Link from "next/link";
import { EN_BONUS_PAGE_UPDATED_AT } from "@/components/verticals/bonuses/en/en-bonus-page-config";
import { cn, focusRing } from "@/lib/utils";

/**
 * Compact affiliate + responsible gambling + freshness strip for /en/bonuses.
 */
export function EnBonusPageTrustStrip({ className }: { className?: string }) {
  return (
    <div
      role="note"
      className={cn(
        "mb-7 flex flex-col gap-2.5 rounded-xl border border-emerald-500/20 bg-gradient-to-r from-[#101816]/95 via-[#111417]/90 to-[#0f1620]/90 px-3 py-2.5 shadow-[inset_0_1px_0_rgba(52,211,153,0.08)] sm:mb-10 sm:flex-row sm:items-center sm:gap-3 sm:px-4 sm:py-3",
        className,
      )}
    >
      <div className="flex shrink-0 flex-wrap items-center gap-1.5">
        <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/40 bg-emerald-500/12 px-2 py-0.5 text-[0.7rem] font-semibold text-emerald-300">
          <span
            aria-hidden="true"
            className="inline-block size-1.5 rounded-full bg-emerald-400"
          />
          18+
        </span>
        <span className="inline-flex items-center rounded-full border border-white/12 bg-[#0A1931]/70 px-2 py-0.5 text-[0.7rem] font-medium text-muted-foreground">
          Page updated ·{" "}
          <time dateTime={EN_BONUS_PAGE_UPDATED_AT} className="ml-1 text-foreground/90">
            {EN_BONUS_PAGE_UPDATED_AT}
          </time>
        </span>
      </div>
      <p className="min-w-0 flex-1 text-[0.8125rem] leading-snug text-muted-foreground sm:text-sm sm:leading-relaxed">
        Some links are affiliate links. JugadaMax may receive a commission at no extra cost to you.
        Promotions and terms can change without notice. The date reflects this page update, not
        individual offer verification.{" "}
        <Link
          href="/en/affiliate-disclosure"
          className={cn(
            "font-medium text-emerald-200/90 underline-offset-2 hover:underline",
            focusRing,
          )}
        >
          Disclosure
        </Link>
        {" · "}
        <Link
          href="/en/responsible-gambling"
          className={cn(
            "font-medium text-emerald-200/90 underline-offset-2 hover:underline",
            focusRing,
          )}
        >
          Responsible gambling
        </Link>
        {" · "}
        <Link
          href="/en/how-we-review"
          className={cn(
            "font-medium text-foreground underline-offset-2 hover:underline",
            focusRing,
          )}
        >
          Methodology
        </Link>
        .
      </p>
    </div>
  );
}

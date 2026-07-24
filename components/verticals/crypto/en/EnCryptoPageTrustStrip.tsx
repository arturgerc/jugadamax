import Link from "next/link";
import { cn, focusRing } from "@/lib/utils";

/**
 * Compact affiliate + responsible gambling strip for /en/casinos-crypto.
 */
export function EnCryptoPageTrustStrip({ className }: { className?: string }) {
  return (
    <div
      role="note"
      className={cn(
        "mb-7 flex items-start gap-2.5 rounded-lg border border-white/10 bg-[#111417]/80 px-3 py-2.5 sm:mb-10 sm:items-center sm:gap-3 sm:px-4 sm:py-3",
        className,
      )}
    >
      <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-emerald-500/35 bg-emerald-500/10 px-2 py-0.5 text-[0.7rem] font-semibold text-emerald-300">
        <span aria-hidden="true">🛡️</span>
        18+
      </span>
      <p className="min-w-0 flex-1 text-[0.8125rem] leading-snug text-muted-foreground sm:text-sm sm:leading-relaxed">
        Some links are affiliate. JugadaMax may earn a commission at no extra cost to you. Scores are
        editorial opinions and do not guarantee payments, licences or outcomes. Availability varies
        by jurisdiction — verify live operator terms before registering.{" "}
        <Link
          href="/en/affiliate-disclosure"
          className={cn("font-medium text-foreground underline-offset-2 hover:underline", focusRing)}
        >
          Disclosure
        </Link>
        {" · "}
        <Link
          href="/en/responsible-gambling"
          className={cn("font-medium text-foreground underline-offset-2 hover:underline", focusRing)}
        >
          Responsible gambling
        </Link>
      </p>
    </div>
  );
}

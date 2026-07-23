import Link from "next/link";
import {
  PARTNERS_COPY,
  type PartnersLocale,
} from "@/components/verticals/partners/partners-config";
import { cn, focusRing } from "@/lib/utils";

export function PartnersTrustStrip({ locale }: { locale: PartnersLocale }) {
  const copy = PARTNERS_COPY[locale];

  return (
    <div
      role="note"
      className="mb-7 flex flex-col gap-2.5 rounded-xl border border-emerald-500/20 bg-gradient-to-r from-[#101816]/95 via-[#111417]/90 to-[#0f1620]/90 px-3 py-2.5 sm:mb-10 sm:flex-row sm:items-center sm:gap-3 sm:px-4 sm:py-3"
    >
      <span className="inline-flex shrink-0 items-center rounded-full border border-emerald-500/40 bg-emerald-500/12 px-2.5 py-0.5 text-[0.7rem] font-semibold text-emerald-300">
        {copy.trustBadge}
      </span>
      <p className="min-w-0 flex-1 text-[0.8125rem] leading-snug text-muted-foreground sm:text-sm">
        {copy.trustBody}{" "}
        <Link
          href={copy.methodologyHref}
          className={cn(
            "font-medium text-foreground underline-offset-2 hover:underline",
            focusRing,
          )}
        >
          {copy.methodologyLabel}
        </Link>
        {" · "}
        <Link
          href={copy.disclosureHref}
          className={cn(
            "font-medium text-emerald-200/90 underline-offset-2 hover:underline",
            focusRing,
          )}
        >
          {copy.disclosureLabel}
        </Link>
        .
      </p>
    </div>
  );
}

import Link from "next/link";
import { cn, focusRing } from "@/lib/utils";

export function EnMethodologyTrustStrip({ className }: { className?: string }) {
  return (
    <div
      role="note"
      className={cn(
        "mb-7 flex flex-col gap-2.5 rounded-xl border border-emerald-500/20 bg-gradient-to-r from-[#101816]/95 via-[#111417]/90 to-[#0f1620]/90 px-3 py-2.5 sm:mb-10 sm:flex-row sm:items-center sm:gap-3 sm:px-4 sm:py-3",
        className,
      )}
    >
      <div className="flex shrink-0 flex-wrap items-center gap-1.5">
        <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/40 bg-emerald-500/12 px-2 py-0.5 text-[0.7rem] font-semibold text-emerald-300">
          <span aria-hidden="true" className="inline-block size-1.5 rounded-full bg-emerald-400" />
          18+
        </span>
        <span className="inline-flex items-center rounded-full border border-white/12 bg-[#0A1931]/70 px-2 py-0.5 text-[0.7rem] font-medium text-muted-foreground">
          Editorial assessment
        </span>
        <span className="inline-flex items-center rounded-full border border-white/12 bg-[#0A1931]/70 px-2 py-0.5 text-[0.7rem] font-medium text-muted-foreground">
          Identified authors
        </span>
        <span className="hidden items-center rounded-full border border-white/12 bg-[#0A1931]/70 px-2 py-0.5 text-[0.7rem] font-medium text-muted-foreground sm:inline-flex">
          Real publication dates
        </span>
        <span className="hidden items-center rounded-full border border-white/12 bg-[#0A1931]/70 px-2 py-0.5 text-[0.7rem] font-medium text-muted-foreground lg:inline-flex">
          Affiliation disclosed
        </span>
      </div>
      <p className="min-w-0 flex-1 text-[0.8125rem] leading-snug text-muted-foreground sm:text-sm sm:leading-relaxed">
        Public methodology with no registration buttons.{" "}
        <Link
          href="/en/affiliate-disclosure"
          className={cn(
            "font-medium text-emerald-200/90 underline-offset-2 hover:underline",
            focusRing,
          )}
        >
          Affiliate disclosure
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
        .
      </p>
    </div>
  );
}

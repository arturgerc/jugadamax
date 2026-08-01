import Link from "next/link";
import { cn, focusRing } from "@/lib/utils";

export function EnMethodologyUpdates() {
  return (
    <section
      aria-labelledby="en-method-updates-heading"
      className="mb-8 scroll-mt-24 rounded-2xl border border-emerald-500/20 bg-gradient-to-r from-[#101816]/90 via-[#111417]/85 to-[#0f1620]/90 p-4 sm:mb-10 sm:p-5"
    >
      <h2
        id="en-method-updates-heading"
        className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
      >
        Updates and corrections
      </h2>
      <div className="mt-3 max-w-4xl space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
        <p>
          Publication and update dates come from the editorial record. We do not change them merely
          to appear recent.
        </p>
        <p>
          Expired or changed bonuses should be corrected or labelled. Factual corrections are made
          when reliable evidence is available.
        </p>
        <p>Readers may report corrections through the contact page.</p>
      </div>
      <Link
        href="/en/contact"
        className={cn(
          "mt-4 inline-flex min-h-11 items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[var(--jm-gold-strong)]",
          focusRing,
        )}
      >
        Request a correction
      </Link>
    </section>
  );
}

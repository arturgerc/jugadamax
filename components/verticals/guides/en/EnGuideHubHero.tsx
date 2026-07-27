import Link from "next/link";
import { cn, focusRing } from "@/lib/utils";

const CHECK_ITEMS = [
  "Choose an operator",
  "Understand crypto payments",
  "Review bonuses and terms",
  "Compare safety and KYC",
] as const;

const FOCUS_BADGES = [
  "Casinos and betting",
  "Crypto and payments",
  "Safety and KYC",
  "Responsible gambling",
] as const;

/**
 * Compact two-column English Guide Hub hero — editorial, no affiliate CTA.
 */
export function EnGuideHubHero() {
  return (
    <header className="relative mb-7 overflow-hidden rounded-2xl border border-white/12 bg-gradient-to-br from-[#10182a] via-[#0A1931] to-[#0c1424] shadow-[0_0_40px_-24px_rgba(255,184,0,0.3)] sm:mb-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,184,0,0.1),transparent_52%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(34,211,238,0.08),transparent_55%)]"
      />
      <div className="relative grid gap-4 p-5 sm:p-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-8 lg:p-8">
        <div className="space-y-3">
          <span className="inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            Global · Learning hub
          </span>
          <h1 className="text-[1.75rem] font-bold leading-tight tracking-tight text-foreground sm:text-[2.1rem] lg:text-[2.3rem]">
            Casino, crypto and betting guides for English readers
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            Learn how to compare operators, understand payments, bonuses, KYC, licensing notes and
            risks before you register. Editorial learning paths for English/global readers with
            identified authors, real update dates and honest content labels.
          </p>
          <ul className="flex flex-wrap gap-2" aria-label="Guide hub topics">
            {FOCUS_BADGES.map((badge) => (
              <li
                key={badge}
                className="inline-flex items-center rounded-full border border-white/12 bg-[#16233f]/70 px-2.5 py-1 text-xs font-medium text-muted-foreground"
              >
                {badge}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 pt-0.5">
            <Link
              href="#where-to-start"
              className={cn(
                "inline-flex min-h-11 items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[var(--jm-gold-strong)]",
                focusRing,
              )}
            >
              Explore guides
            </Link>
            <Link
              href="#how-we-research"
              className={cn(
                "inline-flex min-h-11 items-center rounded-md border border-white/15 bg-[#111417]/50 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50",
                focusRing,
              )}
            >
              How we research
            </Link>
          </div>
        </div>

        <aside
          aria-labelledby="en-guide-hero-learn-heading"
          className="relative overflow-hidden rounded-xl border border-white/12 bg-gradient-to-b from-[#141b28]/95 to-[#111417]/90 p-3 sm:p-4"
        >
          <h2
            id="en-guide-hero-learn-heading"
            className="text-sm font-semibold tracking-tight text-foreground"
          >
            What you can learn
          </h2>
          <ul className="mt-2 grid grid-cols-2 gap-1.5">
            {CHECK_ITEMS.map((title) => (
              <li
                key={title}
                className="rounded-md border border-cyan-500/15 bg-[#0A1931]/65 px-2 py-1.5 text-[0.7rem] font-semibold leading-tight text-foreground sm:text-xs"
              >
                {title}
              </li>
            ))}
          </ul>
          <p className="mt-2 text-[0.65rem] leading-snug text-muted-foreground">
            Operator conditions, payments and promotions can change. Always confirm live information
            on the official site.
          </p>
        </aside>
      </div>
    </header>
  );
}

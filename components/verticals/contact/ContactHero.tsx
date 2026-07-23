import Link from "next/link";
import {
  CONTACT_COPY,
  type ContactLocale,
} from "@/components/verticals/contact/contact-config";
import { cn, focusRing } from "@/lib/utils";

export function ContactHero({ locale }: { locale: ContactLocale }) {
  const copy = CONTACT_COPY[locale];

  return (
    <header className="relative mb-7 overflow-hidden rounded-2xl border border-white/12 bg-gradient-to-br from-[#10182a] via-[#0A1931] to-[#0c1424] shadow-[0_0_40px_-24px_rgba(255,184,0,0.28)] sm:mb-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,184,0,0.1),transparent_52%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(0,168,107,0.08),transparent_55%)]"
      />
      <div className="relative grid gap-4 p-5 sm:p-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center lg:gap-8 lg:p-8">
        <div className="space-y-3">
          <span className="inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            {copy.heroEyebrow}
          </span>
          <h1 className="text-[1.7rem] font-bold leading-tight tracking-tight text-foreground sm:text-[2.05rem] lg:text-[2.25rem]">
            {copy.heroTitle}
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            {copy.heroBody}
          </p>
          <div className="flex flex-wrap gap-2 pt-0.5">
            <a
              href={copy.heroPrimaryHref}
              className={cn(
                "inline-flex min-h-11 items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[var(--jm-gold-strong)]",
                focusRing,
              )}
            >
              {copy.heroPrimaryCta}
            </a>
            <Link
              href={copy.heroSecondaryHref}
              className={cn(
                "inline-flex min-h-11 items-center rounded-md border border-white/15 bg-[#111417]/50 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50",
                focusRing,
              )}
            >
              {copy.heroSecondaryCta}
            </Link>
          </div>
        </div>

        <aside
          aria-labelledby="contact-hero-aside-heading"
          className="rounded-xl border border-white/12 bg-gradient-to-b from-[#141b28]/95 to-[#111417]/90 p-3.5 sm:p-4"
        >
          <h2
            id="contact-hero-aside-heading"
            className="text-sm font-semibold tracking-tight text-foreground"
          >
            {copy.heroAsideTitle}
          </h2>
          <ul className="mt-2 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
            {copy.heroAsideItems.map((item) => (
              <li
                key={item}
                className="rounded-md border border-primary/15 bg-[#0A1931]/65 px-2.5 py-1.5 text-xs font-semibold text-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </header>
  );
}

import Link from "next/link";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { cn, focusRing } from "@/lib/utils";

const CHECK_ITEMS = [
  "Privacy & KYC",
  "Payments & networks",
  "Games",
  "Bonuses & withdrawals",
] as const;

const QUICK_LINKS = [
  { label: "Top crypto", href: "#top-crypto" },
  { label: "Comparison", href: "#comparativa-crypto" },
  { label: "No-KYC focus", href: "/en/casinos-no-kyc" },
  { label: "Promotions", href: "#promociones-crypto" },
  { label: "Guides", href: "#guias-crypto-en" },
] as const;

const FOCUS_BADGES = [
  "Bitcoin",
  "Ethereum",
  "USDT",
  "Editorial review",
  "18+",
] as const;

/**
 * Compact English crypto-page hero — visual parity with Spanish CryptoPageHero.
 */
export function EnCryptoPageHero() {
  return (
    <header className="relative mb-7 overflow-hidden rounded-2xl border border-white/10 bg-[var(--jm-navy)] sm:mb-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,184,0,0.07),transparent_55%)]"
      />
      <div className="relative grid gap-4 p-5 sm:p-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-8 lg:p-8">
        <div className="space-y-3">
          <span className="inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            Global · Crypto · Editorial
          </span>
          <h1 className="text-[1.85rem] font-bold leading-tight tracking-tight text-foreground sm:text-[2.15rem] lg:text-[2.35rem]">
            Best Crypto Casinos
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            We compare crypto casinos with Bitcoin, Ethereum, USDT and related payments by privacy
            posture, payments, games, promotions and published operator terms — for international
            readers.
          </p>
          <ul className="flex flex-wrap gap-2" aria-label="Page focus">
            {FOCUS_BADGES.map((badge) => (
              <li
                key={badge}
                className="inline-flex items-center rounded-full border border-white/10 bg-[#16233f]/60 px-2.5 py-1 text-xs font-medium text-muted-foreground"
              >
                {badge}
              </li>
            ))}
          </ul>
          <nav aria-label="Quick navigation" className="flex flex-wrap gap-2 pt-0.5">
            {QUICK_LINKS.map((link) => (
              <TrackedLink
                key={link.href}
                href={link.href}
                event="crypto_page_category_click"
                section="hero"
                destination={link.href}
                className="inline-flex min-h-11 items-center rounded-full border border-border/60 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/60"
              >
                {link.label}
              </TrackedLink>
            ))}
          </nav>
        </div>

        <aside
          aria-labelledby="en-crypto-hero-check-heading"
          className="max-h-[190px] overflow-hidden rounded-xl border border-white/10 bg-[#111417]/80 p-3 sm:max-h-none sm:p-4"
        >
          <h2
            id="en-crypto-hero-check-heading"
            className="text-sm font-semibold tracking-tight text-foreground"
          >
            What we compare
          </h2>
          <ul className="mt-2 grid grid-cols-2 gap-1.5">
            {CHECK_ITEMS.map((title) => (
              <li
                key={title}
                className="rounded-md border border-white/8 bg-[#0A1931]/50 px-2 py-1.5 text-[0.7rem] font-semibold leading-tight text-foreground sm:text-xs"
              >
                {title}
              </li>
            ))}
          </ul>
          <p className="mt-2 text-[0.65rem] leading-snug text-muted-foreground">
            Always confirm availability and terms with the operator.{" "}
            <Link
              href="/en/how-we-review"
              className={cn("font-medium text-foreground underline-offset-2 hover:underline", focusRing)}
            >
              Methodology
            </Link>
          </p>
        </aside>
      </div>
    </header>
  );
}

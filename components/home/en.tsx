import Link from "next/link";
import type { Casino } from "@/types/content";
import { getGlobalCasinoById, getGlobalGuides, getGlobalReviewForCasino } from "@/lib/content/global";
import { Container } from "@/components/layout/Container";
import { OperatorLogo } from "@/components/brand/OperatorLogo";
import { LicenseInfo } from "@/components/trust/LicenseInfo";
import { cn, focusRing } from "@/lib/utils";

const enTrustPills = [
  "Published methodology",
  "Jurisdiction-aware",
  "No fake urgency",
] as const;

const enCategories = [
  {
    label: "Crypto Casinos",
    href: "/en/casinos-crypto",
    description: "Global crypto casino reviews and payment guides.",
  },
  {
    label: "Fiat Casinos",
    href: "/en/casinos-fiat",
    description: "Fiat casino coverage and payment-method context.",
  },
  {
    label: "Betting",
    href: "/en/betting",
    description: "Sports betting and sportsbook editorial overview.",
  },
] as const;

export function EnHero({ className }: { className?: string }) {
  const featuredCasino = getGlobalCasinoById("stake");

  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-border/60 bg-[var(--jm-navy)]",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,184,0,0.07),transparent_55%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,168,107,0.05),transparent_50%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--jm-graphite)]/40 via-transparent to-transparent"
      />

      <Container className="relative py-10 sm:py-14 lg:py-16">
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-12 lg:gap-y-8 xl:gap-x-16">
          <div className="max-w-xl space-y-4 lg:max-w-none">
            <span className="inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
              Global · Crypto-first · Editorial reviews
            </span>

            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
              Crypto casinos, fiat casinos and betting guides
            </h1>

            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Independent casino reviews, payment guides and responsible gambling information for
              global 18+ audiences. Mexico-first Spanish content remains available on{" "}
              <Link href="/" className="font-medium text-primary underline underline-offset-2">
                JugadaMax
              </Link>
              .
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                href="/en/casinos-crypto"
                className="inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_2px_12px_-4px_rgba(255,184,0,0.35)] transition-colors hover:bg-[var(--jm-gold-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              >
                View crypto casinos
              </Link>
              <Link
                href="/en/how-we-review"
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              >
                How we review
              </Link>
            </div>

            <p className="text-xs text-muted-foreground">
              Adults 18+ only. Gambling involves risk. Availability varies by jurisdiction.
            </p>
          </div>

          {featuredCasino ? (
            <EnHeroRecommendationCard casino={featuredCasino} className="mt-8 lg:mt-0" />
          ) : null}
        </div>
      </Container>
    </section>
  );
}

export function EnHeroRecommendationCard({
  casino,
  className,
}: {
  casino: Casino;
  className?: string;
}) {
  const review = getGlobalReviewForCasino(casino.id);

  return (
    <aside aria-label="Editorial recommendation" className={cn("space-y-4", className)}>
      <div className="rounded-2xl border border-white/10 bg-card/80 p-5 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)] backdrop-blur-sm sm:p-6">
        <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-primary">
          Editorial recommendation
        </p>

        <div className="mt-4 flex items-start gap-3">
          <OperatorLogo name={casino.name} logo={casino.logo} operatorId={casino.id} />
          <div className="min-w-0 flex-1">
            <p className="text-lg font-semibold text-foreground">{casino.name}</p>
            {casino.summary ? (
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {casino.summary}
              </p>
            ) : null}
          </div>
        </div>

        {casino.payments && casino.payments.length > 0 ? (
          <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Payment methods">
            {casino.payments.map((p) => (
              <li
                key={`${p.kind}-${p.name}`}
                className="inline-flex items-center rounded-md bg-[#16233f]/60 px-2 py-0.5 text-xs font-medium text-muted-foreground ring-1 ring-white/10"
              >
                {p.name}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-4">
          <LicenseInfo licensing={casino.licensing} locale="en" />
        </div>

        <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
          <Link
            href="/en/casinos-crypto"
            className="inline-flex min-h-11 items-center text-sm font-medium text-primary underline underline-offset-2 transition-colors hover:text-[var(--jm-gold-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
          >
            View crypto ranking
          </Link>
          {review ? (
            <Link
              href={`/en/reviews/${review.slug}`}
              className="inline-flex min-h-11 items-center text-sm font-medium text-foreground underline underline-offset-2 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              Read review
            </Link>
          ) : null}
        </div>
      </div>

      <ul className="flex flex-wrap gap-2" aria-label="Editorial focus">
        {enTrustPills.map((label) => (
          <li
            key={label}
            className="inline-flex items-center rounded-full border border-accent/30 bg-accent/8 px-2.5 py-1 text-[0.65rem] font-medium text-accent"
          >
            {label}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export function EnQuickCategories({ className }: { className?: string }) {
  return (
    <section aria-label="Categories" className={cn("py-10", className)}>
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {enCategories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className={cn(
                "rounded-lg border border-border/60 bg-card p-5 transition-colors hover:border-primary/60",
                focusRing,
              )}
            >
              <h2 className="text-lg font-semibold text-foreground">{cat.label}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{cat.description}</p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function EnGuidesPreview({ className }: { className?: string }) {
  const guides = getGlobalGuides().slice(0, 2);
  if (guides.length === 0) return null;

  return (
    <section aria-labelledby="en-guides-heading" className={cn("py-10", className)}>
      <Container>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:gap-4">
            <h2
              id="en-guides-heading"
              className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
            >
              Guides
            </h2>
            <Link
              href="/en/guides"
              className={cn(
                "inline-flex min-h-11 w-fit items-center justify-center self-start rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/60",
                focusRing,
              )}
            >
              View all guides
            </Link>
          </div>
          {guides.map((guide) => (
            <article
              key={guide.id}
              className="flex h-full flex-col rounded-2xl border border-white/10 bg-card p-5"
            >
              <h3 className="text-lg font-semibold text-foreground">
                <Link
                  href={`/en/guides/${guide.slug}`}
                  className="transition-colors hover:text-primary"
                >
                  {guide.title}
                </Link>
              </h3>
              <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{guide.summary}</p>
              <Link
                href={`/en/guides/${guide.slug}`}
                className="mt-4 text-sm font-medium text-primary underline underline-offset-2"
              >
                Read guide
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function EnNewsPreview({ className }: { className?: string }) {
  return (
    <section aria-labelledby="en-news-heading" className={cn("py-10", className)}>
      <Container>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <h2
            id="en-news-heading"
            className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
          >
            News & updates
          </h2>
          <Link
            href="/en/news"
            className={cn(
              "inline-flex min-h-11 w-fit items-center justify-center self-start rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/60",
              focusRing,
            )}
          >
            View news
          </Link>
        </div>
        <div className="mt-4 rounded-lg border border-border/60 bg-card p-5 sm:p-6">
          <p className="text-sm text-muted-foreground sm:text-base">
            English updates are being prepared. For current Spanish updates, visit the{" "}
            <Link href="/noticias" className="font-medium text-primary underline underline-offset-2">
              Spanish news section
            </Link>
            .
          </p>
        </div>
      </Container>
    </section>
  );
}

export function EnCoveragePlaceholder({
  description,
  href,
  linkLabel,
}: {
  description: string;
  href: string;
  linkLabel: string;
}) {
  return (
    <div className="rounded-lg border border-border/60 bg-card p-5 sm:p-6">
      <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{description}</p>
      <Link
        href={href}
        className="mt-4 inline-flex min-h-11 items-center justify-center rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/60"
      >
        {linkLabel}
      </Link>
    </div>
  );
}

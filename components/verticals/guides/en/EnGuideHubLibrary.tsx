import { EnGuideHubAuthors } from "@/components/verticals/guides/en/EnGuideHubAuthors";
import { EnGuideHubCard } from "@/components/verticals/guides/en/EnGuideHubCard";
import { EnGuideLatestUpdates } from "@/components/verticals/guides/en/EnGuideLatestUpdates";
import {
  resolveEnFeaturedGuide,
  resolveEnGuidesByCategory,
} from "@/components/verticals/guides/en/en-guide-hub-data";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

function SectionIntro({
  id,
  headingId,
  eyebrow,
  title,
  description,
}: {
  id: string;
  headingId: string;
  eyebrow?: string;
  title: string;
  description: string;
}) {
  return (
    <div id={id} className="max-w-3xl scroll-mt-24 space-y-1">
      {eyebrow ? (
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-primary/90">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={headingId}
        className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
      >
        {title}
      </h2>
      <p className="text-sm text-muted-foreground sm:text-base">{description}</p>
    </div>
  );
}

function SectionShell({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("rounded-2xl border p-4 sm:p-5", className)}>{children}</div>
  );
}

/**
 * Curated English learning library — one real guide plus honest supporting routes.
 */
export function EnGuideHubLibrary() {
  const featured = resolveEnFeaturedGuide();
  const crypto = resolveEnGuidesByCategory("crypto-payments");
  const privacy = resolveEnGuidesByCategory("privacy-safety");
  const operators = resolveEnGuidesByCategory("operator-research");

  return (
    <div className="space-y-8 sm:space-y-10 lg:space-y-12">
      {featured ? (
        <section aria-labelledby="essential-guide-heading" className="scroll-mt-24">
          <SectionShell className="border-primary/15 bg-gradient-to-b from-[#16120c]/70 to-[#10151d]/40">
            <SectionIntro
              id="essential-guide"
              headingId="essential-guide-heading"
              eyebrow="Starting point"
              title="Start with the basics"
              description="A quick editorial introduction to compare security signals, payments, licensing notes and terms before you register."
            />
            <div className="mt-4">
              <EnGuideHubCard
                card={featured}
                featured
                ctaLabel="Read essential guide"
              />
            </div>
          </SectionShell>
        </section>
      ) : null}

      {crypto.length > 0 ? (
        <section
          id="crypto-and-payments"
          aria-labelledby="crypto-and-payments-heading"
          className="scroll-mt-24"
        >
          <SectionShell className="border-cyan-500/15 bg-gradient-to-b from-[#0d1824]/55 to-transparent">
            <SectionIntro
              id="crypto-and-payments-intro"
              headingId="crypto-and-payments-heading"
              title="Crypto and payment comparison"
              description="A crypto ranking page and a real English Bitcoin guide — labelled honestly as Ranking or Guide."
            />
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 sm:gap-4">
              {crypto.map((card) => (
                <li key={card.resource.id} className="min-w-0">
                  <EnGuideHubCard card={card} />
                </li>
              ))}
            </ul>
          </SectionShell>
        </section>
      ) : null}

      {privacy.length > 0 ? (
        <section
          id="privacy-and-safety"
          aria-labelledby="privacy-and-safety-heading"
          className="scroll-mt-24"
        >
          <SectionShell className="border-violet-500/15 bg-gradient-to-b from-[#15101c]/55 to-transparent">
            <SectionIntro
              id="privacy-and-safety-intro"
              headingId="privacy-and-safety-heading"
              title="Privacy, KYC and safety"
              description="What limited verification can mean, when checks may still appear, and which signals to review before depositing."
            />
            <ul className="mt-4 grid grid-cols-1 gap-3">
              {privacy.map((card) => (
                <li key={card.resource.id} className="min-w-0">
                  <EnGuideHubCard card={card} wide />
                </li>
              ))}
            </ul>
          </SectionShell>
        </section>
      ) : null}

      {operators.length > 0 ? (
        <section
          id="operator-research"
          aria-labelledby="operator-research-heading"
          className="scroll-mt-24"
        >
          <SectionShell className="border-sky-500/15 bg-gradient-to-b from-[#101820]/60 to-[#111417]/30">
            <SectionIntro
              id="operator-research-intro"
              headingId="operator-research-heading"
              title="Operator research reviews"
              description="Full English reviews for researching availability, payments, promotions, account rules and risks before you register."
            />
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
              {operators.map((card) => (
                <li key={card.resource.id} className="min-w-0">
                  <EnGuideHubCard card={card} />
                </li>
              ))}
            </ul>
          </SectionShell>
        </section>
      ) : null}

      <EnGuideLatestUpdates />
      <EnGuideHubAuthors />
    </div>
  );
}

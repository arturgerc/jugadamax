import { OperatorLogo } from "@/components/brand/OperatorLogo";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import type { ResolvedBonusRow } from "@/components/verticals/bonuses/bonus-data";
import { resolveDirectoryGroup } from "@/components/verticals/bonuses/bonus-data";
import { BONUS_DIRECTORY_SECTIONS } from "@/components/verticals/bonuses/bonus-page-config";
import {
  BONUS_SURFACES,
  DIRECTORY_SECTION_THEMES,
  directoryOperatorAccent,
  sectionHeadingClassName,
} from "@/components/verticals/bonuses/bonus-visual";
import { cn } from "@/lib/utils";
import type { BonusDirectoryGroup } from "@/types/content";

const SECTION_EYEBROWS: Record<BonusDirectoryGroup, string> = {
  "casino-mx": "Casino · México",
  "crypto-rewards": "Crypto · Rewards",
  "sports-mixed": "Apuestas · Mixto",
};

function DirectoryCard({
  row,
  position,
  section,
  group,
}: {
  row: ResolvedBonusRow;
  position: number;
  section: string;
  group: BonusDirectoryGroup;
}) {
  const sectionTheme = DIRECTORY_SECTION_THEMES[group];

  return (
    <article
      className={cn(
        "flex h-full min-w-0 flex-col rounded-xl border bg-gradient-to-b from-[#151a22] to-[#10151d] p-3.5",
        sectionTheme.cardBorder,
        directoryOperatorAccent(row.casinoId),
        BONUS_SURFACES.cardHover,
      )}
    >
      <div className="flex items-start gap-2.5">
        <OperatorLogo
          logo={row.logo}
          name={row.operatorName}
          operatorId={row.casinoId}
          variant="compact-row"
        />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-sm font-bold text-foreground sm:text-[0.95rem]">
              {row.operatorName}
            </h3>
            <span
              className={cn(
                "rounded-full border px-2 py-0.5 text-[0.6rem] font-medium uppercase tracking-wide text-muted-foreground",
                sectionTheme.accent,
              )}
            >
              {row.productLabel}
            </span>
          </div>
          <p className="mt-1 line-clamp-2 text-sm font-semibold leading-snug text-foreground">
            {row.offerText}
          </p>
        </div>
      </div>

      <ul className="mt-2.5 flex flex-wrap gap-1.5 text-[0.65rem] text-muted-foreground">
        <li className="rounded-full border border-white/10 bg-[#0A1931]/45 px-2 py-0.5">
          Dep.: {row.minDeposit}
        </li>
        <li className="rounded-full border border-white/10 bg-[#0A1931]/45 px-2 py-0.5">
          Wagering: {row.wagering}
        </li>
        {row.cta.promoCode ? (
          <li>
            <span className={BONUS_SURFACES.promoChip}>Código: {row.cta.promoCode}</span>
          </li>
        ) : null}
      </ul>

      <div className="mt-auto flex flex-col gap-1.5 pt-3 sm:flex-row">
        <TrackedLink
          href={row.cta.ctaHref}
          external
          event="bonus_page_affiliate_click"
          section={section}
          position={position}
          operator={row.casinoId}
          ctaType="primary"
          className={cn(BONUS_SURFACES.goldCta, "flex-1")}
        >
          {row.cta.ctaLabel}
        </TrackedLink>
        {row.reviewHref ? (
          <TrackedLink
            href={row.reviewHref}
            event="bonus_page_review_click"
            section={section}
            position={position}
            operator={row.casinoId}
            destination={row.reviewHref}
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/10 px-3 text-sm font-medium text-muted-foreground transition-colors duration-150 hover:border-white/20 hover:text-foreground sm:min-w-[7rem]"
          >
            Reseña
          </TrackedLink>
        ) : null}
      </div>
    </article>
  );
}

/**
 * Compact grouped bonus directory for /bonos.
 */
export function BonusDirectory() {
  return (
    <div className="mb-8 space-y-7 sm:mb-10 sm:space-y-9 lg:mb-12">
      {BONUS_DIRECTORY_SECTIONS.map((section) => {
        const rows = resolveDirectoryGroup(section.group);
        if (rows.length === 0) return null;
        const theme = DIRECTORY_SECTION_THEMES[section.group];
        const columns =
          rows.length === 2
            ? "sm:grid-cols-2 lg:grid-cols-2"
            : "sm:grid-cols-2 lg:grid-cols-3";

        return (
          <section
            key={section.group}
            id={section.sectionId}
            aria-labelledby={`${section.sectionId}-heading`}
            className="scroll-mt-24"
          >
            <div className={theme.shell}>
              <div className="max-w-3xl space-y-1">
                <p
                  className={cn(
                    "text-[0.7rem] font-semibold uppercase tracking-[0.14em]",
                    theme.eyebrow,
                  )}
                >
                  {SECTION_EYEBROWS[section.group]}
                </p>
                <h2
                  id={`${section.sectionId}-heading`}
                  className={sectionHeadingClassName()}
                >
                  {section.heading}
                </h2>
                <p className="text-sm text-muted-foreground sm:text-base">
                  {section.description}
                </p>
              </div>
              <ul className={cn("mt-4 grid grid-cols-1 gap-3 sm:gap-4", columns)}>
                {rows.map((row, index) => (
                  <li key={row.bonus.id} className="min-w-0">
                    <DirectoryCard
                      row={row}
                      position={index + 1}
                      section={section.sectionId}
                      group={section.group}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        );
      })}
    </div>
  );
}

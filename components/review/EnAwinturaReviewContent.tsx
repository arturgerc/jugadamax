import Link from "next/link";
import type { Author, Casino, Review } from "@/types/content";
import {
  AWINTURA_CARD_AFFILIATE_URL,
  AWINTURA_REGISTRATION_AFFILIATE_URL,
} from "@/lib/affiliate/constants";
import { EnAwinturaFeaturedCard } from "@/components/affiliate/EnAwinturaFeaturedCard";
import { MobileStickyOfferCta } from "@/components/affiliate/MobileStickyOfferCta";
import { AffiliateDisclosureEn } from "@/components/trust/AffiliateDisclosureEn";
import { ResponsibleGamblingNoticeEn } from "@/components/trust/ResponsibleGamblingNoticeEn";
import { JurisdictionWarning } from "@/components/trust/JurisdictionWarning";
import { ReviewHeader } from "@/components/review/ReviewHeader";
import { VerdictBox } from "@/components/review/VerdictBox";
import { ProsCons } from "@/components/review/ProsCons";
import {
  SourceReferenceBlock,
  type SourceReference,
} from "@/components/trust/SourceReferenceBlock";
import { buildOperatorHomepageSourceReference } from "@/lib/affiliate/source-references";
import { cn, focusRing } from "@/lib/utils";

const AFFILIATE_REL = "sponsored nofollow noopener noreferrer";

const JURISDICTION_WARNING =
  "Awintura is presented as an international mixed operator. A localised interface or currency does not equal local licensing in your jurisdiction. Availability, payments, bonuses, KYC and sportsbook access depend on your location, your account and live operator terms. Do not use VPNs or false location data to access restricted services.";

const EXTERNAL_RISK_NOTE =
  "External assessments are broadly favourable on general safety, but the sample of player feedback remains limited. Bonus, conversion, KYC, deposit-turnover and withdrawal rules require review before depositing.";

const QUICK_SUMMARY = [
  { title: "Type", text: "Fiat/multi-currency casino with sportsbook additional" },
  { title: "Campaign", text: "Casino bonus + free spins + freebets — figures vary by GEO" },
  { title: "Payments", text: "Cards and some crypto options depending on cashier" },
  { title: "Main caution", text: "Bonus rules, KYC, deposit turnover and withdrawals" },
] as const;

const CAMPAIGN_CARDS = [
  { title: "Casino bonus", text: "amount depends on campaign, account, GEO and terms" },
  { title: "Free spins", text: "quantity depends on campaign, account, GEO and terms" },
  { title: "Freebets", text: "percentage depends on campaign, account, GEO and terms" },
  { title: "Figures and currency vary", text: "depending on campaign, account, GEO and terms" },
] as const;

const CASINO_PRODUCT_CARDS = [
  { title: "Slots", text: "Broad lobby with multiple providers; the exact catalogue can vary by region." },
  { title: "Live casino", text: "Roulette, blackjack, baccarat and live tables depending on provider availability." },
  { title: "Table games", text: "RNG table games, poker and video poker subject to current catalogue." },
  { title: "Instant / crash", text: "Instant and crash-style formats where the operator enables them." },
  { title: "Jackpots", text: "Jackpots and bonus-buy games depending on catalogue and terms." },
  { title: "VIP and rewards", text: "VIP club, achievements, loot boxes and rewards subject to activity and terms." },
  { title: "Wheel of Fortune", text: "Wheel of Fortune mechanic within the casino product." },
  { title: "Tournaments and achievements", text: "Tournaments, achievements and seasonal campaigns depending on availability." },
] as const;

const SPORTSBOOK_CARDS = [
  { title: "Sports markets", text: "Markets subject to jurisdiction, account and the operator's current catalogue." },
  { title: "Freebets", text: "Freebets and sports promotions depending on active campaign and official terms." },
  { title: "Sport bonus balance", text: "Sport bonus balances separated from casino balance under published rules." },
  { title: "Betting rules and eligibility", text: "Minimum odds, eligible markets, rollover and expiry must be confirmed in terms." },
] as const;

const PAYMENT_CARDS = [
  { title: "Visa / Mastercard", text: "Cards where the cashier enables them; limits and fees vary by country and account." },
  { title: "E-wallets", text: "E-wallets and local methods depending on country; not all are available everywhere." },
  { title: "Bitcoin / Tether / Binance Pay", text: "Secondary crypto options depending on cashier, network and account — these do not make Awintura a crypto casino on JugadaMax." },
  { title: "Regional cashier not independently verified", text: "Some external sources report OXXO Pay and SPEI in specific markets, but JugadaMax has not verified their availability in a live cashier." },
] as const;

const CONDITIONS_CARDS = [
  { title: "Bonus activation before deposit", text: "Terms indicate the promotion must be activated before depositing." },
  { title: "Specific wagering overrides generic rules", text: "Generic rules (e.g. 30x casino, 5x sport) may differ from the specific promotion." },
  { title: "Maximum bonus conversion", text: "Transfer from a bonus balance is commonly capped at around 5x the bonus/prize value." },
  { title: "KYC", text: "Identity verification may apply before withdrawals or in risk situations." },
  { title: "Same-method withdrawal", text: "Same-method withdrawal rules may apply under official terms." },
  { title: "Deposit-turnover fees/restrictions", text: "Withdrawing without sufficient deposit turnover may generate fees or restrictions." },
] as const;

const ANALYSIS_PARAGRAPHS = [
  "Awintura combines a broad casino catalogue — slots, live casino, tables, jackpots, tournaments, Wheel of Fortune, VIP and gamification — with sportsbook and freebets in the same account. JugadaMax classifies it as a fiat/multi-currency casino with sportsbook as an additional product, not as a crypto casino and not as a locally licensed Mexico operator.",
  "The campaign supplied for JugadaMax shows figures for bonus amount, free spins and freebets, but Awintura's public homepage presents other structures depending on country and currency. Currency, landing, country and active promotion can change what each user sees. Always confirm the offer in Active Promotions after redirect.",
  "This is why Awintura is not listed in crypto casino coverage: Bitcoin, Tether and Binance Pay are secondary payment methods, not the primary editorial classification. On payments, JugadaMax does not guarantee OXXO or SPEI for every account until the live cashier is verified.",
  "On bonuses and withdrawals, terms distinguish casino and sport balances, require prior activation, cap conversion and may apply KYC, same-method rules and fees for low deposit turnover. JugadaMax does not promise fast withdrawals or a single universal wagering figure for the supplied campaign.",
  "JugadaMax rates Awintura 4.1/5 as a secondary international mixed operator: an identifiable Curaçao licence, broad product and favourable external signals, but no local licensing for most markets, promotional variability and a limited feedback sample. 18+ only.",
] as const;

const FAQ_ITEMS = [
  {
    question: "What is the Awintura welcome bonus?",
    answer:
      "The supplied campaign creative shows bonus amount, free spins and freebets figures. Public pages may show other figures. Confirm the active promotion, currency, minimum deposit and wagering in your account before depositing.",
  },
  {
    question: "Why does the bonus change by country or account?",
    answer:
      "Awintura adjusts promotions by GEO, currency, affiliate landing and account profile. The supplied campaign does not guarantee the same figures every user sees on the public site.",
  },
  {
    question: "Does Awintura offer freebets?",
    answer:
      "Yes, the supplied campaign includes freebets for sportsbook under specific terms. Minimum odds, rollover, eligible events and expiry must be confirmed in the active promotion.",
  },
  {
    question: "Does Awintura have both casino and sportsbook?",
    answer:
      "Yes. Awintura is a mixed operator with casino and sportsbook in one account. JugadaMax covers it in fiat casino, bonus and betting coverage — not on the homepage or in crypto casino coverage.",
  },
  {
    question: "Does Awintura accept fiat payments?",
    answer:
      "Awintura publishes cards and other fiat methods depending on country. Availability, currency, minimums and fees depend on the cashier and account.",
  },
  {
    question: "Does Awintura accept Bitcoin or USDT?",
    answer:
      "Official sources mention Bitcoin, Tether and Binance Pay among possible options. This does not make Awintura a crypto casino on JugadaMax; confirm networks and assets in the cashier.",
  },
  {
    question: "Does Awintura offer OXXO or SPEI locally?",
    answer:
      "Some external sources report OXXO Pay and SPEI, but JugadaMax has not verified their availability in a live cashier. Always confirm the methods shown in your account.",
  },
  {
    question: "Is Awintura available in my country?",
    answer:
      "JugadaMax has not verified local licensing for every market. Review applicable law and current terms before registering.",
  },
  {
    question: "Does Awintura require KYC?",
    answer:
      "The operator may request identity verification, payment-method ownership and address before withdrawals or in risk situations under its AML/KYC policy.",
  },
  {
    question: "How do withdrawals work?",
    answer:
      "Withdrawals may be subject to KYC, same-method rules, limits, variable timing and restrictions from insufficient deposit turnover. JugadaMax does not promise fixed timeframes.",
  },
  {
    question: "Is Awintura licensed?",
    answer:
      "Awintura is operated by Wiraon B.V. under Curaçao licence OGL/2024/686/0183. Briantie Limited acts as payment agent. This is not local authorisation in every market.",
  },
] as const;

const SOURCE_REFERENCES: SourceReference[] = [
  buildOperatorHomepageSourceReference({
    operatorId: "awintura",
    operatorName: "Awintura",
    market: "global",
    locale: "en",
    fallbackOfficialHref: "https://awintura.com/en/",
  }),
  { label: "Awintura Terms and Conditions", href: "https://awintura.com/en/terms" },
  { label: "Awintura AML Policy", href: "https://awintura.com/en/aml-policy" },
  { label: "Awintura Responsible Gaming", href: "https://awintura.com/en/responsible-gaming" },
  { label: "Awintura About", href: "https://awintura.com/en/about" },
  {
    label: "Casino Guru — Awintura review",
    href: "https://casino.guru/awintura-casino-review",
    note: "External assessment — not a JugadaMax rating.",
  },
  { label: "JugadaMax editorial methodology", href: "/en/how-we-review" },
];

export function EnAwinturaReviewContent({
  review,
  casino,
  author,
}: {
  review: Review;
  casino: Casino;
  author: Author;
}) {
  return (
    <>
      <article className="mx-auto w-full max-w-5xl space-y-7 sm:space-y-8">
        <ReviewHeader review={review} casino={casino} author={author} locale="en" />

        <div className="mx-auto w-full max-w-4xl space-y-3">
          <AffiliateDisclosureEn />
          <ResponsibleGamblingNoticeEn />
          <JurisdictionWarning>{JURISDICTION_WARNING}</JurisdictionWarning>
        </div>

        <div id="review-primary-offer">
          <EnAwinturaFeaturedCard context="review" />
        </div>

        <section
          aria-labelledby="awintura-quick-summary-heading"
          className="rounded-xl border border-border/60 bg-card p-4 sm:p-5"
        >
          <h2 id="awintura-quick-summary-heading" className="text-lg font-semibold text-foreground">
            Quick summary
          </h2>
          <dl className="mt-4 grid gap-3 sm:grid-cols-2">
            {QUICK_SUMMARY.map((item) => (
              <div key={item.title} className="rounded-lg border border-white/10 bg-[#111417] p-3">
                <dt className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {item.title}
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.text}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section aria-labelledby="awintura-campaign-heading">
          <h2 id="awintura-campaign-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            JugadaMax campaign breakdown
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Supplied campaign creative — does not guarantee universal amounts for every account.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {CAMPAIGN_CARDS.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-[#D49A00]/20 bg-[#1A1409]/80 p-3"
              >
                <p className="text-sm font-bold text-[#FFD54A]">{card.title}</p>
                <p className="mt-1 text-xs text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="awintura-figures-heading"
          className="rounded-xl border border-border/60 bg-card p-4 sm:p-5"
        >
          <h2 id="awintura-figures-heading" className="text-lg font-semibold text-foreground">
            Why the figures change
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            The supplied affiliate creative shows a casino bonus, free spins and freebets figures.
            Awintura&apos;s public homepage may show other welcome structures. Account currency,
            country, entry landing and active promotion can change what each user sees. Confirm
            the offer shown after redirect and inside Active Promotions before depositing.
          </p>
        </section>

        <section aria-labelledby="awintura-casino-heading">
          <h2 id="awintura-casino-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Casino product
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {CASINO_PRODUCT_CARDS.map((card) => (
              <div key={card.title} className="rounded-xl border border-border/60 bg-card p-4">
                <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="awintura-sportsbook-heading">
          <h2 id="awintura-sportsbook-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Sportsbook product
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {SPORTSBOOK_CARDS.map((card) => (
              <div key={card.title} className="rounded-xl border border-border/60 bg-card p-4">
                <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="awintura-payments-heading">
          <h2 id="awintura-payments-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Payments
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {PAYMENT_CARDS.map((card) => (
              <div key={card.title} className="rounded-xl border border-border/60 bg-card p-4">
                <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="awintura-conditions-heading">
          <h2
            id="awintura-conditions-heading"
            className="text-lg font-semibold text-foreground sm:text-xl"
          >
            Bonuses, KYC and withdrawal conditions
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {CONDITIONS_CARDS.map((card) => (
              <div key={card.title} className="rounded-xl border border-border/60 bg-card p-4">
                <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="awintura-licence-heading"
          className="rounded-xl border border-border/60 bg-card p-4 sm:p-5"
        >
          <h2 id="awintura-licence-heading" className="text-lg font-semibold text-foreground">
            Licence and ownership
          </h2>
          <dl className="mt-4 space-y-2 text-sm text-muted-foreground">
            <div>
              <dt className="font-semibold text-foreground">Operator</dt>
              <dd>Wiraon B.V. — registration 146886</dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">Address</dt>
              <dd>Korporaalweg 10, Willemstad, Curaçao</dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">Licence</dt>
              <dd>Curaçao — OGL/2024/686/0183</dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">Payment agent</dt>
              <dd>Briantie Limited — registration HE 385770</dd>
            </div>
          </dl>
        </section>

        <section
          aria-labelledby="awintura-external-heading"
          className="rounded-xl border border-amber-500/25 bg-amber-500/5 p-4 sm:p-5"
        >
          <h2 id="awintura-external-heading" className="text-lg font-semibold text-foreground">
            External assessment note
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Casino Guru currently shows a Very High Safety Index of 9.8, but the sample of user
            reviews remains small. Third-party ratings are not JugadaMax ratings. JugadaMax
            independently assigns 4.1/5.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{EXTERNAL_RISK_NOTE}</p>
        </section>

        <VerdictBox verdict={review.verdict} rating={review.rating} locale="en" />

        <section aria-label="Pros and cons">
          <h2 className="mb-3 text-xl font-semibold text-foreground">Pros and cons</h2>
          <ProsCons pros={review.pros} cons={review.cons} locale="en" />
        </section>

        <section aria-label="Analysis" className="mx-auto max-w-4xl space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Analysis</h2>
          {ANALYSIS_PARAGRAPHS.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="text-sm leading-relaxed text-muted-foreground sm:text-base"
            >
              {paragraph}
            </p>
          ))}
        </section>

        <section
          aria-labelledby="awintura-final-cta-heading"
          className="rounded-xl border border-[#D49A00]/20 bg-gradient-to-br from-[#537A28]/8 via-card to-[#1A1409] p-4 sm:p-5"
        >
          <h2 id="awintura-final-cta-heading" className="text-lg font-semibold text-foreground">
            Register on Awintura
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Confirm the active promotion, payment methods, verification rules and withdrawal
            limits on the official site before depositing.
          </p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            <a
              href={AWINTURA_REGISTRATION_AFFILIATE_URL}
              target="_blank"
              rel={AFFILIATE_REL}
              className={cn(
                "inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold",
                "bg-[#FFD54A] text-[#090704] transition-colors hover:bg-[#F2B600]",
                focusRing,
              )}
            >
              Register on Awintura
            </a>
            <Link
              href="/en/casinos-fiat"
              className={cn(
                "inline-flex min-h-11 items-center justify-center rounded-md border border-[#537A28]/40 px-5 py-2.5 text-sm font-semibold text-[#6FA536] transition-colors hover:bg-[#537A28]/10",
                focusRing,
              )}
            >
              Compare fiat casinos
            </Link>
          </div>
        </section>

        <section aria-labelledby="awintura-faq-heading">
          <h2 id="awintura-faq-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Frequently asked questions
          </h2>
          <div className="mt-4 divide-y divide-white/10 rounded-xl border border-border/60 bg-card">
            {FAQ_ITEMS.map((item) => (
              <details key={item.question} className="group px-4 py-1 sm:px-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 py-4 text-sm font-semibold text-foreground marker:content-none [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                  >
                    ▾
                  </span>
                </summary>
                <p className="pb-4 text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <SourceReferenceBlock
          title="Sources & references"
          description="Facts published by the operator, supplied campaign creative, external assessments and JugadaMax editorial methodology. Third-party reviews inform caution — they are not JugadaMax ratings."
          items={SOURCE_REFERENCES}
        />
      </article>

      <MobileStickyOfferCta
        showAfterId="review-primary-offer"
        compactPrimaryLabel="View"
        compactSecondaryLabel="Compare"
        primaryLabel="View Awintura"
        primaryHref={AWINTURA_CARD_AFFILIATE_URL}
        secondaryLabel="Compare"
        secondaryHref="/en/casinos-fiat"
      />
    </>
  );
}

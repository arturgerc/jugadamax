import Link from "next/link";
import type { Author, Casino, Review } from "@/types/content";
import {
  BITCASINO_PROMO_AFFILIATE_URL,
  BITCASINO_REGISTRATION_AFFILIATE_URL,
} from "@/lib/affiliate/constants";
import { EnBitcasinoFeaturedCard } from "@/components/affiliate/EnBitcasinoFeaturedCard";
import { MobileStickyOfferCta } from "@/components/affiliate/MobileStickyOfferCta";
import { AffiliateDisclosureEn } from "@/components/trust/AffiliateDisclosureEn";
import { ResponsibleGamblingNoticeEn } from "@/components/trust/ResponsibleGamblingNoticeEn";
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
  "Bitcasino.io is an international crypto casino. JugadaMax does not claim local licensing for every market. Availability, registration, promotions, payments, KYC and withdrawals depend on your location, account and live operator terms.";

const QUICK_SUMMARY = [
  { title: "Type", text: "International crypto casino" },
  { title: "Welcome", text: "Up to 5,000 USDT across three deposits" },
  { title: "Payments", text: "BTC, ETH, USDT and TRX depending on account" },
  { title: "Main caution", text: "Wagering, licence, KYC and withdrawals" },
] as const;

const DEPOSIT_BONUS_CARDS = [
  { title: "First deposit", lines: ["100%", "Up to 1,500 USDT"] },
  { title: "Second deposit", lines: ["50%", "Up to 2,000 USDT"] },
  { title: "Third deposit", lines: ["100%", "Up to 1,500 USDT"] },
  {
    title: "Advertised maximum",
    lines: ["Up to 5,000 USDT", "Subject to account, GEO and terms"],
  },
] as const;

const CASINO_CARDS = [
  { title: "Slots", text: "Broad lobby according to providers enabled by region." },
  { title: "Live casino", text: "Live tables subject to catalogue and schedules." },
  { title: "Roulette and blackjack", text: "RNG and live variants according to the current catalogue." },
  { title: "Baccarat", text: "Live and RNG tables where the operator enables them." },
  { title: "Game shows", text: "Live studio formats depending on availability." },
  { title: "Jackpots", text: "Progressive prizes depending on provider and region." },
  { title: "Bonus Buy", text: "Bonus-feature purchases on eligible slots." },
  { title: "Crash / instant-win", text: "Fast formats subject to limits and terms." },
] as const;

const ORIGINALS_CARDS = [
  { title: "Plinko", text: "Original game with rules and limits under live terms." },
  { title: "Dice", text: "Instant format with variable risk." },
  { title: "Baccarat", text: "Original variant where the operator enables it." },
  { title: "Hilo", text: "Prediction game subject to regional availability." },
  {
    title: "Other Originals",
    text: "The catalogue can change; not every title is available in every region.",
  },
] as const;

const ROTATING_PROMOS = [
  "World Cup Wager Race",
  "World Cup Cash Drops",
  "Pragmatic Play Drops & Wins",
  "VIP promotions",
] as const;

const PAYMENT_CARDS = [
  { title: "Bitcoin", text: "Deposits and withdrawals depending on network, minimums and fees." },
  { title: "Ethereum", text: "Confirm network and address before transferring." },
  { title: "USDT", text: "Stablecoin; verify network (TRC-20, ERC-20, etc.)." },
  { title: "TRX", text: "Asset mentioned in the supplied campaign." },
  {
    title: "Other verified assets",
    text: "Confirm additional coins in live terms.",
  },
  {
    title: "Network and wallet",
    text: "Check asset, network and address before confirming.",
  },
] as const;

const KYC_CARDS = [
  {
    title: "KYC",
    text: "The operator may request identity, address, source of funds or wallet ownership before withdrawals or promotions.",
  },
  {
    title: "Withdrawals",
    text: "JugadaMax does not guarantee withdrawal times. Network, fees, limits, review and account activity can affect processing.",
  },
  {
    title: "Bonus conditions",
    text: "A bonus may impose wagering, maximum bet, eligible games, expiry and conversion limits.",
  },
  {
    title: "Account controls",
    text: "Duplicate accounts, payment mismatches or terms breaches can trigger review or restrictions.",
  },
] as const;

const ANALYSIS_PARAGRAPHS = [
  "Bitcasino.io is a crypto-centred casino with slots, live casino, tables, Originals, jackpots and VIP promotions. JugadaMax classifies it exclusively as a crypto casino: it is not presented as a fiat casino or sportsbook.",
  "On English JugadaMax pages it appears as a recommended crypto casino with editorial review coverage. Product placement and comparison blocks can differ by locale surface; confirm live rankings and terms after redirect.",
  "The supplied campaign allocates up to 5,000 USDT across three bonuses: 100% up to 1,500 USDT, 50% up to 2,000 USDT and 100% up to 1,500 USDT. The maximum is the potential sum of eligible deposits, not an immediate credit of 5,000 USDT.",
  "Campaign captures show rotating promotions such as World Cup Wager Race, World Cup Cash Drops and Pragmatic Play Drops & Wins. These are temporary; dates, prizes and eligibility can change.",
  "Operated by Moon Technologies B.V. under Curaçao licence OGL/2023/111/0069 according to published official information. A language interface does not equal local licensing in every market. Confirm network and asset before transferring crypto.",
  "External assessments belong to third parties and may differ. JugadaMax independently assigns 4.0/5 after reviewing product, promotion, payments, terms, licence and risks. 18+.",
] as const;

const FAQ_ITEMS = [
  {
    question: "What is the Bitcasino.io bonus?",
    answer:
      "The supplied campaign announces up to 5,000 USDT across three deposit bonuses. Activation, currency, wagering and eligibility depend on account and live terms.",
  },
  {
    question: "How is the 5,000 USDT maximum structured?",
    answer:
      "First deposit 100% up to 1,500 USDT, second 50% up to 2,000 USDT and third 100% up to 1,500 USDT. The maximum is the potential sum of eligible bonuses, not an automatic payout.",
  },
  {
    question: "What is the minimum deposit?",
    answer:
      "JugadaMax does not publish a universal minimum deposit. Confirm the minimum shown in the active promotion and cashier for your account.",
  },
  {
    question: "What is the wagering requirement?",
    answer:
      "Wagering varies by bonus, game and live terms. Review each deposit bonus before activating a promotion.",
  },
  {
    question: "Does Bitcasino.io accept Bitcoin and USDT?",
    answer:
      "Yes, Bitcasino.io is crypto-oriented. Supplied campaign materials mention USDT and BTC among supported assets. Confirm network and minimums.",
  },
  {
    question: "Does Bitcasino.io accept ETH and TRX?",
    answer:
      "Supplied campaign materials mention ETH and TRX. Other assets may appear depending on account and terms. Verify in the cashier.",
  },
  {
    question: "Does Bitcasino.io have live casino?",
    answer:
      "Yes. Bitcasino.io offers live casino, tables and game shows depending on regional catalogue and terms.",
  },
  {
    question: "What are Originals?",
    answer:
      "Operator-owned games such as Plinko, Dice or Hilo. The catalogue can change and not every title is available in every region.",
  },
  {
    question: "Does Bitcasino.io require KYC?",
    answer:
      "Bitcasino.io may request identity, address or source-of-funds verification before withdrawals or promotions.",
  },
  {
    question: "How long do withdrawals take?",
    answer:
      "JugadaMax does not guarantee withdrawal times. Network, fees, reviews and limits can affect processing.",
  },
  {
    question: "Is Bitcasino.io available everywhere?",
    answer:
      "Availability depends on jurisdiction and live terms. A language interface does not equal local licensing or universal legal access.",
  },
  {
    question: "Is Bitcasino.io licensed?",
    answer:
      "According to published official information, Moon Technologies B.V. operates under Curaçao licence OGL/2023/111/0069. This is not a local licence for every market.",
  },
  {
    question: "Are World Cup promotions permanent?",
    answer:
      "No. World Cup Wager Race, Cash Drops and similar campaigns are rotating promotions that can end or change.",
  },
] as const;

const SOURCE_REFERENCES: SourceReference[] = [
  buildOperatorHomepageSourceReference({
    operatorId: "bitcasino",
    operatorName: "Bitcasino.io",
    market: "global",
    locale: "en",
    fallbackOfficialHref: "https://bitcasino.io/",
  }),
  {
    label: "Bitcasino — licence information",
    href: "https://bitcasino.io/help-center/help-getting-started/is-bitcasino-licensed",
  },
  {
    label: "Bitcasino — general terms",
    href: "https://bitcasino.io/help-center/help-terms-and-conditions/bitcasino-terms-and-conditions-of-use-of-services-of-the-company",
  },
  { label: "Bitcasino — promotions", href: "https://bitcasino.io/promotions" },
  {
    label: "Casino Guru — Bitcasino review",
    href: "https://casino.guru/bitcasino-io-casino-review",
    note: "External assessment; not the JugadaMax editorial rating (4.0/5).",
  },
  {
    label: "AskGamblers — Bitcasino review",
    href: "https://www.askgamblers.com/online-casinos/reviews/bitcasino-casino",
    note: "External assessment with signals that may differ.",
  },
  { label: "JugadaMax editorial methodology", href: "/en/how-we-review" },
  {
    label: "Partner-supplied campaign links",
    note: "Promotion and general registration landings.",
  },
];

/**
 * English Bitcasino.io review layout.
 * Structural and visual parity with Spanish BitcasinoReviewContent.
 */
export function EnBitcasinoReviewContent({
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
          <div
            role="note"
            className="rounded-lg border border-amber-500/25 bg-amber-500/5 px-4 py-3 text-sm leading-relaxed text-muted-foreground"
          >
            {JURISDICTION_WARNING}
          </div>
        </div>

        <div id="review-primary-offer">
          <EnBitcasinoFeaturedCard context="review" />
        </div>

        <section aria-labelledby="bitcasino-en-summary-heading">
          <h2
            id="bitcasino-en-summary-heading"
            className="text-lg font-semibold text-foreground sm:text-xl"
          >
            Quick summary
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {QUICK_SUMMARY.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-[#6519A8]/20 bg-[#12051F]/80 p-3"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-[#FF7417]">
                  {card.title}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="bitcasino-en-welcome-heading">
          <h2
            id="bitcasino-en-welcome-heading"
            className="text-lg font-semibold text-foreground sm:text-xl"
          >
            Welcome bonuses across three deposits
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {DEPOSIT_BONUS_CARDS.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-[#7B22D3]/25 bg-[#210936]/80 p-4"
              >
                <p className="text-sm font-bold text-[#FF7417]">{card.title}</p>
                <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
                  {card.lines.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            The advertised maximum is the potential sum of three eligible deposits, not an
            immediate credit of 5,000 USDT.
          </p>
          <div className="mt-4">
            <a
              href={BITCASINO_PROMO_AFFILIATE_URL}
              target="_blank"
              rel={AFFILIATE_REL}
              className={cn(
                "inline-flex min-h-11 items-center justify-center rounded-md bg-[#FF5A00] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#FF7417]",
                focusRing,
              )}
            >
              View Bitcasino bonus
            </a>
          </div>
        </section>

        <section aria-labelledby="bitcasino-en-casino-heading">
          <h2
            id="bitcasino-en-casino-heading"
            className="text-lg font-semibold text-foreground sm:text-xl"
          >
            Casino product
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {CASINO_CARDS.map((card) => (
              <div key={card.title} className="rounded-xl border border-border/60 bg-card p-4">
                <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Bitcasino.io offers a broad catalogue of slots, live casino, tables and Originals; the
            exact number of games and providers can change by region.
          </p>
        </section>

        <section aria-labelledby="bitcasino-en-originals-heading">
          <h2
            id="bitcasino-en-originals-heading"
            className="text-lg font-semibold text-foreground sm:text-xl"
          >
            Originals
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {ORIGINALS_CARDS.map((card) => (
              <div key={card.title} className="rounded-xl border border-border/60 bg-card p-4">
                <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="bitcasino-en-promos-heading">
          <h2
            id="bitcasino-en-promos-heading"
            className="text-lg font-semibold text-foreground sm:text-xl"
          >
            Rotating promotions
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Supplied captures show rotating campaigns such as World Cup Wager Race, World Cup Cash
            Drops and Pragmatic Play Drops & Wins. Prizes, free spins, qualifying bets, dates and
            eligibility can change or end.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {ROTATING_PROMOS.map((title) => (
              <div key={title} className="rounded-xl border border-border/60 bg-card p-4">
                <h3 className="text-sm font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Rotating promotion; dates, prizes and availability can change.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="bitcasino-en-payments-heading">
          <h2
            id="bitcasino-en-payments-heading"
            className="text-lg font-semibold text-foreground sm:text-xl"
          >
            Payments
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {PAYMENT_CARDS.map((card) => (
              <div key={card.title} className="rounded-xl border border-border/60 bg-card p-4">
                <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Check asset, network and address before confirming a transfer. An incorrect network can
            cause loss of funds.
          </p>
        </section>

        <section aria-labelledby="bitcasino-en-kyc-heading">
          <h2
            id="bitcasino-en-kyc-heading"
            className="text-lg font-semibold text-foreground sm:text-xl"
          >
            KYC and withdrawals
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {KYC_CARDS.map((card) => (
              <div key={card.title} className="rounded-xl border border-border/60 bg-card p-4">
                <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="bitcasino-en-licence-heading"
          className="rounded-xl border border-border/60 bg-card p-4 sm:p-5"
        >
          <h2 id="bitcasino-en-licence-heading" className="text-lg font-semibold text-foreground">
            Licence and ownership
          </h2>
          <dl className="mt-4 space-y-2 text-sm text-muted-foreground">
            <div>
              <dt className="font-semibold text-foreground">Operator</dt>
              <dd>Moon Technologies B.V.</dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">Registered address</dt>
              <dd>Schout Bij Nacht Doormanweg 40, P.O. Box 4745, Curaçao</dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">Licence</dt>
              <dd>Curaçao Gaming Authority — OGL/2023/111/0069</dd>
            </div>
          </dl>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Information verified on Bitcasino&apos;s official licence and terms pages. This is not a
            local licence for every market.
          </p>
        </section>

        <section
          aria-labelledby="bitcasino-en-external-heading"
          className="rounded-xl border border-[#6519A8]/20 bg-[#12051F]/60 p-4 sm:p-5"
        >
          <h2 id="bitcasino-en-external-heading" className="text-lg font-semibold text-foreground">
            External assessment note
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            External assessments belong to third parties and may differ from each other. Casino Guru
            and AskGamblers publish reviews with editorial scores, complaints and safety signals that
            are not the JugadaMax rating. JugadaMax independently assigns 4.0/5 after reviewing
            product, promotion, payments, terms, licence and risks.
          </p>
        </section>

        <VerdictBox verdict={review.verdict} rating={review.rating} locale="en" />

        <ProsCons pros={review.pros} cons={review.cons} locale="en" />

        <section aria-labelledby="bitcasino-en-analysis-heading">
          <h2
            id="bitcasino-en-analysis-heading"
            className="text-lg font-semibold text-foreground sm:text-xl"
          >
            Editorial analysis
          </h2>
          <div className="mt-4 space-y-3">
            {ANALYSIS_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-sm leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="bitcasino-en-final-cta-heading"
          className="rounded-xl border border-[#7B22D3]/25 bg-gradient-to-br from-[#12051F] via-[#210936] to-[#35105A] p-5 sm:p-6"
        >
          <h2 id="bitcasino-en-final-cta-heading" className="text-lg font-semibold text-foreground">
            Review Bitcasino.io
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Confirm the active bonus, cryptocurrency, network, wagering, KYC and withdrawal rules
            directly on Bitcasino.io before depositing.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={BITCASINO_REGISTRATION_AFFILIATE_URL}
              target="_blank"
              rel={AFFILIATE_REL}
              className={cn(
                "inline-flex min-h-11 items-center justify-center rounded-md bg-[#FF5A00] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#FF7417]",
                focusRing,
              )}
            >
              Visit Bitcasino.io
            </a>
            <Link
              href="/en/casinos-crypto"
              className={cn(
                "inline-flex min-h-11 items-center justify-center rounded-md border border-[#7B22D3]/40 px-5 py-2.5 text-sm font-semibold text-[#F5F1FA] transition-colors hover:bg-[#6519A8]/20",
                focusRing,
              )}
            >
              Compare crypto casinos
            </Link>
          </div>
        </section>

        <section aria-labelledby="bitcasino-en-faq-heading">
          <h2
            id="bitcasino-en-faq-heading"
            className="text-lg font-semibold text-foreground sm:text-xl"
          >
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
          title="Sources and references"
          description="Official information, partner-supplied campaign links, external assessments and JugadaMax editorial opinion."
          items={SOURCE_REFERENCES}
        />
      </article>

      <MobileStickyOfferCta
        showAfterId="review-primary-offer"
        compactPrimaryLabel="Visit"
        compactSecondaryLabel="Compare"
        primaryLabel="Visit Bitcasino.io"
        primaryHref={BITCASINO_REGISTRATION_AFFILIATE_URL}
        secondaryLabel="Compare"
        secondaryHref="/en/casinos-crypto"
      />
    </>
  );
}

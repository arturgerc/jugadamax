import Link from "next/link";
import type { Author, Casino, Review } from "@/types/content";
import {
  SPORTSBETIO_BETTING_AFFILIATE_URL,
  SPORTSBETIO_REGISTRATION_AFFILIATE_URL,
} from "@/lib/affiliate/constants";
import { EnSportsbetFeaturedCard } from "@/components/affiliate/EnSportsbetFeaturedCard";
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
  "Sportsbet.io is an international operator with a Curaçao licence. A localised interface or currency does not equal local licensing in your jurisdiction. Availability, registration, promotions, payments, KYC and withdrawals depend on your location, your account and live operator terms. Do not use VPNs or false location data to access restricted services.";

const QUICK_SUMMARY = [
  { title: "Type", text: "Crypto sportsbook with substantial casino" },
  { title: "Welcome", text: "100% up to 300 USDT — Sports or Casino" },
  { title: "Payments", text: "BTC, USDT and other assets depending on account" },
  { title: "Main caution", text: "External Safety Index, KYC and withdrawals" },
] as const;

const WELCOME_SPORTS = [
  "100% up to 300 USDT",
  "Minimum deposit: 10 USDT",
  "Published wagering: 15x",
] as const;

const WELCOME_CASINO = [
  "100% up to 300 USDT",
  "Minimum deposit: 10 USDT",
  "Published wagering: 40x",
] as const;

const WELCOME_ACTIVATION = [
  "Activate Sports or Casino in Rewards",
  "Do not combine both options without confirming terms",
] as const;

const WELCOME_ELIGIBILITY = [
  "Depends on account, GEO and live terms",
  "Promotion not guaranteed for every account",
] as const;

const SPORTSBOOK_CARDS = [
  { title: "Football", text: "Pre-match and live markets according to current catalogue." },
  { title: "Live betting", text: "Variable odds; early settlement is not guaranteed." },
  { title: "Esports", text: "Digital disciplines subject to regional availability." },
  { title: "Basketball and tennis", text: "Popular sports subject to active calendar." },
  {
    title: "Cricket and international sports",
    text: "Broad coverage; confirm markets on your account.",
  },
  { title: "Accumulators / parlays", text: "Combined bets subject to settlement rules." },
  { title: "Odds formats", text: "Decimal and other formats depending on account preference." },
  { title: "Settlement rules", text: "Always review betting terms and void rules." },
] as const;

const CASINO_CARDS = [
  { title: "Slots", text: "Broad lobby according to providers enabled by region." },
  { title: "Live casino", text: "Live tables subject to catalogue and schedules." },
  { title: "Originals", text: "Operator-exclusive titles depending on availability." },
  { title: "Roulette and blackjack", text: "RNG and live tables according to current catalogue." },
  { title: "Baccarat", text: "Live and RNG variants where the operator enables them." },
  { title: "Crash / instant games", text: "Fast formats subject to limits and terms." },
  { title: "Jackpot games", text: "Progressive prizes depending on provider and region." },
  { title: "Tournaments", text: "Rotating competitions with specific rules." },
] as const;

const PAYMENT_CARDS = [
  { title: "Bitcoin / Ethereum", text: "Crypto deposits and withdrawals depending on network and minimums." },
  { title: "USDT / USDC", text: "Stablecoins; confirm the network before transferring." },
  { title: "Litecoin / XRP", text: "Additional assets depending on your account cashier." },
  { title: "Other cryptocurrencies", text: "Broad catalogue; availability varies by country." },
  { title: "Fiat where available", text: "Terms contemplate fiat; confirm in your cashier." },
  { title: "Account-specific cashier", text: "Visible methods may differ between users." },
] as const;

const KYC_CARDS = [
  {
    title: "KYC",
    text: "Identity, address and payment-method ownership may be requested.",
  },
  {
    title: "Fiat withdrawals",
    text: "Up to three business days after approval according to the provider.",
  },
  {
    title: "Withdrawal with an active bonus",
    text: "Active bonuses may impose wagering and additional conditions.",
  },
  {
    title: "Deposit turnover",
    text: "At least 1x may be required; stricter controls may apply in risk cases.",
  },
  {
    title: "Password security",
    text: "Changing your password may lock withdrawals for 48 hours under published terms.",
  },
  {
    title: "Fees",
    text: "Network, bank or provider fees may apply.",
  },
] as const;

const ANALYSIS_PARAGRAPHS = [
  "Sportsbet.io is primarily a crypto sportsbook with pre-match, live, esports and combined betting. JugadaMax classifies it as sportsbook-first with a substantial crypto casino — not as a fiat operator — and positions it in English crypto casino and betting coverage.",
  "Although it accepts multiple cryptocurrencies and also fiat under its terms, the core proposition is crypto-first. That is why it appears in crypto casino coverage as an active international campaign, without a numbered canonical rank.",
  "The published Champions Welcome Bonus offers 100% up to 300 USDT with a choice of Sports or Casino, a 10 USDT minimum deposit and different wagering: 15x for Sports and 40x for Casino. You must activate the reward in Rewards before depositing.",
  "Operated by mBet Solutions N.V. (129230) under Curaçao licence OGL/2023/110/0072. This is not a local licence for every market — check restrictions in your jurisdiction.",
  "External signals are mixed: a below-average Casino Guru Safety Index versus a higher AskGamblers editorial score. JugadaMax independently assigns 4.0/5 for solid product and corporate transparency, with caution on Safety Index, KYC and withdrawals. 18+ only.",
] as const;

const FAQ_ITEMS = [
  {
    question: "What is the Sportsbet.io welcome bonus?",
    answer:
      "The published Champions Welcome Bonus offers 100% up to 300 USDT for Sports or Casino, with a 10 USDT minimum deposit. Eligibility, activation and terms depend on account and GEO.",
  },
  {
    question: "Can I choose between the Sports and Casino bonus?",
    answer:
      "Yes. You must activate Sports or Casino in the Rewards section before depositing. Do not combine both options without confirming official terms.",
  },
  {
    question: "What is the bonus wagering requirement?",
    answer:
      "The published promotion sets 15x for Sports and 40x for Casino. Markets, eligible games and maximum bet rules may vary under live terms.",
  },
  {
    question: "Does Sportsbet.io have a sportsbook?",
    answer:
      "Yes. Pre-match betting, live betting, esports and combined markets form the core product.",
  },
  {
    question: "Does Sportsbet.io have a casino?",
    answer:
      "Yes. Casino, live casino, slots, Originals and instant games complement the sportsbook.",
  },
  {
    question: "Does Sportsbet.io accept Bitcoin and USDT?",
    answer:
      "Sportsbet.io is crypto-first and accepts BTC, USDT, USDC and other cryptocurrencies depending on account and country. Confirm network and minimums in the cashier.",
  },
  {
    question: "Does Sportsbet.io accept fiat currencies?",
    answer:
      "Official terms contemplate fiat, but currencies and methods depend on account and country. JugadaMax does not guarantee fiat access for every reader.",
  },
  {
    question: "Does Sportsbet.io have an app?",
    answer:
      "Android downloads from the official site; iOS uses a PWA. Check compatibility, permissions and destination before installing.",
  },
  {
    question: "Does Sportsbet.io require KYC?",
    answer:
      "Yes, the operator may request identity, address and payment-method ownership verification. Email verification is required before withdrawals.",
  },
  {
    question: "How long do withdrawals take?",
    answer:
      "JugadaMax does not guarantee withdrawal times. Fiat withdrawals may take up to three business days after approval; crypto depends on network and internal reviews.",
  },
  {
    question: "Is Sportsbet.io available in my country?",
    answer:
      "Availability depends on the operator's current restricted-jurisdiction list. This is not a local licence — check your local law and official terms.",
  },
  {
    question: "Is Sportsbet.io licensed?",
    answer:
      "Operated by mBet Solutions N.V. under Curaçao Gaming Authority licence OGL/2023/110/0072. This is not a local licence for every market.",
  },
] as const;

const SOURCE_REFERENCES: SourceReference[] = [
  buildOperatorHomepageSourceReference({
    operatorId: "sportsbetio",
    operatorName: "Sportsbet.io",
    market: "global",
    locale: "en",
    fallbackOfficialHref: "https://sportsbet.io/",
  }),
  {
    label: "Champions Welcome Bonus",
    href: "https://sportsbet.io/de/promotions/2025-04-welcome-champion",
  },
  {
    label: "General terms and conditions",
    href: "https://sportsbet.io/de/help-centre/help-other/help-other-terms-and-conditions/general-terms-conditions",
  },
  {
    label: "Restricted jurisdictions",
    href: "https://sportsbet.io/de/help-centre/help-other/help-other-terms-and-conditions/restricted-jurisdictions",
  },
  { label: "Official promotions", href: "https://sportsbet.io/de/promotions" },
  { label: "App guide", href: "https://sportsbet.io/de/promotions/sportsbetio-app" },
  {
    label: "Casino Guru — Sportsbet.io review",
    href: "https://casino.guru/sportsbet-io-casino-review",
    note: "External assessment; not the JugadaMax editorial rating (4.0/5).",
  },
  {
    label: "AskGamblers — Sportsbet.io review",
    href: "https://www.askgamblers.com/online-casinos/reviews/sportsbet-io-casino",
    note: "External assessment with mixed signals.",
  },
  { label: "JugadaMax editorial methodology", href: "/en/how-we-review" },
  {
    label: "Partner-supplied campaign links",
    note: "General registration, sportsbook and welcome bonus landings.",
  },
];

export function EnSportsbetReviewContent({
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
          <EnSportsbetFeaturedCard context="review" />
        </div>

        <section aria-labelledby="sportsbetio-quick-summary-heading">
          <h2
            id="sportsbetio-quick-summary-heading"
            className="text-lg font-semibold text-foreground sm:text-xl"
          >
            Quick summary
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {QUICK_SUMMARY.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-[#36B958]/20 bg-[#11161C]/80 p-3"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-[#65E782]">
                  {card.title}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="sportsbetio-welcome-heading">
          <h2
            id="sportsbetio-welcome-heading"
            className="text-lg font-semibold text-foreground sm:text-xl"
          >
            Champions Welcome Bonus
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-[#36B958]/20 bg-[#171E25]/80 p-4">
              <p className="text-sm font-bold text-[#45D067]">Sports</p>
              <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
                {WELCOME_SPORTS.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-[#36B958]/20 bg-[#171E25]/80 p-4">
              <p className="text-sm font-bold text-[#45D067]">Casino</p>
              <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
                {WELCOME_CASINO.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-[#2B3540]/60 bg-[#171E25]/80 p-4">
              <p className="text-sm font-bold text-[#DCE5EC]">Activation</p>
              <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
                {WELCOME_ACTIVATION.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-[#2B3540]/60 bg-[#171E25]/80 p-4">
              <p className="text-sm font-bold text-[#DCE5EC]">Eligibility</p>
              <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
                {WELCOME_ELIGIBILITY.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section aria-labelledby="sportsbetio-sportsbook-heading">
          <h2
            id="sportsbetio-sportsbook-heading"
            className="text-lg font-semibold text-foreground sm:text-xl"
          >
            Sportsbook
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {SPORTSBOOK_CARDS.map((card) => (
              <div key={card.title} className="rounded-xl border border-border/60 bg-card p-4">
                <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <a
              href={SPORTSBETIO_BETTING_AFFILIATE_URL}
              target="_blank"
              rel={AFFILIATE_REL}
              className={cn(
                "inline-flex min-h-11 items-center justify-center rounded-md bg-[#45D067] px-5 py-2.5 text-sm font-semibold text-[#11161C] transition-colors hover:bg-[#65E782]",
                focusRing,
              )}
            >
              View Sportsbet.io betting
            </a>
          </div>
        </section>

        <section aria-labelledby="sportsbetio-casino-heading">
          <h2
            id="sportsbetio-casino-heading"
            className="text-lg font-semibold text-foreground sm:text-xl"
          >
            Casino and Originals
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
            External sources describe a very broad catalogue across numerous providers, but exact
            numbers and regional availability can change.
          </p>
        </section>

        <section
          aria-labelledby="sportsbetio-app-heading"
          className="rounded-xl border border-[#36B958]/25 bg-gradient-to-br from-[#11161C] via-[#171E25] to-[#202932] p-5 sm:p-6"
        >
          <h2 id="sportsbetio-app-heading" className="text-lg font-semibold text-foreground">
            Mobile app
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Android downloads from the official Sportsbet.io site. iOS uses a Progressive Web App
            (PWA). Account, GEO, permissions and device compatibility must be checked before
            installing.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Check domain, signature, permissions and compatibility before installing any
            application.
          </p>
          <div className="mt-4">
            <a
              href={SPORTSBETIO_REGISTRATION_AFFILIATE_URL}
              target="_blank"
              rel={AFFILIATE_REL}
              className={cn(
                "inline-flex min-h-11 items-center justify-center rounded-md bg-[#45D067] px-5 py-2.5 text-sm font-semibold text-[#11161C] transition-colors hover:bg-[#65E782]",
                focusRing,
              )}
            >
              Visit Sportsbet.io
            </a>
          </div>
        </section>

        <section aria-labelledby="sportsbetio-payments-heading">
          <h2
            id="sportsbetio-payments-heading"
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
            Sending the wrong currency or network can cause an irreversible loss. Always check the
            asset, network and address before depositing.
          </p>
        </section>

        <section aria-labelledby="sportsbetio-kyc-heading">
          <h2 id="sportsbetio-kyc-heading" className="text-lg font-semibold text-foreground sm:text-xl">
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
          aria-labelledby="sportsbetio-licence-heading"
          className="rounded-xl border border-border/60 bg-card p-4 sm:p-5"
        >
          <h2 id="sportsbetio-licence-heading" className="text-lg font-semibold text-foreground">
            Licence and ownership
          </h2>
          <dl className="mt-4 space-y-2 text-sm text-muted-foreground">
            <div>
              <dt className="font-semibold text-foreground">Operator</dt>
              <dd>mBet Solutions N.V.</dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">Registration</dt>
              <dd>129230</dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">Licence</dt>
              <dd>Curaçao Gaming Authority — OGL/2023/110/0072</dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">Payments company</dt>
              <dd>mProcessing Solutions Ltd — Nicosia, Cyprus</dd>
            </div>
          </dl>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            This is not a local licence for every market. Availability, restrictions and terms
            depend on your jurisdiction — check local law before registering.
          </p>
        </section>

        <section
          aria-labelledby="sportsbetio-external-heading"
          className="rounded-xl border border-[#36B958]/20 bg-[#11161C]/60 p-4 sm:p-5"
        >
          <h2 id="sportsbetio-external-heading" className="text-lg font-semibold text-foreground">
            External assessment note
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            External signals are mixed. Casino Guru shows a Safety Index of 5.9/10 and notes
            complaint impact, though it did not find predatory rules in the terms. AskGamblers
            publishes a CasinoRank of 8.5/10 and a user rating of 9.1/10. These are third-party
            figures — not JugadaMax ratings. JugadaMax independently assigns 4.0/5.
          </p>
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
          aria-labelledby="sportsbetio-final-cta-heading"
          className="rounded-xl border border-[#36B958]/25 bg-gradient-to-br from-[#11161C] via-[#171E25] to-[#202932] p-5 sm:p-6"
        >
          <h2 id="sportsbetio-final-cta-heading" className="text-lg font-semibold text-foreground">
            Review Sportsbet.io
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Confirm your selected promotion, cryptocurrency, network, KYC, markets and withdrawal
            rules directly on Sportsbet.io before depositing or betting.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={SPORTSBETIO_REGISTRATION_AFFILIATE_URL}
              target="_blank"
              rel={AFFILIATE_REL}
              className={cn(
                "inline-flex min-h-11 items-center justify-center rounded-md bg-[#45D067] px-5 py-2.5 text-sm font-semibold text-[#11161C] transition-colors hover:bg-[#65E782]",
                focusRing,
              )}
            >
              Visit Sportsbet.io
            </a>
            <Link
              href="/en/casinos-crypto"
              className={cn(
                "inline-flex min-h-11 items-center justify-center rounded-md border border-[#36B958]/40 px-5 py-2.5 text-sm font-semibold text-[#65E782] transition-colors hover:bg-[#36B958]/10",
                focusRing,
              )}
            >
              Compare crypto casinos
            </Link>
          </div>
        </section>

        <section aria-labelledby="sportsbetio-faq-heading">
          <h2 id="sportsbetio-faq-heading" className="text-lg font-semibold text-foreground sm:text-xl">
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
          description="Official information, partner-supplied campaign links, external assessments and JugadaMax editorial opinion."
          items={SOURCE_REFERENCES}
        />
      </article>

      <MobileStickyOfferCta
        showAfterId="review-primary-offer"
        compactPrimaryLabel="Visit"
        compactSecondaryLabel="Compare"
        primaryLabel="Visit Sportsbet.io"
        primaryHref={SPORTSBETIO_REGISTRATION_AFFILIATE_URL}
        secondaryLabel="Compare"
        secondaryHref="/en/casinos-crypto"
      />
    </>
  );
}

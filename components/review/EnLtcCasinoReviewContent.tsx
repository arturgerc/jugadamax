import Link from "next/link";
import type { Author, Casino, Review } from "@/types/content";
import { LTCCASINO_PROMO_CODE } from "@/lib/affiliate/constants";
import { resolveOperatorLink } from "@/lib/affiliate/operator-links";
import { EnLtcCasinoNoKycCard } from "@/components/verticals/nokyc/en/EnNoKycFeaturedCards";
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
  "LTC Casino is an international crypto casino. JugadaMax does not claim a verified local licence for every market. Availability, registration, payments, limits, fraud controls and withdrawals depend on your location, account and live registration-domain rules.";

const QUICK_SUMMARY = [
  { title: "Type", text: "No-KYC crypto casino" },
  { title: "Registration", text: "Email + password" },
  { title: "Payments", text: "LTC, BTC, ETH, USDT and other crypto" },
  { title: "Main caution", text: "No-KYC does not mean absolute anonymity" },
] as const;

const NO_KYC_CARDS = [
  {
    title: "No documents",
    text: "The public FAQ states that the operator does not perform document verification.",
  },
  {
    title: "Registration",
    text: "The described signup flow uses email and password.",
  },
  {
    title: "Wallets",
    text: "Deposits and withdrawals are handled via cryptocurrencies and blockchain networks.",
  },
  {
    title: "Operator policy",
    text: "This is a policy published by LTC Casino and may change.",
  },
] as const;

const PRIVACY_ADVANTAGES = [
  "No identity document uploads according to the operator",
  "No bank card data in a crypto-only payment flow",
  "Deposits and withdrawals based on wallets",
  "Registration with limited personal information",
] as const;

const PRIVACY_LIMITS = [
  "Email remains an identifier",
  "IP and device data may be processed",
  "Public blockchains retain transaction records",
  "Wallet histories can be analysed",
  "Local laws still apply",
  "No-KYC is not a verified local licence",
] as const;

const PAYMENT_CARDS = [
  { title: "Litecoin", text: "Core brand asset; confirm network and minimums." },
  { title: "Bitcoin", text: "Deposits and withdrawals subject to network confirmations." },
  { title: "Ethereum", text: "Verify network and address before transferring." },
  { title: "USDT", text: "Stablecoin; confirm network (ERC-20, TRC-20 or other)." },
  { title: "XRP / USDC", text: "Additional assets depending on cashier and account." },
  { title: "SOL / BNB / DOGE / ADA / TRX", text: "Variable availability; check the cashier." },
  { title: "Network selection", text: "An incorrect network can cause irreversible loss." },
  { title: "Wallet security", text: "Protect keys, seed phrases and destination addresses." },
] as const;

const GAME_CARDS = [
  { title: "Slots", text: "Slot catalogue according to enabled providers." },
  { title: "Bonus Buy", text: "Feature-buy category on eligible titles." },
  { title: "Plinko", text: "Instant game with rules and limits per terms." },
  { title: "Crash", text: "Fast format subject to limits and availability." },
  { title: "Dice", text: "Prediction game with variable risk." },
  { title: "Mines", text: "Instant format according to current catalogue." },
  { title: "Blackjack", text: "RNG or live tables where the operator enables them." },
  { title: "Roulette", text: "Casino variants depending on region and catalogue." },
  { title: "Baccarat", text: "Tables available according to lobby configuration." },
  { title: "Live Casino", text: "Live tables subject to catalogue and schedules." },
  { title: "Crypto games", text: "Formats oriented to fast sessions with crypto." },
] as const;

const WITHDRAWAL_CARDS = [
  {
    title: "Processing",
    text: "Real-time processing according to the operator.",
  },
  {
    title: "Blockchain",
    text: "Confirmations and congestion depend on the network.",
  },
  {
    title: "Wallet",
    text: "Check address and asset before confirming.",
  },
  {
    title: "Limits",
    text: "Review minimums, maximums and current rules in the cashier.",
  },
] as const;

const ANALYSIS_PARAGRAPHS_BASE = [
  "LTC Casino is classified as a no-KYC crypto casino because its public FAQ states that it does not perform document verification and its registration material describes an email-and-password flow. JugadaMax presents those claims with attribution — not as independent technical proof that verification is impossible.",
  "The operator appeals to users who prioritise privacy, wallet payments and straightforward access over bonuses. Its proposition is not built around a welcome bonus: the code j6ji2sb7n identifies the registration campaign and does not guarantee a reward.",
  "No-KYC does not mean absolute technical invisibility. Email, IP, device, wallet addresses and public blockchain records can create traceability. Anti-fraud systems and local laws still apply.",
  "The public FAQ states that LTC Casino does not limit the number of accounts. JugadaMax does not interpret that as permission to evade legal restrictions, limits, self-exclusion, security controls or registration-domain rules.",
] as const;

function buildAnalysisParagraphs(rating: number): string[] {
  return [
    ...ANALYSIS_PARAGRAPHS_BASE,
    `Payments are crypto-only (LTC, BTC, ETH, USDT and others). Confirm asset, network and address — blockchain transfers usually cannot be reversed. LTC Casino claims to process withdrawals in real time; arrival in your wallet depends on the network. JugadaMax rates it ${rating}/5 for privacy, no-KYC registration per the operator's public policy, crypto compatibility and game catalogue — with caution on local licensing, technical anonymity and withdrawal conditions. This is editorial opinion, not an aggregated user score. 18+.`,
  ];
}

const FAQ_ITEMS = [
  {
    question: "Does LTC Casino require KYC?",
    answer:
      "According to the operator's public FAQ, LTC Casino states that it does not perform verification. Always confirm the rules shown on the registration domain, because policies can change.",
  },
  {
    question: "Does LTC Casino ask for documents?",
    answer:
      "The described registration flow uses email and password without personal identity fields. JugadaMax attributes that description to the operator and recommends verifying it at signup.",
  },
  {
    question: "How do you create an account?",
    answer:
      "According to the operator's public material, registration is completed with email and password. After redirect, confirm the domain, terms and availability from your jurisdiction.",
  },
  {
    question: "Is LTC Casino completely anonymous?",
    answer:
      "The operator promotes a no-KYC model, but email, IP, device, wallets and blockchain records can create traceability. It should not be interpreted as absolute technical invisibility.",
  },
  {
    question: "Can I have multiple accounts?",
    answer:
      "The public FAQ states that LTC Casino does not limit the number of accounts. JugadaMax does not recommend using multiple accounts to evade legal restrictions, limits, self-exclusion or security controls.",
  },
  {
    question: "What is the LTC Casino code?",
    answer: `The registration/campaign code confirmed for JugadaMax is ${LTCCASINO_PROMO_CODE}.`,
  },
  {
    question: `Does the code ${LTCCASINO_PROMO_CODE} give a bonus?`,
    answer:
      "JugadaMax does not promote an LTC Casino welcome bonus. The code j6ji2sb7n identifies the registration campaign and does not guarantee a reward.",
  },
  {
    question: "Does LTC Casino accept Litecoin?",
    answer:
      "Yes. Litecoin is central to its crypto identity. Confirm network, minimums and address in the cashier before depositing.",
  },
  {
    question: "What other cryptocurrencies does it accept?",
    answer:
      "Besides LTC, the operator shows support for BTC, ETH, XRP, USDT, SOL, BNB, DOGE, ADA, USDC and TRX depending on account. Verify active assets in the cashier.",
  },
  {
    question: "Does LTC Casino have slots and live casino?",
    answer:
      "Yes. It offers slots, live casino, Plinko, Crash, Dice, Mines and classic tables according to catalogue. The exact number of titles can change.",
  },
  {
    question: "How long do withdrawals take?",
    answer:
      "LTC Casino states that withdrawal requests are processed in real time; arrival in your wallet depends on blockchain speed. Network, congestion, asset, limits and account security can affect the outcome.",
  },
  {
    question: "Is LTC Casino available in my country?",
    answer:
      "JugadaMax does not guarantee universal availability from every market. Confirm access, regional restrictions and terms after redirect.",
  },
  {
    question: "Does LTC Casino have a local licence?",
    answer:
      "JugadaMax does not claim verified local authorisation for every market. Any offshore licence declared by the operator has not been independently verified in this integration.",
  },
  {
    question: "Does LTC Casino have a welcome bonus?",
    answer:
      "JugadaMax does not promote an LTC Casino welcome bonus. The code j6ji2sb7n identifies the registration campaign and does not guarantee a reward.",
  },
] as const;

function buildSourceReferences(): SourceReference[] {
  return [
    buildOperatorHomepageSourceReference({
      operatorId: "ltccasino",
      operatorName: "LTC Casino",
      market: "global",
      locale: "en",
      fallbackOfficialHref: "https://www.ltccasino.io/",
    }),
    {
      label: "Operator FAQ — verification and accounts",
      href: "https://www.ltccasino.io/faq/your-account/how-do-i-block-my-account",
      note: "Statements published by LTC Casino about verification and accounts.",
      kind: "official-doc",
    },
    {
      label: "Operator FAQ — withdrawal processing",
      href: "https://www.ltccasino.io/faq/withdrawals/how-long-do-withdrawals-take",
      kind: "official-doc",
    },
    {
      label: "Operator registration / privacy information",
      href: "https://www.ltccasino.io/cryptocasino/no-registration-online-casinos/",
      kind: "official-doc",
    },
    {
      label: "Operator domain / mirror information",
      href: "https://www.ltccasino.io/uk/ltccasinocom-cant-log-in",
      kind: "official-doc",
    },
    { label: "TTR Blog", href: "https://ttrblog.io/", kind: "third-party" },
    { label: "Kick: LTCCASINO-COM", href: "https://kick.com/ltccasino-com", kind: "third-party" },
    { label: "JugadaMax editorial methodology", href: "/en/how-we-review" },
  ];
}

export function EnLtcCasinoReviewContent({
  review,
  casino,
  author,
}: {
  review: Review;
  casino: Casino;
  author: Author;
}) {
  const affiliateUrl = resolveOperatorLink("ltccasino", "global")?.url;
  const analysisParagraphs = buildAnalysisParagraphs(review.rating);
  const sourceReferences = buildSourceReferences();

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
          <EnLtcCasinoNoKycCard context="review" />
        </div>

        <section id="ltccasino-quick-summary" aria-labelledby="ltccasino-summary-heading">
          <h2 id="ltccasino-summary-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Quick summary
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {QUICK_SUMMARY.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-[#2156FF]/20 bg-[#171821]/80 p-3"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-[#7F8FFF]">
                  {card.title}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Registration code:{" "}
            <span className="font-mono font-semibold text-foreground">{LTCCASINO_PROMO_CODE}</span>
            . Does not guarantee a bonus.
          </p>
        </section>

        <section aria-labelledby="ltccasino-nokyc-heading">
          <h2 id="ltccasino-nokyc-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            What does no-KYC mean for LTC Casino?
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {NO_KYC_CARDS.map((card) => (
              <div key={card.title} className="rounded-xl border border-border/60 bg-card p-4">
                <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            LTC Casino states that it does not perform KYC verification and that registration uses
            email and password. Its public FAQ states that it does not limit the number of accounts
            per player. These are policies published by the operator and may change. Always confirm
            the rules shown on the registration domain before depositing.
          </p>
        </section>

        <section aria-labelledby="ltccasino-privacy-heading">
          <h2 id="ltccasino-privacy-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Privacy: what it protects and what it does not
          </h2>
          <p className="mt-2 text-sm font-medium text-[#7F8FFF]">
            No-KYC does not mean absolute technical invisibility.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-[#2156FF]/20 bg-[#171821]/70 p-4">
              <h3 className="text-sm font-semibold text-foreground">Privacy advantages</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {PRIVACY_ADVANTAGES.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden="true" className="text-[#4B6FFF]">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-border/60 bg-card p-4">
              <h3 className="text-sm font-semibold text-foreground">Privacy limits</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {PRIVACY_LIMITS.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden="true" className="text-amber-400">
                      !
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section aria-labelledby="ltccasino-accounts-heading">
          <h2 id="ltccasino-accounts-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Does LTC Casino allow multiple accounts?
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            The public FAQ states that LTC Casino does not limit the number of accounts per player.
            JugadaMax recommends confirming this rule on the registration domain, because policies
            can change.
          </p>
          <div
            role="note"
            className="mt-4 rounded-lg border border-amber-500/25 bg-amber-500/5 px-4 py-3 text-sm leading-relaxed text-muted-foreground"
          >
            Multiple accounts must not be used to evade legal restrictions, limits, security
            controls, self-exclusion or current rules. LTC Casino&apos;s public FAQ states that it
            does not limit the number of accounts. JugadaMax does not interpret this as permission
            to evade legal restrictions, limits, self-exclusion, security controls or current
            registration-domain rules.
          </div>
        </section>

        <section aria-labelledby="ltccasino-payments-heading">
          <h2 id="ltccasino-payments-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Supported cryptocurrencies
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {PAYMENT_CARDS.map((card) => (
              <div key={card.title} className="rounded-xl border border-border/60 bg-card p-4">
                <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Check asset, network and address. Blockchain transfers usually cannot be reversed.
          </p>
        </section>

        <section aria-labelledby="ltccasino-withdrawals-heading">
          <h2 id="ltccasino-withdrawals-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Crypto withdrawals
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            The public FAQ states that withdrawal requests are processed in real time. Arrival in
            your wallet depends on blockchain speed. Network, congestion, asset, limits, account
            security and current rules can affect the outcome.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {WITHDRAWAL_CARDS.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-[#2156FF]/20 bg-[#1D1F2A]/80 p-4"
              >
                <h3 className="text-sm font-semibold text-[#7F8FFF]">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="ltccasino-games-heading">
          <h2 id="ltccasino-games-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Casino games
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {GAME_CARDS.map((card) => (
              <div key={card.title} className="rounded-xl border border-border/60 bg-card p-4">
                <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            LTC Casino is not presented here as a sportsbook. The exact catalogue can change by
            region and lobby configuration.
          </p>
        </section>

        <section aria-labelledby="ltccasino-security-heading">
          <h2 id="ltccasino-security-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Security and responsible gambling
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Protect your email, password and wallets. A no-KYC model does not remove the risk of
            loss, phishing or account misuse. Play only if you are 18+ and set personal limits.
          </p>
        </section>

        <section aria-labelledby="ltccasino-licence-heading">
          <h2 id="ltccasino-licence-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Licence and jurisdiction
          </h2>
          <div className="mt-4 rounded-xl border border-border/60 bg-card p-4 sm:p-5">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Licence not confirmed on the registration domain reviewed from this integration
              environment. This is not verified local authorisation for every market. JugadaMax does
              not claim universal regulatory approval or guarantee the current status of any
              offshore licence declared by the operator. Review footer, terms and jurisdiction
              after redirect.
            </p>
          </div>
        </section>

        <VerdictBox verdict={review.verdict} rating={review.rating} locale="en" />
        <ProsCons pros={review.pros} cons={review.cons} locale="en" />

        <section aria-labelledby="ltccasino-analysis-heading">
          <h2 id="ltccasino-analysis-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Editorial analysis
          </h2>
          <div className="mt-4 space-y-4">
            {analysisParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="ltccasino-final-cta-heading"
          className="rounded-xl border border-[#2156FF]/25 bg-gradient-to-br from-[#171821] via-[#1D1F2A] to-[#252836] p-5 sm:p-6"
        >
          <h2 id="ltccasino-final-cta-heading" className="text-lg font-semibold text-foreground">
            Register at LTC Casino
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Confirm the destination domain, no-KYC policy, cryptocurrency, network, limits and
            withdrawal rules before depositing.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {affiliateUrl ? (
              <a
                href={affiliateUrl}
                target="_blank"
                rel={AFFILIATE_REL}
                className={cn(
                  "inline-flex min-h-11 items-center justify-center rounded-md bg-[#2156FF] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#4B6FFF]",
                  focusRing,
                )}
              >
                Register at LTC Casino
              </a>
            ) : null}
            <Link
              href="/en/casinos-no-kyc"
              className={cn(
                "inline-flex min-h-11 items-center justify-center rounded-md border border-[#4B6FFF]/40 px-5 py-2.5 text-sm font-semibold text-[#7F8FFF] transition-colors hover:bg-[#1237FF]/15",
                focusRing,
              )}
            >
              Compare no-KYC casinos
            </Link>
          </div>
        </section>

        <section aria-labelledby="ltccasino-faq-heading">
          <h2 id="ltccasino-faq-heading" className="text-lg font-semibold text-foreground sm:text-xl">
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
          description="Statements published by the operator, related links, editorial methodology and campaign affiliate link."
          items={sourceReferences}
        />
      </article>

      {affiliateUrl ? (
        <MobileStickyOfferCta
          showAfterId="review-primary-offer"
          compactPrimaryLabel="Register"
          compactSecondaryLabel="Compare"
          primaryLabel="Register at LTC Casino"
          primaryHref={affiliateUrl}
          secondaryLabel="Compare no-KYC casinos"
          secondaryHref="/en/casinos-no-kyc"
        />
      ) : null}
    </>
  );
}

import type { Author, Casino, Review } from "@/types/content";
import {
  BETSSON_MX_CASINO_WELCOME_URL,
  BETSSON_MX_HOME_URL,
} from "@/lib/affiliate/constants";
import { resolveOperatorHomepageLink } from "@/lib/affiliate/operator-links";
import { EnBetssonFeaturedCard } from "@/components/affiliate/EnBetssonFeaturedCard";
import { MobileStickyOfferCta } from "@/components/affiliate/MobileStickyOfferCta";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { AffiliateDisclosureEn } from "@/components/trust/AffiliateDisclosureEn";
import { ResponsibleGamblingNoticeEn } from "@/components/trust/ResponsibleGamblingNoticeEn";
import { LicenseInfo } from "@/components/trust/LicenseInfo";
import { PaymentBadges } from "@/components/ranking/PaymentBadges";
import { ReviewHeader } from "@/components/review/ReviewHeader";
import { VerdictBox } from "@/components/review/VerdictBox";
import { ProsCons } from "@/components/review/ProsCons";
import { cn, focusRing } from "@/lib/utils";

const AFFILIATE_REL = "sponsored nofollow noopener noreferrer";
const BETSSON_HOMEPAGE_LINK = resolveOperatorHomepageLink("betsson", "global");

/** Four-card quick summary — same geometry as Spanish Betsson resumen. */
const QUICK_SUMMARY = [
  {
    title: "Offer",
    text: "Up to $15,000 MXN + 200 free spins subject to live Betsson Mexico terms",
  },
  {
    title: "Payments",
    text: "Visa, Mastercard, OXXO and SPEI where enabled",
  },
  {
    title: "Best for",
    text: "Readers seeking Mexico-facing fiat casino, sportsbook and local payments",
  },
  {
    title: "Check first",
    text: "Wagering requirements, limits, verification and eligible games",
  },
] as const;

/** Seven distinct condition entries — same grid/classes as Spanish BETSSON_BONUS_CONDITIONS. */
const BONUS_CONDITIONS = [
  {
    label: "Welcome offer",
    value: "Up to $15,000 MXN + 200 free spins",
  },
  {
    label: "App extra spins",
    value: "+25 free spins if you use the app, subject to official terms",
  },
  {
    label: "Minimum deposit",
    value: "From $200 MXN according to the published promotion",
  },
  {
    label: "SPEI minimum",
    value: "$100 MXN minimum via SPEI according to official terms",
  },
  {
    label: "Eligible games",
    value: "Check participating games and restrictions",
  },
  {
    label: "Wagering requirements",
    value: "Check wagering requirements, limits and expiry",
  },
  {
    label: "Withdrawals",
    value: "Subject to verification, payment method and operator terms",
  },
] as const;

const PAYMENT_CARDS = [
  {
    title: "Visible methods",
    text: "Visa, Mastercard, OXXO and SPEI depending on availability.",
  },
  {
    title: "Deposits",
    text: "Minimums may depend on the active promotion and payment method selected.",
  },
  {
    title: "Withdrawals",
    text: "Withdrawal timing depends on method, account verification, limits and official terms.",
  },
  {
    title: "Verification",
    text: "The operator may request identity validation before withdrawals or certain promotions.",
  },
] as const;

const PRODUCT_CARDS = [
  {
    title: "Online casino",
    text: "Slots, live casino and table games may be available depending on the current catalogue.",
  },
  {
    title: "Sports betting",
    text: "Betsson also combines a sportsbook for football, Liga MX and other sports, subject to available markets.",
  },
  {
    title: "Betsson app",
    text: "The promotion may include extra app spins. Check device requirements and official terms.",
  },
] as const;

const ANALYSIS_PARAGRAPHS = [
  "Betsson Mexico combines online casino and sports betting under an international brand with Mexico-oriented local payment framing. On English JugadaMax pages it leads the fiat ranking because it matches traditional payment expectations better than multi-currency offshore brands alone — that order is editorial, not a universal access guarantee. It is presented as a Mexico-facing option, not a worldwide availability claim.",
  "The published welcome promotion shows up to $15,000 MXN + 200 free spins, with optional extra app spins subject to live terms. JugadaMax does not treat marketing headlines as guaranteed credits: wagering, eligible games, expiry, maximum bet rules and verification requirements must be confirmed on official Betsson Mexico surfaces after redirect.",
  "Local payment framing — OXXO, SPEI, Visa and Mastercard — is a genuine editorial strength for Mexico-oriented readers who prefer pesos and familiar deposit routes over crypto wallets. Methods, fees, limits and processing times remain operator-controlled and can differ by account. Traditional fiat positioning is the product fit here — not a crypto-first experience.",
  "Betsson is presented with operator-reported Mexican authorisation framing (SEGOB). That is not a substitute for reading current licence notes, product restrictions and responsible gambling tools on the official site. Experience can also differ between sportsbook, casino, app and web.",
  "JugadaMax rates Betsson Mexico 4.3/5 for readers comparing Mexico-facing fiat casino and sportsbook products who will verify live terms carefully. It is not the right fit for crypto-only users or readers outside supported markets. 18+ only — gambling involves risk.",
] as const;

const FAQ_ITEMS = [
  {
    question: "Does Betsson Mexico have a welcome bonus?",
    answer:
      "Yes. The visible casino promotion shows up to $15,000 MXN + 200 free spins, with official conditions that must be reviewed before depositing.",
  },
  {
    question: "Which payment methods appear on Betsson Mexico?",
    answer:
      "Our review surfaces Visa, Mastercard, OXXO and SPEI, but availability can change by account, method and operator terms.",
  },
  {
    question: "How long do Betsson withdrawals take?",
    answer:
      "Withdrawal timing depends on payment method, account verification, limits and internal operator policies. JugadaMax does not guarantee withdrawal times.",
  },
  {
    question: "Is Betsson Mexico more casino or sportsbook?",
    answer:
      "Betsson combines online casino and sports betting. For JugadaMax it fits as a Mexico-facing fiat/mixed option for readers who want local payment framing.",
  },
] as const;

/**
 * Full English Betsson Mexico review — structural parity with Spanish `/reviews/betsson`.
 */
export function EnBetssonReviewContent({
  review,
  casino,
  author,
}: {
  review: Review;
  casino: Casino;
  author: Author;
}) {
  const trustNote = review.trustSummary ?? casino.licensing?.notes;

  return (
    <>
      <article className="mx-auto w-full max-w-5xl space-y-7 sm:space-y-8">
        <ReviewHeader review={review} casino={casino} author={author} locale="en" />

        <div className="mx-auto w-full max-w-4xl space-y-3">
          <AffiliateDisclosureEn />
          <ResponsibleGamblingNoticeEn />
        </div>

        <div id="review-primary-offer">
          <EnBetssonFeaturedCard context="review" />
        </div>

        <section
          aria-labelledby="betsson-resumen-rapido-heading"
          className="rounded-xl border border-border/60 bg-card p-4 sm:p-5"
        >
          <h2 id="betsson-resumen-rapido-heading" className="text-lg font-semibold text-foreground">
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

        <section
          aria-labelledby="betsson-bonus-condiciones-heading"
          className="rounded-xl border border-border/60 bg-card p-4 sm:p-5"
        >
          <h2
            id="betsson-bonus-condiciones-heading"
            className="text-lg font-semibold text-foreground sm:text-xl"
          >
            Welcome bonus and key conditions
          </h2>
          <dl className="mt-4 grid gap-2 sm:grid-cols-2">
            {BONUS_CONDITIONS.map((row) => (
              <div
                key={row.label}
                className="rounded-lg border border-white/10 bg-[#111417] px-3 py-2.5"
              >
                <dt className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {row.label}
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{row.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
            Figures reflect a promotion published by Betsson Mexico and can change. Always confirm
            the live offer on the operator site before depositing.
          </p>
        </section>

        <section aria-labelledby="betsson-pagos-retiros-heading">
          <h2
            id="betsson-pagos-retiros-heading"
            className="text-lg font-semibold text-foreground sm:text-xl"
          >
            Payments and withdrawals
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

        <section aria-labelledby="betsson-casino-app-heading">
          <h2
            id="betsson-casino-app-heading"
            className="text-lg font-semibold text-foreground sm:text-xl"
          >
            Casino, sports and app
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Mexico-facing fiat positioning for readers who prefer traditional payments over
            crypto-first products — availability still depends on account and live terms.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {PRODUCT_CARDS.map((card) => (
              <div key={card.title} className="rounded-xl border border-border/60 bg-card p-4">
                <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
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
          aria-labelledby="betsson-post-analisis-cta-heading"
          className="rounded-xl border border-primary/25 bg-gradient-to-br from-primary/8 via-card to-[#0A1931] p-4 sm:p-5"
        >
          <h2 id="betsson-post-analisis-cta-heading" className="text-lg font-semibold text-foreground">
            Review the current Betsson Mexico offer
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Before registering, confirm the live bonus, wagering requirements, payment methods and
            verification directly on Betsson Mexico.
          </p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            <a
              href={BETSSON_MX_CASINO_WELCOME_URL}
              target="_blank"
              rel={AFFILIATE_REL}
              className={cn(
                "inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold",
                "bg-primary text-primary-foreground transition-colors hover:bg-[var(--jm-gold-strong)]",
                focusRing,
              )}
            >
              View Betsson offer
            </a>
            <a
              href={BETSSON_MX_HOME_URL}
              target="_blank"
              rel={AFFILIATE_REL}
              className={cn(
                "inline-flex min-h-11 items-center justify-center rounded-md border border-primary/40 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/10",
                focusRing,
              )}
            >
              Enter Betsson Mexico
            </a>
          </div>
        </section>

        <section aria-labelledby="betsson-faq-heading">
          <h2 id="betsson-faq-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Frequently asked questions about Betsson Mexico
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

        <section
          aria-label="Related links"
          className="rounded-lg border border-border/60 bg-card p-4 sm:p-5"
        >
          <h2 className="text-lg font-semibold text-foreground">Related links</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            External resources related to {casino.name}. Always review terms, regional availability
            and operator policies before registering.
          </p>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {BETSSON_HOMEPAGE_LINK ? (
              <TrackedLink
                href={BETSSON_HOMEPAGE_LINK.url}
                external
                rel={
                  BETSSON_HOMEPAGE_LINK.isAffiliate
                    ? AFFILIATE_REL
                    : "noopener noreferrer"
                }
                event="review_source_affiliate_click"
                section="sources"
                operator="betsson"
                ctaType="source"
                className="flex min-h-11 items-start gap-3 rounded-xl border border-white/10 bg-[#111417] p-3 transition-colors hover:border-primary/30"
              >
                <span
                  aria-hidden="true"
                  className="inline-flex h-10 w-10 shrink-0 flex-col items-center justify-center rounded-lg border border-primary/20 bg-[#16233f] ring-1 ring-primary/15"
                >
                  <span className="text-[0.55rem] font-bold leading-none text-primary">BE</span>
                  <span className="mt-0.5 text-[0.4rem] font-semibold leading-none text-muted-foreground">
                    Betsson
                  </span>
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold leading-snug text-foreground">
                    Betsson Mexico — official operator site via JugadaMax affiliate link
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    Opens the operator through the approved JugadaMax partner campaign. JugadaMax may
                    receive a commission.
                  </p>
                </div>
              </TrackedLink>
            ) : null}
          </div>
        </section>

        <section aria-label="Payments and licensing" className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border/60 bg-card p-4">
            <h2 className="mb-2 text-lg font-semibold text-foreground">Payments</h2>
            <PaymentBadges payments={casino.payments} />
            {review.paymentsSummary ? (
              <p className="mt-2 text-sm text-muted-foreground">{review.paymentsSummary}</p>
            ) : null}
          </div>
          <div className="rounded-lg border border-border/60 bg-card p-4">
            <h2 className="mb-2 text-lg font-semibold text-foreground">Licensing & trust</h2>
            <LicenseInfo licensing={casino.licensing} locale="en" />
            {trustNote ? (
              <p className="mt-2 text-sm text-muted-foreground">{trustNote}</p>
            ) : null}
          </div>
        </section>
      </article>

      <MobileStickyOfferCta
        showAfterId="review-primary-offer"
        compactPrimaryLabel="Offer"
        compactSecondaryLabel="Enter"
        primaryLabel="View Betsson offer"
        primaryHref={BETSSON_MX_CASINO_WELCOME_URL}
        secondaryLabel="Enter Betsson Mexico"
        secondaryHref={BETSSON_MX_HOME_URL}
      />
    </>
  );
}

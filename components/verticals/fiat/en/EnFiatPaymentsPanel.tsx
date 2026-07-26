import { TrackedLink } from "@/components/analytics/TrackedLink";

const METHOD_GROUPS = [
  {
    id: "cards",
    title: "Visa / Mastercard",
    description: "Card deposits subject to limits, fees, bank rules and account verification.",
    match: (name: string) => /visa|mastercard|card/i.test(name),
  },
  {
    id: "ewallets",
    title: "E-wallets",
    description: "Skrill, Neteller, MiFinity and similar wallets where the cashier supports them.",
    match: (name: string) => /skrill|neteller|mifinity|jeton|paypal|wallet/i.test(name),
  },
  {
    id: "bank",
    title: "Bank / Interac",
    description: "Bank transfers and Interac where enabled — not guaranteed in every market.",
    match: (name: string) => /interac|spei|transfer|bank/i.test(name),
  },
  {
    id: "cash",
    title: "Cash / retail (selected markets)",
    description: "Retail or cash reference methods such as OXXO where a market supports them.",
    match: (name: string) => /oxxo/i.test(name),
  },
] as const;

/**
 * Payment methods panel — union from English fiat selection.
 */
export function EnFiatPaymentsPanel({
  paymentMethods,
}: {
  paymentMethods: readonly string[];
}) {
  const chips = paymentMethods.filter(Boolean);

  return (
    <section
      id="pagos-fiat"
      aria-labelledby="en-pagos-fiat-heading"
      className="mb-7 scroll-mt-24 sm:mb-10 lg:mb-12"
    >
      <div className="max-w-3xl space-y-1">
        <h2
          id="en-pagos-fiat-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          Traditional & multi-currency payments
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          Compare methods disclosed by each operator. Real availability can depend on account,
          location, device, verification and the live cashier.
        </p>
      </div>

      <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
        {METHOD_GROUPS.map((group) => {
          const groupChips = chips.filter(group.match);
          return (
            <li
              key={group.id}
              className="rounded-xl border border-white/10 bg-[#111417]/60 p-3.5 sm:p-4"
            >
              <h3 className="text-sm font-semibold text-foreground sm:text-base">{group.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {group.description}
              </p>
              {groupChips.length > 0 ? (
                <ul className="mt-2.5 flex flex-wrap gap-1.5">
                  {groupChips.map((chip) => (
                    <li
                      key={chip}
                      className="rounded-full border border-white/10 bg-[#0A1931]/50 px-2 py-0.5 text-[0.65rem] font-medium text-muted-foreground"
                    >
                      {chip}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2.5 text-[0.7rem] text-muted-foreground/80">
                  Present on some operators depending on the cashier.
                </p>
              )}
            </li>
          );
        })}
      </ul>

      {chips.length > 0 ? (
        <div className="mt-4">
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Methods disclosed in this selection
          </p>
          <ul className="flex flex-wrap gap-1.5">
            {chips.map((chip) => (
              <li
                key={chip}
                className="rounded-full border border-white/10 bg-[#0A1931]/40 px-2.5 py-1 text-xs text-muted-foreground"
              >
                {chip}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mt-4">
        <TrackedLink
          href="#comparativa-fiat"
          event="fiat_page_category_click"
          section="pagos-fiat"
          destination="#comparativa-fiat"
          className="inline-flex min-h-11 items-center rounded-md border border-border/60 bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/60"
        >
          Compare methods by operator
        </TrackedLink>
      </div>
    </section>
  );
}

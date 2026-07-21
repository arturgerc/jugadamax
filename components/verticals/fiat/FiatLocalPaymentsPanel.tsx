import { TrackedLink } from "@/components/analytics/TrackedLink";

const METHOD_GROUPS = [
  {
    id: "oxxo",
    title: "OXXO / OXXOPay",
    description: "Depósitos en efectivo o referencias de pago según operador.",
    match: (name: string) => /oxxo/i.test(name),
  },
  {
    id: "spei",
    title: "SPEI",
    description: "Transferencias bancarias mexicanas según cuenta y banco.",
    match: (name: string) => /spei/i.test(name),
  },
  {
    id: "cards",
    title: "Visa / Mastercard",
    description: "Visa y Mastercard sujetas a límites, comisiones y verificación.",
    match: (name: string) => /visa|mastercard|tarjeta/i.test(name),
  },
  {
    id: "wallets",
    title: "Transferencias / e-wallets",
    description: "Billeteras o transferencias locales según mercado y cajero.",
    match: (name: string) =>
      /transfer|wallet|billetera|paypal|skrill|neteller|pago/i.test(name) &&
      !/oxxo|spei|visa|mastercard/i.test(name),
  },
] as const;

/**
 * Local-payment methods panel — union from full surface fiat selection.
 */
export function FiatLocalPaymentsPanel({
  paymentMethods,
}: {
  paymentMethods: readonly string[];
}) {
  const chips = paymentMethods.filter(Boolean);

  return (
    <section
      id="pagos-locales"
      aria-labelledby="pagos-locales-heading"
      className="mb-7 scroll-mt-24 sm:mb-10 lg:mb-12"
    >
      <div className="max-w-3xl space-y-1">
        <h2
          id="pagos-locales-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          Pagos locales y métodos tradicionales
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          Compara los métodos informados por cada operador. La disponibilidad real puede depender
          de la cuenta, ubicación, dispositivo, verificación y cajero vigente.
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
                  Presente en algunos operadores según cajero.
                </p>
              )}
            </li>
          );
        })}
      </ul>

      {chips.length > 0 ? (
        <div className="mt-4">
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Métodos informados en la selección
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
          section="pagos-locales"
          destination="#comparativa-fiat"
          className="inline-flex min-h-11 items-center rounded-md border border-border/60 bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/60"
        >
          Comparar métodos por operador
        </TrackedLink>
      </div>
    </section>
  );
}

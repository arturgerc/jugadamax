import {
  CONTACT_COPY,
  type ContactLocale,
} from "@/components/verticals/contact/contact-config";

export function ContactNotSupport({ locale }: { locale: ContactLocale }) {
  const copy = CONTACT_COPY[locale];

  return (
    <aside
      role="note"
      aria-labelledby="contact-not-support-heading"
      className="mb-7 rounded-2xl border border-amber-500/25 bg-gradient-to-br from-[#1a160f]/95 via-[#15120e]/90 to-[#0f1620]/90 p-4 sm:mb-10 sm:p-5"
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center rounded-full border border-amber-500/40 bg-amber-500/12 px-2.5 py-0.5 text-[0.7rem] font-semibold text-amber-200">
          {copy.notSupportBadge}
        </span>
        <h2
          id="contact-not-support-heading"
          className="text-base font-bold tracking-tight text-foreground sm:text-lg"
        >
          {copy.notSupportTitle}
        </h2>
      </div>
      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]">
        {copy.notSupportBody}
      </p>
      <ul className="mt-3 grid gap-1.5 sm:grid-cols-3">
        {copy.notSupportItems.map((item) => (
          <li
            key={item}
            className="rounded-md border border-white/10 bg-[#111417]/55 px-2.5 py-2 text-xs font-medium text-foreground/90 sm:text-[0.8125rem]"
          >
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}

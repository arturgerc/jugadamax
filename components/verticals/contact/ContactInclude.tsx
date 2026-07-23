import {
  CONTACT_COPY,
  type ContactLocale,
} from "@/components/verticals/contact/contact-config";

export function ContactInclude({ locale }: { locale: ContactLocale }) {
  const copy = CONTACT_COPY[locale];

  return (
    <section
      aria-labelledby="contact-include-heading"
      className="mb-7 sm:mb-10"
    >
      <div className="rounded-2xl border border-white/12 bg-[#111417]/70 p-4 sm:p-5 lg:p-6">
        <h2
          id="contact-include-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          {copy.includeTitle}
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground sm:text-base">
          {copy.includeBody}
        </p>
        <ol className="mt-4 grid gap-2 sm:grid-cols-2">
          {copy.includeItems.map((item, index) => (
            <li
              key={item}
              className="flex gap-3 rounded-lg border border-white/10 bg-[#0A1931]/45 px-3 py-2.5 text-sm text-foreground/90"
            >
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-xs font-bold text-primary">
                {index + 1}
              </span>
              <span className="leading-snug">{item}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

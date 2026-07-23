import {
  CONTACT_COPY,
  contactMailto,
  type ContactLocale,
} from "@/components/verticals/contact/contact-config";
import { cn, focusRing } from "@/lib/utils";

export function ContactReasons({ locale }: { locale: ContactLocale }) {
  const copy = CONTACT_COPY[locale];

  return (
    <section
      aria-labelledby="contact-reasons-heading"
      className="mb-7 sm:mb-10"
    >
      <div className="mb-4 max-w-3xl space-y-1.5 sm:mb-5">
        <h2
          id="contact-reasons-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          {copy.reasonsTitle}
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          {copy.reasonsBody}
        </p>
      </div>

      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {copy.reasons.map((reason) => (
          <li
            key={reason.id}
            id={`motivo-${reason.id}`}
            className="flex flex-col rounded-xl border border-white/12 bg-gradient-to-b from-[#141b28]/90 to-[#111417]/85 p-4"
          >
            <p className="text-[0.7rem] font-semibold uppercase tracking-wide text-accent/90">
              {reason.audience}
            </p>
            <h3 className="mt-1.5 text-base font-semibold tracking-tight text-foreground">
              {reason.title}
            </h3>
            <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">
              {reason.body}
            </p>
            <a
              href={contactMailto(reason.mailtoSubject)}
              className={cn(
                "mt-3 inline-flex min-h-10 items-center text-sm font-semibold text-primary underline-offset-2 hover:underline",
                focusRing,
              )}
            >
              {copy.writeByReasonLabel}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

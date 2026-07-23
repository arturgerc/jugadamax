import Link from "next/link";
import {
  CONTACT_COPY,
  type ContactLocale,
} from "@/components/verticals/contact/contact-config";
import { cn, focusRing } from "@/lib/utils";

export function ContactRelated({ locale }: { locale: ContactLocale }) {
  const copy = CONTACT_COPY[locale];

  return (
    <section
      aria-labelledby="contact-related-heading"
      className="mb-7 sm:mb-10"
    >
      <div className="mb-4 max-w-3xl space-y-1.5">
        <h2
          id="contact-related-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          {copy.relatedTitle}
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          {copy.relatedBody}
        </p>
      </div>

      <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {copy.related.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={cn(
                "flex h-full flex-col rounded-xl border border-white/12 bg-[#111417]/65 p-3.5 transition-colors hover:border-primary/35",
                focusRing,
              )}
            >
              <span className="text-sm font-semibold text-foreground">
                {item.label}
              </span>
              <span className="mt-1 text-xs text-muted-foreground">
                {item.detail}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

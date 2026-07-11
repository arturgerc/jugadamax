import Link from "next/link";

import { cn } from "@/lib/utils";

export function AffiliateDisclosureEn({ className }: { className?: string }) {
  return (
    <aside
      role="note"
      className={cn(
        "rounded-md border border-border/60 bg-card/60 px-4 py-3 text-sm text-muted-foreground",
        className,
      )}
    >
      <strong className="font-semibold text-foreground">Affiliate disclosure:</strong> JugadaMax may
      earn a commission if you register with an operator through our links. This does not cost you
      extra and does not influence our editorial assessments.{" "}
      <Link
        href="/en/affiliate-disclosure"
        className="font-medium text-primary underline underline-offset-2"
      >
        Learn more
      </Link>
      .
    </aside>
  );
}

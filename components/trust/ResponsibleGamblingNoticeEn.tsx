import Link from "next/link";

import { cn } from "@/lib/utils";

export function ResponsibleGamblingNoticeEn({ className }: { className?: string }) {
  return (
    <aside
      role="note"
      className={cn(
        "flex flex-wrap items-center gap-2 rounded-md border border-accent/40 bg-card/60 px-4 py-3 text-sm text-muted-foreground",
        className,
      )}
    >
      <span
        aria-label="Adults 18+ only"
        className="inline-flex shrink-0 items-center rounded bg-accent px-2 py-0.5 text-xs font-bold text-accent-foreground"
      >
        +18
      </span>
      <span>
        Gambling involves risk. Play responsibly. Adults 18+ only. Check local laws and operator
        terms before registering.{" "}
        <Link
          href="/en/responsible-gambling"
          className="font-medium text-primary underline underline-offset-2"
        >
          Responsible gambling
        </Link>
        .
      </span>
    </aside>
  );
}

"use client";

import { useEffect, useState } from "react";
import { enMobileNav } from "@/components/layout/en-nav-links";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { focusRing, cn } from "@/lib/utils";

export function EnMobileNav({ currentPath = "/en" }: { currentPath?: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="en-mobile-nav-panel"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "inline-flex h-11 w-11 items-center justify-center rounded-md text-2xl leading-none text-foreground",
          focusRing,
        )}
      >
        <span aria-hidden="true">{open ? "✕" : "☰"}</span>
      </button>

      {open && (
        <>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[9998] w-full cursor-default bg-black/50"
          />
          <nav
            id="en-mobile-nav-panel"
            aria-label="Mobile navigation"
            className="fixed inset-x-4 top-20 z-[9999] max-h-[calc(100dvh-6rem)] overflow-y-auto rounded-lg border border-border bg-[var(--jm-navy)] p-2 shadow-2xl"
          >
            <div className="mb-2 border-b border-border/30 px-2 pb-2">
              <LanguageSwitcher currentPath={currentPath} />
            </div>
            {enMobileNav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex min-h-11 items-center rounded-sm border-b border-border/30 px-2 text-base font-medium text-foreground last:border-b-0",
                  focusRing,
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </>
      )}
    </div>
  );
}

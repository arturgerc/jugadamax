"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { trackHomepageEvent } from "@/lib/analytics/homepage-events";
import { cn, focusRing } from "@/lib/utils";

type TrackedLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
  rel?: string;
  target?: string;
  event:
    | "homepage_category_click"
    | "homepage_affiliate_click"
    | "homepage_review_click"
    | "homepage_latest_click"
    | "homepage_promo_click"
    | "crypto_page_affiliate_click"
    | "crypto_page_review_click"
    | "crypto_page_category_click"
    | "fiat_page_affiliate_click"
    | "fiat_page_review_click"
    | "fiat_page_category_click";
  section: string;
  position?: number | string;
  operator?: string;
  ctaType?: string;
  contentKind?: string;
  destination?: string;
  category?: string;
};

export function TrackedLink({
  href,
  children,
  className,
  external = false,
  rel,
  target,
  event,
  section,
  position,
  operator,
  ctaType,
  contentKind,
  destination,
  category,
}: TrackedLinkProps) {
  const dataAttrs = {
    "data-event": event,
    "data-section": section,
    ...(operator ? { "data-operator": operator } : {}),
    ...(position !== undefined ? { "data-position": String(position) } : {}),
    ...(ctaType ? { "data-cta-type": ctaType } : {}),
    ...(contentKind ? { "data-content-kind": contentKind } : {}),
    ...(destination ? { "data-destination": destination } : {}),
    ...(category ? { "data-category": category } : {}),
  };

  function handleClick() {
    trackHomepageEvent(event, {
      destination: destination ?? href,
      section,
      position,
      operator,
      cta_type: ctaType,
      content_kind: contentKind,
      category,
    });
  }

  const classes = cn(className, focusRing);

  if (external) {
    return (
      <a
        href={href}
        target={target ?? "_blank"}
        rel={rel ?? "sponsored nofollow noopener noreferrer"}
        className={classes}
        onClick={handleClick}
        {...dataAttrs}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={handleClick} {...dataAttrs}>
      {children}
    </Link>
  );
}

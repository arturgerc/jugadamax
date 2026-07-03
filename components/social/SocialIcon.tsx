import { cn } from "@/lib/utils";
import type { SocialLinkKind } from "@/components/social/social-links-data";

export function SocialIcon({
  kind,
  className,
}: {
  kind: SocialLinkKind;
  className?: string;
}) {
  const base = cn("shrink-0", className);

  switch (kind) {
    case "email":
      return (
        <svg
          className={base}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect x="2" y="4.5" width="16" height="11" rx="2" stroke="#FFB800" strokeWidth="1.5" />
          <path
            d="M3.5 6.5 10 11l6.5-4.5"
            stroke="#F5F5F0"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "telegram":
      return (
        <svg
          className={base}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="10" cy="10" r="8" fill="#229ED9" />
          <path
            d="m6.2 9.6 7.1-2.7c.33-.12.6.08.5.47l-1.2 5.6c-.09.4-.33.5-.67.31l-1.85-1.37-1.12 1.08c-.12.12-.22.22-.46.22l.17-2.4 4.6-4.16c.2-.18-.04-.28-.31-.1L7.9 11.2l-1.9-.6c-.41-.13-.42-.41.1-.6Z"
            fill="#fff"
          />
        </svg>
      );
    case "tiktok":
      return (
        <svg
          className={base}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect x="2" y="2" width="16" height="16" rx="4" fill="#111417" stroke="#25F4EE" strokeWidth="1" />
          <path
            d="M11.5 5.5c.3 1.6 1.4 2.8 3 3.1v2.1c-1.1 0-2.1-.3-3-.9v4.2c0 2-1.6 3.6-3.6 3.6S4.3 16 4.3 14s1.6-3.6 3.6-3.6c.2 0 .4 0 .6.1v2.3c-.2-.1-.4-.1-.6-.1-.8 0-1.4.6-1.4 1.4s.6 1.4 1.4 1.4 1.4-.6 1.4-1.4V5.5h1.8Z"
            fill="#F5F5F0"
          />
          <path
            d="M11.5 5.5c.3 1.6 1.4 2.8 3 3.1v2.1c-1.1 0-2.1-.3-3-.9"
            stroke="#FE2C55"
            strokeWidth="0.75"
            strokeLinecap="round"
          />
        </svg>
      );
    case "youtube":
      return (
        <svg
          className={base}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect x="2" y="5" width="16" height="10" rx="3" fill="#FF0000" />
          <path d="M9 8.5v3.5l3.5-1.75L9 8.5Z" fill="#fff" />
        </svg>
      );
    case "instagram":
      return (
        <svg
          className={base}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="14" height="14" rx="4" stroke="#DD2A7B" strokeWidth="1.5" />
          <circle cx="10" cy="10" r="3.25" stroke="#F58529" strokeWidth="1.5" />
          <circle cx="14.25" cy="5.75" r="0.9" fill="#8134AF" />
        </svg>
      );
    default:
      return null;
  }
}

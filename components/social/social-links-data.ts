export type SocialLinkKind = "email" | "telegram" | "tiktok" | "youtube" | "instagram" | "linkedin";

export interface SocialLinkItem {
  kind: SocialLinkKind;
  label: string;
  url: string;
  description: string;
  ariaLabel: string;
}

export const OFFICIAL_SOCIAL_LINKS: SocialLinkItem[] = [
  {
    kind: "email",
    label: "Email",
    url: "mailto:jugadamaxcom@gmail.com",
    description: "Consultas, colaboraciones y contacto editorial",
    ariaLabel: "Enviar email a JugadaMax",
  },
  {
    kind: "telegram",
    label: "Telegram",
    url: "https://t.me/jugadamax",
    description: "Canal oficial de novedades",
    ariaLabel: "JugadaMax en Telegram",
  },
  {
    kind: "tiktok",
    label: "TikTok",
    url: "https://www.tiktok.com/@jugadamax",
    description: "Videos cortos y contenido social",
    ariaLabel: "JugadaMax en TikTok",
  },
  {
    kind: "youtube",
    label: "YouTube",
    url: "https://www.youtube.com/@jugadamaxcom",
    description: "Guías y contenido en video",
    ariaLabel: "JugadaMax en YouTube",
  },
  {
    kind: "instagram",
    label: "Instagram",
    url: "https://www.instagram.com/jugadamax/",
    description: "Actualizaciones y contenido visual",
    ariaLabel: "JugadaMax en Instagram",
  },
  {
    kind: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/company/jugadamax/",
    description: "Página oficial de JugadaMax en LinkedIn",
    ariaLabel: "Visitar LinkedIn de JugadaMax",
  },
];

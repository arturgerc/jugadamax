import { ContactChannels } from "@/components/verticals/contact/ContactChannels";
import { ContactFinalCTA } from "@/components/verticals/contact/ContactFinalCTA";
import { ContactHero } from "@/components/verticals/contact/ContactHero";
import { ContactInclude } from "@/components/verticals/contact/ContactInclude";
import { ContactMediaKit } from "@/components/verticals/contact/ContactMediaKit";
import { ContactNotSupport } from "@/components/verticals/contact/ContactNotSupport";
import { ContactReasons } from "@/components/verticals/contact/ContactReasons";
import { ContactRelated } from "@/components/verticals/contact/ContactRelated";
import { ContactSocialSecondary } from "@/components/verticals/contact/ContactSocialSecondary";
import type { ContactLocale } from "@/components/verticals/contact/contact-config";
import { ResponsibleGamblingNotice } from "@/components/trust/ResponsibleGamblingNotice";
import { ResponsibleGamblingNoticeEn } from "@/components/trust/ResponsibleGamblingNoticeEn";

/**
 * Shared Contact Hub V2 composition for ES `/contacto` and EN `/en/contact`.
 */
export function ContactHubPage({ locale }: { locale: ContactLocale }) {
  return (
    <>
      <ContactHero locale={locale} />
      <ContactNotSupport locale={locale} />
      <ContactReasons locale={locale} />
      <ContactInclude locale={locale} />
      <ContactChannels locale={locale} />
      <ContactMediaKit locale={locale} />
      <ContactSocialSecondary locale={locale} />
      <ContactRelated locale={locale} />
      <ContactFinalCTA locale={locale} />
      {locale === "en" ? (
        <ResponsibleGamblingNoticeEn />
      ) : (
        <ResponsibleGamblingNotice />
      )}
    </>
  );
}

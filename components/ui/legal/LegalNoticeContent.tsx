'use client'
import { useSettings } from "@/lib/SettingsProvider";
import { useTranslations } from "next-intl";

const LegalNoticeContent = () => {
  const settings = useSettings();
  const t = useTranslations("footer.legalNotice");

  return (
    <main className="container mx-auto">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="mb-4">{t("title")}</h1>
        <p className="mb-4">
          {t("legalNoticeText")}:
        </p>

        <div className="mb-4">
          <p><strong>{t("webSiteOwner")}:</strong><br/></p>
          <ul>
            <li><p>{t("siteTitle")}: {settings?.siteTitle}</p></li>
            {settings?.companyName && <li><p>{t("companyName")}: {settings.companyName}</p></li>}
            {settings?.companyNIF && <li><p>{t("companyNIF")}: {settings.companyNIF}</p></li>}
            {settings?.location && <li><p>{t("location")}: {settings.location}</p></li>}
            {settings?.email && <li><p>{t("email")}: {settings.email}</p></li>}
            {settings?.phone && <li><p>{t("phone")}: {settings.phone}</p></li>}
          </ul>
        </div>

        <div className="mb-4">
          <p><strong>{t("activity")}:</strong></p>
          <p>{t("activityDescription")}</p>
        </div>

        <div className="mb-4">
          <p><strong>{t("conditionsOfUse")}:</strong></p>
          <p>{t("conditionsOfUseDescription")}</p>
        </div>

        <div className="mb-4">
          <p><strong>{t("intellectualProperty")}:</strong></p>
          <p>{t("intellectualPropertyDescription")}</p>
        </div>
        
        <div className="mb-4">
          <p><strong>{t("applicableLaw")}:</strong></p>
          <p>{t("applicableLawDescription")}</p>
        </div>
      </div>
    </main>
  )
}

export default LegalNoticeContent;

'use client'
import { useSettings } from "@/lib/SettingsProvider";
import { useTranslations } from "next-intl";

const PrivacyPolicyContent = () => {
  const settings = useSettings();
  const t = useTranslations("footer.privacyPolicy");

  return (
    <main className="container mx-auto">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="mb-4">{t("title")}</h1>
        <div className="mb-4">
          <p><strong>{t("responsibleTreatment")}:</strong></p>
          <ul>
            {settings?.companyName && <li><p>{t("companyName")}: {settings.companyName}</p></li>}
            {settings?.companyName && <li><p>{t("contactPerson")}: {settings.contactPerson}</p></li>}
            {settings?.companyNIF && <li><p>{t("companyNIF")}: {settings.companyNIF}</p></li>}
            {settings?.location && <li><p>{t("location")}: {settings.location}</p></li>}
            {settings?.email && <li><p>{t("email")}: {settings.email}</p></li>}
          </ul>
        </div>

        <div className="mb-4"><p><strong>{t("personalDataCollected")}:</strong></p>
          <p>{t("personalDataCollectedDescription")}</p>
          <ul>
            <li><p>{t("userName")}</p></li>
            <li><p>{t("userEmail")}</p></li>
            <li><p>{t("userMessage")}</p></li>
          </ul>
        </div>

        <p className="mb-4"><strong>{t("dataHandlingPurpose")}:</strong><br/>
          {t("dataHandlingPurposeDescription")}</p>

        <p className="mb-4"><strong>{t("legitimacy")}:</strong><br/>
          {t("legitimacyDescription")}</p>

        <p className="mb-4"><strong>{t("dataRetention")}:</strong><br/>
          {t("dataRetentionDescription")}</p>

        <p className="mb-4"><strong>{t("dataRecipients")}:</strong><br/>
          {t("dataRecipientsDescription")}</p>

        <p className="mb-4"><strong>{t("userRights")}:</strong><br/>
          {t("userRightsDescription")}</p>

        <p className="mb-4"><strong>{t("security")}:</strong><br/>
          {t("securityDescription")}</p>
      </div>
    </main>
  )
}

export default PrivacyPolicyContent;

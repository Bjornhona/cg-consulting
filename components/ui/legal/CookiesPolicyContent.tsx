"use client";
import { useSettings } from "@/lib/SettingsProvider";
import { useTranslations } from "next-intl";

const CookiesPolicyContent = () => {
  const t = useTranslations("footer.cookiesPolicy");
  const LAST_UPDATED = "2026-01-05";
  const settings = useSettings();

  const CookiePolicyText_ES = (
    <>
      <h1>{t("title")}</h1>
      <p>
        <strong>{t("lastUpdated")}:</strong> {LAST_UPDATED}
      </p>
      <p>{t("cookiesDescription")}</p>
      <h3>1. {t("whatAreCookies")}</h3>
      <p>{t("whatAreCookiesDescription")}</p>
      <p>{t("cookiesCanBe")}:</p>
      <ul className="list-disc list-inside">
        <li>
          {t.rich("firstPartyCookies", {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </li>
        <li>
          {t.rich("thirdPartyCookies", {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </li>
      </ul>

      <h3>2. {t("cookieTypesUsed")}</h3>
      <h5>a) {t("cookieTypesUsedDescription")}</h5>
      <p>{t("necessaryCookiesDescription")}</p>
      <p>{t("example")}:</p>
      <ul className="list-disc list-inside">
        <li>{t("necessaryCookiesExampleDescription")}</li>
      </ul>
      <h5>b) {t("analysisCookies")}</h5>
      <p>{t("analysisCookiesDescription")}</p>
      <p>
        {t.rich("useOfAnalysisCookies", {
          strong: (chunks) => <strong>{chunks}</strong>,
        })}
      </p>
      <p>{t("possibleAnalysisTools")}:</p>
      <ul className="list-disc list-inside">
        <li>Google Analytics (GA4)</li>
      </ul>
      <p>{t("collectedData")}:</p>
      <ul className="list-disc list-inside">
        <li>{t("pagesVisited")}</li>
        <li>{t("timeSpentOnPages")}</li>
        <li>{t("deviceAndBrowser")}</li>
      </ul>
      <p>{t("ipAnonymization")}</p>

      <h3>3. {t("cookiesList")}</h3>
      <table>
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left">{t("cookieName")}</th>
            <th className="text-left">{t("cookieProvider")}</th>
            <th className="text-left p-2">{t("cookiesPurpose")}</th>
            <th className="text-left p-2">{t("cookiesDuration")}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-100">
            <td>cookie_consent</td>
            <td>{t("thisWebsite")}</td>
            <td>{t("savingUserCookiePreference")}</td>
            <td>{t("oneYear")}</td>
          </tr>
          <tr className="border-b border-gray-100">
            <td>_ga, _ga_*</td>
            <td>Google Analytics</td>
            <td>{t("webAnalysis")}</td>
            <td>{t("upToTwoYears")}</td>
          </tr>
        </tbody>
      </table>
      <p className="text-gray-200"> * {t("listUpdated")}</p>

      <h3>4. {t("cookiesPreferencesManagement")}</h3>
      <p>{t("onThisWebsiteYouCan")}:</p>
      <ul className="list-disc list-inside">
        <li>
          <strong>{t("acceptCookies")}</strong>
        </li>
        <li>
          <strong>{t("rejectCookies")}</strong>
        </li>
      </ul>
      <p>
        {t.rich("changeOrWithdrawConsent", {
          strong: (chunks) => <strong>{chunks}</strong>,
        })}
      </p>

      <h3>5. {t("deactivateCookies")}</h3>
      <p>{t("controlAndDeleteCookies")}</p>
      <p>{t("navigationInstructions")}:</p>
      <ul className="list-disc list-inside">
        <li>
          Chrome:{" "}
          <a
            href="https://support.google.com/chrome/answer/95647"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://support.google.com/chrome/answer/95647
          </a>
        </li>
        <li>
          Firefox:{" "}
          <a
            href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences
          </a>
        </li>
        <li>
          Safari:{" "}
          <a
            href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://support.apple.com/en-gb/guide/safari/sfri11471/mac
          </a>
        </li>
        <li>
          Edge:{" "}
          <a
            href="https://support.microsoft.com/en-us/help/4027947"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://support.microsoft.com/en-us/help/4027947
          </a>
        </li>
      </ul>

      <h3>6. {t("cookiesPolicyChages")}</h3>
      <p>{t("cookiesPolicyChagesDescription")}</p>

      <h3>7. {t("contact")}</h3>
      <p>{t("anyQuestions")}:</p>
      <p>
        <strong>{settings?.companyName}</strong>
      </p>
      <p>
        <strong>Email:</strong> {settings?.email}
      </p>
    </>
  );

  return (
    <main className="container mx-auto">
      <div className="mx-auto max-w-5xl px-6 py-20 flex flex-col gap-4">
        {CookiePolicyText_ES}
      </div>
    </main>
  );
};

export default CookiesPolicyContent;

"use client";
import { usePathname } from "@/i18n/navigation";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useSettings } from "@/lib/SettingsProvider";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const locale = useLocale();
  const router = useRouter();
  const settings = useSettings();
  const availableLanguages = settings?.languages || ["en"];

  // pathname from next-intl has NO locale prefix (e.g. "/about" or "/")
  const switchLanguage = (newLocale: string) => {
    const path = pathname === "/" ? "" : pathname;
    return `/${newLocale}${path}`;
  };
  const languageOptions = availableLanguages.map((lang) => ({
    code: lang,
    label: lang.toUpperCase(),
  }));

  return (
    <select
      value={locale}
      onChange={(e) => {
        router.push(switchLanguage(e.target.value));
      }}
    >
      {languageOptions.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.label}
        </option>
      ))}
    </select>
  );
}

"use client";
import { usePathname } from "@/i18n/navigation";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useSettings } from "@/lib/SettingsProvider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const t = useTranslations("languages");
  const pathname = usePathname();
  const locale = useLocale();
  const router = useRouter();
  const settings = useSettings();
  const availableLanguages = settings?.languages || ["en"];

  const getLanguageTitle = (lang: string) => {
    switch (lang) {
      case "en":
        return { title: t("english"), icon: "🇬🇧" };
      case "es":
        return { title: t("spanish"), icon: "🇪🇸" };
      default:
        return { title: t("english"), icon: "🇬🇧" };
    }
  };

  const switchLanguage = (newLocale: string) => {
    const path = pathname === "/" ? "" : pathname;
    return `/${newLocale}${path}`;
  };
  const languageOptions = availableLanguages.map((lang) => ({
    code: lang,
    label: lang.toUpperCase(),
    icon: getLanguageTitle(lang).icon,
  }));

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Globe className="h-10 w-10 p-3 text-nav-text hover:text-nav-text-hover cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48 bg-background shadow-md ring-gray-light z-200">
        <DropdownMenuRadioGroup onValueChange={switchLanguage} value={locale}>
          {languageOptions.map((lang) => (
            <DropdownMenuRadioItem
              key={lang.code}
              value={lang.code}
              onClick={() => {
                router.push(switchLanguage(lang.code));
              }}
            >
              <span className="flex items-center gap-2 text-nav-text hover:text-nav-text-hover cursor-pointer">
                <span>{lang.icon}</span>
                <span>{getLanguageTitle(lang.code).title}</span>
              </span>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

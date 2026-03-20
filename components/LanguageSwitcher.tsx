"use client";
import { usePathname, useRouter } from "next/navigation";
import { useSettings } from "@/lib/SettingsProvider";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const settings = useSettings();
  const availableLanguages = settings?.languages || ["en"];

  const switchLanguage = (locale: string) => {
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };
  const languageOptions = availableLanguages.map((lang) => ({
    code: lang,
    label: lang.toUpperCase(),
  }));

  return (
    <select
      onChange={(e) => {
        router.push(switchLanguage(e.target.value));
      }}
      defaultValue={pathname.split("/")[1]}
    >
      {languageOptions.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.label}
        </option>
      ))}
    </select>
  );
}

// export default function LanguageSwitcher() {
//   const pathname = usePathname();
//   const settings = useSettings();
//   const availableLanguages = settings?.languages || ["en"];
//   const languages = [
//     ...availableLanguages.map((lang) => ({
//       code: lang,
//       label: lang.toUpperCase(),
//     })),
//   ];

//   const switchLanguage = (locale: string) => {
//     const segments = pathname.split("/");

//     // Replace current locale
//     segments[1] = locale;

//     return segments.join("/");
//   };

//   return (
//     <select
//       onChange={(e) => {
//         window.location.href = switchLanguage(e.target.value);
//       }}
//       defaultValue={pathname.split("/")[1]}
//     >
//       {languages.map((lang) => (
//         <option key={lang.code} value={lang.code}>
//           {lang.label}
//         </option>
//       ))}
//     </select>
//   );
// }

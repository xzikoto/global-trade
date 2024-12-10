import { useTranslation } from "react-i18next";
import {
  BulgarianFlag,
  UkrainianFlag,
  RussianFlag,
  BritishFlag,
} from "./flags";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const languages = [
    { code: "bg", name: "БГ", flag: BulgarianFlag },
    { code: "uk", name: "УК", flag: UkrainianFlag },
    { code: "ru", name: "РУ", flag: RussianFlag },
    { code: "en", name: "EN", flag: BritishFlag },
  ];

  return (
    <div className="flex gap-2">
      {languages.map((lang) => {
        const Flag = lang.flag;
        return (
          <button
            key={lang.code}
            onClick={() => i18n.changeLanguage(lang.code)}
            className={`flex items-center gap-1.5 px-2 py-1 rounded hover:bg-gray-100 transition-colors ${
              i18n.language === lang.code
                ? "bg-gray-100 ring-2 ring-primary ring-opacity-50"
                : ""
            }`}
            title={lang.name}
          >
            <Flag />
            <span className="text-sm font-medium">{lang.name}</span>
          </button>
        );
      })}
    </div>
  );
}

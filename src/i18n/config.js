import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "bg",
    resources: {
      bg: {
        translation: {
          nav: {
            home: "Начало",
            about: "За нас",
            services: "Услуги",
            contact: "Контакти",
          },
          hero: {
            title: "Качествени едрови масла за световните пазари",
            subtitle:
              "Вашият надежден партньор в търговията със слънчогледово и соево масло",
          },
        },
      },
      uk: {
        translation: {
          nav: {
            home: "Головна",
            about: "Про нас",
            services: "Послуги",
            contact: "Контакти",
          },
          hero: {
            title: "Якісні оптові олії для світових ринків",
            subtitle:
              "Ваш надійний партнер у торгівлі соняшниковою та соєвою олією",
          },
        },
      },
      ru: {
        translation: {
          nav: {
            home: "Главная",
            about: "О нас",
            services: "Услуги",
            contact: "Контакты",
          },
          hero: {
            title: "Качественные оптовые масла для мировых рынков",
            subtitle:
              "Ваш надежный партнер в торговле подсолнечным и соевым маслом",
          },
        },
      },
      en: {
        translation: {
          nav: {
            home: "Home",
            about: "About",
            services: "Services",
            contact: "Contact",
          },
          hero: {
            title: "Quality Wholesale Oils for Global Markets",
            subtitle:
              "Your reliable partner in sunflower and soybean oil trade",
          },
        },
      },
    },
  });

export default i18n;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// import Backend from "i18next-http-backend";
// import LanguageDetector from "i18next-browser-languagedetector";
export type Lang = "en" | "ru";

export enum Languages {
  EN = "en",
  RU = "ru",
}
export const languages = [Languages.EN, Languages.RU];
i18n
  // .use(Backend)
  // .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: Languages.EN,
    fallbackLng: Languages.EN, // Если не находит язык, то выбирает этот
    saveMissing: true,
    debug: false,
    // debug: process.env.NODE_ENV === "production" ? false : true,
    whitelist: languages,
    react: {
      useSuspense: false,
    },
  });

export default i18n;

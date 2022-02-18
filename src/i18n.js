import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import { resources } from "./assets/locales";

export const NAME_SPACE = {
  COMMON: "common",
  MOVIE: "movie",
  USER_PROFILE: "userProfile",
  SEARCH: "search",
};

export const LANGUAGE = {
  ENGLISH: "en",
  SPANISH: "es",
};

export const getLanguage = () =>
  i18n.language || window.localStorage.i18nextLng;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: [LANGUAGE.ENGLISH, LANGUAGE.SPANISH],
    ns: [
      NAME_SPACE.MOVIE,
      NAME_SPACE.USER_PROFILE,
      NAME_SPACE.SEARCH,
    ],
    defaultNS: NAME_SPACE.COMMON,
    fallbackNS: NAME_SPACE.COMMON,
    react: {
      wait: true,
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translation_en from "./en.json";
import translation_ja from "./ja.json";
import commonTranslationEN from "./en/common.json";
import moduleATranslationEN from "./en/moduleA.json";

const resources = {
  en: {
    common: commonTranslationEN,
    moduleA: moduleATranslationEN,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  defaultNS: "common",
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translation_en from "./en.json";
import translation_ja from "./ja.json";
import commonEN from "./en/common.json";
import validationEN from "./en/validation.json";
import glossaryEN from "./en/glossary.json";
import commonJA from "./ja/common.json";
import validationJA from "./ja/validation.json";
import glossaryJA from "./ja/glossary.json";

const resources = {
  en: {
    common: commonEN,
    validation: validationEN,
    glossary: glossaryEN,
  },
  ja: {
    common: commonJA,
    validation: validationJA,
    glossary: glossaryJA,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ja",
  defaultNS: "common",
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

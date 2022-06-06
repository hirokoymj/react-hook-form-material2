import * as yup from "yup";

import i18n from "i18n/config";

const myTranslation = async () => {
  await i18n.loadNamespaces(["form.errors"]);
  console.log(i18n.t("title"));
  // --------------^
};

export const schema = yup
  .object({
    firstName: yup.string().required(i18n.t("form.errors.firstName")),
    color: yup.string().required(i18n.t("form.errors.color")),
    gender: yup.string().required(i18n.t("form.errors.gender")),
    drinks: yup
      .array()
      .min(1, i18n.t("form.errors.drinks"))
      .of(yup.string().required(i18n.t("form.errors.drinks"))),
    acceptTerms: yup.boolean().oneOf([true], i18n.t("form.errors.acceptTerms")),
  })
  .required();

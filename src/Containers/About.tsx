import * as React from "react";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { useTranslation, Trans } from "react-i18next";

import { PageLayout } from "Components/Layouts/PageLayout";

export const About = () => {
  const { t } = useTranslation();
  const name: string = "hiroko";
  const count = 20;

  console.log(
    t("header.mykey", {
      selectLimit: "this is hiroko text",
    })
  );

  return (
    <PageLayout>
      <h1>About</h1>
      <h3>Text</h3>
      <p>{t("header.login")}</p>
      <p>{t("greet", { ns: "glossary" })}</p>
      <hr />
      <h3>Buttons</h3>
      <Button variant="outlined">{t("buttons.submit")}</Button>
      <Button variant="contained">{t("buttons.add")}</Button>
      <Button variant="outlined">{t("buttons.edit")}</Button>
      <Button variant="outlined">{t("buttons.cancel")}</Button>
      <hr />
      <h3>Links</h3>
      <p>
        <Link href="#">{t("links.hasAccount")}</Link>
      </p>
      <p>
        <Link href="#">{t("links.forgotPassword")}</Link>
      </p>
      <hr />
      <h3>Error message:</h3>
      <p>{t("form.errors.firstName", { ns: "validation" })}</p>
      <p>{t("form.errors.address1", { ns: "validation" })}</p>
      <h3>Text with values:</h3>

      <Trans i18nKey="userMessagesUnread" count={count}>
        Hello <strong title={t("nameTitle")}>your name here</strong>, you have{" "}
        {{ count }} unread message.
      </Trans>
    </PageLayout>
  );
};

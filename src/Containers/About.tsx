import * as React from "react";
import Button from "@mui/material/Button";
import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

import { PageLayout } from "Components/Layouts/PageLayout";
import { useTranslation, Trans } from "react-i18next";

const useStyles = makeStyles((theme: Theme) => ({
  myButton: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
  },
}));

export const About = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const name = "hiroko";
  const count = 20;

  console.log(
    t("header.mykey", {
      selectLimit: "this is hiroko text",
    })
  );

  return (
    <PageLayout>
      <h1>About</h1>
      {t("greet", { ns: "moduleA" })}
      <hr />
      {t("header.signin")}
      <hr />
      {t("header.userList")}
      <hr />
      {t("header.mykey", {
        selectLimit: "this is hiroko text",
      })}
      <hr />
      {t("form.errors.required", {
        field: "First Name",
      })}

      {/* <Trans i18nKey="userMessagesUnread" count={count}>
        Hello <strong title={t("nameTitle")}>{{ name }}</strong>, you have{" "}
        {{ count }} unread message.
      </Trans> */}
      <Button className={classes.myButton}>test</Button>
    </PageLayout>
  );
};

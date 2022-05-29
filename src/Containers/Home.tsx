import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import { PageLayout } from "Components/Layouts/PageLayout";
import { Title } from "Components/Layouts/Title";

export const Home = () => {
  return (
    <PageLayout>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper
            sx={{
              padding: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}>
            <Title text="Home" />
            as;ldfkasdjf;l
          </Paper>
        </Grid>
      </Grid>
    </PageLayout>
  );
};

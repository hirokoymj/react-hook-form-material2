import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import { Routes, Route } from "react-router-dom";
import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

import { PageHeader } from "Components/Headers/PageHeader";
import { MenuDrawer } from "Components/Drawers/MenuDrawer";
import { Home } from "Containers/Home";
import { About } from "Containers/About";
import { Info } from "Containers/Info";
import { FormView } from "Containers/FormView";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
  },
  main: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
    backgroundColor: theme.palette.grey[100],
  },
}));

export const DashboardController = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <PageHeader open={open} toggleDrawer={toggleDrawer} />
      <MenuDrawer open={open} toggleDrawer={toggleDrawer} />
      <main className={classes.main}>
        <Toolbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="info" element={<Info />} />
          <Route path="form" element={<FormView />} />
        </Routes>
      </main>
    </div>
  );
};

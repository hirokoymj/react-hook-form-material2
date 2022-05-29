import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Routes, Route } from "react-router-dom";

import { PageHeader } from "Components/Headers/PageHeader";
import { MenuDrawer } from "Components/Drawers/MenuDrawer";
import { Home } from "Containers/Home";
import { About } from "Containers/About";
import { Info } from "Containers/Info";

export const DashboardController = () => {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <PageHeader open={open} toggleDrawer={toggleDrawer} />
      <MenuDrawer open={open} toggleDrawer={toggleDrawer} />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}>
        <Toolbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="info" element={<Info />} />
        </Routes>
      </Box>
    </Box>
  );
};

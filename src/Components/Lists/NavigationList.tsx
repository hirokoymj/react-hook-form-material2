import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import DashboardIcon from "@mui/icons-material/Dashboard";

import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";

export const MainLists = () => {
  return (
    <>
      <ListItem>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <Link component={RouterLink} to="/" underline="none">
          Home
        </Link>
      </ListItem>
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <Link component={RouterLink} to="/about" underline="none">
          About
        </Link>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <Link component={RouterLink} to="/form" underline="none">
          Form view
        </Link>
      </ListItemButton>
    </>
  );
};

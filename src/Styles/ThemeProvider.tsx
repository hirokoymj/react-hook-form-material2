import * as React from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { commonTheme } from "./commonTheme";

type Props = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
  return (
    <MuiThemeProvider theme={commonTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

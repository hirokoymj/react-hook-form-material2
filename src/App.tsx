import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

import { DashboardController } from "DashboardController";
import { ThemeProvider } from "Styles/ThemeProvider";
// import i18n from "./i18n/config";
import "./i18n/config"; //i18

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <CssBaseline />
        <DashboardController />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;

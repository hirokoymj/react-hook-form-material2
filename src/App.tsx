import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

import { DashboardController } from "DashboardController";
import { ThemeProvider } from "Styles/ThemeProvider";

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

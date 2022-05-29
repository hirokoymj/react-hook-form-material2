import { BrowserRouter } from "react-router-dom";

import { DashboardController } from "DashboardController";
import { ThemeProvider } from "Styles/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <DashboardController />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

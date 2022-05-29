import { DashboardController } from "DashboardController";
import { ThemeProvider } from "Styles/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <DashboardController />
    </ThemeProvider>
  );
};

export default App;

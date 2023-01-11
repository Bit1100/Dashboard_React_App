import "./App.css";
import { ColorModeContext, useMode } from "./theme.js";
import { CssBaseline, ThemeProvider } from "@mui/material";
import topbar from "./global/topbar;";
import sidebar from "./global/sidebar;";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {/* Reset CSS elements to default */}
        <CssBaseline />
        <div className="app">
          <topbar />
          <sidebar />
          <main className="content"></main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import Appbar from "components/Appbar";
import Footer from "components/Footer";
import Router from "components/Router/Router";
import Wrapper from "components/Wrapper";
import { SnackbarProvider } from "notistack";
import { useMemo, useState } from "react";
import "./index.css";

const App = () => {
  const [prefersDarkMode, setPrefersDarkMode] = useState(false);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider maxSnack={3}>
        <Appbar setPrefersDarkMode={setPrefersDarkMode} />
        <Wrapper>
          <Router />
        </Wrapper>
        <Footer />
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;

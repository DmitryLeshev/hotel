import React, { Suspense } from "react";
import { renderRoutes } from "react-router-config";
import routes from "./routes";

import { CssBaseline, ThemeProvider } from "@material-ui/core";

import { SnackbarProvider } from "notistack";
import useCustomTheme from "./ui/theme";

import { useTypedSelector } from "./hooks";

const App: React.FC = () => {
  const { colors, mode } = useTypedSelector((state) => state.app.theme);

  const theme = useCustomTheme({
    type: mode,
    colors,
  });

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider>
        <CssBaseline />
        <Suspense fallback={<div>Загрузка...</div>}>
          {renderRoutes(routes)}
        </Suspense>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;

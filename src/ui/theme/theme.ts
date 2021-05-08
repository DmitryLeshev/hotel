import React from "react";

import { createMuiTheme } from "@material-ui/core";

import { Colors, Mode } from "../../../../../hooks/src/types/Theme";

interface Props {
  type: Mode;
  colors: Colors;
}

export const useCustomTheme = (props: Props) => {
  const { type, colors } = props;
  const theme = React.useMemo(
    () =>
      createMuiTheme(
        {
          overrides: {
            MuiCssBaseline: {
              "@global": {
                "#root": {
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  height: "100vh",
                },
              },
            },
          },
          palette: {
            type,
            primary: {
              main: colors.primary,
            },
            secondary: {
              main: colors.secondary,
            },
          },
        },
        {
          sidenav: {
            closeWidth: 64,
            openWidth: 220,
          },
          header: {
            height: 72,
          },
          main: {},
        }
      ),
    // eslint-disable-next-line
    [props]
  );

  return theme;
};

export default useCustomTheme;

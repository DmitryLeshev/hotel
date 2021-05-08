import React, { useState } from "react";
import { renderRoutes } from "react-router-config";

import { createStyles, makeStyles } from "@material-ui/core";
import clsx from "clsx";

import { useTypedSelector } from "../../hooks";
import { ITheme } from "../../../../../hooks/src/types/Theme";

interface Props {
  route: any;
}

export default function Main(props: Props) {
  const { route } = props;
  const classes = useStyles();
  const { isLogged } = useTypedSelector((state) => state.app);
  const [sidenav, setSidenav] = useState(false);
  console.log(isLogged);
  return (
    <>
      <main className={clsx(classes.main, { [classes.mainShift]: sidenav })}>
        {renderRoutes(route.routes, { setSidenav })}
      </main>
    </>
  );
}

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    main: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
      width: `calc(100% - ${theme.sidenav.closeWidth}px)`,
      marginLeft: theme.sidenav.closeWidth,
      background: theme.palette.background.default,
      transition: "all 0.3s",
    },
    mainShift: {
      width: `calc(100% - ${theme.sidenav.openWidth}px)`,
      marginLeft: theme.sidenav.openWidth,
      transition: "all 0.3s",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        marginLeft: 0,
      },
    },
  })
);

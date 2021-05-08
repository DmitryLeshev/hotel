import React, { useEffect } from "react";
import { createStyles, makeStyles } from "@material-ui/core";
import { ITheme } from "../../../../../hooks/src/types/Theme";

export default function Home() {
  const classes = useStyles();

  useEffect(() => {
    console.log("[Page Home] mount");

    return () => {
      console.log("[Page Home] unmount");
    };
  }, []);

  return <div className={classes.container}>Home</div>;
}

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: theme.spacing(3),
    },
    wrapper: {
      display: "flex",
      flexDirection: "column",
      padding: theme.spacing(3),
      minWidth: 600,
    },
  })
);

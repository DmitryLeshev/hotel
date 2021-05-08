import { renderRoutes } from "react-router-config";

import { createStyles, makeStyles } from "@material-ui/core";
import clsx from "clsx";

import { ITheme } from "../../../../../hooks/src/types/Theme";
import { Header } from "../components";

interface Props {
  route: any;
}

export default function Main(props: Props) {
  const { route } = props;
  const classes = useStyles();
  return (
    <>
      <Header />
      <main className={clsx(classes.main)}>{renderRoutes(route.routes)}</main>
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
      background: theme.palette.background.default,
      transition: "all 0.3s",
    },
  })
);

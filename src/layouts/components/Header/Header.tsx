import React from "react";
import { createStyles, makeStyles } from "@material-ui/core";
import { ITheme } from "../../../../../../hooks/src/types/Theme";
import { Link } from "react-router-dom";
import clsx from "clsx";

export default function Header() {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img
          className={classes.logo__image}
          src="https://picsum.photos/seed/picsum/150/100"
          alt="logo"
        />
        <p className={classes.logo__title}>Веб-стандарты</p>
        <p className={classes.logo__tagline}>Сообщество разработчиков</p>
      </div>
      <nav className={classes.menu}>
        <button
          className={classes.menu__button}
          type="button"
          aria-expanded="false"
          aria-controls="menu__list"
        >
          <svg
            className={classes.menu__icon}
            aria-hidden="true"
            width="32"
            height="32"
          ></svg>
        </button>
        <ul className={classes.menu__list} id="menu__list">
          <li className={classes.menu__item}>
            <Link
              to="#"
              className={clsx(classes.menu__link, classes.menu__link_current)}
            >
              Статьи
            </Link>
          </li>
          <li className={classes.menu__item}>
            <Link
              to="#"
              className={clsx(classes.menu__link, classes.menu__link_inactive)}
            >
              Подкаст
            </Link>
          </li>
          <li className={classes.menu__item}>
            <Link
              to="#"
              className={clsx(classes.menu__link, classes.menu__link_inactive)}
            >
              Календарь
            </Link>
          </li>
          <li className={classes.menu__item}>
            <Link
              to="#"
              className={clsx(classes.menu__link, classes.menu__link_inactive)}
            >
              О проекте
            </Link>
          </li>
          <li className={classes.menu__item}>
            <Link
              to="#"
              className={clsx(classes.menu__link, classes.menu__link_patreon)}
            >
              Поддержать
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    header: {
      display: "grid",
      padding: theme.spacing(2),

      [theme.breakpoints.up("md")]: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        gridTemplateColumns: "max-content max-content",
        justifyContent: "space-between",
      },
    },
    logo: {
      display: "grid",
      columnGap: theme.spacing(1),
      gridTemplateColumns: "min-content 1fr",
      lineHeight: 1,
      [theme.breakpoints.up("md")]: {
        alignSelf: "start",
      },
      [theme.breakpoints.down("md")]: {
        zIndex: 1,
      },
    },
    logo__image: {
      width: "40px",
      height: "44px",
      [theme.breakpoints.up("md")]: {
        gridRow: "span 2",
      },
    },
    logo__title: {
      ...theme.typography.body1,
      margin: 0,
      [theme.breakpoints.up("md")]: {
        alignSelf: "end",
      },
      [theme.breakpoints.down("md")]: {
        alignSelf: "start",
      },
    },
    logo__tagline: {
      ...theme.typography.body2,
      margin: 0,
      [theme.breakpoints.up("md")]: {
        alignSelf: "center",
      },
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    menu: {
      [theme.breakpoints.up("md")]: {
        alignSelf: "center",
      },
      [theme.breakpoints.down("md")]: {
        display: "grid",
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
      },
    },
    menu__button: {
      [theme.breakpoints.up("md")]: {
        alignSelf: "center",
      },
      [theme.breakpoints.down("md")]: {
        zZndex: 1,
        display: "block",
        margin: 0,
        marginTop: theme.spacing(3),
        marginRight: theme.spacing(2),
        padding: 0,
        border: "none",
        backgroundColor: "transparent",
        justifySelf: "end",
      },
    },
    menu__icon: {},
    menu__list: {},
    menu__item: {},
    menu__link: {},
    menu__link_current: {},
    menu__link_inactive: {},
    menu__link_patreon: {},
  })
);

import bookSvg from "../../images/book-open.svg";

import React from "react";
import {
  Paper,
  Container,
  AppBar,
  Typography,
  SvgIcon,
  Grid,
  Toolbar,
} from "@material-ui/core";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="relative" className={classes.navbar}>
      <Toolbar className={classes.toolbar}>
        <img className={classes.img} src={bookSvg} alt="" />
        <Typography className={classes.brand} variant="h3">
          Social Blog
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

import { Button, Container, Grid, Paper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SIGN_OUT } from "../../../constants/actionTypes";

import useStyles from "./styles";
const AuthPrompt = () => {
  const classes = useStyles();

  const user = useSelector((state) => state.auth); //helps in refreshing the page
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch({ type: SIGN_OUT, payload: null });
  };

  const userLocal = JSON.parse(localStorage.getItem("profile"));
  return (
    <Container className={classes.container}>
      {userLocal ? (
        <Paper className={classes.paperT} elevation={0}>
          <Grid className={classes.grid} container direction="row">
            <Grid item>
              <Typography variant="h5" className={classes.typography}>
                Welcome back {`${userLocal.name}`}
              </Typography>
            </Grid>
            <Grid item>
              <Link className={classes.link} to="/social-blog-ghpages/auth">
                <Button
                  className={classes.button}
                  onClick={handleSignOut}
                  variant="contained"
                  color="secondary"
                >
                  SIGN OUT
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Paper>
      ) : (
        <Paper className={classes.paper} elevation={3}>
          <Grid className={classes.grid} container direction="row">
            <Grid item>
              <Typography variant="h5" className={classes.typography}>
                Sign in to create post
              </Typography>
            </Grid>
            <Grid item>
              <Link className={classes.link} to="/social-blog-ghpages/auth">
                <Button variant="contained" color="secondary">
                  SIGN IN
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Paper>
      )}
    </Container>
  );
};

export default AuthPrompt;

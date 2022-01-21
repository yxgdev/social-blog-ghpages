import React, { useEffect, useState } from "react";
import {
  Paper,
  Container,
  AppBar,
  Typography,
  SvgIcon,
  Grid,
  TextField,
  Collapse,
  Button,
} from "@material-ui/core";

import FileBase64 from "react-file-base64";
import { useDispatch } from "react-redux";
import moment from "moment";

import useStyles from "./styles";
import { createBlogPost } from "../../actions";

const initialState = {
  title: "",
  content: "",
  selectedFile: "",
  author: "",
  createdAt: "",
};
const Form = () => {
  const classes = useStyles();
  const [collapsed, setCollapsed] = useState(false);
  const user = JSON.parse(localStorage.getItem("profile"));

  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();

  const handleCollapseButton = () => {
    setCollapsed(!collapsed);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      title: state.title,
      content: state.content,
      selectedFile: state.selectedFile,
      author: user.name,
      creator: user.googleId || user._id,
      views: 0,
      createdAt: Date.now(),
    };
    // reset
    setState({
      title: "",
      content: "",
      selectedFile: "",
      author: "somebody",
      creator: "",
      views: 0,
      createdAt: Date.now(),
    });

    dispatch(createBlogPost(formData));
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    return;
  };

  return (
    user && (
      <Container className={classes.container} align="center">
        <Paper className={classes.paper} elevation={10}>
          <form onSubmit={handleSubmit} action="" className={classes.form}>
            <Grid
              alignItems="center"
              container
              direction="row"
              justifyContent="space-between"
            >
              <Grid item xs={6}>
                <Typography
                  className={classes.typography}
                  variant="h6"
                  align="left"
                >
                  Make a New Blog Post
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  color={collapsed ? "secondary" : "primary"}
                  onClick={handleCollapseButton}
                  variant="contained"
                >
                  {collapsed ? "cancel" : "Create Post"}
                </Button>
              </Grid>
            </Grid>
            <Collapse in={collapsed}>
              <Grid
                direction="row"
                justifyContent="flex-start"
                container
                className={classes.grid}
              >
                <Grid className={classes.textField} item xs={12}>
                  <TextField
                    required
                    inputProps={{ maxLength: 15 }}
                    name="title"
                    onChange={handleChange}
                    fullWidth
                    label="Title"
                    value={state.title}
                  ></TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Content"
                    required
                    inputProps={{ maxLength: 500 }}
                    name="content"
                    onChange={handleChange}
                    fullWidth
                    multiline
                    minRows={4}
                    label="Content"
                    value={state.content}
                  ></TextField>

                  <Grid className={classes.fileBase} item xs={12}>
                    <FileBase64
                      name="selectedFile"
                      type="file"
                      multiple={false}
                      onDone={({ base64 }) =>
                        setState({ ...state, selectedFile: base64 })
                      }
                    ></FileBase64>
                  </Grid>
                  <Grid className={classes.buttonItem} item xs={12}>
                    <Button type="submit" variant="contained" color="primary">
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Collapse>
          </form>
        </Paper>
      </Container>
    )
  );
};

export default Form;

// title: String,
//   content: String,
//   selectedFile: String,
//   author: String,
//   createdAt: {
//     type: Date,
//     required: true,

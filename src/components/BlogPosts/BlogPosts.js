import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CircularProgress,
  Container,
  Grid,
  LinearProgress,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import BlogPostSingle from "./BlogPostSingle/BlogPostSingle";
import { useDispatch, useSelector } from "react-redux";
import { getBlogPosts, updateViewCount } from "../../actions";

import useStyles from "./styles";
const BlogPosts = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleActionArea = (id) => {
    dispatch(updateViewCount(id));
  };

  useEffect(() => {
    dispatch(getBlogPosts());
  }, [dispatch]);

  const blogPosts = useSelector((state) => state.blogPosts);

  return (
    <Container align="center">
      {blogPosts.length == 0 ? (
        <CircularProgress className={classes.loading} />
      ) : (
        <Grid
          className={classes.grid}
          direction="row"
          container
          justifyContent="flex-start"
        >
          {blogPosts.map((post) => (
            <BlogPostSingle
              handleActionArea={handleActionArea}
              key={post._id}
              post={post}
            ></BlogPostSingle>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default BlogPosts;

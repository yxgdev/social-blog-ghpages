import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  Grid,
  CardContent,
  Button,
} from "@material-ui/core";

import React from "react";

import { useDispatch } from "react-redux";
import { deletePost, updateViewCount } from "../../../actions";
import Visibility from "@material-ui/icons/Visibility";
import { Link } from "react-router-dom";

import useStyles from "./styles";

const BlogPostSingle = ({ post, handleActionArea }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleButtonClick = (id) => {
    dispatch(deletePost(id));
  };

  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <Grid item className={classes.gridItem} xs={12} md={6} lg={4}>
      <Card className={classes.card}>
        <CardActionArea
          onClick={() => handleActionArea(post._id)}
          className={classes.actionArea}
        >
          <Link
            className={classes.link}
            to={`/social-blog-ghpages/post/${post._id}`}
          >
            <CardContent className={classes.cardContent}>
              <CardMedia
                className={classes.media}
                component="img"
                height="150"
                src={post.selectedFile}
              ></CardMedia>
              <div className={classes.contentDiv}>
                <Typography variant="h6"> {post.title}</Typography>
                <Typography
                  paragraph
                  className={classes.content}
                  variant="body1"
                >
                  {post.content.length > 180
                    ? post.content.substring(0, 180) + " ..."
                    : post.content}
                </Typography>
              </div>
            </CardContent>
          </Link>
        </CardActionArea>
        <div className={classes.views}>
          <Visibility />
          <Typography className={classes.viewsWord} variant="subtitle2">
            {post.views} Views
          </Typography>
        </div>

        {(user?.googleId === post.creator || user?._id === post.creator) && (
          <Button
            className={classes.button}
            onClick={() => handleButtonClick(post._id)}
            variant="contained"
            color="secondary"
          >
            DELETE
          </Button>
        )}
      </Card>
    </Grid>
  );
};

export default BlogPostSingle;

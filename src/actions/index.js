import * as api from "../api";
import {
  CREATE_POST,
  DELETE_POST,
  GET_ALL,
  GET_SINGLE_POST,
  SIGN_IN,
  SIGN_UP,
  UPDATE_POST_VIEWS,
} from "../constants/actionTypes";

export const getBlogPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: GET_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createBlogPost = (post) => async (dispatch) => {
  const { data } = await api.createPost(post);
  dispatch({ type: CREATE_POST, payload: data });
};

export const deletePost = (id) => async (dispatch) => {
  // delete post
  await api.deletePost(id);
  dispatch({ type: DELETE_POST, payload: id });
};

export const updateViewCount = (id) => async (dispatch) => {
  const updatedPost = await api.updatePostViews(id);
  dispatch({ type: UPDATE_POST_VIEWS, payload: { updatedPost, id } });
};

export const getSinglePost = (id) => async (dispatch) => {
  const post = await api.getSinglePost(id);

  dispatch({ type: GET_SINGLE_POST, payload: post });
};

export const signIn = (formData, navigate) => async (dispatch) => {
  const result = await api.signIn(formData);

  dispatch({ type: SIGN_IN, payload: result });
  navigate("/social-blog-ghpages/");
};

export const signUp = (formData, navigate) => async (dispatch) => {
  const result = await api.signUp(formData);
  dispatch({ type: SIGN_UP, payload: result });
  navigate("/social-blog-ghpages/");
};

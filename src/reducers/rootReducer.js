import { combineReducers } from "redux";
import blogPosts from "../reducers/blogPosts";
import singlePost from "./singlePost";
import auth from "./auth";
export default combineReducers({
  blogPosts,
  singlePost,
  auth,
});

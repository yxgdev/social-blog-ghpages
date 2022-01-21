import {
  CREATE_POST,
  GET_ALL,
  DELETE_POST,
  UPDATE_POST_VIEWS,
  GET_SINGLE_POST,
} from "../constants/actionTypes";

export default (
  post = {
    title: "",
    author: "",
    content: "",
    views: 0,
    selectedFile: "",
    createdAt: Date.now(),
  },
  action
) => {
  switch (action.type) {
    case GET_SINGLE_POST:
      return action.payload.data;

    default:
      return post;
  }
};

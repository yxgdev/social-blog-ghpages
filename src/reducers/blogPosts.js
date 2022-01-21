import {
  CREATE_POST,
  GET_ALL,
  DELETE_POST,
  UPDATE_POST_VIEWS,
  GET_SINGLE_POST,
} from "../constants/actionTypes";

export default (posts = [], action) => {
  switch (action.type) {
    case GET_ALL:
      return action.payload;

    case CREATE_POST:
      return [...posts, action.payload.post];

    case DELETE_POST:
      const id = action.payload;
      return posts.filter((post) => post._id !== id);

    case UPDATE_POST_VIEWS:
      //   const id = action.payload.id;
      const updatedPost = action.payload.updatedPost.data.post;

      return posts.map((post) => {
        return post._id === action.payload.id ? updatedPost : post;
      });

    default:
      return posts;
  }
};

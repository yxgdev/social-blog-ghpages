import { AUTH, SIGN_IN, SIGN_OUT, SIGN_UP } from "../constants/actionTypes";

export default (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem(
        "profile",
        JSON.stringify({ ...action?.payload?.result })
      );
      return { ...state, authData: action?.payload?.result };

    case SIGN_OUT:
      localStorage.clear();
      return { ...state, authData: null };

    case SIGN_UP:
    case SIGN_IN:
      localStorage.setItem(
        "profile",
        JSON.stringify({ ...action?.payload?.data?.user, password: "" })
      );
      return {
        ...state,
        authData: { ...action?.payload?.data?.user, password: "" },
      };
    default:
      return state;
  }
};

import * as ActionTypes from "../Actions/ActionTypes";
import { ErrorHandler } from "../../Helper/Error";
const initialState = {
  username: "",
  email: "",
  password: "",
  token: null,
  userId: null,
  errorMessage: "",
  isError: false,
  isLogin: false
};

export const UserDetails = (state = initialState, action) => {
  if (action.type === ActionTypes.AUTHENTICATION_IS_SUCCESS) {
    return {
      ...state,
      token: action.token,
      userId: action.UserID,
      isLogin: true
    };
  }
  if (action.type === ActionTypes.AUTHENTICATION_IS_FAILURE) {
    return {
      ...state,
      errorMessage: ErrorHandler(action.error),
      isError: true
    };
  }

  if (action.type === ActionTypes.LOGOUT) {
    return {
      ...state,
      token: null,
      userId: null
    };
  }

  if (action.type === ActionTypes.GET_USERNAME) {
    return {
      ...state,
      username: action.Username
    };
  }
  return state;
};

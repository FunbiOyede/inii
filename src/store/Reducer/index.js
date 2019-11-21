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
  isLogin: false,
  isRegister: false
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

  if (action.type === ActionTypes.REGISTERATION_SUCCESS) {
    return {
      ...state,
      isRegister: true,
      token: action.Token
    };
  }
  return state;
};

// fix it when the user stays logged in even when reloaded
//making two bugs now lol

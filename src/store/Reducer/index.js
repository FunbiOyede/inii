import * as ActionTypes from "../Actions/ActionTypes";
import { ErrorHandler } from "../../Helper/Error";
const initialState = {
  token: null,
  userID: null,
  isAuth: false,
  errorMessage: "",
  isError: false,
  isLogged: false
};

export const UserDetails = (state = initialState, action) => {
  if (action.type === ActionTypes.REGISTRATION_SUCCESS) {
    return {
      ...state,
      token: action.idToken,
      userID: action.userID,
      isAuth: true
    };
  }

  if (action.type === ActionTypes.REGISTRATION_FAILED) {
    return {
      ...state,
      isError: true,
      errorMessage: ErrorHandler(action.errorMessage)
    };
  }

  if (action.type === ActionTypes.LOGIN_SUCCESS) {
    return {
      ...state,
      isLogged: true
    };
  }

  if (action.type === ActionTypes.LOGIN_FAILED) {
    return {
      ...state,
      isError: true,
      errorMessage: ErrorHandler(action.errorMessage)
    };
  }
  return state;
};

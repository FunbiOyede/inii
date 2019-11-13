import * as ActionTypes from "../Actions/ActionTypes";
import axios from "axios";
/**
 *
 * @param {*} username
 * @param {*} email
 * @param {*} password
 */
export const getUserDetailRegister = (username, email, password) => {
  // const Username = username;
  return dispatch => {
    dispatch(startAuthentication());
    const userAuthDetails = {
      Username: username,
      email: email,
      password: password,
      returnSecureToken: true
    };
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCj5ZSgS3NPkegGkV4-SoCHkN-8WbJBd4U",
        userAuthDetails
      )
      .then(response => {
        console.log(response);
        dispatch(authenticationPassed(response));
      })
      .catch(err => {
        console.log(err);
        dispatch(authenticationFailed(err));
      });
  };
};

export const startAuthentication = () => {
  return {
    type: ActionTypes.START_AUTHENTICATION
  };
};

/**
 *
 * @param {*} authenticationResponse  response from firebase if authentication process passes
 */
export const authenticationPassed = authenticationResponse => {
  return {
    type: ActionTypes.AUTHENTICATION_IS_SUCCESS,
    response: authenticationResponse
  };
};

/**
 *
 * @param {*} error response from firebase if authentication process fails
 */
export const authenticationFailed = error => {
  return {
    type: ActionTypes.AUTHENTICATION_IS_FAILURE,
    error: error
  };
};

/**
 *
 * @param {*} email user login email
 * @param {*} password user login password
 */

export const getUserDetailLogin = (email, password) => {
  return {
    type: ActionTypes.LOGIN_DETAILS,
    Email: email,
    Password: password
  };
};

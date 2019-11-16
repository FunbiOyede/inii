import * as ActionTypes from "../Actions/ActionTypes";
import axios from "axios";

/**
 *
 * @param {*} username
 */
export const saveUser = username => {
  return {
    type: ActionTypes.GET_USERNAME,
    Username: username
  };
};

/**
 *
 * @param {*} username
 * @param {*} email
 * @param {*} password
 */

export const getUserDetailRegister = (username, email, password) => {
  return dispatch => {
    dispatch(startAuthentication());
    dispatch(saveUser(username));
    const userAuthDetails = {
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
        dispatch(authenticationPassed(response.data));
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
 * @param {*} authenticationResponseToken token from firebase when authentication process is passed
 * @param {*} userId id  from firebase when authentication process is passed
 */
export const authenticationPassedAndSaveToken = (
  authenticationResponseToken,
  userId
) => {
  return {
    type: ActionTypes.AUTHENTICATION_IS_SUCCESS,
    token: authenticationResponseToken,
    UserID: userId
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

export const logout = () => {
  return {
    type: ActionTypes.LOGOUT
  };
};

/**
 *
 * @param {*} expiringTime expiring time frame for users
 * @function sets user token and id to null when user is logged out
 */
export const handleAuthTimeout = expiringTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expiringTime);
  };
};

/**
 *
 * @param {*} email user login email
 * @param {*} password user login password
 */

export const getUserDetailLogin = (email, password) => {
  return dispatch => {
    dispatch(startAuthentication());
    const loginDetails = {
      email: email,
      password: password,
      returnSecureToken: true
    };

    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCj5ZSgS3NPkegGkV4-SoCHkN-8WbJBd4U",
        loginDetails
      )
      .then(response => {
        console.log(response);
        dispatch(
          authenticationPassedAndSaveToken(
            response.data.idToken,
            response.data.localId
          )
        );
        dispatch(handleAuthTimeout(response.data.expiresIn));
      })
      .catch(error => {
        console.log(error.response);
        dispatch(authenticationFailed(error.response.data.error.message));
      });
  };
};

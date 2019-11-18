import * as ActionTypes from "../Actions/ActionTypes";
import axios from "axios";

import {
  persistUserAuthDetails,
  deletePersistUserAuthDetails
} from "../../Helper/constants";

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
      .catch(error => {
        console.log(error.response);
        dispatch(authenticationFailed(error.response.data.error.message));
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
 * @function this executes when user login
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
  deletePersistUserAuthDetails();
  return {
    type: ActionTypes.LOGOUT
  };
};

/**
 *
 * @param {*} expiringTime expiring time frame for users
 * @function sets user token and id to null when expiring time is completed
 */
export const handleAuthTimeout = expiringTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expiringTime * 1000);
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

        persistUserAuthDetails(
          response.data.idToken,
          response.data.expiresIn,
          response.data.localId
        );
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

/**
 * @function basically the function get the data stored persistently from localstorage so the user can be kept logged in
 */

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem("token");
    if (token !== null) {
      const userId = localStorage.getItem("userID");

      dispatch(authenticationPassedAndSaveToken(token, userId));
    } else {
      dispatch(logout());
    }
  };
};

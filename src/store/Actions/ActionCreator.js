import * as ActionTypes from "../Actions/ActionTypes";
import axios from "axios";
import { persistUserAuthDetails } from "../../Helper/constants";

/**
 * @function starts authentication process for registartion
 */

export const StartRegistration = () => {
  return {
    type: ActionTypes.START_REGISTRATION
  };
};

/**
 *
 * @param {object} response
 * @returns {object}
 */

export const registrationSuccess = response => {
  return {
    type: ActionTypes.REGISTRATION_SUCCESS,
    idToken: response.idToken,
    userID: response.localId
  };
};

/**
 *
 * @param {object} response
 * @returns {object}
 */

export const registrationFailed = response => {
  return {
    type: ActionTypes.REGISTRATION_FAILED,
    errorMessage: response.message
  };
};

/**
 *
 * @param {string} username
 * @param {string} email
 * @param {string} password
 */

export const getUserDetailRegister = (username, email, password) => {
  return dispatch => {
    dispatch(StartRegistration());
    const userAuthDetails = {
      username: username,
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
        console.log(response.data);
        dispatch(registrationSuccess(response.data));
        persistUserAuthDetails(response.data);
      })
      .catch(error => {
        console.log(error.response);
        dispatch(registrationFailed(error.response.data.error));
      });
  };
};

// export const getUserDetailLogin = (email, password) => {
//   return dispatch => {
//     dispatch(startAuthentication());
//     const loginDetails = {
//       email: email,
//       password: password,
//       returnSecureToken: true
//     };

//     axios
//       .post(
//         "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCj5ZSgS3NPkegGkV4-SoCHkN-8WbJBd4U",
//         loginDetails
//       )
//       .then(response => {
//         console.log(response);

//         persistUserAuthDetails(
//           response.data.idToken,
//           response.data.expiresIn,
//           response.data.localId
//         );
//         dispatch(
//           authenticationPassedAndSaveToken(
//             response.data.idToken,
//             response.data.localId
//           )
//         );
//         dispatch(handleAuthTimeout(response.data.expiresIn));
//       })
//       .catch(error => {
//         console.log(error.response);
//         dispatch(authenticationFailed(error.response.data.error.message));
//       });
//   };
// };

//  dispatch(authenticationPassed(response.data));
//  dispatch(registered(response.data.idToken));
// dispatch(authenticationFailed(error.response.data.error.message));

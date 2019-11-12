import * as ActionTypes from "../Actions/ActionTypes";

export const getUserDetailRegister = (email, password) => {
  return {
    type: ActionTypes.GET_USER_DATA,
    email: email,
    password: password
  };
};

import * as ActionTypes from "../Actions/ActionTypes";
const initialState = {
  username: "",
  email: "",
  password: ""
};

export const UserDetails = (state = initialState, action) => {
  if (action.type === ActionTypes.LOGIN_DETAILS) {
    console.log(action.Password);
  }
  return state;
};

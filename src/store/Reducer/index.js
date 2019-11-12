import * as ActionTypes from "../Actions/ActionTypes";
const initialState = {
  email: "",
  password: ""
};

export const UserDetails = (state = initialState, action) => {
  if (action.type === ActionTypes.GET_USER_DATA) {
    console.log(action.email);
  }
  return state;
};

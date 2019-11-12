import { createStore, applyMiddleware } from "redux";
import { UserDetails } from "../store/Reducer/index";
import thunk from "redux-thunk";

export const Store = createStore(UserDetails, applyMiddleware(thunk));

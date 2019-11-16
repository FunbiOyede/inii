import { createStore, applyMiddleware, compose } from "redux";
import { UserDetails } from "../store/Reducer/index";
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const Store = createStore(
  UserDetails,
  composeEnhancers(applyMiddleware(thunk))
);

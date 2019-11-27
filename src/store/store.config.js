import { createStore, applyMiddleware, compose } from "redux";
import { UserDetails } from "../store/Reducer/index";
import thunk from "redux-thunk";
const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;
export const Store = createStore(
  UserDetails,
  composeEnhancers(applyMiddleware(thunk))
);

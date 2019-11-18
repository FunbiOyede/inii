import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AddBookmark from "../../container/NewBookmark/AddBookmark";
import Profile from "../Profile/Profile";
import Home from "../Home/Home";
import Error from "../Error/Error";
import LandingPage from "../LandingPage/LandingPage";
import Login from "../Login/Login";
import Register from "../Register/Register";
import { connect } from "react-redux";

const Layout = props => {
  let routerGaurds = (
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/login" exact component={Login} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/register" exact component={Register} />
      <Redirect to="/" />
    </Switch>
  );
  if (props.isAuthtenticated) {
    routerGaurds = (
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/AddBookmark" exact component={AddBookmark} />
        <Route component={Error} />
      </Switch>
    );
  }
  return routerGaurds;
};

const mapStateToProps = state => {
  return {
    isAuthtenticated: state.token != null
  };
};
export default connect(mapStateToProps)(Layout);

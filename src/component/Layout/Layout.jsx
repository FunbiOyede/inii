import React from "react";
import { Route, Switch } from "react-router-dom";
import AddBookmark from "../../container/NewBookmark/AddBookmark";
import Profile from "../Profile/Profile";
import Home from "../Home/Home";
import Error from "../Error/Error";
import LandingPage from "../LandingPage/LandingPage";
import Login from "../Login/Login";

const Layout = props => (
  <div>
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/home" exact component={Home} />
      <Route path="/AddBookmark" exact component={AddBookmark} />
      <Route path="/login" exact component={Login} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/" exact component={LandingPage} />
      <Route component={Error} />
    </Switch>
  </div>
);

export default Layout;

import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import { connect } from "react-redux";
import AddBookmark from "./container/NewBookmark/AddBookmark";
import Home from "././component/Home/Home";
import Error from "././component/Error/Error";
import LandingPage from "././component/LandingPage/LandingPage";
import Login from "././component/Login/Login";
import Register from "././component/Register/Register";
import signout from "./component/Signout/Signout";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/AddBookmark" exact component={AddBookmark} />
            <Route path="/signout" exact component={signout} />
            <Route path="/" exact component={LandingPage} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route component={Error} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  };
};

export default connect(mapStateToProps)(App);

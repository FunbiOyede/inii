import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AddBookmark from "./container/NewBookmark/AddBookmark";
import Home from "././component/Home/Home";
import Error from "././component/Error/Error";
import LandingPage from "././component/LandingPage/LandingPage";
import Login from "././component/Login/Login";
import Register from "././component/Register/Register";

import { connect } from "react-redux";
class App extends Component {
  render() {
    let routerGaurds = (
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Redirect to="/" />
      </Switch>
    );
    if (this.props.isAuthtenticated) {
      routerGaurds = (
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/AddBookmark" exact component={AddBookmark} />
          <Route component={Error} />
        </Switch>
      );
    }

    return <BrowserRouter>{routerGaurds}</BrowserRouter>;
  }
}

const mapStateToProps = state => {
  return {
    isAuthtenticated: state.token !== null
  };
};

export default connect(mapStateToProps)(App);

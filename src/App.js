import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AddBookmark from "./container/NewBookmark/AddBookmark";
import Home from "././component/Home/Home";
import Error from "././component/Error/Error";
import LandingPage from "././component/LandingPage/LandingPage";
import Login from "././component/Login/Login";
import Register from "././component/Register/Register";
import Hoc from "./HOC/hoc";

class App extends Component {
  render() {
    return (
      <Hoc>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/home" exact component={Home} />
          <Route path="/AddBookmark" exact component={AddBookmark} />
          <Route component={Error} />
          <Redirect to="/" />
        </Switch>
      </Hoc>
    );
  }
}

export default App;

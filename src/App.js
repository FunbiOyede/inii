import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import AddBookmark from "./container/NewBookmark/AddBookmark";
import Home from "././component/Home/Home";
import Register from "././component/Register/Register";
import LandingPage from "../src/component/LandingPage/LandingPage";
import Login from "././component/Login/Login";
import Signout from "./component/Signout/Signout";
import Error from "././component/Error/Error";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/home" exact component={Home} />
            <Route path="/AddBookmark" exact component={AddBookmark} />
            <Route path="/signout" exact component={Signout} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route component={Error} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import AddBookmark from "./container/NewBookmark/AddBookmark";
import Home from "././component/Home/Home";
import Error from "././component/Error/Error";
import Register from "././component/Register/Register";
import LandingPage from "../src/component/LandingPage/LandingPage";
const Login = React.lazy(() => import("././component/Login/Login"));
const Signout = React.lazy(() => import("./component/Signout/Signout"));

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <React.Suspense fallback={<h4>Loading...</h4>}>
              <Route path="/home" exact component={Home} />
              <Route path="/AddBookmark" exact component={AddBookmark} />
              <Route path="/signout" exact component={Signout} />
              <Route path="/" exact component={LandingPage} />
              <Route path="/login" exact component={Login} />
              <Route path="/register" exact component={Register} />
              {/* <Route component={Error} /> */}
            </React.Suspense>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

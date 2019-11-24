import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Signout extends Component {
  render() {
    return <Redirect to="/" />;
  }
}

export default Signout;

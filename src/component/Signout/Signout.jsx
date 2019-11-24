import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { deletePersistUserAuthDetails } from "../../Helper/constants";

class Signout extends Component {
  componentDidMount() {
    deletePersistUserAuthDetails();
  }
  render() {
    return <Redirect to="/" />;
  }
}

export default Signout;

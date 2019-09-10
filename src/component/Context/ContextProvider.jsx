import React, { Component } from "react";
import { Provider } from "../Context/Context";

class ContextProvider extends Component {
  state = {
    name: "Temiloluwa"
  };
  render() {
    return (
      <Provider value={{ state: this.state }}>{this.props.children}</Provider>
    );
  }
}

export default ContextProvider;

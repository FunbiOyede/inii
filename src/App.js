import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./component/Layout/Layout";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Layout />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

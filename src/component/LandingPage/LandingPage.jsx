import React, { Component } from "react";
import { withRouter } from "react-router-dom";
// import Layout from "../Layout/Layout";

class LandingPage extends Component {
  toMainPage = () => {
    this.props.history.push("/home");
  };
  render() {
    return (
      <div>
        <header>
          <h2>logo</h2>
          <ul>
            <li>Sign Up</li>
          </ul>
        </header>
        <main>
          <h3>Save Anything, Read Anytime</h3>
          <div>{/* <img></img> */}</div>
          <div>
            <button onClick={this.toMainPage}>Get started</button>
          </div>
        </main>
      </div>
    );
  }
}

export default withRouter(LandingPage);

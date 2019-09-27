import React, { Component } from "react";
import styles from "./Login.module.css";
import { ValidateEmail } from "../../Helper/Validate";

class Login extends Component {
  state = {
    email: "",
    password: "",
    isEmailValid: true
  };

  getEmail = e => {
    const { value } = e.target;
    console.log(value);
    this.setState({
      email: value,
      isEmailValid: ValidateEmail(value)
    });
  };

  getPassword = e => {
    this.setState({
      password: e.target.value
    });
  };
  render() {
    return (
      <div>
        <div className={styles.LoginContainer}>
          <form className={styles.Form}>
            <h3>Sign In</h3>

            <input
              className={
                this.state.isEmailValid ? styles.Inputs : styles.Invalid
              }
              type="email"
              placeholder="Email"
              onChange={this.getEmail}
            />

            <br />
            <input
              className={styles.Inputs}
              type="password"
              placeholder="Password"
              onChange={this.getPassword}
            />
            <button className={styles.SignIn}>Sign In</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;

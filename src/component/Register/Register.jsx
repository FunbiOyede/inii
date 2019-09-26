import React, { Component } from "react";
import styles from "./Register.module.css";

import { ValidatePassword, ValidateEmail } from "../../Helper/Validate";
class Register extends Component {
  state = {
    password: "",
    isPasswordValid: true,
    email: "",
    isEmailValid: true
  };

  getPassword = e => {
    this.setState({
      password: e.target.value,
      isPasswordValid: ValidatePassword(e.target.value)
    });
  };

  getEmailAddress = e => {
    this.setState({
      email: e.target.value,
      isEmailValid: ValidateEmail(e.target.value)
    });
  };

  render() {
    return (
      <div>
        <div className={styles.Container}>
          <form className={styles.Form}>
            <h3>Create An Account</h3>

            <input
              className={styles.Inputs}
              type="texts"
              placeholder="Username"
            />
            <br />
            <input
              className={
                this.state.isEmailValid ? styles.Inputs : styles.InvalidEmail
              }
              type="email"
              placeholder="Email"
              onChange={this.getEmailAddress}
            />
            <br />
            <input
              className={
                this.state.isPasswordValid ? styles.Inputs : styles.Invalid
              }
              type="password"
              placeholder="Password"
              onChange={this.getPassword}
            />
            <div>
              {this.state.isPasswordValid ? null : (
                <p
                  style={{
                    color: "#ff0000a3",
                    textAlign: "center"
                  }}
                >
                  Password must be greater than 8{" "}
                </p>
              )}
            </div>
            <button className={styles.CreateBtn}>Create Account</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;

import React, { Component } from "react";
import styles from "./Register.module.css";

import { ValidatePassword } from "../../Helper/Validate";
class Register extends Component {
  state = {
    password: "",
    isPasswordValid: null
  };

  getPassword = e => {
    this.setState({
      password: e.target.value,
      isPasswordValid: ValidatePassword(e.target.value)
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
            <input className={styles.Inputs} type="email" placeholder="Email" />
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

import React, { Component } from "react";
import styles from "./Login.module.css";
import { ValidateEmail } from "../../Helper/Validate";
// import { ErrorHandler } from "../../Helper/Error";
import * as ActionCreators from "../../store/Actions/ActionCreator";
import { connect } from "react-redux";

class Login extends Component {
  state = {
    email: "",
    password: "",
    isEmailValid: true
  };

  getEmail = e => {
    this.setState({
      email: e.target.value,
      isEmailValid: ValidateEmail(e.target.value)
    });
  };

  getPassword = e => {
    this.setState({
      password: e.target.value
    });
  };

  getUserData = e => {
    e.preventDefault();
    this.props.loginUserDetails(this.state.email, this.state.password);
  };
  render() {
    let message = null;
    if (this.props.isError) {
      message = <p>{this.props.ErrorMessage}</p>;
    }
    return (
      <div>
        <div className={styles.LoginContainer}>
          <form className={styles.Form} onSubmit={this.getUserData}>
            <h3 className={styles.SignInTitle}>Login</h3>
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
            <div style={{ color: "red" }}>{message}</div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ErrorMessage: state.errorMessage,
    isError: state.isError
  };
};
const dispatchToProps = dispatch => {
  return {
    loginUserDetails: (email, password) =>
      dispatch(ActionCreators.getUserDetailLogin(email, password))
  };
};

export default connect(mapStateToProps, dispatchToProps)(Login);

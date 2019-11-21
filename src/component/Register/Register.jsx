import React, { Component } from "react";
import styles from "./Register.module.css";
import { connect } from "react-redux";
import { getUserDetailRegister } from "../../store/Actions/ActionCreator";
import { ValidatePassword, ValidateEmail } from "../../Helper/Validate";
import ErrorHandler from "../ErrorHandler/ErrorHandler";
import { Redirect } from "react-router-dom";
class Register extends Component {
  state = {
    username: "",
    password: "",
    isPasswordValid: true,
    email: "",
    isEmailValid: true,
    error: false
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

  getUsername = e => {
    this.setState({
      username: e.target.value
    });
  };

  getUsers = e => {
    e.preventDefault();

    if (
      this.state.username === "" &&
      this.state.email === "" &&
      this.state.password === ""
    ) {
      this.setState({
        error: true
      });
    } else {
      this.props.getUserDetails(
        this.state.username,
        this.state.email,
        this.state.password
      );
    }
  };
  render() {
    let message = null;
    if (this.props.isError) {
      message = <p>{this.props.ErrorMessage}</p>;
    }

    let RegisterComponent = (
      <div>
        <ErrorHandler>
          <div className={styles.Container}>
            <form className={styles.Form} onSubmit={this.getUsers}>
              <h3>Create An Account</h3>

              <input
                className={styles.Inputs}
                type="texts"
                placeholder="Username"
                onChange={this.getUsername}
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

              <button className={styles.CreateBtn}>Create Account</button>
              <div style={{ color: "red" }}>{message}</div>
              <div style={{ color: "red" }}>
                {this.state.error ? <p>'fields cannot be empty'</p> : null}
              </div>
            </form>
          </div>
        </ErrorHandler>
      </div>
    );

    if (this.props.Registered) {
      RegisterComponent = <Redirect to="/home" />;
    }
    return <div>{RegisterComponent}</div>;
  }
}

const mapStateToProps = state => {
  return {
    ErrorMessage: state.errorMessage,
    isError: state.isError,
    Registered: state.isRegister
  };
};
const dispatchToProps = dispatch => {
  return {
    getUserDetails: (name, email, password) =>
      dispatch(getUserDetailRegister(name, email, password))
  };
};

export default connect(mapStateToProps, dispatchToProps)(Register);

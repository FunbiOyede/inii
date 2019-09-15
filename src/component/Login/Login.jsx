import React from "react";
import styles from "./Login.module.css";
const Login = () => (
  <div>
    <div
      style={{
        width: "50%",
        margin: "50px auto",
        height: "80vh",
        display: "block",
        textAlign: "center"
      }}
    >
      <form className={styles.Form}>
        <h3>Sign In</h3>

        <input className={styles.Inputs} type="email" placeholder="Email" />
        <br />
        <input
          className={styles.Inputs}
          type="password"
          placeholder="Password"
        />
        <button className={styles.SignIn}>Sign In</button>
      </form>
    </div>
  </div>
);

export default Login;

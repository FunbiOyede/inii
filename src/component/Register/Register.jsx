import React from "react";
import styles from "./Register.module.css";

const Register = () => (
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
        <h3>Create An Account</h3>

        <input className={styles.Inputs} type="email" placeholder="Email" />
        <br />
        <input
          className={styles.Inputs}
          type="password"
          placeholder="Password"
        />
        <button className={styles.CreateBtn}>Create Account</button>
      </form>
    </div>
  </div>
);

export default Register;

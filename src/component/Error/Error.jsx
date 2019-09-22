import React from "react";
import ErrorPage from "../../assets/56128677966243.5c978f7bcf385.png";
import styles from "./Error.module.css";

const Error = props => (
  <div>
    <img src={ErrorPage} alt="page not found" className={styles.Error} />
  </div>
);

export default Error;

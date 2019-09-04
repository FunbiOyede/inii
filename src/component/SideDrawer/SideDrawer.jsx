import React, { Component } from "react";
import styles from "./SideDrawer.module.css";

class SideDrawer extends Component {
  Drawer = () => {
    console.log("hellow");
  };

  render() {
    return (
      <div onClick={this.Drawer} className={styles.SideDrawer}>
        <div className={styles.FirstBar}></div>
        <div className={styles.SecondBar}></div>
        <div className={styles.ThirdBar}></div>
      </div>
    );
  }
}

export default SideDrawer;

import React, { Component } from "react";
import styles from "./SideDrawer.module.css";

class SideDrawer extends Component {
  render() {
    return (
      <div
        className={this.props.SideBar ? styles.CloseDrawer : styles.SideDrawer}
      >
        <div>
          <h3>Categories</h3>
        </div>
      </div>
    );
  }
}

export default SideDrawer;

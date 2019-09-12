import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import SideDrawer from "../SideDrawer/SideDrawer";
import { Icon } from "antd";

class Navigation extends Component {
  state = {
    Drawer: false
  };
  Drawer = () => {
    this.setState({
      Drawer: !this.state.Drawer
    });
  };

  render() {
    return (
      <header className={styles.Header}>
        <nav>
          <div>
            <div className={styles.Logo}>
              {/* <Link to="/home" style={{ color: "white" }}>
            logo
          </Link> */}
              <SideDrawer SideBar={this.state.Drawer} />
            </div>
            <div>
              <Icon
                type="align-center"
                style={{
                  color: "white",
                  position: "relative",
                  fontSize: "33px",
                  zIndex: "20px",
                  top: "11px",
                  outline: "none",
                  left: "7px"
                }}
                onClick={this.Drawer}
              />
            </div>
            <ul className={styles.navItems}>
              <li>
                <Link
                  to="/AddBookmark"
                  style={{
                    color: "white",
                    padding: "7px 16px",
                    borderRadius: "4px",
                    background: "#00000080"
                  }}
                >
                  Add Bookmark
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  style={{
                    color: "white",
                    padding: "7px 16px",
                    borderRadius: "4px",
                    background: "#00000080"
                  }}
                >
                  Signout
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navigation;

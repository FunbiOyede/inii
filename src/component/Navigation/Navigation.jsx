import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
class Navigation extends Component {
  render() {
    return (
      <header className={styles.Header}>
        <nav>
          <div>
            <div className={styles.Logo}>
              <h2
                style={{
                  letterSpacing: "4px",
                  fontVariant: "small-caps",
                  fontSize: "33px",
                  color: "white",
                  margin: "0",
                  marginTop: "6px",
                  marginLeft: "15px"
                }}
              >
                inii
              </h2>
            </div>

            <ul className={styles.navItems}>
              <li>
                <Link
                  to="/AddBookmark"
                  style={{
                    color: "white",
                    padding: "7px 16px"
                  }}
                >
                  Add Bookmark
                </Link>
              </li>

              <li>
                <Link
                  to="/signout"
                  style={{
                    color: "white",
                    padding: "7px 16px"
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

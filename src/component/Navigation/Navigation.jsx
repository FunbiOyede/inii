import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import SideDrawer from "../SideDrawer/SideDrawer";

const Navigation = props => (
  <header className={styles.Header}>
    <nav>
      <div>
        <div className={styles.Logo}>
          {/* <Link to="/home" style={{ color: "white" }}>
            logo
          </Link> */}
          <SideDrawer />
        </div>
        <ul className={styles.navItems}>
          <li>
            <Link to="/home" style={{ color: "white" }}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/AddBookmark" style={{ color: "white" }}>
              Add Bookmark
            </Link>
          </li>
          <li>
            <Link to="/profile" style={{ color: "white" }}>
              UserProfile
            </Link>
          </li>
          <li>
            <Link to="/Signout" style={{ color: "white" }}>
              Signout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Navigation;

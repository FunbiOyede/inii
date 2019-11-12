import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styles from "./LandingPage.module.css";
import BookmarkImage from "../../assets/landing_save_anything.png";
class LandingPage extends Component {
  toLoginPage = () => {
    this.props.history.push("/login");
  };

  toSignUpPage = () => {
    this.props.history.push("/register");
  };
  render() {
    return (
      <div className={styles.landingPage}>
        <header className={styles.nav}>
          <h2
            style={{
              letterSpacing: "4px",
              fontVariant: "small-caps",
              fontSize: "33px",
              color: "rgb(48, 45, 45)"
            }}
          >
            inii
          </h2>
          <ul>
            <li onClick={this.toLoginPage} style={{ cursor: "pointer" }}>
              Sign In
            </li>
          </ul>
        </header>
        <main className={styles.Main}>
          <div style={{ display: "block" }}>
            <div>
              <img
                src={BookmarkImage}
                alt="Save anything"
                className={styles.Bookmark}
              />
            </div>
            <h3>Save Anything, Read Anytime...</h3>
          </div>

          <div style={{ textAlign: "center" }}>
            <button onClick={this.toSignUpPage}>GET STARTED</button>
          </div>
        </main>
        <footer
          style={{
            textAlign: "center",
            marginTop: "-120px"
          }}
        >
          <p>© 2019 Oluwafunbi</p>
        </footer>
      </div>
    );
  }
}

export default withRouter(LandingPage);

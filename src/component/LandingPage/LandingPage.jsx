import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styles from "./LandingPage.module.css";
// import BookmarkImage from "../../../src/assets/landing_save_anything.png";
class LandingPage extends Component {
  toMainPage = () => {
    this.props.history.push("/home");
  };

  render() {
    return (
      <div className={styles.landingPage}>
        <header className={styles.nav}>
          <h2>inii</h2>
          <ul>
            <li onClick={this.toMainPage} style={{ cursor: "pointer" }}>
              Launch App
            </li>
          </ul>
        </header>
        <main className={styles.Main}>
          <div style={{ display: "block" }}>
            {/* <div>
              <img src={BookmarkImage} alt="Save anything" />
            </div> */}
            <h3>Save Anything, Read Anytime</h3>
          </div>

          <div style={{ textAlign: "center" }}>
            <button onClick={this.toMainPage}>Get started</button>
          </div>
        </main>
        <footer
          style={{
            textAlign: "center",
            marginTop: "-80px"
          }}
        >
          <p>© 2019 Oyede Funbi</p>
        </footer>
      </div>
    );
  }
}

export default withRouter(LandingPage);

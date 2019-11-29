import React, { Component } from "react";
import { Icon } from "antd";
import styles from "./Display.module.css";

class Display extends Component {
  render() {
    return (
      <div className={styles.Bookmark}>
        <h4 style={{ textAlign: "center" }}>{this.props.Title}</h4>
        <p style={{ textAlign: "center" }}>{this.props.description}</p>

        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "10px"
          }}
        >
          <a
            href={this.props.Url}
            style={{ textDecoration: "none", color: "white" }}
          >
            Visit
          </a>

          <Icon
            type="delete"
            onClick={() => this.props.deleteBookmark(this.props.id)}
          />
        </div>
      </div>
    );
  }
}

export default Display;

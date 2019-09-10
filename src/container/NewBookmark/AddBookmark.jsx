import React, { Component } from "react";
import axios from "../../axios.config";
import { Redirect, Link } from "react-router-dom";
import Navigation from "../../component/Navigation/Navigation";
import styles from "./AddBookmark.module.css";
class AddBookmark extends Component {
  state = {
    title: "",
    description: "",
    url: "",
    tag: "",
    isPosted: false,
    error: false,
    errorMessage: ""
  };

  //getting data from multiple inputs
  getTitle = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  SubmitBookmark = e => {
    e.preventDefault();

    const id = Math.floor(Math.random() * 10);
    const bookmark = {
      name: "funbi",
      Id: id,
      Title: this.state.title,
      Description: this.state.description,
      Url: this.state.url,
      Tag: this.state.tag
    };
    axios
      .post("/bookmark.json", bookmark)
      .then(res => {
        this.setState({
          isPosted: true
        });
      })
      .catch(err => {
        this.setState({
          error: true
        });
        console.log(err);
      });

    this.setState({
      title: "",
      description: "",
      url: "",
      tag: ""
    });
  };

  render() {
    return (
      <div>
        <Navigation />
        {this.state.isPosted ? <Redirect to="/home" /> : null}
        <h3
          style={{
            textAlign: "center",
            fontSize: "30px",
            fontWeight: "400"
          }}
        >
          Add Bookmark
        </h3>
        <div style={{ height: "100%" }}>
          <form className={styles.BookmarkInput}>
            <input
              value={this.state.title}
              onChange={this.getTitle}
              type=""
              name="title"
              id=""
              placeholder="title"
            />
            <br />

            <input
              value={this.state.description}
              onChange={this.getTitle}
              type="text"
              name="description"
              id=""
              placeholder="description"
            />
            <br />

            <input
              value={this.state.url}
              onChange={this.getTitle}
              type="url"
              name="url"
              id=""
              placeholder="url"
            />
            <br />

            <input
              value={this.state.tag}
              onChange={this.getTitle}
              type="text"
              name="tag"
              id=""
              placeholder="tag"
            />
            <br />
            <Link onClick={this.SubmitBookmark} className={styles.BtnSubmit}>
              Submit
            </Link>
            <Link to="/home" className={styles.BtnCancel}>
              Cancel
            </Link>
          </form>
        </div>

        {this.state.error ? (
          <p style={{ color: "#ff0000a3", textAlign: "center" }}>
            Error adding bookmarks try again, Connect to the internet
          </p>
        ) : null}
      </div>
    );
  }
}

export default AddBookmark;

import React, { Component } from "react";
import axios from "../../axios.config";
import { Redirect, Link } from "react-router-dom";
import Navigation from "../../component/Navigation/Navigation";
import styles from "./AddBookmark.module.css";
import { ValidateUrl } from "../../Helper/Validate";

class AddBookmark extends Component {
  state = {
    title: "",
    description: "",
    url: "",
    isPosted: false,
    error: false,
    urlIsValid: true,
    errorMessage: ""
  };

  // handling multiple inputs
  handleInputs = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  // only getting url input with this method because of validation
  getUrl = e => {
    this.setState({
      url: e.target.value,
      urlIsValid: ValidateUrl(e.target.value)
    });
  };

  SubmitBookmark = e => {
    e.preventDefault();
    let Token = localStorage.getItem("token");
    const id = Math.floor(Math.random() * 10);
    const bookmark = {
      Id: id,
      Title: this.state.title,
      Description: this.state.description,
      Url: this.state.url
    };
    axios
      .post("/bookmark.json?auth=" + Token, bookmark)
      .then(res => {
        this.setState({
          isPosted: true
        });
      })
      .catch(err => {
        this.setState({
          error: true
        });
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
        <h3 className={styles.title}>Add Bookmark</h3>

        <div className={styles.Container}>
          <form className={styles.BookmarkInput}>
            <input
              className={styles.Inputs}
              value={this.state.title}
              onChange={this.handleInputs}
              type=""
              name="title"
              id=""
              placeholder="title"
            />
            <br />

            <textarea
              className={styles.Inputs}
              value={this.state.description}
              onChange={this.handleInputs}
              type="text"
              name="description"
              id=""
              placeholder="description"
            />
            <br />

            <input
              className={
                this.state.urlIsValid ? styles.Inputs : styles.ErrorInput
              }
              value={this.state.url}
              onChange={this.getUrl}
              type="url"
              name="url"
              id=""
              placeholder="url"
            />
            <br />

            <Link to="/home" className={styles.BtnCancel}>
              Cancel
            </Link>

            <Link
              to="/home"
              onClick={this.SubmitBookmark}
              className={
                this.state.urlIsValid ? styles.BtnSubmit : styles.BtnValidity
              }
            >
              Submit
            </Link>
          </form>
        </div>
        <div>
          {this.state.urlIsValid ? null : (
            <p
              style={{
                color: "#ff0000a3",
                textAlign: "center",
                position: "relative",
                top: "-84px"
              }}
            >
              invalid url
            </p>
          )}
        </div>
        <div>
          {this.state.error ? (
            <p className={styles.ErrorMessage}>
              Error adding bookmarks try again, Connect to the internet
            </p>
          ) : null}
        </div>
      </div>
    );
  }
}

export default AddBookmark;

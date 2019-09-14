import React, { Component } from "react";
import axios from "../../axios.config";
import { Redirect, Link } from "react-router-dom";
import Navigation from "../../component/Navigation/Navigation";
import styles from "./AddBookmark.module.css";
import ValidateUrl from "../../Helper/Validate";
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

  //getting data from multiple inputs
  getTitle = e => {
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
    const id = Math.floor(Math.random() * 10);
    const bookmark = {
      name: "funbi",
      Id: id,
      Title: this.state.title,
      Description: this.state.description,
      Url: this.state.url
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
              className={styles.Inputs}
              value={this.state.title}
              onChange={this.getTitle}
              type=""
              name="title"
              id=""
              placeholder="title"
            />
            <br />

            <input
              className={styles.Inputs}
              value={this.state.description}
              onChange={this.getTitle}
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

            <Link
              to="/home"
              onClick={this.SubmitBookmark}
              className={
                this.state.urlIsValid ? styles.BtnSubmit : styles.BtnValidity
              }
            >
              Submit
            </Link>
            <Link to="/home" className={styles.BtnCancel}>
              Cancel
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
                top: "-93px"
              }}
            >
              invalid url
            </p>
          )}
        </div>
        <div>
          {this.state.error ? (
            <p style={{ color: "#ff0000a3", textAlign: "center" }}>
              Error adding bookmarks try again, Connect to the internet
            </p>
          ) : null}
        </div>
      </div>
    );
  }
}

export default AddBookmark;

import React, { Component } from "react";
import Loader from "../Loader/Loader";
import axios from "../../axios.config";
import Bookmarks from "../Bookmarks/Bookmarks";
import Navigation from "../Navigation/Navigation";
import { Icon } from "antd";

import style from "./Home.module.css";
// import styles from './Home.module.css'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoad: true,
      Bookmark: [],
      isFetched: false,
      isAdd: false,
      error: false,
      hideMessage: true,
      isDeleted: false
    };
  }

  // handles spinner

  componentDidMount() {
    // fetch bookmarks from firebase

    setTimeout(() => {
      this.setState({
        isLoad: false
      });
    }, 2000);

    axios
      .get("/bookmark.json")
      .then(res => {
        let fetchedBookmarks = res.data;
        let bookmarks;
        if (fetchedBookmarks !== null) {
          bookmarks = Object.values(fetchedBookmarks);
          this.setState({
            Bookmark: bookmarks,
            isFetched: true
          });
        } else {
          bookmarks = null;
        }
      })

      .catch(err => {
        this.setState({
          error: true
        });
        console.log(err);
      });
  }

  // delete bookamrk

  deleteBookmark = id => {
    let copyBookmark = [...this.state.Bookmark];
    copyBookmark.splice(id, 1);
    this.setState({
      Bookmark: copyBookmark
    });

    axios
      .delete("/bookmark.json", id)
      .then(res => {
        this.setState({
          isDeleted: true
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  closeDeleteMessage = () => {
    this.setState({
      hideMessage: false
    });
  };
  render() {
    let loader = null;
    if (this.state.isLoad === true) {
      loader = <Loader />;
    } else {
      loader = (
        <div>
          {this.state.isFetched ? (
            <Bookmarks
              isAdd
              Bookmark={this.state.Bookmark}
              deleteBookmark={this.deleteBookmark}
            />
          ) : (
            <p
              style={{
                textAlign: "center"
              }}
            >
              Bookmark Inventory empty, Add bookmark
            </p>
          )}
        </div>
      );
    }

    return (
      <div>
        <Navigation />
        <h2 className={style.title}>All Bookmarks</h2>
        <div>
          {this.state.isDeleted ? (
            <p className={this.state.hideMessage ? style.Show : style.Delete}>
              Bookmark successfully deleted{" "}
              <Icon
                type="close"
                style={{ marginLeft: "30px", marginTop: "10px" }}
                onClick={this.closeDeleteMessage}
              />
            </p>
          ) : null}
          <div>
            {/* for loader */}
            {this.state.error ? (
              <p style={{ color: "#ff0000a3", textAlign: "center" }}>
                Failed to load bookmarks connect to the internet{" "}
              </p>
            ) : (
              loader
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

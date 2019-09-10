import React, { Component } from "react";
import Loader from "../Loader/Loader";
import axios from "../../axios.config";
import Bk from "../../component/Bookmarks/Bk";
import Navigation from "../Navigation/Navigation";
import { Icon } from "antd";
import { Link } from "react-router-dom";
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
      isDeleted: true
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
        setTimeout(() => {
          this.setState({
            isDeleted: false
          });
        }, 2000);
      })
      .catch(err => {
        console.log(err);
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
            <Bk
              isAdd
              Bookmark={this.state.Bookmark}
              deleteBookmark={this.deleteBookmark}
            />
          ) : (
            <p>Add bookmark to get started</p>
          )}
          <div>
            <Link to="/AddBookmark">
              <Icon type="plus-circle" className={style.AddIcon} />
            </Link>
          </div>
        </div>
      );
    }

    return (
      <div>
        <Navigation />
        <h2
          style={{
            textAlign: "center",
            fontSize: "30px",
            fontWeight: "400"
          }}
        >
          All Bookmarks
        </h2>
        <div>
          {this.state.isDeleted ? null : (
            <p style={{ color: "#008000cc", textAlign: "center" }}>
              Bookmark successfully deleted
            </p>
          )}
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

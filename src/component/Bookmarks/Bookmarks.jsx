import React, { Component } from "react";
import Display from "../DisplayBookmarks/Display";
import styles from "./Bookmarks.module.css";
// import axios from '../../axios.config';

class Bk extends Component {
  render() {
    let bookmark = this.props.Bookmark.map((bookmarks, index) => {
      return (
        <Display
          key={index}
          id={index}
          description={bookmarks.Description}
          Title={bookmarks.Title}
          Url={bookmarks.Url}
          deleteBookmark={this.props.deleteBookmark}
        />
      );
    });

    return <div className={styles.Bookmarks}>{bookmark}</div>;
  }
}

export default Bk;

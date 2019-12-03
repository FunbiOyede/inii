import React, { Component } from "react";
import Display from "../DisplayBookmarks/Display";
import Grid from "@material-ui/core/Grid";
import styles from "./Bookmarks.module.css";

class Bookmarks extends Component {
  render() {
    const bookmark = this.props.Bookmark.map((bookmarks, index) => {
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

    return (
      <Grid container direction="row" justify="flex-start" alignItems="center">
        {bookmark}
      </Grid>
    );
  }
}

export default Bookmarks;

import React, { Component } from "react";
import { Icon } from "antd";

class Display extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.Title}</h4>
        <p>{this.props.description}</p>
        <em>Tag:{this.props.Tag}</em>
        <a href={this.props.Url}>View</a>
        {/* <button onClick={() =>this.props.deleteBookmark(this.props.id)}>Delete</button> */}
        <Icon
          type="delete"
          onClick={() => this.props.deleteBookmark(this.props.id)}
        />
      </div>
    );
  }
}

export default Display;

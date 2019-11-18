import React, { Component } from "react";

class ErrorHandler extends Component {
  state = {
    hasError: false
  };

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>No internet.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorHandler;

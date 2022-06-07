/** @format */

import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasEror: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasEror: true });
  }

  render() {
    if (this.state.hasEror) {
      return <h1>Oooops. That is not good.</h1>;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;

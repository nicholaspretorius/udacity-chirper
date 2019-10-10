import React, { Component } from "react";
import { connect } from "react-redux";

import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div data-testid="app">
        Starter Code
        <Dashboard />
      </div>
    );
  }
}

export default connect(state => ({
  loading: state.loading
}))(App);

import React, { Component } from "react";
import { connect } from "react-redux";

import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import authedUser from "../reducers/authedUser";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div data-testid="app">{this.props.loading === true ? <p>Loading...</p> : <Dashboard />}</div>
    );
  }
}

function mapStateToProps() {
  return {
    loading: authedUser === null
  };
}

export default connect(mapStateToProps)(App);

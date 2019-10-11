import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { handleInitialData } from "../actions/shared";
import authedUser from "../reducers/authedUser";
import Dashboard from "./Dashboard";
import NewTweet from "./NewTweet";
import TweetPage from "./TweetPage";
import Nav from "./Nav";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div data-testid="app" className="container">
            <Nav />
            {this.props.loading === true ? (
              <p>Loading...</p>
            ) : (
              <div>
                <Route path="/" exact component={Dashboard} />
                <Route path="/tweet/:id" component={TweetPage} />
                <Route path="/new" component={NewTweet} />
              </div>
            )}
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps() {
  return {
    loading: authedUser === null
  };
}

export default connect(mapStateToProps)(App);

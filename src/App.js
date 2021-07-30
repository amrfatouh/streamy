import React, { Component } from "react";
import { connect } from "react-redux";
import { googleAuthInit } from "./actions";
import LoginButton from "./components/LoginButton";
import StreamsList from "./components/streams/StreamsList";

class App extends Component {
  componentDidMount() {
    this.props.googleAuthInit();
  }

  render() {
    return (
      <div>
        <LoginButton />
        <StreamsList />
      </div>
    );
  }
}

export default connect(null, { googleAuthInit })(App);

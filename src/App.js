import React, { Component } from "react";
import { connect } from "react-redux";
import { googleAuthInit } from "./actions";
import LoginButton from "./components/LoginButton";

class App extends Component {
  componentDidMount() {
    this.props.googleAuthInit();
  }

  render() {
    return (
      <div>
        <LoginButton />
      </div>
    );
  }
}

export default connect(null, { googleAuthInit })(App);

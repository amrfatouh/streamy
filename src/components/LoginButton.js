import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

export class LoginButton extends Component {
  handleClick = () => {
    if (this.props.isSignedIn) this.props.signOut();
    else this.props.signIn();
  };
  render() {
    return (
      <button className="ui red large button" onClick={this.handleClick}>
        <i className="google icon"></i>
        {this.props.isSignedIn ? "Sign Out" : "Sign In"}
      </button>
    );
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};
export default connect(mapStateToProps, { signOut, signIn })(LoginButton);

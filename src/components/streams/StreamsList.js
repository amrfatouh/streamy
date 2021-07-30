import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";

export class StreamsList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }
  renderList() {
    if (!this.props.streams || this.props.streams.length === 0) {
      return <div className="ui active centered inline loader"></div>;
    }
    return this.props.streams.map((stream) => {
      return (
        <div className="item">
          <i className="large video middle aligned icon"></i>
          <div className="content">
            <div className="header">{stream.title}</div>
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="ui segment">
        <div className="ui relaxed divided list">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { streams: Object.values(state.streams) };
};

export default connect(mapStateToProps, { fetchStreams })(StreamsList);

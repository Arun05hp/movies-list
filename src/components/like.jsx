import React, { Component } from "react";
class Like extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let classes = "fa fa-heart";
    if (!this.props.liked) classes += "-o";
    return (
      <i
        onClick={this.props.onClick}
        style={{ cursor: "pointer" }}
        className={classes}
        aria-hidden="true"
      ></i>
    );
  }
}

export default Like;

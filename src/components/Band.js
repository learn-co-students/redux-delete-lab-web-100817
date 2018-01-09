import React, { Component } from "react";

class Band extends Component {
  handleClick = () => {
    this.props.store.dispatch({ type: "DELETE_BAND", id: this.props.id });
  };
  render() {
    return (
      <div>
        <p>{this.props.text}</p>
        <button onClick={this.handleClick}>Delete</button>
      </div>
    );
  }
}

export default Band;

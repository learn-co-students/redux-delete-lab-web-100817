import React, { Component } from "react";

class Band extends Component {
  handleClick = () => {
    this.props.store.dispatch({ type: "DELETE_BAND", id: this.props.band.id });
  };
  render() {
    return (
      <li>
        {this.props.band.text}
        <button onClick={this.handleClick}>
          <img
            src="http://agnesday.com/wp-content/uploads/2012/05/deletered.png"
            width="10px"
            alt="delete"
          />
        </button>
      </li>
    );
  }
}

export default Band;

import React, { Component } from 'react';

class Band extends Component {

  handleOnClick() {
    this.props.store.dispatch({
      type: 'DELETE_BAND',
      id: this.props.band.id
    })
  }

  render() {
console.log(this.props.band.id)
    const band = this.props.band.text
    return(
      <div>
      <ul>
        <li>
          {band}
        </li>
      </ul>
      <button onClick={() => this.handleOnClick()} >Delete</button>
      </div>
    );
  }
};

export default Band;

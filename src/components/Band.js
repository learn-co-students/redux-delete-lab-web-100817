import React, { Component } from 'react';

class Band extends Component {

handleOnClick=(event)=>(
  this.props.store.dispatch({
    type: 'DELETE_BAND',
    id: this.props.band.id,
  })
)

  render() {
    console.log(this.props)
    return(
      <div>
        <li>
          {this.props.band.text}
          <button onClick={this.handleOnClick}>Delete</button>
        </li>
      </div>
    );
  }
};

export default Band;

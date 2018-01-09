import React, { Component } from 'react';
import Band from '../components/Band';

class Bands extends Component {

  render() {
    console.log("bands", this.props);
    console.log("bands", this.props.store.getState());


    const bands = this.props.store.getState().bands.map((band, index) => {
      return <Band key={index} band={band} store={this.props.store} />
    })

    return(
      <ul>
        Bands Component
        {bands}
      </ul>
    );
  }
};

export default Bands;

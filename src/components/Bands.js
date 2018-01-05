import React, { Component } from "react";
import Band from "./Band";

class Bands extends Component {
  bands = () => {
    let bands = this.props.store.getState().bands;
    if (bands.length > 0) {
      return bands.map(band => {
        return <Band band={band} key={band.id} store={this.props.store} />;
      });
    }
  };

  render() {
    return <ul>{this.bands()}</ul>;
  }
}

export default Bands;

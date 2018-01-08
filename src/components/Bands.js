import React, { Component } from "react";
import Band from "./Band";

class Bands extends Component {
  render() {
    const bandNames = this.props.store
      .getState()
      .bands.map(band => <Band store={this.props.store} band={band} />);
    return <ul>{bandNames}</ul>;
  }
}

export default Bands;

import React, { Component } from "react";
import Band from "./Band";

class Bands extends Component {
  render() {
    const bands = this.props.store.getState().bands.map((band, index) => {
      return (
        <li>
          <Band
            store={this.props.store}
            text={band.text}
            key={index}
            id={band.id}
          />
        </li>
      );
    });
    return <ul>{bands}</ul>;
  }
}

export default Bands;

//
// const todos = this.props.store.getState().todos.map((todo, index) => {
//       return (
//         <Todo
//           text={todo.text}
//           key={index}
//           id={todo.id}
//           store={this.props.store}
//         />
//       );
//     });

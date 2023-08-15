import React, { Component } from "react";
import Head from "./Head";
import Buttons from "./Button";

class Calk extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.reset = this.reset.bind(this);
  }

  reset() {
    this.setState({});
  }

  render() {
    return (
      <div>
        <h1>Hay {this.state.number}</h1>
        <Head />
        <div onClick={this.reset}>
          <Buttons />
        </div>
      </div>
    );
  }
}

export default Calk;

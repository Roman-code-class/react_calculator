import React, { Component } from "react";
import Head from "./Head";
import Buttons from "./Button";
// plus minus multiply divide

// { val1: number, val2: number, operation: string }

class Calk extends Component {
  constructor(props) {
    super(props);

    this.state = {
      val1: 0,
      val2: 0,
      operation: "plus",
      result: 0,
    };

    this.reset = this.reset.bind(this);
  }

  reset() {
    this.setState({
      val1: 0,
      val2: 0,
      operation: "plus",
      result: 0,
    });
  }

  onChange(values) {
    this.setState(values);
  }

  calculate() {
    switch (this.state.operation) {
      case "plus":
        return this.state.val1 + this.state.val2;
      case "minus":
        return this.state.val1 - this.state.val2;
      default:
        return 0;
    }
  }

  render() {
    let result = this.calculate();
    return (
      <div>
        <h1 className="main-header">Hay</h1>
        <Head
          onChange={this.onChange.bind(this)}
          values={{
            val1: this.state.val1,
            val2: this.state.val2,
            result,
          }}
        />
        {/* <Buttons onClick={this.reset} /> */}
        <div className="Button" onClick={this.reset}>
          <Buttons />
        </div>
      </div>
    );
  }
}

export default Calk;

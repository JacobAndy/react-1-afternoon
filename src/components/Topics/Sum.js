import React, { Component } from "react";

class Sum extends Component {
  constructor() {
    super();
    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    };
  }
  sumTotal() {
    this.setState({
      sum: +this.state.number1 + +this.state.number2
    });
  }
  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input
          className="inputLine"
          placeholder="Value 1"
          onChange={e => this.setState({ number1: e.target.value })}
        />
        <input
          className="inputLine"
          placeholder="Value 2"
          onChange={e => this.setState({ number2: e.target.value })}
        />
        <button className="confirmationButton" onClick={() => this.sumTotal()}>
          Click Me
        </button>
        <span classname="resultsBox">{this.state.sum}</span>
      </div>
    );
  }
}
export default Sum;

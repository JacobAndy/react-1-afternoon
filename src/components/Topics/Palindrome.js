import React, { Component } from "react";

class Palindrome extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      Palindrome: ""
    };
  }
  backwords() {
    var newstr = this.state.userInput
      .split("")
      .reverse()
      .join("");
    this.setState({
      Palindrome: this.state.userInput === newstr ? true : false
    });
  }
  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <span className="puzzleText" />
        <input
          className="inputLine"
          placeholder="Flip it"
          placeholder="Enter some text"
          onChange={e => this.setState({ userInput: e.target.value })}
        />
        <button className="confirmationButton" onClick={() => this.backwords()}>
          Click Me
        </button>
        <span className="resultsBox">
          Palindrome: {JSON.stringify(this.state.Palindrome)}
        </span>
      </div>
    );
  }
}
export default Palindrome;

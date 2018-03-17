import React, { Component } from "react";

class FilterString extends Component {
  constructor() {
    super();
    this.state = {
      unFilteredArray: [
        "Joe is age 22 ",
        "Aaron lives in TX",
        "Jared lives in PA",
        "Jacob is a sexy mf",
        "Jin is a gangster",
        "Larry is a thug",
        "Keith repin from dah 205",
        "Garret is str8 boss",
        "Shea traps outs hotel rooms",
        "Eric is a NARC"
      ],
      userInput: "",
      filteredArray: []
    };
  }
  arrayStr() {
    this.setState({
      filteredArray: this.state.unFilteredArray.filter(e =>
        e.includes(this.state.userInput)
      )
    });
  }
  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">
          Strings: {JSON.stringify(this.state.unFilteredArray)}
        </span>
        <input
          className="inputLine"
          placeholder="Be specefic!"
          onChange={e => this.setState({ userInput: e.target.value })}
        />
        <button className="confirmationButton" onClick={() => this.arrayStr()}>
          Click Me
        </button>
        <span className="resultsBox dilterStringRB">
          Filtered Strings: {JSON.stringify(this.state.filteredArray)}
        </span>
      </div>
    );
  }
}
export default FilterString;

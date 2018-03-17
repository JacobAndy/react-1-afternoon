import React, { Component } from "react";

class FilterObject extends Component {
  constructor() {
    super();
    this.state = {
      unFilteredArray: [
        {
          name: "Joe",
          hobby: "code",
          hairStyle: "sucks",
          cool: false
        },
        {
          name: "Jake",
          hairColor: "red",
          age: 18,
          laptop: "mac",
          favoriteFood: "pizza"
        },
        {
          name: "Aaron",
          greaser: true,
          hometown: "tx",
          hairStyle: "sucks",
          cool: true,
          hobby: "code"
        },
        {
          name: "Jared",
          hairColor: "darkBrown",
          hometown: "pa",
          cool: true,
          hobby: "code"
        }
      ],
      userInput: "",
      filteredArray: []
    };
  }
  inputChange(val) {
    this.setState({ userInput: val });
  }
  filterOriginalArray() {
    var newArr = this.state.unFilteredArray.filter(
      curr => curr[this.state.userInput]
    );
    this.setState({ filteredArray: newArr });
  }
  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">
          {JSON.stringify(this.state.unFilteredArray)}
        </span>
        <input
          className="inputLine"
          placeholder="What to filter?"
          onChange={e => {
            this.inputChange(e.target.value);
          }}
        />
        <button
          className="confirmationButton"
          onClick={() => this.filterOriginalArray()}
        >
          Click Me!
        </button>
        <span className="resultsBox filterStringRB">
          filtered Objects: {JSON.stringify(this.state.filteredArray)}
        </span>
      </div>
    );
  }
}

export default FilterObject;

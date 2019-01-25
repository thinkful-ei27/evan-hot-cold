import React, { Component } from 'react';
import Hint from './hint';
import GuessForm from './guessForm';
import GuessLog from './guessLog';
import './board.css';

class Board extends Component {
  state = {
    theNumber: Math.floor(Math.random() * (100 - 1) + 1),
    theGuessArray: []
  };

  handleSubmit(e) {
    e.preventDefault();
    console.log('hello');
    let value = Number(e.target.guess.value);

    const tempArray = [...this.state.theGuessArray, value];
    value = '';
    this.setState({
      theGuessArray: tempArray
    });
  }

  render() {
    return (
      <div className="board">
        <Hint />
        <GuessForm handleSubmit={e => this.handleSubmit(e)} />
        <GuessLog userGuesses={this.state.theGuessArray} />
      </div>
    );
  }
}

export default Board;

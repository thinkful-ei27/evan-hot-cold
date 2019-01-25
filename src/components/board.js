import React, { Component } from 'react';
import Hint from './hint';
import GuessForm from './guessForm';
import GuessLog from './guessLog';
import './board.css';

class Board extends Component {
  state = {
    hint: 'Make a Guess',
    theNumber: Math.floor(Math.random() * (100 - 1) + 1),
    theGuessArray: [],
    guessCount: 0
  };
 
  compareNumbers(value) {
    const {theNumber} = this.state;
    if (value === theNumber) {
      this.setState({hint: 'You Win'});
    } else if (Math.abs(value - theNumber) > 10){
      this.setState({hint: 'Cold'});
    } else if (Math.abs(value - theNumber) < 11 && Math.abs(value - theNumber)>2){
      this.setState({hint: 'Warm'});
    } else if (Math.abs(value - theNumber) < 3 && Math.abs(value - theNumber)>0){
      this.setState({hint: 'Hot'});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('hello');
    let value = Number(e.target.guess.value);
    const tempArray = [...this.state.theGuessArray, value];
    this.setState({
      theGuessArray: tempArray,
      guessCount: (this.state.guessCount)+1
    });
    this.compareNumbers(value);
  }

  render() {
    return (
      <div className="board">
        <Hint
        hint={this.state.hint}/>
        <GuessForm 
        guessCount={this.state.guessCount}
        handleSubmit={e => this.handleSubmit(e)} />
        <GuessLog userGuesses={this.state.theGuessArray} />
      </div>
    );
  }
}

export default Board;

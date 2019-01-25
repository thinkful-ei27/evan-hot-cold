import React, { Component } from 'react';
import Hint from './hint';
import GuessForm from './guessForm';
import GuessLog from './guessLog';
import './board.css';
import Header from './header';
import What from './what';

class Board extends Component {
  state = {
    hint: 'Make a Guess',
    theNumber: Math.floor(Math.random() * (100 - 1) + 1),
    theGuessArray: [],
    guessCount: 0,
    what: false
  };

  handleWhat() {
    this.setState({ what: !this.state.what });
  }

  compareNumbers(value) {
    const { theNumber } = this.state;
    if (value === theNumber) {
      this.setState({ hint: 'You Win' });
    } else if (Math.abs(value - theNumber) > 10) {
      this.setState({ hint: 'Cold' });
    } else if (
      Math.abs(value - theNumber) < 11 &&
      Math.abs(value - theNumber) > 2
    ) {
      this.setState({ hint: 'Warm' });
    } else if (
      Math.abs(value - theNumber) < 3 &&
      Math.abs(value - theNumber) > 0
    ) {
      this.setState({ hint: 'Hot' });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let value = Number(e.target.guess.value);
    const tempArray = [...this.state.theGuessArray, value];
    this.compareNumbers(value);
    value > 100
      ? this.setState({ hint: 'Enter a number between 1 and 100' })
      : this.setState({
          theGuessArray: tempArray,
          guessCount: this.state.guessCount + 1
        });
  }

  handleNewGame(e) {
    this.setState({
      hint: 'New Game',
      theNumber: Math.floor(Math.random() * (100 - 1) + 1),
      theGuessArray: [],
      guessCount: 0
    });
  }

  render() {
    if (this.state.what) {
      return <What handleClick={() => this.handleWhat()} />;
    }
    return (
      <div className="board">
        <Header
          newGame={() => this.handleNewGame()}
          handleWhat={() => this.handleWhat()}
        />
        <Hint hint={this.state.hint} />
        <GuessForm
          guessCount={this.state.guessCount}
          handleSubmit={e => this.handleSubmit(e)}
        />
        <GuessLog userGuesses={this.state.theGuessArray} />
      </div>
    );
  }
}

export default Board;

import React, { Component } from 'react';
import Header from './header';
import Board from './board';
import './game.css';

export default class Game extends Component {
  state={
    userNum: '',
    theNumber:(Math.floor(Math.random() *(100 - 1) + 1)),
    theGuessArray: []
  }

  render() {
console.log(this.randomNumber)



    return (
      <div className="game">
        <Header />
        <h1>HOT or COLD</h1>
        <Board number={this.state.theNumber}
        userNumber={num => this.setState({userNum: num})}/>
      </div>
    );
  }
}

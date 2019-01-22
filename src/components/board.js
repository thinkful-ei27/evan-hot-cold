import React from 'react';
import Hint from './hint';
import GuessForm from './guessForm';
import GuessLog from './guessLog';
import './board.css';

function Board(props) {
  return (
    <div className="board">
      <Hint />
      <GuessForm />
      <GuessLog />
    </div>
  );
}

export default Board;

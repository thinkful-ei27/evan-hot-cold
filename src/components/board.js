import React from 'react';
import Hint from './hint';
import GuessForm from './guessForm';
import GuessLog from './guessLog';
import './board.css';

function Board(props) {
  console.log(props.number);



function handleNumbers(e) {
  e.preventDefault();
let currentGuess =(e.target.value);
props.userNumber(currentGuess);
if (currentGuess === props.number){
  console.log('you win');
}
// put in state
// push it to the array
}

  return (
    <div className="board">
      <Hint />
      <GuessForm 
      theGuess={(e)=>handleNumbers(e)}/>
      <GuessLog />
    </div>
  );
}

export default Board;

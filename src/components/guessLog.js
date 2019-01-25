import React from 'react';
import './guessLog.css';

function GuessLog(props) {
  const { userGuesses } = props;

  const guessList = userGuesses.map((guess, i) => {
    return <li key={i}>{guess}</li>;
  });

  return (
    <div className="guess-log">
      <ul className="guess-list">{guessList}</ul>
    </div>
  );
}

export default GuessLog;

import React from 'react';
import './guessForm.css';

function GuessForm(props) {
  return (
    <form
      onSubmit={e => {
        props.handleSubmit(e);
        e.target.guess.value = '';
      }}
    >
      <input
        name="guess"
        className="enter-guess"
        type="number"
        placeholder="Enter your Guess"
      />
      <button className="submit-guess" type="submit">
        Guess
      </button>
      <p>
        Guess #<span className="guess-number">{props.guessCount}</span>!
      </p>
    </form>
  );
}

export default GuessForm;

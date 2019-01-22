import React from 'react';
import './guessForm.css';

function GuessForm(props) {
  return (
    <form>
      <input
        className="enter-guess"
        type="text"
        placeholder="Enter your Guess"
      />
      <input className="submit-guess" type="submit" value="Guess" />
      <p>
        Guess #<span className="guess-number">1</span>!
      </p>
    </form>
  );
}

export default GuessForm;

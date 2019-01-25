import React from 'react';
import './guessForm.css';

function GuessForm(props) {
  return (
    <form>
      <input
        className="enter-guess"
        type="text"
        placeholder="Enter your Guess"
        onChange={e=> props.theGuess(e)}
      />
      <input className="submit-guess" type="submit" value="Guess" 
      onClick={e=> props.theSubmit(e)}/>
      <p>
        Guess #<span className="guess-number">1</span>!
      </p>
    </form>
  );
}

export default GuessForm;

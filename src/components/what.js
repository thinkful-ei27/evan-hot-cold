import React from 'react';
import './what.css';

function What(props) {
  return (
    <div className="what">
      <h1>What do I do?</h1>
      <p>
        This is a Hot or Cold Number Guessing Game. The game goes like this:
      </p>
      <ol>
        <li>
          1. I pick a random secret number between 1 to 100 and keep it hidden.
        </li>
        <li>
          2. You need to guess until you can find the hidden secret number.
        </li>
        <li>
          3. You will get feedback on how close ("hot") or far ("cold") your
          guess is.
        </li>
      </ol>
      <p>So, Are you ready?</p>
      <button onClick={() => props.handleClick()}>Got It</button>
    </div>
  );
}

export default What;

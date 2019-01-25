import React from 'react';
import './header.css';

function Header(props) {
  return (
    <nav className="header-nav">
      <ul>
        <li>
          <a
            className="what-button"
            href="#"
            onClick={() => props.handleWhat()}
          >
            WHAT?
          </a>
        </li>
        <li>
          <a className="new-game" href="#" onClick={() => props.newGame()}>
            + NEW GAME
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;

import React, { Component } from 'react';
import './header.css';

function Header(props) {
  return (
    <nav className="header-nav">
      <ul>
        <li>
          <a className="what" href="#">
            WHAT
          </a>
        </li>
        <li>
          <a className="new-game" href="#">
            + NEW GAME
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;

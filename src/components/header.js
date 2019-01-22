import React, { Component } from 'react';
import './header.css';

function Header(props) {
  return (
    <nav className="header-nav">
      <a className="what" href="#">
        WHAT
      </a>
      <a className="new-game" href="#">
        + NEW GAME
      </a>
    </nav>
  );
}

export default Header;

import React from 'react';
import logo from './svg/react.svg';
import './Header.css';

function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <nav>
        <ul>
          <li><a href="home">Home</a></li>
          <li><a href="blog">Blog</a></li>
          <li><a href="projects">Projects</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

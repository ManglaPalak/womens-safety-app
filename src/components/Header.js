import React from 'react';
import './header.css'; // Import the CSS file

const Header = () => {
  return (
    <header>
      <h1>Womens Safety App</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/feedback">Feedback</a></li>
          <li><a href="/map">Map</a></li>
          <li><a href="/database">Database</a></li>
          <li><a href="/entry-form">Entry Form</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

import React from 'react';
import './header.css'; // Import the CSS file

const Header = () => {
  return (
    <header>
      <h1>HerSafetyNet</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="src/pages/About.js">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/feedback">Feedback</a></li>
          <li><a href="/map">Map</a></li>
          <li><a href="/database">Database</a></li>
          <li><a href="src/pages/EntryForm.js">Report an Incident</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

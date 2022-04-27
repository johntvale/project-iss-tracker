import React from 'react';
import './style.css';

export default function Footer() {
  return (
    <footer>
      <h3>
        <span className="notranslate">ISS Tracker</span> - The International Space Station just a
        click away.
      </h3>
      <nav>
        <a href="#">Home</a>
        <a href="#location-section">Location</a>
        <a href="#crew-section">Crew</a>
        <a href="#fun-facts">Fun Facts</a>
      </nav>
      <p>
        Website developed by: <a href="https://www.linkedin.com/in/jtvale/">John Torres</a>.
        Repository: <a href="https://github.com/johntvale/project-iss-tracker">ISS Tracker</a>
      </p>
    </footer>
  );
}

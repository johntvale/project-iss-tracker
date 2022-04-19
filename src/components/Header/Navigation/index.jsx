import React, { useState, useEffect } from 'react';
import menuIcon from '../../../assets/icons/menu-icon.png';
import logoIcon from '../../../assets/icons/logo-icon.png';
import { changeHomeBtnPosition } from '../../../helpers';
import './style.css';

export default function Navigation() {
  const [homeBtnPosition, setHomeBtnPosition] = useState('logo-icon');

  useEffect(() => {
    window.addEventListener('scroll', (event) => changeHomeBtnPosition(event, setHomeBtnPosition));
  }, [homeBtnPosition]);

  return (
    <nav className="navbar">
      <a href="#">
        <img className={`${homeBtnPosition}`} src={logoIcon} alt="Logo ISS Tracker" />
      </a>
      <img className="menu-icon" src={menuIcon} />
      <ul>
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#location-section">location</a>
        </li>
        <li>
          <a href="#location-crew">crew</a>
        </li>
        <li>
          <a href="#location-missions">missions</a>
        </li>
      </ul>
    </nav>
  );
}

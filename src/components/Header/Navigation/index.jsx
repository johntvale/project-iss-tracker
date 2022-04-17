import React from 'react';
import menuIcon from '../../../assets/icons/menu-icon.png';
import logoIcon from '../../../assets/icons/logo-icon.png';
import './style.css';

export default function Navigation() {
  return (
    <div className="navbar">
      <img className="logo-icon" src={logoIcon} alt="Logo ISS Tracker" />
      <img className="menu-icon" src={menuIcon} />
      <ul>
        <li>home</li>
        <li>
          <a href="#location-section">location</a>
        </li>
        <li>crew</li>
        <li>missions</li>
      </ul>
    </div>
  );
}

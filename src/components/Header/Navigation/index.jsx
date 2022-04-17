import React from 'react';
import menuIcon from '../../../assets/menu-icon.png';
import logoIcon from '../../../assets/logo-icon.png';
import './style.css';

export default function Navigation() {
  return (
    <div className="navbar">
      <img className="logo-icon" src={logoIcon} alt="Logo ISS Tracker" />
      <img className="menu-icon" src={menuIcon} />
      <ul>
        <li>home</li>
        <li>location</li>
        <li>crew</li>
        <li>missions</li>
      </ul>
    </div>
  );
}

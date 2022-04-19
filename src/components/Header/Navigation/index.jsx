import React, { useState, useEffect } from 'react';
import menuIcon from '../../../assets/icons/menu-icon.png';
import logoIcon from '../../../assets/icons/logo-icon.png';
import { changeHomeBtnPosition, setMenuByWindowWidth } from '../../../helpers';
import './style.css';

export default function Navigation() {
  const [homeBtnPosition, setHomeBtnPosition] = useState('logo-icon');
  const [showMenuList, setShowMenuList] = useState(false);

  useEffect(() => {
    // detect scrolling to set home button's position and hide the menu list
    window.addEventListener('scroll', (event) =>
      changeHomeBtnPosition(event, setHomeBtnPosition, setShowMenuList)
    );
  }, [homeBtnPosition]);

  useEffect(() => {
    // detect window size
    window.addEventListener('resize', (event) => setMenuByWindowWidth(event, setShowMenuList));
  }, [showMenuList]);

  function handlerMenu() {
    setShowMenuList(!showMenuList);
  }

  return (
    <nav className="navbar">
      <a href="#">
        <img className={`${homeBtnPosition}`} src={logoIcon} alt="Logo ISS Tracker" />
      </a>
      <button className="menu-button" onClick={handlerMenu}>
        <img className="menu-icon" src={menuIcon} />
      </button>
      {showMenuList && (
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
      )}
    </nav>
  );
}

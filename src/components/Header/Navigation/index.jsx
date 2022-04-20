import React, { useState, useEffect } from 'react';
import menuIcon from '../../../assets/icons/menu-icon.png';
import logoIcon from '../../../assets/icons/logo-icon.png';
import {
  hideMenuIfScrolling,
  setHomeBtnPosition,
  setInitialNavigationMode,
  setNavigationMode
} from '../../../helpers/functions-header';
import './style.css';

export default function Navigation() {
  const [homeBtnClassName, setHomeBtnClassName] = useState('logo-icon');
  const [showMenuList, setShowMenuList] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    // configuring navigation using scrolling info
    const positionScrollBeforeEvent = window.screenY;
    window.addEventListener('scroll', (event) => {
      setHomeBtnPosition(event, setHomeBtnClassName);
      hideMenuIfScrolling(event, positionScrollBeforeEvent, setShowMenuList);
    });
  }, [showMenuList]);

  useEffect(() => {
    // configuring navigation using initial screen width
    setInitialNavigationMode(screenSize, setShowMenuList);
  }, []);

  useEffect(() => {
    // configuring navigation using current screen width
    setNavigationMode(screenSize, setScreenSize, setShowMenuList);
  }, [screenSize]);

  function toggleMenuHandler() {
    setShowMenuList(!showMenuList);
  }

  return (
    <nav className="navbar">
      <a href="#">
        <img className={`${homeBtnClassName}`} src={logoIcon} alt="Logo ISS Tracker" />
      </a>
      <button className="menu-button" onClick={toggleMenuHandler}>
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

import React from 'react';
import Navigation from './Navigation';
import BackgroundVideo from './BackgroundVideo';
import TextHero from './TextHero';
import './style.css';

export default function Header() {
  return (
    <header className="header">
      <BackgroundVideo />
      <Navigation />
      <TextHero />
    </header>
  );
}

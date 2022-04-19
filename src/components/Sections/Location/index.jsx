import React from 'react';
import SectionTitle from '../SectionTitle';
import Map from './MapLocation';
import MapInfo from './MapInfo';
import './style.css';

export default function Location() {
  return (
    <section id="location-section" className="location">
      <SectionTitle title={'current location'} />
      <Map />
      <MapInfo />
    </section>
  );
}

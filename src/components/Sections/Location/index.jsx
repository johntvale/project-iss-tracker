import React, { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle';
import MapLocation from './MapLocation';
import MapInfo from './MapInfo';
import LocationContext from '../../../context/LocationContext';
import { getCurrentLocation } from '../../../helpers/APIConnections';
import './style.css';

export default function Location() {
  const TWO_SEC = 2000;
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);

  useEffect(() => {
    getCurrentLocation(setLongitude, setLatitude);
    const updatePosition = setInterval(
      () => getCurrentLocation(setLongitude, setLatitude),
      TWO_SEC
    );

    return () => clearInterval(updatePosition);
  }, []);

  return (
    <section id="location-section">
      <LocationContext.Provider value={{ longitude, latitude }}>
        <SectionTitle title={'current location'} />
        <MapLocation />
        <MapInfo />
      </LocationContext.Provider>
    </section>
  );
}

import React, { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle';
import MapLocation from './MapLocation';
import MapInfo from './MapInfo';
import LocationContext from '../../../context';
import { fetchApi } from '../../../helpers/functions-location';
import './style.css';

export default function Location() {
  const TWO_SEC = 2000;
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchApi(setIsLoading, setLongitude, setLatitude);
    const updatePosition = setInterval(
      () => fetchApi(setIsLoading, setLongitude, setLatitude),
      TWO_SEC
    );

    return () => clearInterval(updatePosition);
  }, []);

  return (
    <section id="location-section" className="location">
      <LocationContext.Provider value={{ longitude, latitude, isLoading }}>
        <SectionTitle title={'current location'} />
        <MapLocation />
        <MapInfo />
      </LocationContext.Provider>
    </section>
  );
}

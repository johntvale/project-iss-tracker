import React, { useContext } from 'react';
import LocationContext from '../../../../context';
import './style.css';

export default function MapInfo() {
  const { longitude, latitude } = useContext(LocationContext);
  return (
    <div className="map-info">
      Latitude: {latitude.toFixed(4)}, Longitute: {longitude.toFixed(4)}
    </div>
  );
}

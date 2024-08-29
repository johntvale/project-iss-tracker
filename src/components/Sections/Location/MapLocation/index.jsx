import React, { useContext } from 'react';
import issIcon from '../../../../assets/icons/iss-icon.png';
import { Map, Overlay, ZoomControl } from 'pigeon-maps';
import { osm } from 'pigeon-maps/providers';
import LocationContext from '../../../../context/LocationContext';

function MapLocation() {
  const { longitude, latitude } = useContext(LocationContext);

  return (
    <Map
      metaWheelZoom={true}
      twoFingerDrag={true}
      provider={osm}
      height={500}
      margin={20}
      min-width={300}
      defaultCenter={[latitude, longitude]}
      center={[latitude, longitude]}
      defaultZoom={4}
    >
      <Overlay anchor={[latitude, longitude]}>
        <img src={issIcon} width={25} height={25} alt="space station icon" />
      </Overlay>
      <ZoomControl />
    </Map>
  );
}

export default MapLocation;

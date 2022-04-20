import React, { useContext } from 'react';
import issIcon from '../../../../assets/icons/iss-icon.png';
import { Map, Overlay, ZoomControl } from 'pigeon-maps';
import { stamenToner } from 'pigeon-maps/providers';
import LocationContext from '../../../../context';

function MapLocation() {
  const { longitude, latitude } = useContext(LocationContext);

  return (
    <Map
      metaWheelZoom={true}
      twoFingerDrag={true}
      provider={stamenToner}
      height={400}
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

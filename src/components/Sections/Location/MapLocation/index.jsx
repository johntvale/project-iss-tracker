import React from 'react';
import issIcon from '../../../../assets/icons/iss-icon-2.png';
import { Map, Overlay, ZoomControl } from 'pigeon-maps';
import { stamenToner } from 'pigeon-maps/providers';

export default function MapLocation() {
  return (
    <Map
      metaWheelZoom={true}
      twoFingerDrag={true}
      provider={stamenToner}
      height={400}
      defaultCenter={[-3.10194, -60.025]}
      defaultZoom={3}
    >
      <Overlay anchor={[-3.10194, -60.025]}>
        <img src={issIcon} width={25} height={25} alt="space station icon" />
      </Overlay>
      <ZoomControl />
    </Map>
  );
}

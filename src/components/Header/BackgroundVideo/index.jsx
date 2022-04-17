import React from 'react';
import video from '../../../assets/iss-time-lapse.mp4';
import './style.css';

export default function BackgroundVideo() {
  return (
    <div className="container-video">
      <video src={video} autoPlay muted loop className="background-video" />
    </div>
  );
}

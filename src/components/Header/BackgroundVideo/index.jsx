import React from 'react';
import video from '../../../assets/videos/iss-time-lapse.mp4';
import './style.css';

export default function BackgroundVideo() {
  return <video src={video} autoPlay muted loop className="background-video" />;
}

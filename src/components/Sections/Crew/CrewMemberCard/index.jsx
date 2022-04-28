import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.css';

function CrewMemberCard(props) {
  const { image, name, country, flagCode, position, spacecraft, url } = props;
  const [flagImg, setFlagImg] = useState('');

  useEffect(() => {
    setFlagImg(`https://countryflagsapi.com/png/${flagCode}`);
  }, []);

  return (
    <div className="crew-member-card">
      <img
        src={image}
        title={
          image
            ? name
            : `Ops... Something goes wrong. You can check the picture on the link "more info"`
        }
      />
      <div>
        <h4>Name: {name}</h4>
        <p>
          Country: {country} <img className="flag" src={flagImg} />
        </p>
        <p>Position: {position}</p>
        <p>Spacecraft: {spacecraft}</p>
        <p>
          More info: <a href={url}>wiki</a>
        </p>
      </div>
    </div>
  );
}

CrewMemberCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  country: PropTypes.string,
  flagCode: PropTypes.string,
  position: PropTypes.string,
  spacecraft: PropTypes.string,
  url: PropTypes.string
};

export default CrewMemberCard;

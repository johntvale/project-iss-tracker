import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function CrewMemberCard(props) {
  const { image, name, country, position, spacecraft, url } = props;
  return (
    <div className="crew-member-card">
      <img
        height="250px"
        width="170px"
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
          Country: {country} <img height="10px" width="20px" />
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
  position: PropTypes.string,
  spacecraft: PropTypes.string,
  url: PropTypes.string
};

export default CrewMemberCard;

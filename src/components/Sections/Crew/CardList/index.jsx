import React, { useContext } from 'react';
import CrewContext from '../../../../context/CrewContext';
import CrewMemberCard from '../CrewMemberCard';
import './style.css';

export default function CardList() {
  const { crewList, isLoading } = useContext(CrewContext);
  console.log(crewList, isLoading);
  return (
    <div className="cardlist-container">
      {!isLoading &&
        crewList.map((person) => {
          const { id, image, name, country, position, spacecraft, url } = person;
          return (
            <CrewMemberCard
              key={id}
              image={image}
              name={name}
              country={country}
              position={position}
              spacecraft={spacecraft}
              url={url}
            />
          );
        })}
    </div>
  );
}

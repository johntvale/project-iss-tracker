import React, { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle';
import CardList from './CardList';
import CrewContext from '../../../context/CrewContext';
import { getCrewInfo } from '../../../helpers/APIConnections';
import './style.css';

export default function Crew() {
  const [crewList, setCrewList] = useState([]);
  const [peopleInSpace, setPeopleInSpace] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isActiveButton, setIsActiveButton] = useState(false);

  useEffect(() => {
    getCrewInfo(setCrewList, setPeopleInSpace, setIsLoading);
  }, []);

  function toggleButton() {
    if (isActiveButton) setIsActiveButton(false);
    else setIsActiveButton(true);
  }

  return (
    <section id="crew-section">
      <CrewContext.Provider value={{ crewList, isLoading }}>
        <SectionTitle title={'crew'} />
        <p className="people-in-space">
          People in space: {peopleInSpace > 0 ? peopleInSpace : ' loading info, please wait'}
        </p>
        <CardList isActiveButton={isActiveButton} />
        <button onClick={toggleButton} className="list-control-button">
          {isActiveButton ? 'hide list' : 'show more'}
        </button>
      </CrewContext.Provider>
    </section>
  );
}

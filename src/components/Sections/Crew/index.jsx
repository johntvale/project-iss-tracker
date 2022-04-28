import React, { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle';
import CardList from './CardList';
import CrewContext from '../../../context/CrewContext';
import { getCrewInfo } from '../../../helpers/APIConnections';
import './style.css';

export default function Crew() {
  const THREE_HOURS = 1000 * 60 * 60 * 3; // 1000ms(1s) => 60s => 60m => 3h
  const [crewList, setCrewList] = useState([]);
  const [peopleInSpace, setPeopleInSpace] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isActiveButton, setIsActiveButton] = useState(false);

  useEffect(() => {
    getCrewInfo(setCrewList, setPeopleInSpace, setIsLoading);

    const updateCrewInfo = setInterval(() => {
      // update every 3 hours
      getCrewInfo(setCrewList, setPeopleInSpace, setIsLoading);
    }, THREE_HOURS);

    return () => clearInterval(updateCrewInfo);
  }, []);

  function toggleButton() {
    if (isActiveButton) {
      location.href = '#crew-section';
      setIsActiveButton(false);
    } else setIsActiveButton(true);
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

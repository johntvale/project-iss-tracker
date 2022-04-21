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

  useEffect(() => {
    getCrewInfo(setCrewList, setPeopleInSpace, setIsLoading);
  }, []);

  return (
    <section id="crew-section">
      <CrewContext.Provider value={{ crewList, isLoading }}>
        <SectionTitle title={'crew'} />
        <p className="people-in-space">People in space: {peopleInSpace}</p>
        <CardList />
      </CrewContext.Provider>
    </section>
  );
}

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import CrewContext from '../../../../context/CrewContext';
import { placeholderList } from '../../../../helpers/placeholderList';
import { mapList } from '../../../../helpers/mapCrewList';
import './style.css';

function CardList(props) {
  const { isActiveButton } = props;
  const { crewList, isLoading } = useContext(CrewContext);
  console.log(crewList, isLoading);
  return (
    <div className={isActiveButton ? 'cardlist-container show-content' : 'cardlist-container'}>
      {!isLoading && crewList.length > 0 ? mapList(crewList) : mapList(placeholderList)}
    </div>
  );
}

CardList.propTypes = {
  isActiveButton: PropTypes.boolean
};

export default CardList;

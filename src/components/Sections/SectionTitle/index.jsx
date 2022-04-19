import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function SectionTitle(props) {
  const { title } = props;
  return <h3 className="section-title">{title}</h3>;
}

SectionTitle.propTypes = {
  title: PropTypes.string
};

export default SectionTitle;

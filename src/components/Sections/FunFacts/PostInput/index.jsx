import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function PostInput(props) {
  const { id, setSelectedPost, inputSelectionControl } = props;

  function inputHandler() {
    setSelectedPost(id);
  }

  return (
    <input type="radio" value={id} checked={inputSelectionControl(id)} onChange={inputHandler} />
  );
}

PostInput.propTypes = {
  id: PropTypes.number,
  setSelectedPost: PropTypes.func,
  inputSelectionControl: PropTypes.func
};

export default PostInput;

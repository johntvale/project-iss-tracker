import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Post(props) {
  const { title, image, text, credit, url } = props;
  return (
    <div className="post">
      <h3>{title}</h3>
      <div className="container-img">
        <img className="post-img" src={image}></img>
      </div>
      <p>{text}</p>
      <p>
        Image by: <a href={url}>{credit}</a>
      </p>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  text: PropTypes.string,
  credit: PropTypes.string,
  url: PropTypes.string
};

export default Post;

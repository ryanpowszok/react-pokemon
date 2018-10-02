import React from "react";
import PropTypes from 'prop-types';

const Pokemon = ({ name, height, weight, image, experience }) => (
  <div>
    <h2>{name}</h2>
    <div>height: {height}</div>
    <div>weight: {weight}</div>
    <div>image: {image}</div>
    <div>base_experience: {experience}</div>
  </div>
);

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  experience: PropTypes.string.isRequired
};

export default Pokemon;

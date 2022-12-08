import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <li>
        <p>{pokemon.name}</p>
        <p>{pokemon.type}</p>
        <p>
          { pokemon.averageWeight.value }
          { pokemon.averageWeight.measurementUnit }
        </p>
        <img src={ pokemon.image } alt={ pokemon.name } />
      </li>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    averageWeight: PropTypes.exact({
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Pokemon;

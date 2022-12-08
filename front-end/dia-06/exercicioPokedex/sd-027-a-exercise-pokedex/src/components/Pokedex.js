import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    const { pokemonList } = this.props;
    return (
      <div>
        <h1>Pokedex</h1>
        <ul>
          {pokemonList.map((p) => <Pokemon pokemon={ p } key={ p.id } />)}
        </ul>
      </div>
    );
  }
}

Pokedex.propTypes = {
  pokemonList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired).isRequired,
};

export default Pokedex;

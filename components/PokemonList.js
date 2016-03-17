import React, { PropTypes } from 'react';
import Immutable from 'immutable';
import Pokemon from './Pokemon';
import Radium from 'radium';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start space-around',
    width: '75%',
  },
  loadMore: {
    padding: '6px 12px',
    fontSize: '14px',
    border: '1px solid transparent',
    borderRadius: '4px',
    margin: '0 10px 10px 5px',
    width: '100%',
    background: 'lightskyblue',
  },
};

const PokemonList = (props) => {
  const { pokemons, loadMore } = props;
  return (
     <div style={styles.root}>
        {pokemons.map(pokemon => (
          <Pokemon name={pokemon.name}
            img={pokemon.img}
            types={pokemon.types} />
        ))}
      <button onClick={loadMore} style={styles.loadMore}>Load More</button>
    </div>
  );
};


PokemonList.propTypes = {
  pokemons: PropTypes.instanceOf(Immutable.List).isRequired,
  loadMore: PropTypes.func.isRequired,
};

export default Radium(PokemonList);

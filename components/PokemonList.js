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
  const { pokemons, loadMore, children } = props;
  return (
    <div>
     <div style={styles.root}>
        {pokemons.map(pokemon => (
          <Pokemon key={`pokemon_${pokemon.get('id')}`}
            id={pokemon.get('id')}
            name={pokemon.get('name')}
            img={pokemon.get('img')}
            types={pokemon.get('types')} />
        ))}
      <button onClick={loadMore} style={styles.loadMore}>Load More</button>
    </div>
    { children }
    </div>
  );
};


PokemonList.propTypes = {
  pokemons: PropTypes.instanceOf(Immutable.List).isRequired,
  children: PropTypes.element,
  loadMore: PropTypes.func.isRequired,
};

export default Radium(PokemonList);

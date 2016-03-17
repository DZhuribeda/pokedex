import React, { Component, PropTypes } from 'react'
import Immutable from 'immutable'
import Pokemon from './Pokemon';
import Radium from 'radium'


class PokemonList extends Component {

  render() {
    const { pokemons, loadMore } = this.props;
    return (
       <div style={styles.root}>
          {pokemons.map(pokemon => (
            <Pokemon name={pokemon.name}
                     img={pokemon.img}
                     types={pokemon.types}/>
          ))}
        <button onClick={loadMore} style={styles.loadMore}>Load More</button>
      </div>
    )
  }
}

PokemonList.propTypes = {
  pokemons: PropTypes.instanceOf(Immutable.List).isRequired
}

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start space-around',
    width: '75%'
  },
  loadMore:{
    marginRight: '5px',
    padding: '6px 12px',
    fontSize: '14px',
    border: '1px solid transparent',
    borderRadius: '4px',
    margin: '0 10px 10px',
    width: '100%',
    background: 'lightskyblue'
  }
};

PokemonList = Radium(PokemonList)
export default PokemonList;

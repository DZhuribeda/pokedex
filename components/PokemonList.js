import React, { Component, PropTypes } from 'react'
import Immutable from 'immutable'

export default class PokemonList extends Component {

  render() {
  	const { pokemons, loadMore } = this.props;
    return (
      <div>
      	<ul>
        	{pokemons.map( pokemon => (<li>pokemon</li>) )}
        </ul>
        <button onClick={loadMore}>Load More</button>
      </div>
    )
  }
}

PokemonList.propTypes = {
  pokemons: PropTypes.instanceOf(Immutable.ArrayMapNode).isRequired
}
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Immutable from 'immutable'

import Header from '../components/Header'
import PokemonList from '../components/PokemonList'
import { loadPokemons } from '../actions' 

export default class App extends Component {

  componentWillMount(){
    this.props.loadPokemons(this.props.pokemons.size);
  }	

  render() {
  	const { children, pokemons, loadPokemons } = this.props;
    console.log(pokemons);
    return (
      <div>
        <Header />
        <PokemonList pokemons={pokemons} 
                     loadMore={() => {
                      // console.log(pokemons.size);
                      loadPokemons(pokemons.size)}
                    } />
        {children}
      </div>
    )
  }
}

App.propTypes = {
  pokemons: PropTypes.instanceOf(Immutable.ArrayMapNode).isRequired
}

const mapStateToProps = (state) => {
  return {
    pokemons: state.pokemons.get("pokemons")
  }
}

export default connect(
  mapStateToProps,
  { loadPokemons }
)(App)

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import Radium from 'radium';

import Header from '../components/Header';
import PokemonList from '../components/PokemonList';
import { loadPokemons } from '../actions';

const styles = {
  root: {
    fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
    fontWeight: '400',
  },
};

export default class App extends Component {

  componentWillMount() {
    this.props.loadPokemons(this.props.pokemons.size);
  }

  render() {
    const { children, pokemons, loadPokemons } = this.props;
    return (
      <div style={styles.root}>
        <Header />
        <PokemonList pokemons={pokemons}
          loadMore={() => loadPokemons(pokemons.size) }
          children={children} />
      </div>
    );
  }
}


App.propTypes = {
  children: PropTypes.element,
  pokemons: PropTypes.instanceOf(Immutable.List).isRequired,
  loadPokemons: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  pokemons: state.pokemons.get('pokemons'),
});

export default connect(
  mapStateToProps,
  { loadPokemons }
)(Radium(App));

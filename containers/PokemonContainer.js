import React, { PropTypes } from 'react';
import Pokemon from './../components/Pokemon';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import Radium from 'radium';


const styles = {
  wrapper: {
    position: 'fixed',
    padding: '10px',
    marginBottom: '20px',
    width: '25%',
    top: '40%',
    right: '2%',
  },
};


const PokemonContainer = (props) => {
  const { pokemonId } = props.params;
  const { pokemons } = props;
  const pokemon = pokemons.find((pokemon) => pokemon.get('id') === +pokemonId);
  const pokemonComponent = pokemons.isEmpty() || pokemon === undefined
                            ? <p> Loading </p>
                            : <Pokemon id={+pokemonId}
                              name={pokemon.get('name')}
                              img={pokemon.get('img')}
                              types={pokemon.get('types')} />;

  return (
    <div style={styles.wrapper}>
      {pokemonComponent}
    </div>
  );
};

PokemonContainer.propTypes = {
  pokemons: PropTypes.instanceOf(Immutable.List).isRequired,
  params: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  pokemons: state.pokemons.get('pokemons'),
});

export default connect(
  mapStateToProps,
  {}
)(Radium(PokemonContainer));


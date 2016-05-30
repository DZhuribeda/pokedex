import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import PokemonContainer from './containers/PokemonContainer';

export default (
  <Route path="/" component={App}>
    <Route path="/:pokemonId"
      component={PokemonContainer} />
  </Route>
);

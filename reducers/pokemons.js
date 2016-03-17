import Immutable from 'immutable';

import { REQUEST_POKEMON, SUCCESS_POKEMON, FAILURE_POKEMON } from '../constants';
import { pokemonMapper } from './../utils/mappers/pokemonMapper';

const initialState = Immutable.fromJS({
  pokemons: [],
  loads: false,
  failed: false,
});

export default function pokemons(state = initialState, action) {
  switch (action.type) {
    case REQUEST_POKEMON:
      return state;
    case SUCCESS_POKEMON:
      return Immutable.Map({
        pokemons: state.get('pokemons').concat(pokemonMapper(action.payload.objects)),
        loads: true,
        failed: false,
      });
    case FAILURE_POKEMON:
      return state.mergeDeep(Immutable.Map({
        loads: true,
        failed: true,
      }));
    default:
      return state;
  }
}

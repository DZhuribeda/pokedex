import { URL } from '../../constants';
import Immutable from 'immutable';

export function pokemonMapper(payload) {
  return payload.map((pokemon) => (Immutable.fromJS({
    id: pokemon.pkdx_id,
    name: pokemon.name,
    types: pokemon.types.map(type => type.name),
    img: `${URL}/media/img/${pokemon.pkdx_id}.png`,
  })));
}

import { URL } from '../../constants'

export function pokemonMapper(payload) {
  return payload.map( (pokemon) =>  ({
      name: pokemon.name,
      types: pokemon.types.map( type => type.name),
      img: `${URL}/media/img/${pokemon.pkdx_id}.png`
    }));
};

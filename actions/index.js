import { CALL_API } from 'redux-api-middleware';

import { API_URL, REQUEST_POKEMON, SUCCESS_POKEMON, FAILURE_POKEMON } from '../constants'

const POKEMON_PER_PAGE = 12;

export function loadPokemons(offset) {
  return {
    [CALL_API]: {
      endpoint: `${API_URL}pokemon/?limit=${POKEMON_PER_PAGE}&offset=${offset}`,
      method: 'GET',
      types: [REQUEST_POKEMON, SUCCESS_POKEMON, FAILURE_POKEMON]
    }
  };
}

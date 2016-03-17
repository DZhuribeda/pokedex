import * as ActionTypes from '../actions'
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import pokemons from './pokemons';

const rootReducer = combineReducers({
	pokemons,
  routing
})

export default rootReducer
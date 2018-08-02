import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

export const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  nextState = merge({}, state);

  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      action.pokemon.forEach( pokemon => {
        nextState[pokemon.id] = pokemon;
      });
      return nextState;
    default:
      return state;
  }
};

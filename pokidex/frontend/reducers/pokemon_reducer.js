import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

export const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = merge({}, state);

  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      // Object.keys(action.pokemon).forEach( (key) => {
      //   nextState[key] = action.pokemon[key];
      // });
      return merge(nextState, action.pokemon);
    default:
      return state;
  }
};

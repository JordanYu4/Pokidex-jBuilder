import React from 'react';
import ReactDOM from 'react-dom';
import { fetchAllPokemon } from './util/api_util';
import * as pokemonActions from './actions/pokemon_actions';

window.fetchAllPokemon = fetchAllPokemon;
window.pokemonActions = pokemonActions;

document.addEventListener('DOMContentLoaded', () => {
  const getSuccess = pokemon => console.log(pokemonActions.receiveAllPokemon(pokemon));
  fetchAllPokemon().then(getSuccess);
  const rootEl = document.getElementById('root');
  ReactDOM.render(<h1>Pokedex</h1>, rootEl);
});

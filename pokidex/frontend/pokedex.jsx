import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {HashRouter, Route} from 'react-router-dom';
import {RECIEVE_SINGLE_POKEMON, receiveSinglePokemon} from './actions/pokemon_actions';
import {fetchSinglePokemon} from './util/api_util';



document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  window.receiveSinglePokemon = receiveSinglePokemon;
  window.fetchSinglePokemon = fetchSinglePokemon;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, rootEl);
});

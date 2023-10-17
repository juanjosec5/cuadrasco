import { createApp } from 'vue';
import './style.scss';
import App from './App.vue';
import PokemonApiService from './services/pokemon-api.js';

let pokemon = [];
let pokemonTypes = [];

function getFromLocalStorageByKey(key) {
  const jsonObject = localStorage.getItem(key)

  return JSON.parse(jsonObject);
}

if (localStorage.getItem('pokemon')) {
  pokemon = getFromLocalStorageByKey('pokemon');
} else {
  PokemonApiService.fetchPokemonData().then((data) => {
    localStorage.setItem('pokemon', JSON.stringify(data));

    pokemon = data;
  });
}

if (localStorage.getItem('pokemon-types')) {
  pokemonTypes = getFromLocalStorageByKey('pokemon-types');
} else {
  PokemonApiService.fetchPokemonTypes().then((data) => {
    localStorage.setItem('pokemon-types', JSON.stringify(data));

    pokemonTypes = data;
  });
}

createApp(App, {pokemon: pokemon, pokemonTypes: pokemonTypes }).mount('#app');

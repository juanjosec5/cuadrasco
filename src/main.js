import { createApp } from 'vue';
import './style.scss';
import App from './App.vue';
import PokemonApiService from './services/pokemon-api.js';

async function initializePokemonData() {
  if (localStorage.getItem('pokemons')) {
    const pokemons = JSON.parse(localStorage.getItem('pokemons'));
    const pokemonTypes = JSON.parse(localStorage.getItem('pokemon-types'));

    return {
      pokemonTypes,
      pokemons
    }
  } else {
    const pokemons = await PokemonApiService
      .fetchIndividualPokemons(await PokemonApiService.fetchPokemonData());

    const pokemonTypes = await PokemonApiService.fetchPokemonTypes();

    localStorage.setItem('pokemons', JSON.stringify(pokemons));
    localStorage.setItem('pokemon-types', JSON.stringify(pokemonTypes));

    return {
      pokemonTypes,
      pokemons
    }
  }
}
initializePokemonData()
  .then((res) => createApp(App, res).mount('#app')
);


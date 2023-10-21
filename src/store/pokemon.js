import { defineStore } from 'pinia';
import { ref } from 'vue';
import PokemonApiService from '../services/pokemon-api.js';

export const usePokemon = defineStore('pokemon', () => {
  const pokemonList = ref([]);

  initializePokemonData().then(
    ({pokemons}) => pokemonList.value = pokemons
  );

  return {
    pokemon: pokemonList
  }
});

async function initializePokemonData() {
  if (localStorage.getItem('pokemons')) {
    const pokemons = JSON.parse(localStorage.getItem('pokemons'));

    return {
      pokemons
    }
  } else {
    const pokemons = await PokemonApiService
      .fetchIndividualPokemons(await PokemonApiService.fetchPokemonData());

    localStorage.setItem('pokemons', JSON.stringify(pokemons));

    return {
      pokemons
    }
  }
}
import { defineStore } from 'pinia';
import { ref } from 'vue';
import PokemonApiService from '../services/pokemon-api.js';

export const usePokemonGenerations = defineStore('pokemon-generations', () => {
  const pokemonGenList = ref([]);

  initializePokemonGenData()
    .then(
      ({pokemonGens: generations}) => pokemonGenList.value = generations
    );

  return {
    generations: pokemonGenList
  }
});

async function initializePokemonGenData() {
  if (localStorage.getItem('pokemon-gens')) {
    const pokemonGens = JSON.parse(localStorage.getItem('pokemon-gens'));

    return {
      pokemonGens
    }
  } else {
    const pokemonGensJson = await PokemonApiService.fetchPokemonGenerations();
    const pokemonGens = pokemonGensJson.map(t => t.name);
    localStorage.setItem('pokemon-gens', JSON.stringify(pokemonGens));

    return {
      pokemonGens
    }
  }
}
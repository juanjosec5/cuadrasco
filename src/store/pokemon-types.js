import { defineStore } from 'pinia';
import { ref } from 'vue';
import PokemonApiService from '../services/pokemon-api.js';

export const usePokemonTypes = defineStore('pokemon-types', () => {
  const pokemonTypesList = ref([]);

  initializePokemonTypesData()
    .then(
      ({pokemonTypes: types}) => pokemonTypesList.value = types
    );

  return {
    types: pokemonTypesList
  }
});

async function initializePokemonTypesData() {
  if (localStorage.getItem('pokemon-types')) {
    const pokemonTypes = JSON.parse(localStorage.getItem('pokemon-types'));

    return {
      pokemonTypes
    }
  } else {
    const pokemonTypesJson = await PokemonApiService.fetchPokemonTypes();
    const pokemonTypes = pokemonTypesJson.map(t => t.name);
    localStorage.setItem('pokemon-types', JSON.stringify(pokemonTypes));

    return {
      pokemonTypes
    }
  }
}
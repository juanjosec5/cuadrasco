import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { usePokemon } from './pokemon';

export const useFilters = defineStore('filters', () => {
  const pokemons = usePokemon();
  const selectedTypes = ref([]);
  const searchTerm = ref('');
  const selectedGeneration = ref('');

  const filteredPokemons = computed(
    () =>  {
      const filteredByName = searchTerm.value
        ? pokemons.pokemon.filter(p => p.name.includes(searchTerm.value))
        : pokemons.pokemon

      const filteredByGen = selectedGeneration.value 
        ? filteredByName.filter(p => p.generation === selectedGeneration.value)
        : filteredByName

      return selectedTypes.value.length 
        ? filteredByGen.filter(
          p => arraysIntersect(selectedTypes.value, p.types))
        : filteredByGen
    }
  );

  return {
    searchTerm,
    selectedTypes,
    selectedGeneration,
    filteredPokemons
  }
});

function arraysIntersect(arr1, arr2) {
  let isSubset = true;
  for (let i = 0; i < arr1.length; i++) {
    let found = false;
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      isSubset = false;
      break;
    }
  }
  return isSubset;
}
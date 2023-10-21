<script setup>
  import {usePokemonGenerations} from '../store/pokemon-generations';
  import { useFilters} from '../store/filters';

  const pokemonGenStore = usePokemonGenerations();
  const filtersStore = useFilters();
</script>

<template>
  <select name="gen" id="gen" v-model="filtersStore.selectedGeneration">
    <option value="" selected>All Generations</option>
    <option :value="g" v-for="(g, i) in pokemonGenStore.generations">
      generation {{ i + 1 }}
    </option>
  </select>
</template>

<style lang="scss" scoped>
  select {
    padding: .5rem;
    margin-top: 2rem;
  }
</style>

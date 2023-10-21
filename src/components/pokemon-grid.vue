<script setup>
  import { usePokemon } from '../store/pokemon';
  import { useFilters } from '../store/filters';
  import pokemonVue from './pokemon.vue';

  const pokemonStore = usePokemon();
  const filtersStore = useFilters();
</script>

<template>
  <section class="pokemon-wrapper">
    <pokemon-vue v-if="filtersStore.filteredPokemons.length" v-for="pokemon in filtersStore.filteredPokemons" :pokemon-data="pokemon"/>
    <p v-else-if="pokemonStore.pokemon.length">No matching Pokemon.</p>
    <p v-else> Loading.... </p>
  </section>
</template>

<style lang="scss">
  .pokemon-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 2rem;
    padding: 0 1rem;
    place-content: center;
  }</style>
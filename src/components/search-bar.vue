<script setup>
  import { useFilters } from '../store/filters';

  const filtersStore = useFilters();
</script>

<template>
  <input type="text"
  class="pokemon-search-bar" 
  placeholder="search for pokemon..."
  v-model="filtersStore.searchTerm">
</template>

<style lang="scss">
    .pokemon-search-bar {
      box-sizing: border-box;
      width: calc(100% - 2rem);
      display: block;
      padding: 1rem;
      border-radius: 8px;
      border: 1px solid lightgrey;
      font-size: 1rem;
      margin: 0 1rem;
      &:focus {
        outline: 2px solid rgb(170, 170, 237);
      }
    }
</style>
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
      // width: calc(100% - 2rem);
      width: 100%;
      display: block;
      padding: 1rem;
      border-radius: 8px;
      border: 1px solid lightgrey;
      box-shadow: 0px 4px 8px -4px rgba(58, 53, 65, 0.42);
      margin: 24px 0;
      font-size: 1rem;
      &:focus {
        outline: 2px solid rgb(170, 170, 237);
      }
    }
</style>
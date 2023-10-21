<script setup>
  import typeSelector from './components/type-selector.vue';
  import searchBar from './components/search-bar.vue';
  import pokemonGrid from './components/pokemon-grid.vue';
  import genSelector from './components/gen-selector.vue';
</script>

<template>
  <search-bar/>
  <gen-selector/>
  <type-selector/>
  <pokemon-grid/>
</template>

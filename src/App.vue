<script setup>
  import typeSelector from './components/type-selector.vue';
  import searchBar from './components/search-bar.vue';
  import pokemonGrid from './components/pokemon-grid.vue';
  import genSelector from './components/gen-selector.vue';
  import filtersWrapper from './components/filters-wrapper.vue';
</script>

<template>
  <search-bar/>
  <filters-wrapper/>
  <pokemon-grid/>
</template>

<script setup>
  import genSelector from './gen-selector.vue';
  import typeSelector from './type-selector.vue';
</script>

<template>
  <section class="filters-wrapper">
    <h2>Filters</h2>
    <div class="filters-wrapper__dropdowns">
      <gen-selector/>
      <gen-selector/>
      <gen-selector/>
    </div>
    <div class="filters-wrapper__checkboxes">
      <type-selector/>
    </div>
  </section>
</template>

<style lang="scss">
  .filters-wrapper {
    display: flex;
    flex-direction: column;
    box-shadow: 0px 2px 10px 0px rgba(76, 78, 100, 0.22);
    padding: 24px;
    border-radius: 1rem;
    gap: 1.5rem;

    &__dropdowns {
      display: grid;
      grid-template-columns: 1;
      gap: 1rem;

      @media (min-width: 780px) {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }
</style>
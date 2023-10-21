<script setup>
  defineProps({
    pokemonData: {
      type: Object
    }
  })
</script>

<template>
  <article class="pokemon-card">
    <h3>{{ pokemonData.name }}</h3>
    <img :src="pokemonData.img" alt="">
    <div class="types-wrapper">
      <p v-for="type in pokemonData.types">
        {{ type }}
      </p>
    </div>
  </article>
</template>

<style lang="scss">
  .pokemon-card {
    border-radius: 8px;
    flex: 1 1 200px;
    display: flex;
    flex-direction: column;
    max-width: 250px;
    place-content: center;
    place-items: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition: background-color .15s ease-in,
      box-shadow .1s ease-in;

    &:hover {
      box-shadow: rgba(0, 0, 0, 0.34) 0px 10px 13px;
      cursor: pointer;
    }

    > img {
      display: block;
      width: 96px;
      height: 96px;
    }

    .types-wrapper {
      display: flex;
      gap: 1rem;
    }
  }
</style>
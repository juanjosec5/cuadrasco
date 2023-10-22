<script setup>
  defineProps({
    pokemonData: {
      type: Object
    }
  })
</script>

<template>
  <article class="pokemon-card">
    <div class="pokemon-card__heading">
      <h3>{{ pokemonData.name }}</h3>
      <p v-if="pokemonData.number !== -1">#{{ pokemonData.number }}</p>
      <p v-else>None</p>
    </div>
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
    padding: 1rem;
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

      &__heading {
        display: flex;
        width: 100%;
        place-content: space-evenly;

        h3 {
          font-size: 1rem;
          text-transform: capitalize;
        }
        
        p {
          display: block;
        }
      }

    &:hover {
      box-shadow: rgba(0, 0, 0, 0.34) 0px 10px 13px;
      cursor: pointer;
    }

    > img {
      display: block;
      width: 140px;
      aspect-ratio: 1;
      margin: .5rem 0;
      background-color: lightgrey;
      border-radius: 16px;
    }

    .types-wrapper {
      display: flex;
      gap: 1rem;
      
      p {
        background-color: rgb(236, 236, 236);
        padding: .4rem .8rem;
        display: block;
        font-weight: 600;
        border-radius: 16px;
        font-size: 14px;
      }
    }
  }
</style>
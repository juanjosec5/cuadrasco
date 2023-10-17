<script setup>
  import Pokemon from './components/Pokemon.vue';
  import { onMounted, ref } from 'vue';

  const props = defineProps(['pokemon', 'pokemonTypes']);
  console.log(props);
  
  let filteredPokemon = ref([])

  const filterByText = (event) => {
    filteredPokemon.value = props.pokemon.filter((pokemon) => 
      pokemon.name.includes(event.target.value));
  }

  onMounted(() => {filteredPokemon.value = props.pokemon})
</script>

<template>
  <section class="pokemon-filter">
    <div class="pokemon-filter__wrapper">
      <input type="text"
        class="pokemon-filter__input" 
        placeholder="search for pokemon..."
        @keyup="filterByText">
      <div class="pokemon-filter__types">
        <label for="test"
          v-for="type in props.pokemonTypes">
            {{ type.name }}
          <input 
          type="checkbox" 
          name="test" 
          id="test">
        </label>
      </div>
    </div>
  </section>
  <section class="pokemon-wrapper">
    <Pokemon v-for="pokemon in filteredPokemon" :pokemon-data="pokemon"/>
  </section>
</template>

<style lang="scss">
  .pokemon-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 0 1rem;
    place-content: center;
  }
  
  .pokemon-filter {
    margin: 2rem 0;

    &__wrapper {
      display: flex;
      flex-direction: column;
      place-content: center;
      padding: 0 2rem;
      margin: 0 auto;
    }

    &__types {
      display: flex;
      flex-wrap: wrap;
      gap: .5rem;
      margin-top: 1rem;

      & > label {
        flex: 1 0 15%;
        max-width: 15%;
        padding: .5rem;
        border-radius: 8px;
        background-color: white;
        transition: background-color .1s ease-in;

        &:hover {
          cursor: pointer;
          background-color: darken(white, 10%);
        }
      }
    }

    &__input {
      flex: 1;
      display: block;
      padding: 1rem;
      border-radius: 8px;
      box-shadow: rgba(0, 0, 0, 0.64) 0px 1px 4px;
      border: none;
      font-size: 1rem;

      &:focus {
        outline: 2px solid rgb(170, 170, 237);
      }
    }
  }
</style>

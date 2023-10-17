<script setup>
  import Pokemon from './components/Pokemon.vue';
  import { ref, computed } from 'vue';

  const props = defineProps({
    pokemonTypes: {
      type: Array,
      required: true
    },
    pokemons: {
      type: Array,
      required: true
    }
  });

  const filterText = ref('');
  const filterTypes = ref([]);

  const filteredPokemons = computed(
    () =>  {
      const filteredByName = filterText.value 
        ? props.pokemons.filter(p => p.name.includes(filterText.value) )
        : props.pokemons

      return filterTypes.value.length 
        ? filteredByName.filter(
          p => arraysIntersect(filterTypes.value, p.types))
        : filteredByName
    }
  );

  function arraysIntersect(arr1, arr2) {
    let isSubset = true;
    for (let i = 0; i < arr1.length; i++) {
      let found = false;
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
          found = true;
          break;
        }
      }
      if (!found) {
        isSubset = false;
        break;
      }
    }
    return isSubset;
  }
</script>

<template>
  <section class="pokemon-filter">
    <div class="pokemon-filter__wrapper">
      <input type="text"
        class="pokemon-filter__input" 
        placeholder="search for pokemon..."
        v-model="filterText">
      <div class="pokemon-filter__types">
        <label :for="type.name"
          v-for="type in pokemonTypes">
          <input 
          v-model="filterTypes"
          :value="type.name"
          type="checkbox" 
          :id="type.name">
            <span>{{ type.name }}</span>
        </label>
      </div>
    </div>
  </section>
  <section class="pokemon-wrapper">
    <Pokemon v-for="pokemon in filteredPokemons" :pokemon-data="pokemon"/>
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
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      margin-top: 1rem;

      > label {

        input {
          display: none;
        }

        span {
          background-color: white;
          transition: background-color .1s ease-in;
          display: block;
          padding: .5rem;
          border-radius: 8px;
          cursor: pointer;
          text-align: center;
          border: 1px solid lightgrey;
          border-radius: 8px;

          &:hover {
            background-color: darken(white, 2%);
          }
        }

        input:checked + span {
          background-color: darken(white, 10%);
        }
      }

      @media (min-width: 780px) {
        grid-template-columns: repeat(5, 1fr);
        gap: .5rem;
      }

      @media (min-width: 1024px) {
        grid-template-columns: repeat(8, 1fr);
      }
    }

    &__input {
      flex: 1;
      display: block;
      padding: 1rem;
      border-radius: 8px;
      border: 1px solid lightgrey;
      font-size: 1rem;

      &:focus {
        outline: 2px solid rgb(170, 170, 237);
      }
    }
  }
</style>

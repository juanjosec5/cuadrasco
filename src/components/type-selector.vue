<script setup>
    import { usePokemonTypes } from '../store/pokemon-types';
    import { useFilters } from '../store/filters';

    const filtersStore = useFilters();
    const typeStore = usePokemonTypes();
</script>

<template>
  <section class="pokemon-filter__types">
    <label :for="type" v-for="type in typeStore.types" tabindex="0">
      <input 
        v-if="type !== 'unknown'"
        v-model="filtersStore.selectedTypes"
        :value="type"
        type="checkbox" 
        :id="type">
      <span>{{ type }}</span>
    </label>

    <label class="clear" for="clear" tabindex="0">
      <input 
        v-model="filtersStore.selectedTypes"
        type="checkbox" 
        @click="filtersStore.selectedTypes = []"
        id="clear">
      <span class="clear-span">clear all</span>
    </label>
  </section>
</template>


<style lang="scss">
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
      gap: .5rem;

      > label {
        &:focus {
          outline: 0;

          span {
            box-shadow: 0 0 0 2px rgb(170, 170, 237);
          }
        }

        input {
          display: none;
        }

        span {
          background-color: white;
          transition: background-color .1s ease-in;
          display: block;
          padding: .5rem;
          border-radius: 20px;
          cursor: pointer;
          text-align: center;
          border: 1px solid lightgrey;

          &:hover {
            background-color: darken(white, 2%);
          }
        }

        input:checked + span {
          background-color: #FF4E00;
          color: white;
        }
      }

      @media (min-width: 780px) {
        grid-template-columns: repeat(5, 1fr);
        gap: .5rem;
      }

      @media (min-width: 1024px) {
        grid-template-columns: repeat(8, 1fr);
      }

      .clear {
        grid-column: -2 / -1;

        
        span {
          background-color: rgb(238, 51, 51);
          color: white;
          
          &:hover {
            background-color: darken(red, 10%);
          }
        }
      }
      
      input:checked + span.clear {
        background-color: red;
      }
    }
  }</style>
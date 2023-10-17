
const url = 'https://pokeapi.co/api/v2/pokemon/';
const typesUrl = 'https://pokeapi.co/api/v2/type/';
const testUrl = 'http://localhost:3000/pokemons';

export default class PokemonApiService {

  static async fetchPokemonData() {
    const response = await fetch(testUrl);

    if (response.status !== 200) throw new Error('status code not 200');

    const data = await response.json();

    // if (!data.count) throw new Error('No data'); uncomment if using pokeapi
    
    return data
    // return data.results;  uncomment if using pokeapi
  }

  static async fetchPokemonTypes() {
    const response = await fetch(typesUrl);

    if (response.status !== 200) throw new Error('status code not 200');

    const data = await response.json();

    if (!data.count) throw new Error('No data');

    return data.results;
  }
}

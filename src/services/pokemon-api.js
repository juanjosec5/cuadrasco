import Pokemon from "../models/pokemon";

const url = 'https://pokeapi.co/api/v2/pokemon/?limit=1292';
const typesUrl = 'https://pokeapi.co/api/v2/type/';

export default class PokemonApiService {

  static async fetchPokemonData() {
    const response = await fetch(url);

    if (response.status !== 200) throw new Error('status code not 200');

    const data = await response.json();

    if (!data.count) throw new Error('No data'); 
    
    return data.results; // returns array of pokemon objects
  }

  static fetchIndividualPokemons(listOfPokemon) {
    return Promise.all(
      listOfPokemon.map(
        p => fetch(p.url)
          .then(res => res.json())
          .then(p => new Pokemon(p))
      )
    )
  }

  static async fetchPokemonTypes() {
    const response = await fetch(typesUrl);

    if (response.status !== 200) throw new Error('status code not 200');

    const data = await response.json();

    if (!data.count) throw new Error('No data');

    return data.results;
  }
}

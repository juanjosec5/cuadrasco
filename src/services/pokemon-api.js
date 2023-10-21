import Pokemon from "../models/pokemon";

const url = 'https://pokeapi.co/api/v2/pokemon/?limit=1292';
const typesUrl = 'https://pokeapi.co/api/v2/type/';
const generationsUrl = 'https://pokeapi.co/api/v2/generation/';

export default class PokemonApiService {

  static async fetchPokemonData() {
    const response = await fetch(url);

    if (response.status !== 200) throw new Error('status code not 200');

    const data = await response.json();

    if (!data.count) throw new Error('No data'); 
    
    return data.results;
  }

  static async fetchPokemonTypes() {
    const response = await fetch(typesUrl);

    if (response.status !== 200) throw new Error('status code not 200');

    const data = await response.json();

    if (!data.count) throw new Error('No data');

    return data.results;
  }

  static async fetchPokemonGenerations() {
    const response = await fetch(generationsUrl);

    if (response.status !== 200) throw new Error('status code not 200');

    const data = await response.json();

    if (!data.count) throw new Error('No data');

    return data.results;
  }

  static async fetchPokemon({url}) {
    const pokemon = await fetch(url).then(res => res.json());
    const species = await fetch(pokemon.species.url).then(res => res.json());

    return new Pokemon(pokemon, species);
  }

  static fetchIndividualPokemons(listOfPokemon) {
    return Promise.all(listOfPokemon.map(PokemonApiService.fetchPokemon));
  }


}

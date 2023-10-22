export default class Pokemon {
  constructor(data, speciesData) {
    this.number = data.order;
    this.name = data.name;
    this.img = data.sprites.front_default;
    this.types = data.types.map((t) => t.type.name);
    this.generation = speciesData.generation.name;
    this.description = speciesData.flavor_text_entries[0]?.flavor_text || 'no description yet';
  }
}
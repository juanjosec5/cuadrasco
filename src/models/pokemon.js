export default class Pokemon {
  constructor(data) {
    this.name = data.name;
    this.img = data.sprites.front_default;
    this.types = data.types.map((t) => t.type.name);
  }
}
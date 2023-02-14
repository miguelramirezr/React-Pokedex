const weaknessesList= {
  //pokemon type     attacker x2 de efectividad
  normal: ["fighting"],
  fighting: ["flying", "psychic", "fairy"],
  flying: ["electric", "ice", "rock"],
  poison: ["ground", "psychic"],
  ground: ["water", "grass", "ice"],
  rock: ["water", "grass", "fighting", "ground", "steel"],
  bug: ["fire", "flying", "rock"],
  ghost: ["ghost", "dark"],
  steel: ["fighting", "ground", "fire"],
  fire: ["water", "ground", "rock"],
  water: ["grass", "electric"],
  grass: ["fire", "ice", "poison", "flying", "bug"],
  electric: ["ground"],
  psychic: ["bug", "ghost", "dark"],
  ice: ["fire", "fighting", "rock", "steel"],
  dragon: ["ice", "dragon", "fairy"],
  dark: ["fighting", "fairy"],
  fairy: ["steel", "poison"],
};
export default weaknessesList;

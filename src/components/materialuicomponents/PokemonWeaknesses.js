const PokemonWeaknesses = (pokemonName) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

  return fetch(url)
    .then((response) => response.json())
    .then((pokemonData) => {
      const types = pokemonData.types.map((type) => type.type.name);

      return Promise.all(
        types.map((type) => fetch(`https://pokeapi.co/api/v2/type/${type}`).then((response) => response.json()))
      ).then((typeData) => {
        const weaknessMultipliers = {};

        typeData.forEach((type) => {
          type.damage_relations.double_damage_from.forEach((doubleDamageType) => {
            const { name: doubleDamageTypeName } = doubleDamageType;
            if (weaknessMultipliers[doubleDamageTypeName]) {
              weaknessMultipliers[doubleDamageTypeName] *= 2;
            } else {
              weaknessMultipliers[doubleDamageTypeName] = 2;
            }
          });

          type.damage_relations.half_damage_from.forEach((halfDamageType) => {
            const { name: halfDamageTypeName } = halfDamageType;
            if (weaknessMultipliers[halfDamageTypeName]) {
              weaknessMultipliers[halfDamageTypeName] *= 0.5;
            } else {
              weaknessMultipliers[halfDamageTypeName] = 0.5;
            }
          });

          type.damage_relations.no_damage_from.forEach((noDamageType) => {
            const { name: noDamageTypeName } = noDamageType;
            weaknessMultipliers[noDamageTypeName] = 0;
          });
        });

        const weaknesses = Object.entries(weaknessMultipliers)
          .map(([name, multiplier]) => ({ name, multiplier }))
          .filter((weakness) => weakness.multiplier > 1);

        return weaknesses;
      });
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
};

export default PokemonWeaknesses;
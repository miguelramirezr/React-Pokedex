import { useState, useEffect } from "react";

function usePokemonDamage(pokemonData) {
  const [doubleDamageFrom, setdoubleDamageFrom] = useState([]);
  const [halfDamageFrom, sethalfDamageFrom] = useState([]);
  const [weaknesses, setweaknesses] = useState([]);

  useEffect(() => {
    const types = pokemonData;

    const doubleDamageResult = types.map((type) =>
      fetch(type.type.url)
        .then((response) => response.json())
        .then(
          (pokemonDoubleDamage) =>
            pokemonDoubleDamage.damage_relations.double_damage_from
        )
    );

    const halfDamageResult = types.map((type) =>
      fetch(type.type.url)
        .then((response) => response.json())
        .then(
          (pokemonHalfDamage) =>
            pokemonHalfDamage.damage_relations.half_damage_from
        )
    );

    Promise.all(doubleDamageResult).then((damages) => {
      const all_doubleDamageResult = damages.reduce(
        (prev, current) => [...prev, ...current],
        []
      );
      setdoubleDamageFrom(all_doubleDamageResult);
    });

    Promise.all(halfDamageResult).then((damages2) => {
      const all_halfDamageResult = damages2.reduce(
        (prev, current) => [...prev, ...current],
        []
      );
      sethalfDamageFrom(all_halfDamageResult);
    });
  }, [pokemonData]);

  useEffect(() => {
    const filteredDamage = doubleDamageFrom.filter((ddF) => {
      return !halfDamageFrom.some((hdF) => ddF.name === hdF.name);
    });
    setweaknesses(filteredDamage);
  }, [doubleDamageFrom, halfDamageFrom]);

  return weaknesses;
}

export default usePokemonDamage;

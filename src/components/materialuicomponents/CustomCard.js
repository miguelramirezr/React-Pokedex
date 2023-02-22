import * as React from "react";
import CardContent from "@mui/material/CardContent";
import { useState, useEffect } from "react";
import CustomCardMedia from "./CustomCardMedia";
import CustomCardHeader from "./CustomCardHeader";
import CustomMeasurement from "./CustomMeasurement ";
import StyledGreenbackgroundCard from "./StyledGreenbackgroundCard";
import CustomStates from "./CustomStates";
import CustomInformationCard from "./CustomInformationCard";
export default function CustomCard() {
  const API_URL = `https://pokeapi.co/api/v2/pokemon/`;
  const [currentId, setCurrentId] = useState(1);
  const [pokemon, setPokemon] = useState({ sprites: {} });
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(`${API_URL}${currentId}`)
      .then((response) => response.json())
      .then((pokemonData) => {
        console.log(pokemonData);
        setCurrentId(pokemonData.id);
        setPokemon(pokemonData);
        setIsLoading(false);
      });
  }, [currentId]);
  
  if (isLoading) {
    return <div>loading ...</div>;
  } else {
    return (
      <StyledGreenbackgroundCard
        sx={{
          width: 320,
          height: 650,
          marginTop: 2,
        }}
      >
        <CustomCardHeader props={pokemon} />
        <CustomCardMedia
          props={pokemon}
          setCurrentId={setCurrentId}
          currentId={currentId}
        />
        <CardContent sx={{ width: "100%", padding: 0, margin: 0 }}>
          <CustomMeasurement
            pokeweight={pokemon.weight}
            pokeheight={pokemon.height}
          />
          <CustomInformationCard abilities = {pokemon.abilities} name ={pokemon.name}/>
          <CustomStates dataStats={pokemon.stats} />
        </CardContent>
      </StyledGreenbackgroundCard>
    );
  }
}

import * as React from "react";
import CardContent from "@mui/material/CardContent";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import CustomCardMedia from "./CustomCardMedia";
import CustomCardHeader from "./CustomCardHeader";
import StyledCard from "./StyledCard";


export default function CustomCard() {
  const API_URL = `https://pokeapi.co/api/v2/pokemon/`;
  const [currentId, setCurrentId] = useState(1);
  const [pokemon, setPokemon] = useState({ sprites: {} });
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(`${API_URL}${currentId}`)
      .then((response) => response.json())
      .then((pokemonData) => {
        // console.log(pokemonData);
        setCurrentId(pokemonData.id);
        setPokemon(pokemonData);
        setIsLoading(false);
      });
  }, [currentId]);
  if (isLoading) {
    return <div>loaging ...</div>;
  } else {
    return (
      <StyledCard
        sx={{
          width: 400,
          height: 650,
          marginTop : 2
        }}
      >
        <CustomCardHeader props={pokemon} />
        <CustomCardMedia props={pokemon} />
        <CardContent>
        </CardContent>
      </StyledCard>
    );
  }
}

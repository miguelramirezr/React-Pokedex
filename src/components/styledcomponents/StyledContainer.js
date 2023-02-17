import styled from "styled-components";
import Header from "./StyledHeader";
import StyledBody from "./StyledBody";
import StyledDetailsContainer from "./StyledDetailsContainer";
import Image from "./StyledImage";
import { useState, useEffect } from "react";
import Stats from "./StyledStats";
import Details from "./StyledDetails";
import Type from "./StyledType";
import Weaknesses from "./StyledWeaknesses";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 650px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  justify-content: center;
  background-color: #ffff00;
  border-radius: 10px;
`;

const Container = () => {
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

  const getPokemon = (id) => {
    if (id < 0) {
      setCurrentId(1);
    } else {
      setCurrentId(id);
    }
  };
  return (
    <StyledContainer>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <StyledBody>
          <Header name={pokemon.name} />
          <Image route={pokemon.sprites.front_default}></Image>
          <div>
            <button onClick={() => getPokemon(currentId - 1)}>Previous</button>
            <button onClick={() => getPokemon(currentId + 1)}>Next</button>
          </div>
          <StyledDetailsContainer>
            <Stats></Stats>
            <Details></Details>
            <Type types={pokemon.types}></Type>
            <Weaknesses types2={pokemon.types}></Weaknesses>
          </StyledDetailsContainer>
        </StyledBody>
      )}
    </StyledContainer>
  );
};
export default Container;

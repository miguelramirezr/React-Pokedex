import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const API_URL = `https://pokeapi.co/api/v2/pokemon/`;
  const [currentId, setCurrentId] = useState(1);
  const [pokemon, setPokemon] = useState({ sprites: {} });
  const [isloading, setIsloading] = useState(false);

//weight


  useEffect(() => {
    fetch(`${API_URL}${currentId}`)
      .then((response) => response.json())
      .then((pokemonData) => {
        console.log(pokemonData);
        setCurrentId(pokemonData.id);
        setPokemon(pokemonData);
      });
  }, [currentId]);
  const getPokemon = (id) => {
    setCurrentId(id);
  };
  return (
    <div className="App">
      <header className="App-header">
        {isloading ? (
          <></>
        ) : (
          <div>
            {/* HEAD CONTAINER este sera un componente*/}
            <div>
              <label>{pokemon.name}</label>
            </div>
            {/* Screen container */}
            <div>
              <img
                src={pokemon.sprites.front_default}
                className="App-logo"
                alt="logo"
              />
            </div>
            {/* info container */}
            <div>
              <button onClick={() => getPokemon(currentId + 1)}>Next</button>
            </div>
            
            <div>
              <div>
                <label>Weight</label>
              </div>
              <div>
                <label>{pokemon.weight}</label>
              </div>
            </div>

          </div>
        )}
      </header>
    </div>
  );
}

export default App;

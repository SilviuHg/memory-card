import "./App.css";
import { useEffect, useState } from "react";
import Card from "./Card";
import TrackScore from "./Score";

const pokemonArray = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 37, 39];

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [count, setCount] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  function handlePokemonList(value) {
    setPokemonList(value);
  }

  function handleCount(value) {
    setCount(value);
  }

  function handleBestScore(value) {
    setBestScore(value);
  }

  // call api to get pokemon data
  const getPokemon = async function (id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
      mode: "cors",
    });
    const pokemonData = await response.json();
    return pokemonData;
  };

  useEffect(() => {
    // fetch all pokemons and store them in state
    const fetchPokemonData = async () => {
      const newPokemonList = [];
      for (let i = 0; i < pokemonArray.length; i++) {
        const pokemonData = await getPokemon(pokemonArray[i]);
        newPokemonList.push(pokemonData);
      }
      handlePokemonList(newPokemonList);
    };

    fetchPokemonData();
  }, []);

  return (
    <>
      <TrackScore count={count} bestScore={bestScore} />
      <Card
        itemsArray={pokemonList}
        count={count}
        bestScore={bestScore}
        handlePokemonsArray={handlePokemonList}
        handleCount={handleCount}
        handleBestScore={handleBestScore}
      />
    </>
  );
}

export default App;

import { labels } from "./data/label";
import { useEffect, useState } from "react";
import { getPokemonList } from "./api/pokemonClient";
import './App.css';
import { PokemonTable } from "./components/pokemonTable";
import SkeletonLoader from "./components/SkeletonLoader";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("");

  const getPokemons = async () => {
    try {
      const data = await getPokemonList();
      setPokemonList(data);
    } catch (error) {
      console.log("error", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFilter(e.target.value.toLowerCase());
  };

  useEffect(() => {
    getPokemons();
  }, []);

  const filteredPokemonList = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(filter)
  );


  return (
      <div className="container">
        <main className="main">
        {isLoading ? (
          <SkeletonLoader />
        ) : (
          <>
          <div>
            <input
            className="filter-input"
              type="text"
              value={filter}
              placeholder={labels.pokemonInsert}
              onChange={handleChange}
            />
            <PokemonTable pokemonList={filteredPokemonList} />
          </div>
          </>
          )}
        </main>
      </div>
  );
}

export default App;
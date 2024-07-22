import { labels } from "./data/label";
import { useEffect, useState } from "react";
import { getPokemonList } from "./api/pokemonClient";
import './App.css';
import { PokemonTable } from "./components/pokemonTable";


function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    getPokemons();
  }, []);

  useEffect(() => {
    console.log(pokemonList);
  }, [pokemonList]);

  if (isLoading) return <p>is loading..</p>;

  return (
    <>
      <div className="container">
        <main className="main">
          <div className="title">
            <h1 className="">{labels.pokemonList}</h1>
          </div>
          <div className="container-tabella">
            <table className="tabella">
              <thead className="">
                <tr>
                <th className="img">
                  </th>
                  <th className="name">
                    {labels.pokemonName}
                  </th>
                  <th className="genere">
                    {labels.pokemonType}
                  </th>
                  <th className="number">
                    {labels.pokemonNumber}
                  </th>
                </tr>
              </thead>
              <PokemonTable/>
            </table>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
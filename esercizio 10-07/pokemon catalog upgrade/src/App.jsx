import { useState } from "react";
import styles from "./App.module.css";
import PokemonForm from "./components/PokemonForm";
import PokemonList from "./components/PokemonList";

const initialInput = { id: "", nome: "", tipo: "" };

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [filter, setFilter] = useState("");
  const [input, setInput] = useState(initialInput);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = self.crypto.randomUUID();
    const nome = input.nome;
    const tipo = input.tipo;
    setPokemons([...pokemons, { id, nome, tipo }]);
    setInput(initialInput);
  };

  const handleChange = (e) => {
    setInput((statoPrecedente) => {
      return { ...statoPrecedente, [e.target.id]: e.target.value };
    });
  };

  const handleDelete = (e) => {
    const cancellaPokemon = pokemons.filter((pokemon) => pokemon.id !== e.target.id);
    setPokemons(cancellaPokemon);
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className={styles.containerlogo}>
    <img src="logo.png" alt="logo" className={styles.logo}/>
    <div className={styles.container}>
      <PokemonForm input={input} handleChange={handleChange} handleSubmit={handleSubmit} />
      <input className={styles.filtro} placeholder="Filtra per tipo" onChange={handleFilter} />
      <PokemonList pokemons={pokemons} filter={filter} handleDelete={handleDelete} />
    </div>
    </div>
  );
}

export default App;


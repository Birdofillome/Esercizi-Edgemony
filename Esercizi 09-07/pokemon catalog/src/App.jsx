import { useState } from "react";
import styles from "./App.module.css";
import Pokemon from "./components/Pokemon.jsx";

const intialInput = {id: "", nome: "", tipo: ""};

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [filter, setFilter] = useState("");
  const [input, setInput] = useState({id: "", nome: "", tipo: ""});

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = self.crypto.randomUUID();
    const nome = input.nome;
    const tipo = input.tipo;

    setPokemons([...pokemons, {
    id, nome, tipo
    }])
    setInput(intialInput);
  }

  const handleChange = (e) => {
    setInput((statoPrecedente) => {
    return {...statoPrecedente, [e.target.id]:e.target.value}
    }
    );
  }
  
  const handleDelete = (e) => {
    const cancellaPokemon = pokemons.filter((pokemon) => 
      pokemon.id !== e.target.id
    )
    setPokemons(cancellaPokemon);
  }

  /**
   * Aggiorna lo stato che gestisce il filtering
   * @param {*} e
   */
  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className={styles.container}>
<div className={styles.formContainer}>
  <form onSubmit={handleSubmit}>
    <label>Nome pokemon</label>
    <input type="text" id="nome" placeholder="Inserisci nome Pokemon" value={input.nome} onChange={handleChange}/>
    <label> Tipo Pokemon </label>
    <input type="text" id="tipo" placeholder= "Inserisci tipo Pokemon" value={input.tipo} onChange={handleChange}/>

    <button type="submit">Aggiungi Pokemon</button>
  </form>
</div>
      <input
        placeholder="Filtra per tipo"
        onChange={handleFilter}
      />

      <div className={styles.pokemonContainer}>
      <ul>
        {pokemons
          .filter((pokemon) => pokemon.tipo.includes(filter))
          .map((pokemon) => {
            return (
              <Pokemon
                key={pokemon.id}
                pokemon={pokemon}
                onClick={handleDelete}
              />
            );
          })}
      </ul>
      </div>
    </div>
  );
}

export default App;

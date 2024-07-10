import React from 'react';
import styles from "../App.module.css";

function PokemonForm({ input, handleChange, handleSubmit }) {
  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <label>Nome Pokémon</label>
        <input
          type="text"
          id="nome"
          placeholder="Inserisci nome Pokémon"
          value={input.nome}
          onChange={handleChange}
        />
        <label>Tipo Pokémon</label>
        <input
          type="text"
          id="tipo"
          placeholder="Inserisci tipo Pokémon"
          value={input.tipo}
          onChange={handleChange}
        />
        <button type="submit">Aggiungi Pokémon</button>
      </form>
    </div>
  );
}

export default PokemonForm;

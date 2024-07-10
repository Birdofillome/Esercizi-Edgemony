import React from 'react';
import styles from "../App.module.css";

function Pokemon({ pokemon, onClick }) {
  return (
    <li className={styles.pokemon}>
      <span>{pokemon.nome}</span>
      <span>{pokemon.tipo}</span>
      <button id={pokemon.id} onClick={onClick}>Elimina Pokémon</button>
    </li>
  );
}

export default Pokemon;

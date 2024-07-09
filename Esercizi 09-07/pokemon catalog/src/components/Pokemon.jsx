import React from "react";
import styles from "./pokemon.module.css";

function Pokemon({pokemon, onClick}) {
  const {nome, tipo, id} = pokemon
  return (
    <li className={styles.pokemon}>
      <p>Nome: {nome}</p>
      <p>Tipo: {tipo}</p>
      <button id={id} onClick={onClick}>Elimina Pokemon</button>
    </li>
  );
}

export default Pokemon;

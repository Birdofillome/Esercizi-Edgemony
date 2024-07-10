import React from 'react';
import styles from "../App.module.css";
import Pokemon from './Pokemon.jsx';

function PokemonList({ pokemons, filter, handleDelete }) {
  return (
    <div className={styles.pokemonContainer}>
      <ul>
        {pokemons
          .filter((pokemon) => pokemon.tipo.includes(filter))
          .map((pokemon) => {
            return <Pokemon key={pokemon.id} pokemon={pokemon} onClick={handleDelete}/>;
          })}
      </ul>
    </div>
  );
}

export default PokemonList;

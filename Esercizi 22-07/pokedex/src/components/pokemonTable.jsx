import { useEffect, useState } from "react"
import { getPokemonList } from "../api/pokemonClient";
import { Link } from "react-router-dom";
import { labels } from "../data/label";
import "./pokemonTable.css";

const PokemonTable = ({pokemonList}) => {
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        getPokemonList().then((data) => {
            setPokemons(data)
        
    })
},[])
return ( 
    <div className="container-tabella">
            <table className="tabella">
            <thead>
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
                <th>
                </th>
                </tr>
            </thead>
    <tbody>
        {pokemonList.map(pokemon => (
            <tr key={pokemon.id}>
            <td><img src={pokemon.image} alt="img"/></td>
            <td>{pokemon.name}</td> 
            <td>{pokemon.type}</td>
            <td>{pokemon.number}</td>
            <td><Link
            to={`/pokemons/${pokemon.id}`}>
                {labels.pokemonDetail}
            </Link>
            </td>
            </tr> 
            
        ))
        }
    </tbody>
    </table>
    </div>
)
}

export {PokemonTable}
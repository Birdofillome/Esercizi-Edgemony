import { useEffect, useState } from "react"
import { getPokemonList } from "../api/pokemonClient";
import { Link } from "react-router-dom";
import { labels } from "../data/label";

const PokemonTable = () => {
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        getPokemonList().then((data) => {
            setPokemons(data)
        
    })
},[])
return (
    <tbody>
        {pokemons.map(pokemon => (
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
)
}

export {PokemonTable}
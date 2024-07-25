import { useParams } from "react-router-dom";
import { getPokemonDetail } from "../api/pokemonClient";
import { useEffect, useState } from "react";
import "./pokemonDetail.css";
import SkeletonDetail from "./SkeletonDetail";

function PokemonDetail() {

    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null)
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState({message: "", isError: false });
    const getPokemon = async (id) => {
        try {
        const data = await getPokemonDetail(id)
        setPokemon(data);
        } catch (error) {
            console.log(error);
            setIsError(prevState => {
                return {prevState, message: error.message, isError: true}});
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
    getPokemon(id);
    }, []);

    if (isError.isError) return (<div className="">
        <h1 className="">404 | Not Found {isError.message}</h1>
    </div>)

    if (isLoading) return <SkeletonDetail/>;

    return ( 
        <div className="card">
        <div className="card-header">
            <h1>
        {pokemon.name} N° {pokemon.number}
        </h1></div>
        <div className="card-body">
        <img src={pokemon.image} alt="img"/>
        <p className="description">{pokemon.description}</p>
        <p>Type: {pokemon.type}</p>
        <p>Weaknesses: {pokemon.weaknesses}</p>
        </div>
        </div>
    )
}

export default PokemonDetail
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { editPokemon, getPokemonDetail } from "../api/pokemonClient";
import { labels } from "../data/label";
import PokemonForm from "../components/PokemonForm";

function EditPokemonPage() {
const navigate = useNavigate();
const { id } = useParams();
const [isLoading, setIsLoading] = useState(false);
const [pokemon, setPokemon] = useState(null);
const [isError, setIsError] = useState({ message: "", isError: false });

const getPokemon = async (id) => {
    try {
    const data = await getPokemonDetail(id);
    setPokemon(data);
    } catch (error) {
    console.log(error);
    setIsError((prevState) => {
        return { ...prevState, message: error.message, isError: true };
    });
    } finally {
    setIsLoading(false);
    }
};

useEffect(() => {
    getPokemon(id);
}, []);

const handleSubmit = async (value) => {
    try {
    const res = await editPokemon({ ...value, id });
    console.log(res);
    navigate("/");
    } catch (error) {
    console.log(error);
    setIsError((prevState) => {
        return { ...prevState, message: error.message, isError: true };
    });
    }
};

return (
    <div className="">
    <div className="">
        <div className="">
        <h1 className="">{labels.editPokemon}</h1>

        <PokemonForm value={pokemon} onSubmit={handleSubmit} />
        {isError.isError && (
            <div role="alert" className="">
            <strong className=""> Something went wrong </strong>
            <p className="">{isError.message}</p>
            </div>
        )}
        </div>
    </div>
    </div>
);
}

export default EditPokemonPage;
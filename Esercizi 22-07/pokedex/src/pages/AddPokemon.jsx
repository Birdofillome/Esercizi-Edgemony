import { useState } from "react";
import { addPokemon } from "../api/pokemonClient";
import { useNavigate } from "react-router-dom";
import { labels } from "../data/label";
import PokemonForm from "../components/PokemonForm";

function CreatePokemon() {
const navigate = useNavigate();

const [isError, setIsError] = useState({
    message: "",
    isError: false,
});

const handleSubmit = async (value) => {
    try {
    const res = await addPokemon(value);
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
        <p className="">{labels.addPokemonSub}</p>
        <PokemonForm onSubmit={handleSubmit} />
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

export default CreatePokemon;
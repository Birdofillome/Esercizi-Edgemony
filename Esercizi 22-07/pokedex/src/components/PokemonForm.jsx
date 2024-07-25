import React from "react";
import { useState } from "react";
import { labels } from "../data/label";

function PokemonForm({ value, onSubmit }) {
const initialState = {

    name: value?.name || "",
    type: value?.type || "",
    number: value?.number || "",
};

const [form, setForm] = useState(initialState);
const [isLoading, setIsLoading] = useState(false);

const nameValidation = !form.name.length;
const typeValidation = !form.type.length;
const numberValidation = !form.number.length;


const formValidation = nameValidation || typeValidation || numberValidation ;

const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm((prevState) => {
    return { ...prevState, [name]: value };
    });
};

return (
    <div className="">
    <div className="">
        {isLoading ? (
        <div>
            <div className=""></div>
            <p className="">is loading</p>
        </div>
        ) : (
        <form
            onSubmit={async (e) => {
            e.preventDefault();
            setIsLoading(true);
            await onSubmit(form);
            setIsLoading(false);
            }}
            action=""
            className=""
        >
            <div>
            <label className="">{labels.addName}</label>
            <div className="">
                <input
                name="title"
                onChange={handleChange}
                type="text"
                value={form.name}
                className=""
                placeholder={labels.addName}
                />
            </div>
            </div>

            <div className="">
            <label className="">{labels.addType}</label>
            <input
                name="title"
                onChange={handleChange}
                type="text"
                value={form.type}
                className=""
                placeholder={labels.addType}
                />
            <div className="">
            <label className="">{labels.addNumber}</label>
                <input
                name="number"
                onChange={handleChange}
                type="number"
                value={form.number}
                className=""
                placeholder={labels.addNumber}
                />
            </div>
            </div>
            <div className="">
            <button
                disabled={formValidation}
                type="submit"
                className={`${
                formValidation ? "" : ""
                }`}
            >
                Submit
            </button>
            </div>
        </form>
        )}
    </div>
    </div>
);
}
export default PokemonForm;
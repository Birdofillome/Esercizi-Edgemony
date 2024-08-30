"use client";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import ButtonBack from "@/components/ButtonBack";
function CreatePage() {
const [input, setInput] = useState<string>("");

const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
e.preventDefault();
}
    const handelChange = (e: ChangeEvent<HTMLInputElement>) : void => {
        setInput(e.target.value);
}
useEffect(() => {
console.log("input:", input);
},[input]);

return (
<main className="p-6 bg-gray-100 min-h-screen">
    <h1 className="text-3xl font-bold text-center mb-8">Contacts</h1>
    <Navbar />
    <ButtonBack />
    <div className="flex justify-center items-start mt-12">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
            <div className="mb-6">
                <input
                    className="border-slate-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    type="text"
                    onChange={handelChange}
                    value={input}
                    placeholder="Insert data"
                />
            </div>
            <div className="flex justify-center">
                <input
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
                />
            </div>
        </form>
    </div>
</main>

)
}

export default CreatePage
import React, { useState } from "react";
import "./RandomNumberGenerator.css";

function RandomNumberGenerator() {
const [randomNumber, setRandomNumber] = useState(null);

const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(number);
};

    return (
    <div className="random-generator-container">
        <button id="generate" onClick={generateRandomNumber}>
        Generate Random Number
        </button>
        {randomNumber !== null && (
        <div className="random-number-display">Random Number: {randomNumber}</div>
    )}
    </div>
    );
}

export default RandomNumberGenerator;

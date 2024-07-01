import { useState } from "react";
import "./Counter.css";

function Counter() {
const [counter, setCounter] = useState(0);
const [randomNumber, setRandomNumber] = useState(null);

const handleClick = (event) => {
    if (event.target.id === "add") {
    setCounter(counter + 1);
    } else if (event.target.id === "sub") {
    setCounter(counter - 1);
    }
};

const handleReset = () => {
    setCounter(0);
};

const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(number);
};

return (
    <div className="counter-container">
    <button disabled={counter === 0} id="sub" onClick={handleClick}>
        -
    </button>
    <span className="counter-display">Counter: {counter}</span>
    <button disabled={counter >= 10} id="add" onClick={handleClick}>
        +
    </button>
    <button id="reset" onClick={handleReset}>
        Reset
    </button>
    </div>
);
}

export default Counter;

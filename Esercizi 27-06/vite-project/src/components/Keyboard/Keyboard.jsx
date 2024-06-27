import { Button } from "../Button/Button.jsx";
import "./Keyboard.css";

const buttonValues = ["AC", "+/-", "%", "/", 7, 8, 9, "X", 4, 5, 6, "-", 1, 2, 3, "+", "Reset", 0, ".", "="];

const Keyboard = ({ onButtonClick }) => {
    return (
    <div className="keyboard">
        {buttonValues.map((val, index) => (
        <Button key={index} text={val} onClick={() => onButtonClick(val)} />
        ))}
    </div>
    );
};

export { Keyboard };
import React, { useState } from "react";

import { Keyboard } from "./components/Keyboard/Keyboard.jsx";
import { Display } from "./components/Display/Display.jsx";
import "./App.css";

function App() {
  const [displayValue, setDisplayValue] = useState("0");

  const handleButtonClick = (value) => {
    if (value === "AC") {
      setDisplayValue("0");
    } else if (displayValue === "0") {
      setDisplayValue(value.toString());
    } else {
      setDisplayValue(displayValue + value.toString());
    }
  };

  return (
    <div className="app">
      <div className="calculator">
        <Display value={displayValue} />
        <Keyboard onButtonClick={handleButtonClick} />
      </div>
    </div>
  );
}
export default App;
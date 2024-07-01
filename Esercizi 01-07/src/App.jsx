import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import RandomNumberGenerator from "./components/RandomNumberGenerator";

function App() {
  const handleClick = () => {
    console.log("clicked!");
  };

  return (
    <>
      <h1>Counter App</h1>
      <div className="card">
        <Counter />
      </div>
      <hr />
      <div className="card2">
        <RandomNumberGenerator />
      </div>
    </>
  );
}

export default App;


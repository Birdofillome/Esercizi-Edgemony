import React from "react";

function ButtonView({ pokemon, onClick }) {
return (
    <div>
    <button
        className="button"
        onClick={() => onClick(pokemon)}
    >
        View
    </button>
    </div>
);
}

export { ButtonView };
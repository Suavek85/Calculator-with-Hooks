import React from "react";
import "../../App.css";

function Operators(props) {
  const operationButtons = [
    { type: "addition", symbol: "+" },
    { type: "subtraction", symbol: "-" },
    { type: "multiplication", symbol: "×" },
    { type: "division", symbol: "÷" }
  ];
  return (
    <div className="wrapper-operator">
      {operationButtons.map(el => {
        return (
          <button
            data-name={el.type}
            data-symbol={el.symbol}
            onClick={props.handleSettingOperation}
          >
            {el.symbol}
          </button>
        );
      })}
      <button onClick={props.handleAddingSecondInput}>=</button>
      <button onClick={props.handleClearingCounter}>c</button>
    </div>
  );
}

export default Operators;

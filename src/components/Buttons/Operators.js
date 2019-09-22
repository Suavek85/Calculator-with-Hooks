import React from "react";
import "../../App.css";

function Operators(props) {
  const operationButtons = [
    { kind: "adding", symbol: "+" },
    { kind: "deducting", symbol: "-" },
    { kind: "multiplying", symbol: "*" },
    { kind: "dividing", symbol: "/" }
  ];
  return (
    <div className="wrapper-operator">
      {operationButtons.map(el => {
        return (
          <button
            data-foo={el.kind}
            data-symbol={el.symbol}
            onClick={props.handleSettingOperation}
          >
            {el.symbol}
          </button>
        );
      })}
      <button onClick={props.handleCalculatingValues}>=</button>
      <button onClick={props.handleClearingCounter}>C</button>
    </div>
  );
}

export default Operators;

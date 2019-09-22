import React from "react";
import "../../App.css";

function Operators(props) {
  return (
    <div className="wrapper-operator">
    <button data-foo="adding" data-symbol="+" onClick={props.handleSettingOperation}>
      +
    </button>
    <button data-foo="deducting" data-symbol="-" onClick={props.handleSettingOperation}>
      -
    </button>
    <button data-foo="multiplying" data-symbol="*" onClick={props.handleSettingOperation}>
      *
    </button>
    <button data-foo="dividing" data-symbol="/" onClick={props.handleSettingOperation}>
      /
    </button>
    <button onClick={props.handleCalculatingValues}>=</button>
  </div>
  );
}

export default Operators;

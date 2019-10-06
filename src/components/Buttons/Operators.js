// @flow

import React from "react";
import "../../App.scss";
import { ADDITION, SUBTRACTION, MULTIPLICATION, DIVISION } from "../../constants";
import type { OperationButtonType, OperatorsPropsType } from "../../types";

function Operators(props: OperatorsPropsType) {

  const operationButtons: Array<OperationButtonType> = [
    { type: ADDITION, symbol: "+" },
    { type: SUBTRACTION, symbol: "-" },
    { type: MULTIPLICATION, symbol: "×" },
    { type: DIVISION, symbol: "÷" }
  ];

  return (
    <div className="wrapper--operator">
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

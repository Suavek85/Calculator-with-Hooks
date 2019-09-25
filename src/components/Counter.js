import React from "react";
import "../App.scss";

function Counter(props) {
  return (
    <div className="counter-wrapper">
      <h2>
        <span>{props.firstInput}</span>
        {props.isOperator ? <span>{props.operation.symbol}</span> : null}
        <span>{props.secondInput}</span>
      </h2>
    </div>
  );
}

export default Counter;

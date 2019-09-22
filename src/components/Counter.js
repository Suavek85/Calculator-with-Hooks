import React from "react";
import "../App.css";

function Counter(props) {
  return (
    <div className="counter-wrapper">
      <h2>
        <span>{props.firstNo}</span>
        {props.isOperator ? <span>{props.operation.symbol}</span> : null}
        <span>{props.secondNo}</span>
      </h2>
    </div>
  );
}

export default Counter;

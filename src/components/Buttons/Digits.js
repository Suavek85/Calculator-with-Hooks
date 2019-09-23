import React from "react";
import "../../App.css";

function Digits(props) {
  return (
    <div className="wrapper">
    {[9, 8, 7, 6, 5, 4, 3, 2, 1, 0, "decimal"].map(el => {
      return el === "decimal" ? (
        <button onClick={props.handleSettingInput} key='10' data-foo=".">
          .
        </button>
      ) : (
        <button onClick={props.handleSettingInput} key={el} data-foo={el}>
          {el}
        </button>
      );
    })}
  </div>
  );
}

export default Digits;

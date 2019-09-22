import React from "react";
import Digits from "./Digits";
import Operators from "./Operators";
import "../../App.css";

function Buttons(props) {
  return (
    <div className="wrapper-main">
      <Digits handleSettingNumbers={props.handleSettingNumbers} />
      <Operators
        handleSettingOperation={props.handleSettingOperation}
        handleCalculatingValues={props.handleCalculatingValues}
      />
    </div>
  );
}

export default Buttons;

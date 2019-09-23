import React from "react";
import Digits from "./Digits";
import Operators from "./Operators";
import "../../App.css";

function Buttons(props) {
  return (
    <div className="wrapper-main">
      <Digits handleSettingInput={props.handleSettingInput} />
      <Operators
        handleSettingOperation={props.handleSettingOperation}
        handleSettingOutput={props.handleSettingOutput}
        handleClearingCounter={props.handleClearingCounter}
      />
    </div>
  );
}

export default Buttons;

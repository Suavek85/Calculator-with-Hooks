import React from "react";
import Digits from "./Digits";
import Operators from "./Operators";
import "../../App.scss";
//import selectors from "../../styles.scss";

function Buttons(props) {
  return (
    <div className="wrapper">
      <Digits handleSettingInput={props.handleSettingInput} />
      <Operators
        handleSettingOperation={props.handleSettingOperation}
        handleAddingSecondInput={props.handleAddingSecondInput}
        handleClearingCounter={props.handleClearingCounter}
      />
    </div>
  );
}

export default Buttons;

import React from "react";
import { Trail } from "react-spring/renderprops";
import "../../App.scss";

function Digits(props) {
  return (
    <div className="wrapper">
      <Trail
        items={[9, 8, 7, 6, 5, 4, 3, 2, 1, 0, "decimal"]}
        keys={el => el}
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
      >
        {el => fadein =>
          el === "decimal" ? (
            <button
              style={fadein}
              onClick={props.handleSettingInput}
              key="10"
              data-foo="."
            >
              .
            </button>
          ) : (
            <button
              onClick={props.handleSettingInput}
              key={el}
              data-foo={el}
              style={fadein}
            >
              {el}
            </button>
          )}
      </Trail>
    </div>
  );
}
export default Digits;

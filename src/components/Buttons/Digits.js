import React from "react";
import { Trail } from "react-spring/renderprops";
import "../../App.scss";

function Digits(props) {
  return (
    <div className="wrapper">
      <Trail
        //items={[9, 8, 7, 6, 5, 4, 3, 2, 1, 0, "decimal"]}
        items={[
          { name: 9, order: 1 },
          { name: 6, order: 4 },
          { name: 3, order: 7 },
          { name: 0, order: 10 },
          { name: 8, order: 2 },
          { name: 5, order: 5 },
          { name: 2, order: 8 },
          { name: "decimal", order: 11 },
          { name: 7, order: 3 },
          { name: 4, order: 6 },
          { name: 1, order: 9 },
        ]}
        keys={el => el}
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
      >
        {el => fadein =>
          el.name === "decimal" ? (
            <button
              style={fadein}
              onClick={props.handleSettingInput}
              key="11"
              data-foo="."
              data-order={el.order}
              className="btn-order"
            >
              .
            </button>
          ) : (
            <button
              onClick={props.handleSettingInput}
              key={el.order}
              data-order={el.order}
              data-foo={el.name}
              style={fadein}
              className="btn-order"
            >
              {el.name}
            </button>
          )}
      </Trail>
    </div>
  );
}
export default Digits;

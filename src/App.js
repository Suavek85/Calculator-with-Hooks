import React, { useState, useEffect } from "react";
import Counter from "./components/Counter";

import "./App.css";

function App() {
  const [firstNo, setFirstNo] = useState("");
  const [calcArr, setCalcArr] = useState([]);
  const [showOperator, setShowOperator] = useState(false);
  const [secondNo, setSecondNo] = useState("");

  useEffect(() => {
    if (calcArr.length === 2) {
      let calcNoArray = calcArr.map(el => {
        return parseFloat(el);
      });
      setFirstNo(
        calcNoArray.reduce((prev, next) => {
          return prev + next;
        })
      );
      setShowOperator(false);
      setSecondNo("");
      setCalcArr([]);
      console.log(calcArr);
    }
  }, [calcArr]);

  function settingFirstNumber(e) {
    if (!calcArr.length) {
      setFirstNo(firstNo + e.currentTarget.dataset.foo);
    } else {
      setSecondNo(secondNo + e.currentTarget.dataset.foo);
    }
  }

  function addToCalcArray() {
    setCalcArr([...calcArr, firstNo]);
    setShowOperator(true);
  }

  function addTwoValues() {
    setCalcArr([...calcArr, secondNo]);
  }

  return (
    <div className="App">
      <Counter
        firstNo={firstNo}
        secondNo={secondNo}
        showOperator={showOperator}
      />
      <div className="wrapper-main">
        <div className="wrapper">
          {[9, 8, 7, 6, 5, 4, 3, 2, 1, 0, "decimal"].map(el => {
            return el === "decimal" ? (
              <button onClick={settingFirstNumber} data-foo=".">
                .
              </button>
            ) : (
              <button onClick={settingFirstNumber} key={el} data-foo={el}>
                {el}
              </button>
            );
          })}
        </div>
        <div className="wrapper-operator">
          <button onClick={addToCalcArray}>+</button>
          <button onClick={addTwoValues}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;

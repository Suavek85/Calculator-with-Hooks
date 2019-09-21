import React, { useState, useEffect } from "react";
import Counter from "./components/Counter";

import "./App.css";

function App() {
  const [firstNo, setFirstNo] = useState(0);
  const [secondNo, setSecondNo] = useState("");
  const [calcArr, setCalcArr] = useState([]);
  const [showOperator, setShowOperator] = useState(false);

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
    }
  }, [calcArr]);

  function settingNumber(e, setNo, getNo) {
    const selectedNo = e.currentTarget.dataset.foo;
    //prevent two zeros from being displayed
    if (getNo === 0 && parseFloat(selectedNo) === 0) {
      setNo(getNo);
    }
    //prevent two decimal separators from being displayed
    else if (
      parseFloat(Math.round(getNo)) !== parseFloat(getNo) &&
      selectedNo === "."
    ) {
      setNo(getNo);
    }
    //default
    else {
      setNo(getNo + selectedNo);
    }
  }

  function handleSettingNumbers(e) {
    !calcArr.length
      ? settingNumber(e, setFirstNo, firstNo)
      : settingNumber(e, setSecondNo, secondNo);
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
              <button onClick={handleSettingNumbers} data-foo=".">
                .
              </button>
            ) : (
              <button onClick={handleSettingNumbers} key={el} data-foo={el}>
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

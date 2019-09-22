import React, { useState, useEffect } from "react";
import Counter from "./components/Counter";
import helpers from "./Helper";
import "./App.css";

function App() {
  const [firstNo, setFirstNo] = useState(0);
  const [secondNo, setSecondNo] = useState("");
  const [calcArr, setCalcArr] = useState([]);
  const [isOperator, setIsOperator] = useState(false);
  const [operation, setOperation] = useState({name: '', symbol: ''});

  useEffect(() => {
    if (calcArr.length === 2) {
      let calcNoArray = helpers.stringToNumbers(calcArr);
      switch (operation.name) {
        case "adding":
          setFirstNo(helpers.adding(calcNoArray));
          break;
        case "deducting":
          setFirstNo(helpers.deducting(calcNoArray));
          break;
        default:
          setFirstNo(helpers.adding(calcNoArray));
      }
      setIsOperator(false);
      setSecondNo("");
      setCalcArr([]);
    }
  }, [calcArr, operation]);

  function handleSettingNumbers(e) {
    !calcArr.length
      ? helpers.settingNumber(e, setFirstNo, firstNo)
      : helpers.settingNumber(e, setSecondNo, secondNo);
  }

  function handleSettingOperation(e) {
    const selectedOperation = e.currentTarget.dataset.foo;
    const selectedSymbol = e.currentTarget.dataset.symbol;
    setCalcArr([...calcArr, firstNo]);
    setIsOperator(true);
    setOperation({name: selectedOperation, symbol: selectedSymbol});
  }

  function calculateTwoValues() {
    setCalcArr([...calcArr, secondNo]);
  }

  return (
    <div className="App">
      <Counter firstNo={firstNo} secondNo={secondNo} isOperator={isOperator} operation={operation} />
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
          <button data-foo="adding" data-symbol="+" onClick={handleSettingOperation}>
            +
          </button>
          <button data-foo="deducting" data-symbol="-" onClick={handleSettingOperation}>
            -
          </button>
          <button onClick={calculateTwoValues}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;

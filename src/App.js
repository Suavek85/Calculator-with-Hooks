import React, { useState, useEffect } from "react";
import Counter from "./components/Counter";
import helpers from "./Helper";
import Buttons from "./components/Buttons/Buttons";
import "./App.css";

function App() {
  //hooks
  const [firstNo, setFirstNo] = useState(0);
  const [secondNo, setSecondNo] = useState("");
  const [calcArr, setCalcArr] = useState([]);
  const [isOperator, setIsOperator] = useState(false);
  const [operation, setOperation] = useState({ name: "", symbol: "" });

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
        case "multiplying":
          setFirstNo(helpers.multiplying(calcNoArray));
          break;
        case "dividing":
          setFirstNo(helpers.dividing(calcNoArray));
          break;
        default:
          setFirstNo(helpers.adding(calcNoArray));
      }
      setIsOperator(false);
      setSecondNo("");
      setCalcArr([]);
    }
  }, [calcArr, operation]);

  //functions

  function handleSettingNumbers(e) {
    !calcArr.length
      ? helpers.settingNumber(e, setFirstNo, firstNo)
      : helpers.settingNumber(e, setSecondNo, secondNo);
  }

  function handleSettingOperation(e) {
    if (!isOperator) {
      const selectedOperation = e.currentTarget.dataset.foo;
      const selectedSymbol = e.currentTarget.dataset.symbol;
      if (!isFinite(firstNo)) {
        setFirstNo(0);
        setCalcArr([0]);
      } else {
        setCalcArr([...calcArr, firstNo]);
      }
      setIsOperator(true);
      setOperation({ name: selectedOperation, symbol: selectedSymbol });
    }
  }

  function handleCalculatingValues() {
    setCalcArr([...calcArr, secondNo]);
  }

  function handleClearingCounter() {
    setFirstNo(0);
    setSecondNo("");
    setCalcArr([]);
    setIsOperator(false);
    setOperation({ name: "", symbol: "" });
  }

  return (
    <div className="App">
      <Counter
        firstNo={firstNo}
        secondNo={secondNo}
        isOperator={isOperator}
        operation={operation}
      />
      <Buttons
        handleSettingOperation={handleSettingOperation}
        handleCalculatingValues={handleCalculatingValues}
        handleSettingNumbers={handleSettingNumbers}
        handleClearingCounter={handleClearingCounter}
      />
    </div>
  );
}

//TODO: round up, proptypes etc, remove
//change all to support multi operations

export default App;

import React, { useState, useEffect } from "react";
import Counter from "./components/Counter";
import helpers from "./Helper";
import Buttons from "./components/Buttons/Buttons";
import "./App.css";

function App() {
  //hooks
  const [firstInput, setFirstInput] = useState(0);
  const [secondInput, setSecondInput] = useState("");
  const [inputArr, setInputArr] = useState([]);
  const [isOperator, setIsOperator] = useState(false);
  const [operation, setOperation] = useState({ name: "", symbol: "" });

  //useEffect for displaying calculation result

  useEffect(() => {
    if (inputArr.length === 2) {
      let inputNumbersArray = helpers.stringToNumbers(inputArr);
      switch (operation.name) {
        case "adding":
          setFirstInput(helpers.adding(inputNumbersArray));
          break;
        case "deducting":
          setFirstInput(helpers.deducting(inputNumbersArray));
          break;
        case "multiplying":
          setFirstInput(helpers.multiplying(inputNumbersArray));
          break;
        case "dividing":
          setFirstInput(helpers.dividing(inputNumbersArray));
          break;
        default:
          setFirstInput(helpers.adding(inputNumbersArray));
      }
      setIsOperator(false);
      setSecondInput("");
      setInputArr([]);
    }
  }, [inputArr, operation]);

  //setting first and second input values

  function handleSettingInput(e) {
    !inputArr.length
      ? helpers.settingInput(e, setFirstInput, firstInput)
      : helpers.settingInput(e, setSecondInput, secondInput);
  }

  //setting operation/operator type

  function handleSettingOperation(e) {
    if (!isOperator) {
      const selectedOperation = e.currentTarget.dataset.foo;
      const selectedSymbol = e.currentTarget.dataset.symbol;
      if (!isFinite(firstInput)) {
        setFirstInput(0);
        setInputArr([0]);
      } else {
        setInputArr([...inputArr, firstInput]);
      }
      setIsOperator(true);
      setOperation({ name: selectedOperation, symbol: selectedSymbol });
    }
  }

  //setting output/calculating input values

  function handleSettingOutput() {
    if(secondInput) {
      setInputArr([...inputArr, secondInput]);
    } else {
      return
    }
  }

  function handleClearingCounter() {
    setFirstInput(0);
    setSecondInput("");
    setInputArr([]);
    setIsOperator(false);
    setOperation({ name: "", symbol: "" });
  }

  return (
    <div className="App">
      <Counter
        firstInput={firstInput}
        secondInput={secondInput}
        isOperator={isOperator}
        operation={operation}
      />
      <Buttons
        handleSettingInput={handleSettingInput}
        handleSettingOperation={handleSettingOperation}
        handleSettingOutput={handleSettingOutput}
        handleClearingCounter={handleClearingCounter}
      />
    </div>
  );
}

//TODO: proptypes etc, remove fn
//change all to support multi operations

export default App;

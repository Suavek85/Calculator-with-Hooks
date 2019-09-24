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

  //useEffect for displaying output / calculation result

  useEffect(() => {
    if (inputArr.length === 2) {
      const inputNumbersArray = helpers.stringToNumbers(inputArr);
      handleSettingOutput(operation, inputNumbersArray);
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

  //setting operation/operator type and adding firstInput

  function handleSettingOperation(e) {
    if (!isOperator) {
      const selectedOperation = e.currentTarget.dataset.name;
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

  //adding secondInput 

  function handleAddingSecondInput() {
    if(secondInput) {
      setInputArr([...inputArr, secondInput]);
    } else {
      return
    }
  }

  // setting output

  function handleSettingOutput(operation, inputNumbersArray) {
    switch (operation.name) {
      case "addition":
        setFirstInput(helpers.adding(inputNumbersArray));
        break;
      case "subtraction":
        setFirstInput(helpers.deducting(inputNumbersArray));
        break;
      case "multiplication":
        setFirstInput(helpers.multiplying(inputNumbersArray));
        break;
      case "division":
        setFirstInput(helpers.dividing(inputNumbersArray));
        break;
      default:
        setFirstInput(helpers.adding(inputNumbersArray));
    }
  }
  
 // clearing counter
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
        handleAddingSecondInput={handleAddingSecondInput}
        handleClearingCounter={handleClearingCounter}
      />
    </div>
  );
}

//TODO:  remove fn
//change all to support multi operations

export default App;

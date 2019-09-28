import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import Counter from "./components/Counter";
import helpers from "./Helper";
import Buttons from "./components/Buttons/Buttons";
import "./App.scss";

function App() {
  //hooks
  const [firstInput, setFirstInput] = useState(0);
  const [secondInput, setSecondInput] = useState("");
  const [inputArr, setInputArr] = useState([]);
  const [isOperator, setIsOperator] = useState(false);
  const [operation, setOperation] = useState({ name: "", symbol: "" });
  const fadeIn = useSpring({from: { opacity: 0, marginTop: 0 }, to: { opacity: 1, marginTop: 40 }});

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
      const selectedOperation = e.target.getAttribute("data-name");
      const selectedSymbol = e.target.getAttribute("data-symbol");
      //slower alt- e.currentTarget.dataset.name;

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
    if (secondInput) {
      setInputArr([...inputArr, secondInput]);
    } else {
      return;
    }
  }

  // setting output

  function handleSettingOutput(operation, inputNumbersArray) {
    switch (operation.name) {
      case "addition":
        setFirstInput(helpers.addition(inputNumbersArray));
        break;
      case "subtraction":
        setFirstInput(helpers.subtraction(inputNumbersArray));
        break;
      case "multiplication":
        setFirstInput(helpers.multiplication(inputNumbersArray));
        break;
      case "division":
        setFirstInput(helpers.division(inputNumbersArray));
        break;
      default:
        setFirstInput(helpers.addition(inputNumbersArray));
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
    <animated.div className="App" style={fadeIn}>
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
    </animated.div>
  );
}

//TODO:  remove fn
//change all to support multi operations

export default App;

import React, { useState, useEffect } from "react";
import Counter from "./components/Counter";
import helpers from './Helper';
import "./App.css";

function App() {
  const [firstNo, setFirstNo] = useState(0);
  const [secondNo, setSecondNo] = useState("");
  const [calcArr, setCalcArr] = useState([]);
  const [isOperator, setIsOperator] = useState(false);
  const [operation, setOperation] = useState('');

  useEffect(() => {
    if (calcArr.length === 2) {
      let calcNoArray = helpers.stringToNumbers(calcArr);
      switch(operation) {
        case 'adding':
          setFirstNo(
            helpers.adding(calcNoArray)
          );
          break;
        default:
          setFirstNo(
            helpers.adding(calcNoArray)
          );
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

  function addToCalcArray() {
    setCalcArr([...calcArr, firstNo]);
    setIsOperator(true);
  }

  function addTwoValues() {
    setCalcArr([...calcArr, secondNo]);
    setOperation('adding')
  }

  return (
    <div className="App">
      <Counter
        firstNo={firstNo}
        secondNo={secondNo}
        isOperator={isOperator}
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

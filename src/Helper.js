

const helpers = {
  //ALLOW CORRECT NUMBER FORMAT
  settingInput: function(e, setInput, currentInput) {
    const newInputValue = e.currentTarget.dataset.foo;
    //prevent two zeros from being displayed
    if (currentInput === 0 && parseFloat(newInputValue) === 0) {
      setInput(currentInput);
    }
    //prevent two decimal separators from being displayed when current input is a floating number
    else if (
      parseFloat(Math.round(currentInput)) !== parseFloat(currentInput) &&
      newInputValue === "."
    ) {
      setInput(currentInput);
    }
    //prevent two decimal separators from being displayed when the last value is already a dec separator
    else if (currentInput[currentInput.length - 1] === "." && newInputValue === ".") {
      setInput(currentInput);
    }
    //remove initial zero when new value is a number
    else if (currentInput === 0 && newInputValue !== ".") {
      setInput(newInputValue);
    }
    //default
    else {
      setInput(currentInput + newInputValue);
    }
  },
  
  //ADDING
  addition: function(inputNumbersArray) {
   const resultAdding = this.additionHelper(inputNumbersArray);
   return this.roundingResult(resultAdding);
  },
  additionHelper: function(inputNumbersArray) {
    return inputNumbersArray.reduce((prev, next) => {
      return prev + next;
    });
  },
  //DEDUCTING
  subtraction: function(inputNumbersArray) {
    const resultDeducting = this.subtractionHelper(inputNumbersArray);
    return this.roundingResult(resultDeducting);
  },
  subtractionHelper: function(inputNumbersArray) {
    return inputNumbersArray.reduce((prev, next) => {
      return prev - next;
    });
  },
  //MULTIPLYING
  multiplication: function(inputNumbersArray) {
    const resultMultiplying = this.multiplicationHelper(inputNumbersArray);
    return this.roundingResult(resultMultiplying);
  },
  multiplicationHelper: function(inputNumbersArray) {
    return inputNumbersArray.reduce((prev, next) => {
      return prev * next;
    });
  },
  //DIVIDING
  division: function(inputNumbersArray) {
    const resultDividing = this.divisionHelper(inputNumbersArray);
    if (isNaN(resultDividing)) {
      return 'Error';
    } else {
      return this.roundingResult(resultDividing);
    }
  },
  divisionHelper: function(inputNumbersArray) {
    return inputNumbersArray.reduce((prev, next) => {
      return prev / next;
    });
  },
  //OTHER
  roundingResult: function(operationResult) {
    if ( operationResult % 1 !== 0) {
      return operationResult.toFixed(2);
    } else {
     return operationResult;
    }
  },
  stringToNumbers: function(inputArr) {
    return inputArr.map(el => {
      return parseFloat(el);
    });
  }
};

export default helpers;

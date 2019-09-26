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
  adding: function(inputNumbersArray) {
   const resultAdding = this.addingHelper(inputNumbersArray);
   return this.roundingResult(resultAdding);
  },
  addingHelper: function(inputNumbersArray) {
    return inputNumbersArray.reduce((prev, next) => {
      return prev + next;
    });
  },
  //DEDUCTING
  deducting: function(inputNumbersArray) {
    const resultDeducting = this.deductingHelper(inputNumbersArray);
    return this.roundingResult(resultDeducting);
  },
  deductingHelper: function(inputNumbersArray) {
    return inputNumbersArray.reduce((prev, next) => {
      return prev - next;
    });
  },
  //MULTIPLYING
  multiplying: function(inputNumbersArray) {
    const resultMultiplying = this.multiplyingHelper(inputNumbersArray);
    return this.roundingResult(resultMultiplying);
  },
  multiplyingHelper: function(inputNumbersArray) {
    return inputNumbersArray.reduce((prev, next) => {
      return prev * next;
    });
  },
  //DIVIDING
  dividing: function(inputNumbersArray) {
    const resultDividing = this.dividingHelper(inputNumbersArray);
    if (isNaN(resultDividing)) {
      return 'Error';
    } else {
      return this.roundingResult(resultDividing);
    }
  },
  dividingHelper: function(inputNumbersArray) {
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

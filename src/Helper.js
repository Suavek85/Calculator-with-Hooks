const helpers = {
  //ALLOW CORRECT NUMBER FORMAT
  settingInput: function(e, setNo, getNo) {
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
    //prevent two decimal separators from being displayed
    else if (getNo[getNo.length - 1] === "." && selectedNo === ".") {
      setNo(getNo);
    }
    //remove initial zero when setting number
    else if (getNo === 0 && selectedNo !== ".") {
      setNo(selectedNo);
    }
    //default
    else {
      setNo(getNo + selectedNo);
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

const helpers = {
  settingNumber: function(e, setNo, getNo) {
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
  adding: function(calcNoArray) {
    return calcNoArray.reduce((prev, next) => {
      return (prev + next).toFixed(2);
    });
  },
  deducting: function(calcNoArray) {
    return calcNoArray.reduce((prev, next) => {
      return (prev - next).toFixed(2);
    });
  },
  multiplying: function(calcNoArray) {
    return calcNoArray.reduce((prev, next) => {
      return (prev * next).toFixed(2);
    });
  },
  dividing: function(calcNoArray) {
    const equationResult = calcNoArray.reduce((prev, next) => {
      return prev / next;
    });
    if (isNaN(equationResult)) {
      return 'Error';
    } else {
      return equationResult.toFixed(2);
    }
  },
  stringToNumbers: function(calcArr) {
    return calcArr.map(el => {
      return parseFloat(el);
    });
  }
};

export default helpers;

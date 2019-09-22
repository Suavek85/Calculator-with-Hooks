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
    else if (
      getNo[getNo.length - 1] === "." &&
      selectedNo === "."
    ) {
      setNo(getNo);
    }
    //default
    else {
      setNo(getNo + selectedNo);
    }
  },
  adding: function(calcNoArray) {
    return calcNoArray.reduce((prev, next) => {
      return prev + next;
    })
  },
  deducting: function(calcNoArray) {
    return calcNoArray.reduce((prev, next) => {
      return prev - next;
    })
  },
  stringToNumbers: function(calcArr) {
    return calcArr.map(el => {
      return parseFloat(el);
    });
  }
};

export default helpers;

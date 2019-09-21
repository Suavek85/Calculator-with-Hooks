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
    //default
    else {
      setNo(getNo + selectedNo);
    }
  }
};

export default helpers;

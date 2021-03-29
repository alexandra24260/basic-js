const CustomError = require("../extensions/custom-error");

  module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
    let turnsResult = (2**disksNumber) -1
    let secondResult = turnsResult/(turnsSpeed/(3600));
    return {turns: turnsResult, seconds: Math.floor(secondResult)}
};

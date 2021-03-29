const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(arg) {
if (typeof(arg) !== 'string'){
return false;    
}
let act1 = parseFloat(arg);
let time = (0.693 / HALF_LIFE_PERIOD);
let act2 = Math.log(MODERN_ACTIVITY / act1);
if(act1 <= 0 || act1 > MODERN_ACTIVITY || isNaN(act1)) return false;
return Math.ceil(act2/time);

};

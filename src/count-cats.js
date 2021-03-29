const CustomError = require("../extensions/custom-error");

module.exports = function countCats(cats) {
let count = 0;
for (const [key, value] of Object.entries(cats)) {
  for (const [keyn, valuen] of Object.entries(value)) {
    if (valuen === "^^"){
      count ++;
    }
  }
}
return count;
};

const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let membersArray = [];
  let arrayFirstLetters = [];
  let i;
  if (!members){
    return false;
  }
  for (const [key, value] of Object.entries(members)) {
    if (typeof(value) === 'string'){
    membersArray.push(value.trim());
    }
  }
  membersArray.sort();
    for ( i = 0; i < membersArray.length; i ++ ){
      if (typeof(membersArray[i]) === 'string'){
        arrayFirstLetters += membersArray[i][0];
      }
    }
    if (arrayFirstLetters.toString().toUpperCase().length === 1){
      return false;
    }
    else {
      let output =  arrayFirstLetters.toString().toUpperCase();
      return output.split('').sort().join('');
    }

};

function sortString(str){
  var arr = str.split('');
  var sorted = arr.sort();
  return sorted.join('');
}

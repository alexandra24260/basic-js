const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, depth) {
    if(!depth){
        depth = 1;
    }

    let hole = depth;
    arr.forEach(x => {
        if(Array.isArray(x)){
            let a = this.calculateDepth(x,depth+1);
            if(a> hole){
                hole = a;
            }
        }
    });
    return hole;
}
};
// const x = 10
// console.log(x)


// (return parseInt(x.toString().split('').reverse().reduce((i,j)=>i+j)))

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    if (x > 0) {
        if (x >= Math.pow(2, 31) - 1) {
            return 0
        } else {
            return parseInt(x.toString().split('').reverse().reduce((i, j) => i + j))
        }

    } else {
        if (x < -1*(Math.pow(2, 31))) {
            return 0
        } else {
            return -(parseInt(x.toString().split('').reverse().reduce((i, j) => i + j)))
        }
    }
};

console.log(reverse(1534236469))
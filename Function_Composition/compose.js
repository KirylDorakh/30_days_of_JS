/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return function(x) {
        for (let n = functions.length - 1; n >=0 ; n--) {
            x = functions[n](x)
        }
        return x
    }
};

functions = [x => x + 1, x => x * x, x => 2 * x];

const fn = compose(functions)
console.log(fn(4))
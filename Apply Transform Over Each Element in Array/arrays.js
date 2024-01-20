/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const map = function(arr, fn) {
    return Array.from(arr, fn)
};

console.log(map([1, 2, 3], function plusone(n) { return n + 1; }))


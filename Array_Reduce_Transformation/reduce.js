/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let val = init
    for (let n = 0; n < nums.length; n ++) {
        val = fn(val, nums[n])
    }
    return val
};

console.log(reduce([1, 2, 3, 4], function sum(accum, curr) { return accum + curr; }, 0))
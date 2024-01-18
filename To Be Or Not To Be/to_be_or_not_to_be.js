/**
 * @param {string} val
 * @return {Object}
 */
const expect = function (val) {
    return {
        toBe: (test) => {
            if (val === test) {
                return val === test
            } else {
                throw new Error("Not Equal")
            }
        },
        notToBe: (test) => {
            if (val !== test){
                return val !== test
            } else {
                throw new Error("Equal")
            }
        }
    }
};


console.log(expect(5).toBe(5))
console.log(expect(5).notToBe(5))
console.log(expect(5).notToBe(null))


let createCounter = function(n) {
    let count = n
    return function() {
        return result ++
    };
};


const f = createCounter(5, ["call","call","call"]);

console.log(f());
console.log(f());
console.log(f());
console.log(f());
console.log(f());
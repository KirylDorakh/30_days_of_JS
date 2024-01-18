let createCounter = function(n) {
    return function() {
        return n ++
    };
};


const f = createCounter(5, ["call","call","call"]);

console.log(f());
console.log(f());
console.log(f());
console.log(f());
console.log(f());
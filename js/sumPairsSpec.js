var sp = require("./sumPairs");
var shallowEqualArrays = require("shallow-equal/Arrays");

console.log(shallowEqualArrays(sp.sumPairs([1, 2, 3, 4, 5], 9), [[4, 5]]));
console.log(
  shallowEqualArrays(sp.sumPairs([1, 2, 3, 4, 5], 7), [
    [2, 5],
    [3, 4],
  ])
);

// Don't forget to add your tests :)

var sp = require("./sumPairs");
var shallowEqualArrays = require("shallow-equal/Arrays");

console.log(
  shallowEqualArrays(
    JSON.stringify(sp.sumPairs([1, 2, 3, 4, 5], 9)),
    JSON.stringify([[4, 5]])
  )
);
console.log(
  shallowEqualArrays(
    JSON.stringify(sp.sumPairs([1, 2, 3, 4, 5], 7)),
    JSON.stringify([
      [2, 5],
      [3, 4],
    ])
  )
);

// Don't forget to add your tests :)

exports.sumPairs = function (arr, target) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(target - arr[i], i + 1) > 0) {
      res.push([arr[i], target - arr[i]]);
    }
  }
  if (res.length === 0) return "unable to find pairs";
  return res;
};

// const sumPairs = function (arr, target) {
//   let res = [];
//   for (let i in arr) {
//     for (let j in arr) {
//       if (target - arr[i] === arr[j]) {
//         res.push([arr[i], arr[j]]);
//         // console.log(res);
//       }
//     }
//   }
//   for (let k = 0; k < res.length; k++) {
//     for (let h = 0; h < res.length; h++) {
//       if (res[h].reverse() === res[k]) {
//         res.pop(res[h]);
//       }
//     }
//   }
//   if (res.length === 0) return "unable to find pairs";
//   return res;
// };

// console.log(sumPairs([1, 2, 3, 4, 5], 9));
// console.log(sumPairs([1, 2, 3, 4, 5], 7));
// console.log(sumPairs([3, 1, 5, 8, 2], 27));

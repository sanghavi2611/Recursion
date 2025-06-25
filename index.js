const { fibs, fibsRec } = require('./fib.js');
const mergeSort = require('./mergeSort.js');

// Fibonacci Tests
console.log("fibs(8):", fibs(8));         // [0,1,1,2,3,5,8,13]
console.log("fibsRec(8):", fibsRec(8));   // [0,1,1,2,3,5,8,13]

// Merge Sort Tests
console.log("mergeSort([3,2,1,13,8,5,0,1]):", mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log("mergeSort([105, 79, 100, 110]):", mergeSort([105, 79, 100, 110]));

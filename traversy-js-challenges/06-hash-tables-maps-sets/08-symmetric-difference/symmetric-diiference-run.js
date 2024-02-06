const symmetricDifference = require('./symmetric-difference');

const result = symmetricDifference([1, 2, 3], [2, 3, 4]);
const result1 = symmetricDifference([1, 2, 3], [3, 4, 5]);
const result2 = symmetricDifference([1, 2, 2, 3, 4], [2, 3, 3, 4, 5]);
const result3 = symmetricDifference([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]);
const result4 = symmetricDifference([1, 2, 3], [4, 5, 6]);

console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);

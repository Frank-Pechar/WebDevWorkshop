// Solution 1

function twoSum(numsArr, target) {
  const numsSet = new Set();

  for (let i = 0; i < numsArr.length; i++) {
    const complement = target - numsArr[i];
    if (numsSet.has(complement)) {
      return [numsArr.findIndex((num) => num === complement), i];
    } else {
      numsSet.add(numsArr[i]);
    }
  }
}

// Solution 2

// function twoSum(numArr, target) {
//   let complement, i1, i2;
//   for (let i = 0; i < numArr.length; i++) {
//     complement = target - numArr[i];
//     for (let j = i + 1; j < numArr.length; j++) {
//       if (numArr[j] === complement) {
//         i2 = j;
//         i1 = i;
//         break;
//       }
//     }
//   }
//   return i2 !== -1 ? [i1, i2] : [];
// }

module.exports = twoSum;

// function longestConsecutiveSequence(numArray) {
//   numArray.sort((a, b) => a - b);
//   console.log(numArray);
//   let mostConsecutive = 0;
//   let consecutiveNums = 0;
//   for (let i = 0; i < numArray.length - 1; i++) {
//     if (numArray[i] + 1 === numArray[i + 1]) {
//       if (consecutiveNums > 0) {
//         consecutiveNums++;
//       } else {
//         consecutiveNums = 2;
//       }
//     } else {
//       if (consecutiveNums > mostConsecutive) mostConsecutive = consecutiveNums;
//     }
//   }
//   if (consecutiveNums > mostConsecutive) mostConsecutive = consecutiveNums;
//   return mostConsecutive;
// }
function longestConsecutiveSequence(nums) {
  // Create new set
  const numSet = new Set(nums);
  // Create longest sequence variable
  let longestSequence = 0;

  // Loop through set
  for (const num of numSet) {
    // If set does not have num - 1. Identify the starting element of a potential consecutive sequence.
    if (!numSet.has(num - 1)) {
      // Create current num and current sequence variables
      let currentNum = num;
      let currentSequence = 1;

      // While set has current num + 1. Is the next consecutive number in the set?
      while (numSet.has(currentNum + 1)) {
        // Increment current num and current sequence
        currentNum++;
        currentSequence++;
      }

      // Set longest sequence to max of longest sequence and current sequence
      longestSequence = Math.max(longestSequence, currentSequence);
    }
  }

  // Return longest sequence
  return longestSequence;
}

const result = longestConsecutiveSequence([100, 4, 200, 1, 3, 2]);
const result2 = longestConsecutiveSequence([0, 3, 7, 2, 5, 8, 4, 6, 9, 1]);

console.log(result);
console.log(result2);

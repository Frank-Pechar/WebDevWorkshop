function longestConsecutiveSequence(numArray) {
  numArray.sort((a, b) => a - b);
  let mostConsecutive = 0;
  let consecutiveNums = 0;
  for (let i = 0; i < numArray.length - 1; i++) {
    if (numArray[i] + 1 === numArray[i + 1]) {
      if (consecutiveNums > 0) {
        consecutiveNums++;
      } else {
        consecutiveNums = 2;
      }
    } else {
      if (consecutiveNums > mostConsecutive) mostConsecutive = consecutiveNums;
    }
  }
  if (consecutiveNums > mostConsecutive) mostConsecutive = consecutiveNums;
  return mostConsecutive;
}

module.exports = longestConsecutiveSequence;

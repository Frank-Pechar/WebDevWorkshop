function countOccurrences(str, charP) {
  cnt1 = 0;
  for (let charS of str) {
    charS === charP && cnt1++;
  }
  // return [cnt1, str.split(charP).length - 1];
  return cnt1;
}

module.exports = countOccurrences;

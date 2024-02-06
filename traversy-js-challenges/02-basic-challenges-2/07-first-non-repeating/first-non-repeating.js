function findFirstNonRepeatingCharacter(letters) {
  // Solution1 - Using an object
  /*
  const letterCountObj = {};

  for (let i = 0; i < letters.length; i++) {
    if (letterCountObj[letters[i]]) {
      letterCountObj[letters[i]]++;
    } else {
      letterCountObj[letters[i]] = 1;
    }
  }
  console.log(letterCountObj);

  for (const letterCnt in letterCountObj) {
    if (letterCountObj[letterCnt] === 1) return letterCnt;
  }
  return null;
  */

  // Solution1 - Using a map

  const letterCountMap = new Map();

  for (const ltr of letters) {
    letterCountMap.set(ltr, (letterCountMap.get(ltr) || 0) + 1);
  }
  console.log(letterCountMap);

  for (let [key, value] of letterCountMap) {
    if (value === 1) return key;
  }
  return null;
}

module.exports = findFirstNonRepeatingCharacter;

function areAllCharactersUnique(letters) {
  // Solution 1 - Array
  /*
  const uniqueArr = [];
  for (let i = 0; i < letters.length; i++) {
    if (!uniqueArr.includes(letters[i])) {
      uniqueArr.push(letters[i]);
    } else {
      return false;
    }
  }
  return true;
  */

  // Solution 2 - Object
  /*
  const objLetters = {};

  for (let i = 0; i < letters.length; i++) {
    if (objLetters[letters[i]]) {
      return false;
    } else {
      objLetters[letters[i]] = true;
    }
  }
  return true;
*/

  const setLetters = new Set();

  for (let i = 0; i < letters.length; i++) {
    if (setLetters.has(letters[i])) {
      return false;
    } else {
      setLetters.add(letters[i]);
    }
  }
  return true;
}

module.exports = areAllCharactersUnique;

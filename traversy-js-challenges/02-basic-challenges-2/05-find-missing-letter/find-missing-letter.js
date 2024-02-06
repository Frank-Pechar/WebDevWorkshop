function findMissingLetter(letterArr) {
  if (!letterArr || letterArr.length === 0) return '';

  // Solution 1
  /*
  let prevCode = letterArr[0].charCodeAt(0);

  for (let i = 1; i < letterArr.length; i++) {
    const curCode = letterArr[i].charCodeAt(0);
    if (curCode - 1 != prevCode) {
      return String.fromCharCode(curCode - 1);
    }
    prevCode = curCode;
  }
  */

  // Solution 2

  const alphabetString = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  let startIndex = alphabetString.indexOf(letterArr[0]);
  console.log(alphabetString[startIndex]);

  for (let i = 0; i < letterArr.length; i++) {
    if (letterArr[i] !== alphabetString[startIndex])
      return alphabetString[startIndex];
    startIndex++;
  }
}

module.exports = findMissingLetter;

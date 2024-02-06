function findMissingLetter(letterArr) {
  'use strict';

  // Solution 1 - using map and find

  // let prevCode = letterArr[0].charCodeAt(0);

  // const missingCode = letterArr
  //   .map((letter) => letter.charCodeAt(0))
  //   .find((code) => {
  //     if (code - prevCode > 1) {
  //       return true;
  //     } else {
  //       prevCode = code;
  //       return false;
  //     }
  //   });

  // return missingCode ? String.fromCharCode(missingCode - 1) : '';

  // Solution 2 - Using filter

  //   let prevCode = letterArr[0].charCodeAt(0);

  //   const [missingCode] = letterArr.filter((ltr) => {
  //     const curCode = ltr.charCodeAt(0);
  //     if (curCode - prevCode > 1) {
  //       return true;
  //     } else {
  //       prevCode = curCode;
  //       return false;
  //     }
  //   });

  //   return String.fromCharCode(prevCode + 1);

  // Solution 3 - Using reduce

  let prevCode = letterArr[0].charCodeAt(0);

  const missingCode = letterArr.reduce((missingCode, cur) => {
    const curCode = cur.charCodeAt(0);
    if (curCode - prevCode > 1) {
      prevCode = curCode;
      return curCode;
    } else {
      prevCode = curCode;
      return missingCode;
    }
  }, null);
  return missingCode
    ? String.fromCharCode(missingCode - 1)
    : 'No missing letter';
}

module.exports = findMissingLetter;

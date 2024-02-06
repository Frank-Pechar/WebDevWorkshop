function validAnagrams(word1, word2) {
  // Solution 1
  //   word1Obj = {};
  //   word2Obj = {};

  //   if (word1.length !== word2.length) {
  //     return false;
  //   }

  //   for (let i = 0; i < word1.length; i++) {
  //     word1[i] in word1Obj ? (word1Obj[word1[i]] += 1) : (word1Obj[word1[i]] = 1);
  //     word2[i] in word2Obj ? (word2Obj[word2[i]] += 1) : (word2Obj[word2[i]] = 1);
  //   }

  //   for (const ltr in word1Obj) {
  //     if (word1Obj[ltr] !== word2Obj[ltr]) return false;
  //   }

  //   return true;

  // Solution 2

  const countChars = (word) => {
    return word.split('').reduce((obj, ltr) => {
      obj[ltr] = (obj[ltr] || 0) + 1;
      return obj;
    }, {});
  };

  const ltrCnt1 = countChars(word1);
  const ltrCnt2 = countChars(word2);

  return Object.keys(ltrCnt1).every((ltr) => ltrCnt1[ltr] === ltrCnt2[ltr]);

  // console.log(countChars(word1));
  // console.log(countChars(word2));

  // const sumWithInitial = array1.reduce(
  //   (accumulator, currentValue) => accumulator + currentValue,
  //   initialValue
  // );
}

module.exports = validAnagrams;

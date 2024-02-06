function countVowels(str) {
  const charVowels = str.toLowerCase().match(/[aeiouy]/g);
  return charVowels.length;
}

module.exports = countVowels;

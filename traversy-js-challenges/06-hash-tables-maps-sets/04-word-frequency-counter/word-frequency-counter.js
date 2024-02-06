'use strict';
function wordFrequencyCounter(str) {
  const words = str.toLowerCase().split(/\W+/);
  const wordsMap = new Map();
  for (let word of words) {
    if (word === '') continue;
    if (wordsMap.has(word)) {
      wordsMap.set(word, wordsMap.get(word) + 1);
    } else {
      wordsMap.set(word, 1);
    }
  }
  return wordsMap;
}

module.exports = wordFrequencyCounter;

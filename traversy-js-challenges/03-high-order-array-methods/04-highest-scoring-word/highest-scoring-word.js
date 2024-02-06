'use strict';
function highestScoringWord(str) {
  const wordScoreObj = {};
  const wordsArr = str.split(' ');

  const wordScoreArr = wordsArr.map((word) => {
    let wordScore = 0;
    for (const ltr of word) {
      wordScore += ltr.charCodeAt(0) - 96;
    }
    return { word, wordScore };
  });

  let highestScoringWord = wordScoreArr[0].word;
  let highestScoringWordCnt = wordScoreArr[0].wordScore;

  wordScoreArr.forEach((wordObj) => {
    if (wordObj.wordScore > highestScoringWordCnt) {
      highestScoringWord = wordObj.word;
      highestScoringWordCnt = wordObj.wordScore;
    }
  });
  return highestScoringWord;
}

// (code >= 97 && code <= 122)
module.exports = highestScoringWord;

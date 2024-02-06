function anagramGrouping(anagramArr) {
  const anagramMap = new Map();
  anagramArr.forEach((word) => {
    const key = word.split('').sort().join('');
    if (anagramMap.has(key)) {
      anagramMap.get(key).push(word);
    } else {
      anagramMap.set(key, [word]);
    }
  });
  return Array.from(anagramMap.values());
}

module.exports = anagramGrouping;

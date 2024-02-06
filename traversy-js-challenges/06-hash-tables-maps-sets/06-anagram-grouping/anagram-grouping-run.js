const anagramGrouping = require('./anagram-grouping');

const result = anagramGrouping(['cat', 'act', 'dog', 'god', 'tac']);
const result2 = anagramGrouping([
  'listen',
  'silent',
  'enlist',
  'hello',
  'world',
]);

console.log(result);
console.log(result2);

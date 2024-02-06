const generateHashtag = require('./hashtag-generator');

let result = generateHashtag('hello   world');
console.log(result);

result = generateHashtag(' Hello there thanks for trying my Kata');
console.log(result);

result = generateHashtag('    Hello     World   ');
console.log(result);

result = generateHashtag('');
console.log(result);

result = generateHashtag(
  'This is a very very very very very very very very very very very very very very long input that should result in a false hashtag because it exceeds the character limit of 140'
);
console.log(result);

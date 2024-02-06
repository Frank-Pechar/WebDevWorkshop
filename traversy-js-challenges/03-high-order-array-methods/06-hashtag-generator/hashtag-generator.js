function generateHashtag(str) {
  const hashtag = str.split(/\s+/).reduce(function (tag, word) {
    return tag + word.charAt(0).toUpperCase() + word.substring(1);
  }, '#');

  return hashtag.length == 1 || hashtag.length > 140 ? false : hashtag;
}

// function generateHashtag(words) {
//   if (words.trim() === '') return false;

//   const combined = words
//     .toLowerCase()
//     .trim()
//     .split(/\s+/)
//     .map((word) => word[0].toUpperCase() + word.slice(1))
//     .join('');

//   hashtag = '#' + combined;
//   return hashtag.length > 140 ? false : hashtag;
// }

module.exports = generateHashtag;

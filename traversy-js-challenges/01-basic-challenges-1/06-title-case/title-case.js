function titleCase(str) {
  strArr = str.toLowerCase().split(' ');
  // strArr.forEach((word) => {
  //   word = word[0].toUpperCase() + word.slice(1);
  // });
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1);
  }
  return strArr.join(' ');
}

module.exports = titleCase;

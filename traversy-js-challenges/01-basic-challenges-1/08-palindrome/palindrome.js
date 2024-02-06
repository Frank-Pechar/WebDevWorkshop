function isPalindrome(str) {
  /* Using RegExp
  const strEd = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const revStr = strEd.split('').reverse().join('');

  // revStr = '';
  // for (let i = strEd.length - 1; i >= 0; i--) {
  //   revStr += strEd[i];
  // }

  // console.log(strEd, revStr);
  */

  let strLC = str.toLowerCase();
  const strAN = removeNonAlphaNumeric(strLC);
  return reverseWords(strAN);

  function removeNonAlphaNumeric() {
    let strEd = '';
    for (let i = 0; i < strLC.length; i++) {
      if (checkAlphanumeric(strLC[i])) strEd += strLC[i];
    }
    console.log(strEd);
    return strEd;
  }

  function checkAlphanumeric(char) {
    const code = char.charCodeAt(0);
    return (
      (code >= 48 && code <= 57) || // Numbers 0-9
      (code >= 97 && code <= 122)
    );
  }

  function reverseWords(strAN) {
    const revStr = [...strAN].reverse();
    return strAN === revStr.join('');
  }
}

module.exports = isPalindrome;

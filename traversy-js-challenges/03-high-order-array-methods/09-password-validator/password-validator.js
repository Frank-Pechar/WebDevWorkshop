function validatePassword(pwStr) {
  pwArr = Array.from(pwStr);

  lengthOk = pwArr.length > 7;
  hasUppercase = pwArr.some(
    (x) => x === x.toUpperCase() && x !== x.toLowerCase()
  );
  hasLowercase = pwArr.some(
    (x) => x === x.toLowerCase() && x !== x.toUpperCase()
  );
  hasDigit = pwArr.some((x) => !isNaN(parseInt(x)));

  console.log(pwArr);
  console.log('hasUppercase - ', hasUppercase);
  console.log('hasLowercase - ', hasLowercase);
  console.log('hasDigit - ', hasDigit);
  console.log('lengthOk - ', lengthOk);
  console.log('*******************');
  return hasUppercase && hasLowercase && hasDigit && lengthOk;
}

module.exports = validatePassword;

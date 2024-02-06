function formatPhoneNumber(phoneArr) {
  const phoneStr = phoneArr.join('');
  const phoneFmt = `(${phoneStr.slice(0, 3)}) ${phoneStr.slice(
    3,
    6
  )}-${phoneStr.slice(6)}`;

  return phoneFmt;
}

module.exports = formatPhoneNumber;

function arrayIntersection(arr1, arr2) {
  const intArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !intArr.includes(arr1[i]))
      intArr.push(arr1[i]);
  }
  return intArr;
}

module.exports = arrayIntersection;

function symmetricDifference(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const resultArr = [];
  for (const item of set1) {
    if (!set2.has(item)) resultArr.push(item);
  }

  for (const item of set2) {
    if (!set1.has(item)) resultArr.push(item);
  }
  return resultArr;
}

module.exports = symmetricDifference;

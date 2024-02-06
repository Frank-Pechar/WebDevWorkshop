function removeDuplicates(arr) {
  // Easy using Set
  // return [...new Set(arr)];
  // or
  return Array.from(new Set(arr));

  /* more difficult to use loop
  const uniqueArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
  */
}

module.exports = removeDuplicates;

// [a, a, b, c, c]

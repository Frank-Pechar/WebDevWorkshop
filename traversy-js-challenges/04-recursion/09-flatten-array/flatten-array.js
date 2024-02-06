function flattenArray(arr) {
  let result = [];

  for (const item of arr) {
    // If item is an array, call flattenArray again and concat the result
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      // If item is not an array
      result.push(item);
    }
  }

  return result;
}

module.exports = flattenArray;

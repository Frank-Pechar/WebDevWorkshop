function sumOfEvenSquares(arr) {
  const result = arr
    .filter((num) => num % 2 === 0)
    .map((num) => num ** 2)
    .reduce((sum, num) => (sum += num), 0);

  return result;
}

module.exports = sumOfEvenSquares;

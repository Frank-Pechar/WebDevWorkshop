function findMaxNumber(numbers) {
  // return Math.max(...numbers);
  let largest = numbers[0];
  numbers.forEach((num) => {
    num > largest ? (largest = num) : num;
  });
  return largest;
}

module.exports = findMaxNumber;

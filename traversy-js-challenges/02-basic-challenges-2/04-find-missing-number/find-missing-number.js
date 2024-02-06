function findMissingNumber(numbers) {
  if (!numbers) {
    return undefined;
  } else if (numbers.length === 0) {
    return 1;
  }

  // numbers.sort(function (a, b) {
  //   return a - b;
  // });

  // for (var i = 0; i < numbers.length; i++) {
  //   if (numbers[i] !== i + 1) {
  //     return i + 1;
  //   }
  // }

  const expectedSum = ((numbers.length + 1) * (numbers.length + 2)) / 2;
  const actualSum = numbers.reduce((accumulator, currentNumber) => {
    return (accumulator += currentNumber);
  }, 0);

  console.log(expectedSum, actualSum);
  return expectedSum - actualSum;
}

module.exports = findMissingNumber;

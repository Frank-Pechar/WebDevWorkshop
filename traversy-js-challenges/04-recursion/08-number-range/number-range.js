function rangeOfNumbers(startNum, endNum) {
  if (startNum === endNum) {
    return [startNum];
  }

  console.log(startNum, endNum);

  const numbers = rangeOfNumbers(startNum, endNum - 1);
  console.log('A - ' + numbers);

  numbers.push(endNum);
  console.log('B - ' + numbers);
  console.log('********************************');

  // Return the 'numbers' array containing all the numbers from startNum to endNum
  return numbers;
}

module.exports = rangeOfNumbers;

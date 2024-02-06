function fibonacci(num) {
  console.log(num);
  if (num < 2) return num;

  // Return the sum of the two previous numbers
  return fibonacci(num - 1) + fibonacci(num - 2);
}

module.exports = fibonacci;

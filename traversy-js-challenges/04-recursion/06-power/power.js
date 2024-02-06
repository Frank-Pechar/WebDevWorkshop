function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  } else {
    // Return base multiplied by itself exponent - 1 times
    return base * power(base, exponent - 1);
  }
}

module.exports = power;

function fizzBuzzArray(num) {
  const fizzBuzzArr = [];
  for (var i = 1; i <= num; i++) {
    if (i % 3 === 0)
      if (i % 5 === 0) fizzBuzzArr.push('FizzBuzz');
      else fizzBuzzArr.push('Fizz');
    else if (i % 5 === 0) fizzBuzzArr.push('Buzz');
    else fizzBuzzArr.push(i);
  }
  return fizzBuzzArr;
}

module.exports = fizzBuzzArray;

'use strict';

// R E C U R S I O N

// RECURSION FOR PROCESSING NESTED DATA STRUCTURES

/*******************************************/
// RECURSION to FLATTEN NESTED OBJECTS

const myself = {
  name: 'Frank',
  friends: [
    {
      name: 'Kim',
      friends: [
        {
          name: 'Stephanie',
          friends: [{ name: 'Alita' }],
        },

        {
          name: 'Nathan',
          friends: [
            {
              name: 'Jerry',
            },
            {
              name: 'Marc',
            },
            {
              name: 'Rick',
            },
            {
              name: 'Mike',
            },
          ],
        },
      ],
    },
    {
      name: 'Sewell',
    },
    {
      name: 'Bellamy',
    },
  ],
};

function getFriendNames(person) {
  const collectedNames = [];

  if (!person.friends) {
    return [];
  }

  for (const friend of person.friends) {
    collectedNames.push(friend.name);
    collectedNames.push(...getFriendNames(friend));
  }

  return collectedNames;
}

console.log('Flattened Nested Object - ', getFriendNames(myself));

/*******************************************/
// RECURSION to FLATTEN NESTED ARRAYS

function flattenArray(arr) {
  let result = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  }

  return result;
}

const flatArray = flattenArray([1, 2, 3, [4, 5, [6, 7, 8], 9], 10]);

console.log('Flattened Nested Array - ', flatArray);

/*******************************************/
// RECURSION TO CALCULATE THE POWER OF A NUMBER

function powerOf(x, n) {
  return n === 1 ? x : x * powerOf(x, n - 1);
}

console.log('5 to the power of 4 - ', powerOf(5, 4));

/*******************************************/
// RECURSION TO CALCULATE THE FACTORIAL OF A NUMBER

function factorial(num) {
  return num === 0 || num === 1 ? 1 : num * factorial(num - 1);
}

const factorialResult = factorial(7);

console.log('Factorial of Number 7 - ', factorialResult);

/*******************************************/
// RECURSION TO RETURN PERMUTATIONS OF A STRING

function permutations(str) {
  const result = [];

  if (str.length === 0) {
    result.push('');
    return result;
  }

  for (let i = 0; i < str.length; i++) {
    const firstChar = str[i];
    const restOfString = str.slice(0, i) + str.slice(i + 1);
    const subPermutations = permutations(restOfString);

    for (let j = 0; j < subPermutations.length; j++) {
      result.push(firstChar + subPermutations[j]);
    }
  }

  return result;
}

const permutationsResult = permutations('abc');

console.log('Permutations of abc - ', permutationsResult);

/*******************************************/
// RECURSION TO RETURN FIBONACCI NUMBER AT A CERTAIN INDEX

function fibonacci(num) {
  if (num < 2) return num;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

const fibonacciResult = fibonacci(8);
console.log('Fibonacci number at index 9 - ', fibonacciResult);

/*******************************************/
// RECURSION TO REVERSE THE ORDER OF A STRING

let returnVar;

function reverseString(str) {
  return str === '' ? '' : reverseString(str.substr(1)) + str.charAt(0);
}

const reversedString = reverseString('Universe');

console.log('Universe reversed - ', reversedString);

/*******************************************/
// RECURSION TO RETURN A NUMBERS ARRAY CONTAINING ALL NUMBERS IN RANGE

function rangeOfNumbers(startNum, endNum) {
  if (startNum === endNum) {
    return [startNum];
  }

  const numbers = rangeOfNumbers(startNum, endNum - 1);

  numbers.push(endNum);

  return numbers;
}

const range = rangeOfNumbers(3, 21);
console.log('Array with Numbers in the range of 3 - 21 - ', range);

/*******************************************/
// RECURSION TO SUM UP ALL THE NUMBERS IN AN ARRAY

function sumArray(arr) {
  return arr.length === 0 ? 0 : arr[0] + sumArray(arr.slice(1));
}

console.log('Sum numbers in an array - ', sumArray([5, 20, 35]));

/*******************************************/
// RECURSION TO SUM UP NUMBERS FROM 1 TO GIVEN NUMBER

function sumUpTo(n) {
  return n === 1 ? 1 : n + sumUpTo(n - 1);
}

console.log('Sum up numbers from 1 to 5 - ', sumUpTo(5));

/*
function countDown(num) {
  if (num <= 0) {
    console.log('All done!');
    return;
  }

  console.log(num);
  num--;
  countDown(num);
}
countDown(10);

/*
// iife
var iifeVar1 = 5;
var iifeVar2 = 3;
(function () {
  var iifeVar1 = 7;
  var iifeVar2 = 5;
  console.log(iifeVar1 * iifeVar2);
})();

// Block Scope - no need for iife function
const blockScopeVar1 = 7;
const blockScopeVar2 = 5;
{
  const blockScopeVar1 = 3;
  const blockScopeVar2 = 5;
  console.log(blockScopeVar1 * blockScopeVar2);
}

// Factory Function
function createTaxCalculator(taxRate) {
  function calculateTax(amount) {
    return taxRate * amount;
  }
  return calculateTax;
}

const taxRateCalc1 = createTaxCalculator(10);
const taxRateCalc2 = createTaxCalculator(15);
const amount1 = taxRateCalc1(1000);
const amount2 = taxRateCalc2(1000);
console.log(amount1, amount2);

let recursionVar;
function recursionPower(x, y) {
  if (y === 1) return x;
  return x * recursionPower(x, y - 1);
}

console.log(recursionPower(2, 3));
/*

function add(num1, num2) {
  return num1 + num2;
}

// function sendDataToServer() {}

console.log(add(1, 5)); // 6
console.log(add(12, 15)); // 27

function addRandom(num1) {
  return num1 + Math.random();
}

console.log(addRandom(5));

let previousResult = 0;

function addMoreNumbers(num1, num2) {
  const sum = num1 + num2;
  previousResult = sum;
  return sum;
}

console.log(addMoreNumbers(1, 5));

const hobbies = ['Sports', 'Cooking'];

function printHobbies(h) {
  h.push('NEW HOBBY');
  console.log(h);
}

printHobbies(hobbies);


function createTaxCalculator(tax) {
  function calculateTax(amount) {
    return amount * tax;
  }

  return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));
*/

'use strict';

const numbers = [1, 2, 3, 4, 5];

/**
 * map: Transforms array elements with a provided function, creating a new array.
 */

const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers);

/**
 * filter: Creates a new array with elements that satisfy a specified condition.
 */

const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

/**
 * reduce: Accumulates array elements into a single value using a provided function.
 */

const sumNumbers = numbers.reduce((sum, num) => {
  return (sum += num);
}, 0);
console.log(sumNumbers);

/**
 * forEach: Iterates through array elements and applies a function without creating a new array.
 */

/**
 * find: Returns the first array element that satisfies a specified condition.
 */

/**
 * some: Checks if at least one array element satisfies a condition.
 */

/**
 * every: Checks if all array elements satisfy a condition.
 */

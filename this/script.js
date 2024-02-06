hljs.highlightAll();

//*** t h i s - K E Y W O R D - R E F E R E N C E S ******
//*** "this" Keyword will refer to 1) Global Context    **
//*** (window), or, 2) INSIDE A FUNCTION - Object/owner **
//*** that called the function (whether manually or     **
//*** through Browser, 3) Bound data/oject. Reference   **
//*** will differ whether in strict or non-strict mode  **
//********************************************************

// C A S E 1

console.log('non-strict - global context - ', this);

const logThisArrow1 = () => {
  console.log('non-strict - arrow function call - ', this);
};

const logThis1 = function () {
  console.log('non-strict - global context function call - ', this);
};

const logThisHandler1 = function () {
  console.log('********************************');
  console.log('non-strict - button click event function call - ', this);
};

const logThisArrowHandler1 = () => {
  console.log('non-strict - button click event arrow function call - ', this);
};

const person = {
  name: 'Frank',
  logThis1() {
    console.log('non-strict - object function call - ', this);
  },
};

logThis1();

logThisArrow1();

person.logThis1();

console.log('********************************');

document.querySelector('.btn-case1').addEventListener('click', logThisHandler1);

document
  .querySelector('.btn-case1')
  .addEventListener('click', logThisArrowHandler1);

(() => {
  'use strict';

  console.log('strict - global context - ', this);

  const logThisArrow1 = () => {
    console.log('strict - arrow function call - ', this);
  };

  const logThis1 = function () {
    console.log('strict - global context function call - ', this);
  };

  const logThisHandler1 = function () {
    console.log('********************************');
    console.log('strict - button click event function call - ', this);
  };

  const logThisArrowHandler1 = () => {
    console.log('strict - button click event arrow function call - ', this);
  };

  const person1 = {
    name: 'Frank',
    logThis1() {
      console.log('strict - object function call - ', this);
    },
  };

  logThis1();

  logThisArrow1();

  person1.logThis1();

  document
    .querySelector('.btn-case2')
    .addEventListener('click', logThisHandler1);

  document
    .querySelector('.btn-case2')
    .addEventListener('click', logThisArrowHandler1);
})();

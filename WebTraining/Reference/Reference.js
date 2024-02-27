let element;

// O B J E C T S

// new, isPrototypeOf, instanceof, hasOwnProperty
// console.log value: [[Prototype]] = __proto__

// Class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2030 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2030 - this.birthYear;
  }

  static hey() {
    console.log('Hey there!');
  }

  // Set a property that already exists
  // set fullName(name) {
  //   if (name.includes(' ')) this._fullName = name;
  //   else alert(`${name} is not a full name!`);
  // }

  // get fullName() {
  //   return this._fullName;
  // }

  // // Static method
  // static hey() {
  //   console.log('Hey there 👋');
  //   console.log(this);
  // }
}

const frank = new PersonCl('Frank', 1970);

// PersonCl.hey = function () {
//   console.log('Hey there!');
// };

console.log(frank.age);

console.log(PersonCl.hey());
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2020 - this.birthYear);
};
Person.prototype.species = 'Homo Sapiens';

const frank = new Person('Frank', 1970);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr = new Array(1, 2, 3, 4, 5, 3, 7, 8, 3, 10);
console.log(arr.__proto__.__proto__);
console.log(Array.prototype);
console.log(Array.prototype === arr.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

// const PersonCl = class {};
class PersonCl {}


const account = {
  owner: 'Frank',
  movements: [200, 300, 400, 500],
  get latest() {
    // return this.movements[this.movements.length - 1];
    return this.movements.at(0);
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

account.latest = 1000;

console.log(account.latest);
console.log(account.movements);

/*
// console.log(Person.prototype);
// console.dir(Person.prototype.constructor);
// console.log('instanceof ', frank instanceof Person);
// console.log('hasOwnProperty ', frank.hasOwnProperty('firstName'));
// console.log('hasOwnProperty ', frank.hasOwnProperty('species'));
// console.log(frank.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(frank));
// console.log(frank.__proto__.__proto__.__proto__);

/*
// N U M B E R S
Number.prototype.toFixed(); // num to str - more precise than toString();
numValue.toFixed(digits);

Number(strValue); //or prefix string wth +

parseFloat(value); //both return a number or NaN
parseInt(value);

Number.isFinite(); //use Number namespace! - returns true if number and not infinity

Math.round(value); //these are static methods
Math.random();
Math.min(val1, val2, val3);
Math.max(val1, val2, val3);
Math.trunc(value);
Math.abs(value);
Math.floor(value);
Math.ceil(value);

document.querySelector('selector1, selector2, selectorN');
document.querySelectorAll('selector1, selector2, selectorN');
element.closest('selector');
document.getElementById('id');
document.getElementsByClassName('className1 className2 classNameN');
document.getElementsByTagName('tagName1');
element.matches(selector);

element.parentElement;
element.children; //html collection (text nodes excluded)
element.firstElementChild;
element.lastElementChild;
element.firstChild;
element.lastChild;
element.nextElementSibling;
element.previousElementSibling;
element.childNodes;
element.parentNode;

document.body; //selects body element node
document.head; //selects head element node
document.documentElement; //selects html element node

// e.g.
const myElement = document.getElementById('idElement');
for (const child of myElement.children) {
  console.log(child.tagName);
}

document.createElement('tsgName, options');
element.append(param1, param2, paramN); //strings, elements, mult items
element.cloneNode(deep);
element.remove();
element.replaceChild(newElement, oldElement);
parentElement.contains(descendantElement);
document.createDocumentFragment(); //creates document fragment object - !part of DOM so no reflow when adding elements
element.appendChild(descendantElement); //only one element
element.removeChild(childElement);
document.importNode(externalNode, deep);
element.getBoundingClientRect(); //creates DOMRect object (size & position)

parentElement.insertBefore(newElement, referenceElement);
element.insertAdjacentHTML('beforebegin', variable | 'string'); //inserts
element.insertAdjacentText('beforebegin', variable | 'string'); //inserts
element.insertAdjacentElement('beforebegin', element); //inserts (old support)
element.innerHTML = 'string'; //add elements, attributes, and text can be a SECURITY RISK.
element.innerText = 'string'; //uses styling, !whitespace, as rendered
element.textContent = 'string'; //ignores styling an contains whitespace and hidden elements

element.getAttribute('attributeName'); //may not need because most attribute properties can be accessed directly
element.setAttribute('attributeName', 'value');
element.removeAttribute('attributeName');
element.hasAttribute('attributeName');
element.dataset.dataSetName = 'value'; // === 'value'

element.style.property = 'value';
element.classList.add('className');
element.classList.remove('className');
element.classList.replace('oldClassName', 'newClassName');
element.classList.toggle('className');
element.classList.contains('className');
window.getComputedStyle(element);

element.addEventListener('event', functionHandler);
element.removeEventListener('event', functionHandler);
e.preventDefault();
e.stopPropagation();
e.target === 'element';
e.target.style.color = 'white';
e.currentTarget === element;
e.currentTarget.style.color = 'blue';
e.type; //read-only property click, load, error, etc...
e.key; //read-only property key pressed

Function.prototype.bind(); //can hard-code arguments in bind created function and provide variable arguments when called
bind(thisArg);
bind(thisArg, arg1, arg2, argN);
function1.bind(null, val1, val2);

Object.assign(); //shallow copy/merge object(s) - !methods or prototype properties
Object.assign(target, source1);
Object.assign(target, source1, source2, sourceN);

Object.create(proto); //create new object with prototypes
Object.create(proto, propertiesObject); //propertiesObject - writable, enumerable, configurable
Object.defineProperty() - //static method defines a new property, or modifies an existing property, on an object, and returns the object
  Object.defineProperties(); //same but for multiple properties

oldEl.replaceWith(newEl1, newEl2, newElN); //replace element with new or even a clone of itself

document.addEventListener('DOMContentLoaded', function (e) {}); //html & JavaScript
document.addEventListener('load', function (e) {}); //all external resources
document.addEventListener('beforeunload', function (e) {});

/*

toFixed
floor instead of trunc
isFinite - floating point & integers
isInteger 
parseFloat - converts string with trailing letters
parseInt -
HTML: data-
Javascript: .dataset


nodeName - Name of current node
event.stopPropagation() - Current event
event.stopImmediatePropagation() - All events
element.propertyName - Sets or gets a CSS property name of transition 
element.offsetWidth | Height | Top | Left (relation to parent)
document.cookie - sets or gets cookies;
document.title - sets or gets title of current document;
window.location - sets or gets url of current window;
window.navigator - Returns object containing browser and operating system info;
window.alert(message);
window.prompt(message, defaultValue);



const array1 = ['a', 'b', 'c', 'd', 'e'];
const array2 = ['f', 'g', 'h', 'i', 'j'];

new Array();
new Array(element1, element2, elementN);

Array.from();
arr.from(iterableOrArrayLike);
arr.from(arrayLike);
arr.from(arrayLike, mapFn);
arr.from(arrayLike, mapFn, thisArg);

Array.prototype.at();
array1.at(index);

Array.prototype.concat();
array1.concat(array2);

Array.prototype.copyWithin();
array1.copyWithin(0, 3, 4); //expected output: Array ["d", "b", "c", "d", "e"]
copies;

Array.prototype.entries();
const iterator1 = array1.entries(); // returns an array iterator object
iterator1.next().value; //expected output: Array [0, "a"]
iterator1.next().value; //expected output: Array [1, "b"]

Array.prototype.includes(); //equal conditions
array1.includes('c');

Array.prototype.some();
array.some(callbackFn, thisArg); //uses callback function

Array.prototype.every();
array.every(callbackFn, thisArg); //uses callback function

Array.prototype.fill();
const array4 = [1, 2, 3, 4];
array1.fill(0, 2, 4); // Fill with 0 from position 2 until position 4 - output: Array [1, 2, 0, 0]

Array.prototype.filter(); //uses callback function
const words = [
  'spray',
  'limit',
  'elite',
  'exuberant',
  'destruction',
  'present',
];
// Expected output: Array ["exuberant", "destruction", "present"]
const result = words.filter((word) => word.length > 6);

Array.prototype.find(); //uses callback function
const array5 = [5, 12, 8, 130, 44];
const found = array5.find((element) => element > 10); // Expected output: 12

Array.prototype.findIndex();
array1.findIndex(isLargeNumber); //uses callback function

Array.prototype.flat();
arr2.flat(Infinity); //1 up to Infinity

Array.prototype.join();
join();
join(separator);

String.prototype.split();
split(separator);
split(separator, limit);


// Monads
//
// Maybe = function (value) {
//   var Nothing = {
//     bind: function (fn) {
//       return this;
//     },
//     isNothing: function () {
//       return true;
//     },
//     val: function () {
//       throw new Error('cannot call val() nothing');
//     },
//     maybe: function (def, fn) {
//       return def;
//     },
//   };

//   var Something = function (value) {
//     return {
//       bind: function (fn) {
//         return Maybe(fn.call(this, value));
//       },
//       isNothing: function () {
//         return false;
//       },
//       val: function () {
//         return value;
//       },
//       maybe: function (def, fn) {
//         return fn.call(this, value);
//       },
//     };
//   };

//   if (typeof value === 'undefined' || value === null) return Nothing;

//   return Something(value);
// };
*/

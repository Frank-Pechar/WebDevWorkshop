const isPalindrome = require('./palindrome');

const result1 = isPalindrome('raCec#ar');
const result2 = isPalindrome('r?A!cecArs');
// isPalindrome('racec#ar');
// isPalindrome('ra?!cecars');

console.log(result1, result2);

'use strict';

const promiseTest = new Promise(function (resolve, reject) {
  setTimeout(() => {
    if (Math.random() <= 0.5) {
      if (Math.random() <= 0.5) throw new Error('Reject 1');
      resolve('Done');
    } else {
      reject(new Error('Reject 2'));
    }
  }, 1000);
});

promiseTest.then(res => console.log(res)).catch(err => console.error(err));

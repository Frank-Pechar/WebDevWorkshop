'use strict';

const wait = sec =>
  new Promise((resolve, reject) => setTimeout(resolve, sec * 1000));

wait(2)
  .then(() => {
    console.log('Done1');
    return wait(2);
  })
  .then(() => console.log('Done2'));

/*
const wait = sec => new Promise(resolve => setTimeout(resolve, sec * 1000));

wait(1).then(() => console.log('Waited'));
*/

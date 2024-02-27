const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        resolve(success);
      },

      (error) => {},

      opts
    );
  });
};

function trackUserHandler() {
  getPosition().then((posData) => {
    console.log(posData);
  });
  console.log('Getting position...');
}

button.addEventListener('click', trackUserHandler);

/*
const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, duration);
  });
  return promise;
};

// let result = 0;

// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }

// console.log(result);
*/

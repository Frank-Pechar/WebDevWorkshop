const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition = (opts) => {
  // create a new promise object
  const promise = new Promise(
    // immediately execute this callback function
    (resolve, reject) => {
      // which immediately executes this callback function
      navigator.geolocation.getCurrentPosition(
        // execute this callback function if successfull position
        (success) => {
          // execute resolve function if successfull
          console.log(
            'resolve function that marks promise as resolved - ',
            resolve
          );
          console.log('success location object - ', success);
          console.log('promise after - ', promise);

          resolve(success);
        },

        // execute this callback function if failure position
        (error) => {
          reject(error);
        },

        opts
      );
    }
  );
  console.log('promise - ', promise);
  return promise;
};

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, duration);
  });
  return promise;
};

function trackUserHandler() {
  let positionData;
  getPosition()
    .then((posData) => {
      positionData = posData;
      return setTimer(2000);
    })
    .catch((err) => {
      console.log(err);
    })
    .then((data) => {
      console.log(data, positionData);
    });
  console.log('Getting position...');

  let result2 = 0;

  for (let i = 0; i < 100000000; i++) {
    result2 += i;
  }

  console.log(result2);
}

button.addEventListener('click', trackUserHandler);

// let result = 0;

// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }

// console.log(result);

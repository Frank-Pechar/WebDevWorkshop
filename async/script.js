'use strict';

hljs.highlightAll();

//********* A S Y N C - E X E C U T I O N - P R I O R I T Y *********
// C A S E 1

const clickHandler1 = function () {
  console.log('2 CStack (main thread)');

  setTimeout(() => console.log('6 CallbackQ to CStack'), 0);

  Promise.resolve('4 MicrotaskQ to CStack').then((res) => {
    console.log(res);
  });

  setTimeout(() =>
    Promise.resolve('7 CallbackQ to MicrotaskQ to CStack').then((res) => {
      console.log(res);
    })
  );

  Promise.resolve('5 MicrotaskQ w/loop to CStack').then((res) => {
    for (let i = 0; i < 500000000; i++) {}
    console.log(res);
  });

  setTimeout(() => console.log('8 CallbackQ to CStack'), 0);

  console.log('3 CStack (main thread)');
};

document.querySelector('.btn-case1').addEventListener('click', () => {
  console.log('1 CallbackQ to CStack');
  clickHandler1();
});

// C A S E 2
//********* A S Y N C - E X E C U T I O N - .then *********

const getPosition = (opts) => {
  console.log('02 - main thread - getPosition - Start');

  const promise = new Promise((resolve, reject) => {
    console.log(
      '03 - main thread - getPosition - Promisify getCurrentPosition'
    );

    navigator.geolocation.getCurrentPosition(
      (success) => {
        console.log(
          '11 - getPosition - Promisified (Microtask) getCurrentPosition web api success callback'
        );
        resolve(success);
      },
      (error) => {
        reject(error);
      },
      opts
    );
  });

  console.log(
    '04 - main thread - getPosition - Returning getCurrentPosition Pending Promise'
  );

  return promise;
};

const setTimer = (duration) => {
  console.log(
    `${
      duration === 1000
        ? '05 - main thread - setTimer(1000) - Start'
        : '13 - setTimer(2000) - Start - Called from trackUserHandler .getPosition().then'
    }`
  );

  const promise = new Promise((resolve, reject) => {
    console.log(
      `${
        duration === 1000
          ? '06 - main thread - setTimer(1000) - Promisify setTimeout(1000)'
          : '14 - setTimer(2000) - Called from trackUserHandler.getPosition().then - Promisify setTimeout(2000)'
      }`
    );

    setTimeout(() => {
      resolve(
        '17 - setTimer(2000) - Promisified (Microtask) setTimeout(2000) web api callback executed'
      );
    }, duration);
  });

  console.log(
    `${
      duration === 1000
        ? '07 - main thread - setTimer(1000) - Returning setTimeout(1000) Pending Promise'
        : '15 - setTimer(2000) - Called from trackUserHandler.getPosition().then - Returning setTimeout(2000) Pending Promise'
    }`
  );

  return promise;
};

function trackUserHandler() {
  console.log('01 - main thread - Start trackUserHandler');
  let positionData;

  setTimeout(
    () => console.log('10 - CallbackQ to Call Stack - setTimeout=0'),
    0
  );

  Promise.resolve('09 - MicrotaskQ to Call Stack - Promise.resolve').then(
    (res) => {
      console.log(res);
    }
  );

  getPosition()
    .then((posData) => {
      console.log(
        '12 - trackUserHandler - getPosition().then method - completed resolved promise for getCurrentPosition'
      );

      positionData = posData;
      return setTimer(2000);
    })

    .catch((err) => {
      console.error('Could not get location 💥', err);
    })

    .then((data) => {
      console.log(data);
      console.log(
        '18 - End trackUserHandler - getCurrentPosition & setTimeout .then methods'
      );
      console.log(positionData);
    });

  setTimer(1000).then(() => {
    console.log('16 - trackUserHandler - setTimer(1000).then method started');
  });

  console.log('08 - main thread - End trackUserHandler');
}

document
  .querySelector('.btn-case2')
  .addEventListener('click', trackUserHandler);

// C A S E 3
//********* A S Y N C - E X E C U T I O N  -  A W A I T *********

const getPosition2 = function (opts) {
  console.log('08 - getPosition2 await - Start');
  const promise = new Promise((resolve, reject) => {
    console.log('09 - getPosition2 await - Promisify getCurrentPosition');
    navigator.geolocation.getCurrentPosition(
      (success) => {
        console.log(
          '11 - getPosition2 await - Promisified (Microtask) getCurrentPosition web api success callback completed'
        );
        resolve(success);
      },
      (error) => {
        reject('Could not get location 💥', error);
      },
      opts
    );
  });
  console.log(
    '10 - getPosition2 await - Returning getCurrentPosition Pending Promise'
  );
  return promise;
};

const setTimer2 = (duration) => {
  console.log(
    duration === 1000
      ? '03 - setTimer2(1000) await - Start'
      : '12 - setTimer2(2000) await - Start'
  );

  const promise = new Promise((resolve, reject) => {
    console.log(
      `${
        duration === 1000
          ? '04 - setTimer2(1000) await - Promisify setTimeout(1000)'
          : '13 - setTimer2(2000) await - Promisify setTimeout(2000)'
      }`
    );
    setTimeout(() => {
      resolve(
        duration === 1000
          ? '07 - setTimer2(1000) await - Promisified (Microtask) setTimeout(1000) web api callback completed'
          : '15 - setTimer2(2000) await - Promisified (Microtask) setTimeout(2000) web api callback completed'
      );
    }, duration);
  });

  console.log(
    `${
      duration === 1000
        ? '05 - setTimer2(1000) await - Returning setTimeout(1000) Pending Promise'
        : '14 - setTimer2(2000) await - Returning setTimeout(2000) Pending Promise'
    }`
  );
  return promise;
};

async function trackUserHandler2() {
  let res, timerData, posData;

  console.log('01 - main thread - Start trackUserHandler2');

  setTimeout(
    () => console.log('06 - CallbackQ to Call Stack - setTimeout(0000)'),
    0
  );

  res = await Promise.resolve(
    '02 - MicrotaskQ to Call Stack - Promise.resolve'
  );
  console.log(res);

  timerData = await setTimer2(1000);
  console.log(timerData);

  try {
    posData = await getPosition2();
    timerData = await setTimer2(2000);
    console.log(timerData);
    console.log(posData);
  } catch (err) {
    console.error('Catch Geolocation error: ' + err);
  }

  console.log('16 - main thread - End trackUserHandler2');
}

document
  .querySelector('.btn-case3')
  .addEventListener('click', trackUserHandler2);

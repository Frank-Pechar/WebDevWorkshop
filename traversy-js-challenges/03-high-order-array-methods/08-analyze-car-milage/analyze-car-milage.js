function analyzeCarMileage(cars) {
  'use strict';

  // Solution 1

  let totalMileage = 0;
  let highestMileageCar = { ...cars[0] };
  let lowestMileageCar = { ...cars[0] };

  for (const car of cars) {
    if (car.mileage > highestMileageCar.mileage) highestMileageCar = { ...car };

    if (car.mileage < lowestMileageCar.mileage) lowestMileageCar = { ...car };

    totalMileage += car.mileage;
  }

  const averageMileage = parseFloat((totalMileage / cars.length).toFixed(2));
  return { averageMileage, highestMileageCar, lowestMileageCar, totalMileage };

  // Solution 2

  // const totalMileage = cars.reduce((acc, car) => acc + car.mileage, 0);
  // const highestMileageCar = cars.reduce(
  //   (high, car) => (car.mileage > high.mileage ? car : high),
  //   cars[0]
  // );
  // const lowestMileageCar = cars.reduce(
  //   (low, car) => (car.mileage < low.mileage ? car : low),
  //   cars[0]
  // );

  // const averageMileage = parseFloat((totalMileage / cars.length).toFixed(2));
  // return { averageMileage, highestMileageCar, lowestMileageCar, totalMileage };
}

module.exports = analyzeCarMileage;

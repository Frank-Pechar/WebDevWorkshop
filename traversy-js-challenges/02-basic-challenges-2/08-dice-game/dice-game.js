function diceGameSimulation(numRolls) {
  const rollsArr = [];
  let rollObj;

  for (var i = 0; i < numRolls; i++) {
    let result;
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    const sum = dice1 + dice2;

    if (sum === 7 || sum === 11) {
      result = 'win';
    } else if (sum === 2 || sum === 3 || sum === 12) {
      result = 'lose';
    } else {
      result = 'roll again';
    }

    rollObj = {
      dice1,
      dice2,
      sum,
      result,
    };

    rollsArr.push(rollObj);
  }
  return rollsArr;
}

module.exports = diceGameSimulation;

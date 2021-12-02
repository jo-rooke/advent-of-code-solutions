const fs = require("fs");
const text = fs.readFileSync("./dailydata.txt").toString("utf-8");
const numbersArray = text.split("\n");

//pt. 1
//=======
function checkIncreases(arr) {
  let counter = 1;
  let current = arr[0];
  for (let num of arr) {
    if (num > current) {
      counter++;
    }
    current = num;
  }
  return counter;
}

/*
pt. 2
======
1. calculate 1 window (sum of 3)
2. calculate next window (sum of 3, 1st place ++)
3. compare
*/

function checkWindowIncreases(arr) {
  let counter = -1;
  let lastWindow = 0;
  for (let i = 0; i < arr.length - 2; i++) {
    let thisWindow =
      parseInt(arr[i]) + parseInt(arr[i + 1]) + parseInt(arr[i + 2]);
    console.log(thisWindow);
    if (thisWindow > lastWindow) {
      counter += 1;
    }
    console.log(counter);
    lastWindow = thisWindow;
  }
  return counter;
}
console.log(checkWindowIncreases(numbersArray));

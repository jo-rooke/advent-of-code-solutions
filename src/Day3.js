const fs = require("fs");
const text = fs.readFileSync("./dailydata.txt").toString("utf-8");
const dataArray = text.split("\n");

/*
Function name: engineConsumption
Parameters: array of binary numbers 
Returns: a decimal number 

GammaArray=[]
For i, while 1 < 12
    occurenceOf1 =0
    occurenceOf0 = 0
    For each number in the array 
        If the character at i is 1, occurenceOf1 ++
        If the character at i is 0, occurenceOf0 ++
    if occurenceOf1 > occurenceOf0
        push occurenceOf1 in

*/
/*
function engineConsumption(arr) {
  let gammaArray = [];
  let epsilonArray = [];
  for (let i = 0; i < 12; i++) {
    let occurenceOf1 = 0;
    let occurenceOf0 = 0;
    for (let num of arr) {
      if (num[i] === "1") {
        occurenceOf1++;
      } else {
        occurenceOf0++;
      }
    }
    if (occurenceOf1 > occurenceOf0) {
      gammaArray.unshift(1);
      epsilonArray.unshift(0);
    } else if (occurenceOf0 > occurenceOf1) {
      epsilonArray.unshift(1);
      gammaArray.unshift(0);
    }
  }
  let flippedGammaNum = gammaArray.join("");
  let flippedEpsilonNum = epsilonArray.join("");
  // Now convert the binaries to decimals
  let gamma = calcDecimals(flippedGammaNum);
  let epsilon = calcDecimals(flippedEpsilonNum);
  return gamma * epsilon;
}

function calcDecimals(flippedNum) {
  let decimal = 0;
  for (let i = 0; i < flippedNum.length; i++) {
    decimal += parseInt(flippedNum[i]) * 2 ** i;
  }
  return decimal;
}

console.log(engineConsumption(dataArray));
//console.log(calcDecimals("10111"), 29);
*/

// pt 2.
//=======================================================

function lifeSupportRating(arr) {
  let co2Arr = arr;
  let o2Arr = arr;
  for (let i = 0; i < 12; i++) {
    let occurenceOf1 = 0;
    let occurenceOf0 = 0;
    for (let num of arr) {
      if (num[i] === "1") {
        occurenceOf1++;
      } else {
        occurenceOf0++;
      }
    }
    if (o2Arr.length > 1) {
      if (occurenceOf1 >= occurenceOf0) {
        o2Arr = o2Arr.filter((num) => num[i] === "1");
      } else {
        o2Arr = o2Arr.filter((num) => num[i] === "0");
      }
    }
    if (co2Arr.length > 1) {
      if (occurenceOf1 >= occurenceOf0) {
        co2Arr = co2Arr.filter((num) => num[i] === "0");
      } else {
        co2Arr = co2Arr.filter((num) => num[i] === "1");
      }
    }
  }s
  let o2Flipped = o2Arr.reverse().join("");
  let co2Flipped = co2Arr.reverse().join("");
  let o2 = calcDecimals(o2Flipped);
  let co2 = calcDecimals(co2Flipped);

  return o2 * co2;
}

console.log(lifeSupportRating(dataArray));

function calcDecimals(flippedNum) {
  let decimal = 0;
  for (let i = 0; i < flippedNum.length; i++) {
    decimal += parseInt(flippedNum[i]) * 2 ** i;
  }
  return decimal;
}

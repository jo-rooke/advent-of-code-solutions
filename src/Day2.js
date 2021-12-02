const fs = require("fs");
const text = fs.readFileSync("./dailydata.txt").toString("utf-8");
const dataArray = text.split("\n");

function calcFinalPosition(arr) {
  let posHoriz = 0;
  let posDepth = 0;
  let aim = 0;
  for (let instruction of arr) {
    const splitInstruction = instruction.split(" ");
    if (instruction.includes("forward")) {
      posHoriz += parseInt(splitInstruction[1]);
      //pt. 2
      posDepth += aim * parseInt(splitInstruction[1]);
    } else if (instruction.includes("down")) {
      aim += parseInt(splitInstruction[1]);
    } else if (instruction.includes("up")) {
      aim -= parseInt(splitInstruction[1]);
    }
  }
  return posHoriz * posDepth;
}

//forward X does two things:
// It increases your horizontal position by X units.
// It increases your depth by your aim multiplied by X.

console.log(calcFinalPosition(dataArray));

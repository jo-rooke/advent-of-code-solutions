const { create } = require("domain");
const fs = require("fs");
const text = fs.readFileSync("./dailydata.txt").toString("utf-8");
const dataArray = text.split("\n");

function createBingoBoards(arr) {
  let allBoards = [];
  let board = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== "" && board.length < 5) {
      let row = arr[i].split(" ");
      board.push(row);
    }
    if (board.length === 5) {
      allBoards.push(board);
      board = [];
    }
  }
  console.log(allBoards);

  return allBoards.filter((val) => val != "");
}

const bingoNums = dataArray[0].split(",");
const allBoards = createBingoBoards(dataArray);

function playBingo(numArr, boardArr) {
  let bingo = [];
  let bingoNumber = 0;
  for (let bingoNum of numArr) {
    for (let board of boardArr) {
      for (let row of board) {
        for (let i = 0; i < 5; i++) {
          if (parseInt(row[i]) === parseInt(bingoNum)) {
            row.replace(row[i], "");
          }
          if (
            row === "" ||
            row[i] +
              (row + (1)[i]) +
              (row + (2)[i]) +
              (row + (3)[i]) +
              (row + (4)[i]) ==
              ""
          ) {
            bingo = this.board;
            bingoNumber = parseInt(this.bingoNums);
          }
        }
      }
    }
  }
  let totalRemaining = 0;
  for (let bingoRow of bingo) {
    for (let n of bingoRow) {
      totalRemaining += parseInt(n);
    }
  }
  return totalRemaining * bingoNumber;
}

// console.log(createBingoBoards(dataArray));
console.log(playBingo(bingoNums, allBoards));

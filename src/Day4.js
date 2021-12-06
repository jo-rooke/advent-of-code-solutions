const fs = require("fs");
const { join } = require("path");
const text = fs.readFileSync("./dailydata.txt").toString("utf-8");
const dataArray = text.split("\n");

function createBingoBoards(arr) {
  let allBoards = [];
  let board = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== "" && board.length < 5) {
      let row = arr[i].split(" ").filter((val) => val != "");
      board.push(row);
    }
    if (board.length === 5) {
      allBoards.push(board);
      board = [];
    }
  }
  return allBoards;
}

function playBingo(numArr, boardArr) {
  let bingo = [];
  let bingoNumber = 0;
  for (let bingoNum of numArr) {
    for (let board of boardArr) {
      for (let row of board) {
        for (let i = 0; i < 5; i++) {
          if (parseInt(row[i]) === parseInt(bingoNum)) {
            row[i] = "*";
          }
          if (
            row.join("") === "*****" ||
            // FIXME
            board[0][i] +
              board[1][i] +
              board[2][i] +
              board[3][i] +
              board[4][i] ===
              "*****"
          ) {
            bingo = board;
            bingoNumber = parseInt(bingoNum);
            break;
          }
        }
      }
    }
  }
  console.log(allBoards);

  console.log(bingoNumber);
  let totalRemaining = 0;
  for (let bingoRow of bingo) {
    for (let n of bingoRow) {
      totalRemaining += parseInt(n);
    }
  }
  return totalRemaining * bingoNumber;
}

const bingoNums = dataArray[0].split(",");
const allBoards = createBingoBoards(dataArray);

// console.log(createBingoBoards(dataArray));
console.log(playBingo(bingoNums, allBoards));

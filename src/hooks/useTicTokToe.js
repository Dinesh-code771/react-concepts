import React from "react";
import { useState } from "react";
export default function useTicTokToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isWin, setwin] = useState(false);
  const [isPlayerMove, setIsPlayerMove] = useState(true);
  const [status, setStatus] = useState("");
  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];

  function checkIfSomeOneWins() {
    for (let i = 0; i < winningPatterns.length; i++) {
      let [a, b, c] = winningPatterns[i];
      if (
        board[a] &&
        board[a] === board[b] &&
        board[c] &&
        board[a] === board[c]
      ) {
        setwin(true);
        return setStatus(`${board[a]} is the winner`);
      }
    }
  }

  function getAllPositionOfPlayerOne(cloneBoard) {
    let positions = [];
    for (let i = 0; i < board.length; i++) {
      if (cloneBoard[i] === "x") {
        positions[i] = i;
      }
    }
    return positions;
  }
  function checkIsItTheFirstThing(cloneBoard) {
    let count = cloneBoard.filter((block) => block !== null).length;
    return count === 1 ? true : false;
  }
  function checkIfBotCanWin() {}
  function checkIsPlayerOneWinning(cloneBoard) {
    let playXPositions = getAllPositionOfPlayerOne(cloneBoard);
    console.log(playXPositions, "xx");
    //acording to play position bot has to make move
    let [a, b] = playXPositions.filter((value) => {
      return cloneBoard[value];
    });
    console.log(a, b, "bb");
    for (let i = 0; i < winningPatterns.length; i++) {
      //02
      //0 1 ,2
      let [patterA, patterb, patternc] = winningPatterns[i];
      console.log(a, b, patterA, patterb);
      if (
        (a === patterA && b === patterb) ||
        (a === patterA && b === patternc)
      ) {
        return {
          isWinning: true,
          moveIndex: [patterA, patterb, patternc].filter(
            (item) => ![a, b].includes(item)
          )[0],
        };
      }
    }
    return {
      isWinning: false,
      moveIndex: checkIfBotCanWin() || 5, // for time beaing
    };
  }
  function botMove(playMoveIndex, cloneBoard) {
    //check is it the firt thing in board if yes then add roandom
    let isFirstThing = checkIsItTheFirstThing(cloneBoard);

    if (isFirstThing) {
      let myMoveIndex = null;
      let randomValue = parseInt(Math.random(0, 8) * 10);
      while (randomValue === playMoveIndex || randomValue >= 9) {
        myMoveIndex = randomValue;
        randomValue = parseInt(Math.random(0, 8) * 10);
      }
      myMoveIndex = randomValue;
      if (!board[myMoveIndex]) {
        cloneBoard[myMoveIndex] = "O";
        setBoard([...cloneBoard]);
      }
    } else {
      // check if player1 is winner
      let isPlayerOneWinning = checkIsPlayerOneWinning(cloneBoard);
      console.log(isPlayerOneWinning, "pp");
      if (isPlayerOneWinning.isWinning) {
        if (!cloneBoard[isPlayerOneWinning.moveIndex]) {
          let newBoard = [...cloneBoard];
          newBoard[isPlayerOneWinning.moveIndex] = "O";
          setBoard(newBoard);
        }
      }
    }
    checkIfSomeOneWins();
  }

  function checkIswinner() {
    if (!board.includes(null) && !isWin) {
      setStatus("Draw");
    }
  }

  function handleblockClick(index) {
    const cloneBoard = structuredClone(board);
    if (!cloneBoard[index]) {
      cloneBoard[index] = "x";
      setBoard(cloneBoard);
    }
    checkIfSomeOneWins();
    setTimeout(() => {
      botMove(index, cloneBoard);
    }, 1000);
  }

  return { isWin, checkIswinner, board, handleblockClick, botMove };
}

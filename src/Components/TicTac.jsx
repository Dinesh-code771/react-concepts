import React, { useEffect, useMemo } from "react";
import { useState } from "react";
const blocks = Array(9).fill(null);
export default function TicTac() {
  const [board, setBoard] = useState(blocks);
  const [isFirstUser, setIsFirstUser] = useState(true);
  const [winner, setWinner] = useState(null);
  const checkPatters = useMemo(() => {
    return [
      [0, 1, 2],
      [0, 3, 6],
      [0, 4, 8],
      [3, 4, 5],
      [6, 7, 8],
      [1, 4, 7],
      [3, 5, 8],
    ];
  }, []);

  function checkWin(checkPatters) {
    console.log(checkPatters);
    let isWin = false;
    let user = "";
    for (let i = 0; i < checkPatters.length; i++) {
      let [a, b, c] = checkPatters[i];
      if (
        board[a] &&
        board[a] === board[b] &&
        board[c] &&
        board[a] === board[c]
      ) {
        console.log("enters", board[a], board[b], board[c]);
        isWin = true;
        user = isFirstUser;
      }
    }
    return {
      isWin,
      user: isFirstUser,
    };
  }

  const handleBlockClick = (index) => {
    if (winner) return;
    if (board[index]) return;
    let cloneBoard = structuredClone(board);
    if (isFirstUser) cloneBoard[index] = "X";
    else cloneBoard[index] = "O";

    setBoard(cloneBoard);

    setTimeout(() => {
      setIsFirstUser(!isFirstUser);
    });
  };

  useEffect(() => {
    let { isWin, user } = checkWin(checkPatters);
    if (isWin) {
      setWinner(user ? "user1" : "user2");
      console.log("winner", winner);
    }
  }, [board]);

  return (
    <div className="wrapper flex justify-center flex-col gap-3 items-center h-screen">
      {isFirstUser ? "User1" : "User2"}
      {winner && `${winner} is the winner`}
      <div className="grid grid-cols-3 grid-rows-3 items-stretch ">
        {board.map((block, index) => {
          return (
            <div
              key={index}
              onClick={() => handleBlockClick(index)}
              className="border-2 h-[100px] w-[100px] flex justify-center items-center cursor-pointer"
            >
              {<h1 className="text-[2rem] text-black ">{block}</h1>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

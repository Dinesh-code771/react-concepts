import React from "react";
import { useState } from "react";
import useTicTokToe from "../hooks/useTicTokToe";
export default function TicTokBoard() {
  const { isWin, board, checkIswinner, handleblockClick, botMove } =
    useTicTokToe();
  return (
    <div className="grid grid-cols-3 w-[50%]  grid-rows-3">
      {board.map((block, index) => {
        return (
          <button
            key={index}
            disabled={isWin}
            onClick={() => handleblockClick(index)}
            className="text-center text-[2rem] text-white border h-[200px]"
          >
            {block}
          </button>
        );
      })}
    </div>
  );
}

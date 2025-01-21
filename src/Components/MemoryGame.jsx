import React from "react";

function Card({ card, handleCardClick }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div
      onClick={() => {
        setIsOpen(true);
        handleCardClick(card);
      }}
      className={`"memory-card border ${
        isOpen ? "transform  transition duration-500 ease-in-out" : ""
      } cursor-pointer flex items-center justify-center h-[100px] shadow-lg rounded-sm"`}
    >
      <div className="front " onClick={() => console.log("clicked")}>
        {isOpen ? card : ""}
      </div>
      <div className="back"></div>
    </div>
  );
}

export default function MemoryGame() {
  const [board, setBoard] = React.useState([
    3, 5, 3, 5, 4, 4, 8, 7, 8, 7, 6, 2, 6, 1, 2, 1,
  ]);
  const [firstCard, setFirstCard] = React.useState(null);
  const [secondCard, setSecondCard] = React.useState(null);

  function checkIfMatch() {
    if (firstCard === secondCard) {
      return true;
    }
  }
  const handleCardClick = (card) => {
    if (firstCard === null) {
      setFirstCard(card);
    } else if (secondCard === null) {
      setSecondCard(card);
    }
    let isMatch = checkIfMatch();
    if (!isMatch) {
      setFirstCard(null);
      setSecondCard(null);
    }
  };
  return (
    <div>
      <h1>Memory Game</h1>
      <div className="memory-game grid grid-cols-4 grid-rows-4 gap-2 w-[50%] mx-auto items-stretch border">
        {board.map((card, index) => (
          <Card card={card} handleCardClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
}

import React from "react";
import "../Styles/Cards.css";
import Card from "./Card";
export default function Cards({ data }) {
  return (
    <div className="cardsWrraper">
      {data?.map((card) => {
        return <Card key={card.title} card={card} />;
      })}
    </div>
  );
}

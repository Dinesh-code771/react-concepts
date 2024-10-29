import React from "react";
import "../Styles/Cards.css";
import Card from "./Card";
export default function Cards({ data }) {
  console.log(data);
  return (
    <div className="cardsWrraper">
      {data?.map((card) => {
        return <Card card={card} />;
      })}
    </div>
  );
}

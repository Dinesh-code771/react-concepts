import React from "react";

export default function Card({ card }) {
  return (
    <div className="card">
      <div className="cardImage">
        <img src={card.images[0]} alt="" />
      </div>
      <div className="banner">
        <h1>{card.category.toUpperCase()}</h1>
        <p>{"50-70% OFF"}</p>
        <h3>{"Shop Now"}</h3>
      </div>
    </div>
  );
}

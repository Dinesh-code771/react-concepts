import React from "react";
import { useNavigate } from "react-router-dom";
export default function Card({ card }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/product/${card.category}`);
      }}
      className="card"
    >
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

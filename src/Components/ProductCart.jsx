import React from "react";

export default function ProductCart({ product }) {
  return (
    <div className="productCardContainer">
      <div className="productImage">
        <img src={product.images[0]} alt={product.name} />
      </div>
      <div className="productDetails">
        <div className="productName">{product.title}</div>
        <div className="productPrice">{product.price}</div>
      </div>
    </div>
  );
}

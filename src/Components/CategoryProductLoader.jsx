import React from "react";
import "../Styles/Products.css";
export default function CategoryProductLoader() {
  return (
    <div className="loaderWrapper">
      {new Array(5).fill("")?.map((product, index) => {
        return <div key={index} className="productCardContainer"></div>;
      })}
    </div>
  );
}

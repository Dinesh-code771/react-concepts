import React from "react";
import ProductCart from "./ProductCart";
export default function Products({ data, filters, filtersTags }) {
  return (
    <div className="containerWrapper">
      <div className="tagsWrapper">
        {[...filters]?.map((tag) => {
          return (
            <div className="tag">
              <p>{tag}</p>
            </div>
          );
        })}
      </div>
      <div className="cards">
        {data?.map((product) => {
          return <ProductCart product={product} />;
        })}
      </div>
    </div>
  );
}

import React from "react";
import ProductCart from "./ProductCart";
export default function Products({ data }) {
  return (
    <>
      {data?.map((product) => {
        return <ProductCart product={product} />;
      })}
    </>
  );
}

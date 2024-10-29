import React from "react";
import Cards from "./Cards";
// import "../Styles/Categories.css";
import { useQuery } from "@tanstack/react-query";

// my code
const isCategoryAded = {};
const productCategories = [];

function addCategory(category, product) {
  if (!isCategoryAded[category]) {
    isCategoryAded[category] = true;
    productCategories.push(product);
  }
}

async function fetchProducts() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  data.products.forEach((product) => {
    addCategory(product.category, product);
  });
  return productCategories; // Ensure this is returned after processing
}

export default function Categories() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  return (
    <div className="categoryContainer">
      <h1 className="catgoryHeading">CATEGORIES TO CART</h1>
      <Cards data={data} />
    </div>
  );
}

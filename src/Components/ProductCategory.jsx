import React from "react";
import NavBar from "./Navbar";
import Products from "./Products";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import "../Styles/Products.css";

// my code
async function fetchProducts(category) {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  const beautyProducts = data.products.filter(
    (product) => product.category === category
  );
  return beautyProducts; // Ensure this is returned after processing
}
export default function ProductCategory() {
  let { category } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["categoryProducts"],
    queryFn: () => fetchProducts(category),
  });
  console.log(data, isError, "dsf");
  return (
    <div>
      <NavBar />
      <div className="productsContainer">
        <div className="filter"></div>

        <div className="productsWrapper">
          <Products data={data} />
        </div>
      </div>
    </div>
  );
}

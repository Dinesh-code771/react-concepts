import React, { useEffect } from "react";
import Cards from "./Cards";
// import "../Styles/Categories.css";
import { useQuery } from "@tanstack/react-query";
import Acordtion from "./Acordtion";
import AcordtionElemet from "./AcordtionElemet";

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
  data?.products.forEach((product) => {
    addCategory(product.category, product);
  });
  return productCategories; // Ensure this is returned after processing
}

export default function Categories({ searchValue }) {
  const [categories, setCategories] = React.useState([]);
  let { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 0,
    cacheTime: 0,
  });

  useEffect(() => {
    if (data) {
      setCategories(data);
    }
  }, [data]);

  useEffect(() => {
    const filteredData = data?.filter((product) => {
      return product.category.toLowerCase().includes(searchValue.toLowerCase());
    });
    setCategories(filteredData);
  }, [searchValue, data]);

  return (
    <div className="categoryContainer">
      <h1 className="catgoryHeading">CATEGORIES TO CART</h1>
      {isLoading ? (
        <div className="loaderWrapper">
          <span className="loader"></span>
        </div>
      ) : (
        <Cards data={categories} />
      )}
    </div>
  );
}

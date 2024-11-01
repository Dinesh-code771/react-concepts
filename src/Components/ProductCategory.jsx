import React, { useEffect, useState } from "react";
import NavBar from "./Navbar";
import Products from "./Products";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import "../Styles/Products.css";
import CategoryProductLoader from "./CategoryProductLoader";
import FilterCompo from "./FilterCompo";

// my code
async function fetchProducts(category) {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  let setTags = new Set();
  let uniqueTags = [];

  data?.products.forEach((product) => {
    product.tags.forEach((tag) => setTags.add(tag));
  });

  console.log(setTags, "tags");
  uniqueTags = Array.from(setTags);

  console.log(uniqueTags);

  console.log(uniqueTags, "tags");
  const beautyProducts = data?.products.filter(
    (product) => product.category === category
  );
  return { beautyProducts, data, uniqueTags }; // Ensure this is returned after processing
}
export default function ProductCategory() {
  let { category } = useParams();
  const [filters, setFilters] = useState([category]);

  const [searchValue, setSearchValue] = React.useState("");

  const [categoryProducts, setCategoryProducts] = React.useState([]);

  let { data, isLoading, isError } = useQuery({
    queryKey: ["categoryProducts"],
    queryFn: () => fetchProducts(category),
  });
  console.log(data, "dd");
  useEffect(() => {
    if (data?.beautyProducts) {
      setCategoryProducts(data?.beautyProducts);
    }
  }, [data]);

  useEffect(() => {
    const filteredData = data?.filter((product) => {
      return product.title.toLowerCase().includes(searchValue.toLowerCase());
    });
    setCategoryProducts(filteredData);
  }, [searchValue]);

  useEffect(() => {
    const filteredData = data?.data?.products.filter((product) => {
      console.log(product.category);
      return filters.includes(product.category.toLowerCase());
    });
    console.log(filteredData, filters);
    setCategoryProducts(filteredData);
  }, [filters]);

  return (
    <div>
      <NavBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="productsContainer">
        <div className="filter">
          <FilterCompo
            filters={filters}
            setFilters={setFilters}
            tags={data?.uniqueTags}
          />
        </div>

        <div className="productsWrapper">
          {isLoading && <CategoryProductLoader data={categoryProducts} />}
          {isError && <div>Error...</div>}
          {data && <Products data={categoryProducts} />}
        </div>
      </div>
    </div>
  );
}

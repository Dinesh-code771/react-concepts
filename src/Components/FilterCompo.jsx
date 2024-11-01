import React from "react";
import "../Styles/filter.css";
import SearchFilter from "./SearchFilter";
export default function FilterCompo({ filters, setFilters, tags }) {
  function handleSelectedCategory(category, isChecked) {
    if (isChecked) {
      setFilters([...filters, category.toLowerCase()]);
    } else {
      setFilters(filters.filter((filter) => filter !== category.toLowerCase()));
    }
  }
  return (
    <div className="container">
      <SearchFilter
        heading="Categories"
        onChange={handleSelectedCategory}
        isSearch={true}
        isSingle={false}
        filters={filters}
        data={["Beauty", "Fragrances", "Furniture", "Groceries"]}
      />
      <SearchFilter
        heading="tags"
        filters={filters}
        data={tags || []}
        isSearch={false}
        isSingle={true}
        onChange={handleSelectedCategory}
      />
    </div>
  );
}

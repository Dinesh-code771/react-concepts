import React from "react";
import "../Styles/filter.css";
import SearchFilter from "./SearchFilter";
export default function FilterCompo({
  filters,
  setFilters,
  tags,
  filterTags,
  setFilterTags,
}) {
  function handleSelectedCategory(category, isChecked, isSingle) {
    if (isSingle) {
      if (isChecked) {
        console.log("category", category);
        return setFilterTags([category]);
      } else {
        return setFilterTags(
          filterTags.filter((filter) => filter !== category)
        );
      }
    }
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
        filterTags={filterTags}
        data={
          tags?.filter((tag) => {
            console.log(tag !== "beauty", "tag");
            return !["beauty", "fragrances", "furniture", "groceries"].includes(
              tag
            );
          }) || []
        }
        isSearch={false}
        isSingle={true}
        onChange={handleSelectedCategory}
      />
    </div>
  );
}

import React, { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
export default function SearchFilter({
  isSearch,
  onChange,
  data,
  heading,
  isSingle,
  filters,
}) {
  const [searchValue, setSearchValue] = React.useState("");

  const [isSearchEnabled, setIsSearch] = React.useState(false);

  const [categoryProducts, setCategoryProducts] = React.useState([]);

  useEffect(() => {
    if (data) {
      setCategoryProducts(data);
    }
  }, [data]);

  useEffect(() => {
    const filteredData = data?.filter((product) => {
      return product.toLowerCase().includes(searchValue.toLowerCase());
    });
    setCategoryProducts(filteredData);
  }, [searchValue]);

  return (
    <div className="wrapper">
      <div className="header">
        {!isSearchEnabled ? (
          <div className="contentWrapper">
            <p>{heading.toUpperCase()}</p>
            {isSearch ? (
              <div className="rightHeader">
                <div className="searchIcon">
                  <FaSearch
                    onClick={() => {
                      setIsSearch(true);
                    }}
                  />
                </div>
              </div>
            ) : null}
          </div>
        ) : (
          <div className="searchInput">
            <input
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder={`Search for ${heading}`}
            />
            <RxCross2
              size={15}
              style={{ cursor: "pointer" }}
              onClick={() => {
                setIsSearch(false);
                setSearchValue("");
              }}
            />
          </div>
        )}
      </div>
      <div className="data">
        {data?.slice(0, 10).map((category) => {
          return (
            <div className="item">
              <input
                onChange={(e) => {
                  if (!isSingle) onChange(category, e.target.checked);
                  else onChange(category, true);
                }}
                checked={filters.includes(category.toLowerCase())}
                id={category}
                type={isSingle ? "radio" : "checkbox"}
              />
              <label htmlFor={category}>{category}</label>
            </div>
          );
        })}
        {data?.length > 10 && (
          <p className="count">{`+ ${data.length - 10}`}</p>
        )}
      </div>
    </div>
  );
}

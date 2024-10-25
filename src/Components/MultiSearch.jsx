import React, { useEffect } from "react";
import { useState } from "react";
export default function MultiSearch({
  options,
  searchInputRef: searchInput,
  selectedValues,
  setSelectedValues,
}) {
  const [searchValue, setSearchValue] = useState("");
  const [currentOption, setCurrentOption] = useState(0);
  const [filteredOptions, setFilteredOptions] = useState(options);

  useEffect(() => {
    searchInput.current.focus();
    setFilteredOptions(
      options.filter((option) =>
        option.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [searchValue]);

  function handleKeyDown(e) {
    console.log(e.key);
    if (e.key === "ArrowDown") {
      setCurrentOption((currentOption) => currentOption + 1);
    } else if (e.key === "ArrowUp") {
      setCurrentOption((currentOption) => currentOption - 1);
    } else if (e.key === "Enter") {
      setSelectedValues((selectedValues) => [
        ...selectedValues,
        filteredOptions[currentOption],
      ]);
    }
  }
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="options"
    >
      <div className="searchWrapper">
        <input
          ref={searchInput}
          className="search"
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
        />
      </div>
      <div className="values">
        {/* <div className="valueWrapper">
          <input type="checkbox" id="dinesh" />
          <label htmlFor="dinesh">Dinesh</label>
        </div>
        <div className="valueWrapper">
          <input type="checkbox" id="dinesh" />
          <label htmlFor="dinesh">ravi</label>
        </div>
        <div className="valueWrapper">
          <input type="checkbox" id="dinesh" />
          <label htmlFor="dinesh">sunitha</label>
        </div> */}
        {filteredOptions.map((option, index) => (
          <div
            key={index}
            className={`valueWrapper ${
              index === currentOption ? "active" : ""
            }`}
          >
            <input
              type="checkbox"
              id={option}
              checked={selectedValues.includes(option)}
              onChange={(e) => {
                if (e.target.checked) {
                  setSelectedValues([...selectedValues, option]);
                } else {
                  setSelectedValues(
                    selectedValues.filter((value) => value !== option)
                  );
                }
              }}
            />
            <label htmlFor={option}>{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

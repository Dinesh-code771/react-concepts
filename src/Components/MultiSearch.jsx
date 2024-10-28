import React, { useEffect } from "react";
import { useState, useRef } from "react";
export default function MultiSearch({
  options,
  selectedValues,
  setSelectedValues,
}) {
  const [searchValue, setSearchValue] = useState("");
  const [currentOption, setCurrentOption] = useState(0);
  const [filteredOptions, setFilteredOptions] = useState(options);
  const searchInput = useRef(null);
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
    if (e.key === "ArrowUp" && currentOption === 0) {
      //   console.log("currentOption", filteredOptions.length - 1);
      setCurrentOption(filteredOptions.length - 1);
    } else if (
      e.key === "ArrowDown" &&
      currentOption === filteredOptions.length - 1
    ) {
      setCurrentOption(0);
    } else if (e.key === "ArrowDown") {
      setCurrentOption((currentOption) => currentOption + 1);
    } else if (e.key === "ArrowUp" && currentOption > 0) {
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
      style={{ top: `${selectedValues?.length ? "54%" : "100%"} ` }}
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

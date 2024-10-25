import React, { useEffect, useRef } from "react";
import "../Styles/MultiSelect.css";
import { useState } from "react";
import MultiSearch from "./MultiSearch";
export default function MultiSelect({ placeholder }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState([]);
  const multiInput = useRef(null);
  const searchInput = useRef(null);
  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (
        multiInput.current.contains(e.target) ||
        (searchInput.current ? searchInput.current.contains(e.target) : false)
      ) {
        console.log(multiInput.current.contains(e.target));
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    });
  }, []);

  return (
    <div className="wrapper">
      <div className="inputWrapper">
        <input
          ref={multiInput}
          className="multi"
          type="text"
          placeholder={placeholder}
        />
      </div>
      <div className="selectedValues">
        {selectedValues.map((value, index) => (
          <div key={index} className="selectedValue">
            {value}
          </div>
        ))}
      </div>

      {isOpen ? (
        <MultiSearch
          setSelectedValues={setSelectedValues}
          selectedValues={selectedValues}
          searchInputRef={searchInput}
          options={["Dinesh", "Sunitha", "Ravi"]}
        />
      ) : (
        ""
      )}
    </div>
  );
}

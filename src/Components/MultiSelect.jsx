import React, { useEffect, useRef } from "react";
import "../Styles/MultiSelect.css";
import { useState } from "react";
import MultiSearch from "./MultiSearch";
export default function MultiSelect({ placeholder, options }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState([]);
  const multiInput = useRef(null);
  useEffect(() => {
    window.addEventListener("click", (e) => {
      setIsOpen(false);
    });
  }, []);

  function handleRemove(value) {
    return () => {
      setSelectedValues((selectedValues) =>
        selectedValues.filter((val) => val !== value)
      );
    };
  }

  return (
    <div className="wrapper">
      <div className="inputWrapper">
        <input
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
          disabled={isOpen}
          ref={multiInput}
          className="multi"
          type="text"
          placeholder={placeholder}
        />
      </div>
      <div className="selectedValues">
        {selectedValues.slice(0, 2).map((value, index) => (
          <div className="tagWrapper selectedValue">
            <div key={index} className="tag">
              {value}
            </div>
            <span onClick={handleRemove(value)} className="cross">
              x
            </span>
          </div>
        ))}
        {selectedValues.length > 2 ? (
          <div className="tagWrapper selectedValue">
            <div className="tag">+{selectedValues.length - 2}</div>
          </div>
        ) : (
          ""
        )}
      </div>

      {isOpen ? (
        <MultiSearch
          setSelectedValues={setSelectedValues}
          selectedValues={selectedValues}
          options={options}
        />
      ) : (
        ""
      )}
    </div>
  );
}

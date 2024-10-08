import React, { useEffect, useMemo, useRef } from "react";
import { useState } from "react";
import "../Styles/List.css";
import SingleList from "./SingleList";
import { useReducer } from "react";

export default function List() {
  const [emps, setemps] = useState([]);
  const inputRef = useRef(null);
  const [newName, setNewName] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  //complext logic or logic that excute on a perticularstate state
  const count = useMemo(() => {
    console.log("runnind");
    return emps.length;
  }, [emps]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setemps(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleChnage(e) {
    setNewName(e.target.value);
  }
  function makeRequest(name) {
    console.log("making request", name);
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      makeRequest(newName);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [newName]);

  return (
    <div className="listContainer">
      <h1 className="listHeading">Names</h1>
      <div className="inputWrapper">
        {/* input feild */}
        <input
          type="text"
          ref={inputRef}
          placeholder="Enter Name"
          className="input"
          value={newName}
          onChange={handleChnage}
        />

        <h3>{count}</h3>
        {/* button */}
        <button
          className="button"
          onClick={() => {
            setemps([
              ...emps,
              {
                name: newName,
                age: 20,
              },
            ]);
            setNewName("");
          }}
        >
          +
        </button>
      </div>

      {isLoading ? (
        <span className="loader"></span>
      ) : (
        <ul className="lists">
          {emps.map((emp, index) => (
            <div key={index} className="listWrapper">
              <SingleList emp={emp} emps={emps} setemps={setemps} />
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

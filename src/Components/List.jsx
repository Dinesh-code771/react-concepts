import React, { useEffect } from "react";
import { useState } from "react";
import "../Styles/List.css";
import SingleList from "./SingleList";
export default function List() {
  const [emps, setemps] = useState([]);
  const [newName, setNewName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
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

  return (
    <div className="listContainer">
      <h1 className="listHeading">Names</h1>
      <div className="inputWrapper">
        {/* input feild */}
        <input
          type="text"
          placeholder="Enter Name"
          className="input"
          value={newName}
          onChange={(e) => {
            console.log(e.target.value);
            setNewName(e.target.value);
          }}
        />
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
            <div className="listWrapper">
              <SingleList
                key={index}
                emp={emp}
                emps={emps}
                setemps={setemps}

              />
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

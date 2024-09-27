import React, { useEffect, useMemo } from "react";
import { useState } from "react";
import "../Styles/List.css";
import SingleList from "./SingleList";
export default function List() {
  const [emps, setemps] = useState([]);
  const [newName, setNewName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  //complext logic or logic that excute on a perticular  state
  const count = useMemo(() => {
 console.log("runnind")
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
            setNewName(e.target.value);
          }}
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
            <div className="listWrapper">
              <SingleList key={index} emp={emp} emps={emps} setemps={setemps} />
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

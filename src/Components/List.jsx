import React from "react";
import { useState } from "react";
import "../Styles/List.css";
export default function List() {
  const [emps, setemps] = useState([
    { name: "John", age: 25 },
    { name: "Doe2.0", age: 30 },
    { name: "Jane2.0", age: 35 },
    { name: "Doe", age: 30 },
    { name: "Jane", age: 35 },
  ]);
  const [newName, setNewName] = useState("");

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

      <ul className="lists">
        {emps.map((emp, index) => (
          <div className="listWrapper">
            <li className="list" key={emp.name}>
              {emp.name} - {emp.age}
            </li>
            <button
              className="deleteButton"
              onClick={() => {
                const newEmps = emps.filter(
                  (employe) => employe.name !== emp.name
                );
                setemps(newEmps);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}

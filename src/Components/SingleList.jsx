import React from "react";
import { useState } from "react";
import { DataContext } from "../App";
import { useContext } from "react";
import axios from "axios";
export default function SingleList({
  emp,
  emps,
  setemps,
  setFetchToggle,
  fetchToggle,
}) {
  const [isEdit, setIsEdit] = useState(false);
  const [newName, setNewName] = useState(emp.name);
  async function deleteEmp() {
    // const res = await fetch(`http://localhost:3000/users/${parseInt(emp.id)}`, {
    //   method: "DELETE",
    // });
    try {
      const res = await axios.delete(
        `http://localhost:3000/users/${parseInt(emp.id)}`
      );
      if (res.status === 200) {
        console.log("edited in server");
        setFetchToggle(!fetchToggle);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function editEmp() {
    setIsEdit(!isEdit);
    // const res = await fetch(`http://localhost:3000/users/${parseInt(emp.id)}`, {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ name: newName }),
    // });

    try {
      const updatedEmp = { name: newName };
      const res = await axios.put(
        `http://localhost:3000/users/${parseInt(emp.id)}`,
        updatedEmp
      );
      if (res.status === 200) {
        console.log("edited in server");
        setFetchToggle(!fetchToggle);
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <li className="list" key={emp.name}>
        {isEdit ? (
          <input
            value={newName}
            className="input"
            type="text"
            onChange={(e) => {
              setNewName(e.target.value);
            }}
          />
        ) : (
          emp.name
        )}
      </li>
      <button className="deleteButton" onClick={deleteEmp}>
        Delete
      </button>
      <button className="editButton" onClick={editEmp}>
        {isEdit ? "Save" : "Edit"}
      </button>
    </>
  );
}

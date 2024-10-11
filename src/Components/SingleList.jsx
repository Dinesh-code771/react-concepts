import React from "react";
import { useState } from "react";
import { DataContext } from "../App";
import { useContext } from "react";
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
    const res = await fetch(`http://localhost:3000/users/${parseInt(emp.id)}`, {
      method: "DELETE",
    });
    if (res.status === 200) {
      console.log("deleted from server");
      setFetchToggle(!fetchToggle);
    }
  }

  async function editEmp() {
    setIsEdit(!isEdit);
    const res = await fetch(`http://localhost:3000/users/${parseInt(emp.id)}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: newName }),
    });
    if (res.status === 200) {
      console.log("edited in server");
      setFetchToggle(!fetchToggle);
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
